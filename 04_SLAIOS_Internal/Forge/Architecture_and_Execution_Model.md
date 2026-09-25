# SLAIOS Forge — Architecture and Execution Model

Status: Future planning only.

## Core Architecture

Preferred principle:

> **Persistent control plane. Disposable execution plane.**

```text
                    SLAIOS
              Persistent Control Plane
                      |
      permissions / priority / context
         model routing / audit / budget
                      |
                 Forge Queue
                      |
                Worker Manager
                      |
       +--------------+--------------+
       |              |              |
  Worker VM       Worker VM      Review Worker
   Terra            Terra             Sol
       |              |              |
       +--------------+--------------+
                      |
               GitHub / CI / QA
                      |
                Human approval
```

## Founder Workstation / Worker Host Separation

The preferred initial physical deployment separates high-trust founder control from lower-trust execution:

~~~text
Jamie's workstation
├── SLAIOS Desktop
├── founder approvals
├── architecture/review
├── sensitive administration
└── optional local intelligence

Second PC / Forge host
├── worker manager
├── disposable/isolated workers
├── repo checkouts
├── builds/tests/browser QA
├── Codex/engineering-agent execution
└── short-lived scoped credentials
~~~

The founder workstation should not be used as the shared employee execution host.

Future employees should connect through SLAIOS to authorized worker sessions rather than receive unrestricted host access.

See `../SLAIOS_Desktop_and_Workstation_Architecture.md`.

## Dedicated Server Model

A future SLAI-owned dedicated server can host the control services and one or more isolated worker environments.

Early form:

```text
1 host
- SLAIOS/Forge control services
- 1-3 disposable workers
- source checkout/cache
- test/build tooling
- logging/audit
- API access to hosted models
```

If Luna/Terra/Sol are called through the OpenAI API, the host does not need a GPU for model inference.

GPU workers should only be added if a proven future workload needs local inference or GPU-specific engineering tasks.

## Worker Technology

Workers may be:

- VMs,
- containers,
- microVMs,
- or another strongly isolated execution environment.

The security requirement matters more than the brand of virtualization.

Reusable environment templates may contain approved:

- runtimes,
- package managers,
- Firebase/emulator tooling,
- browser test tooling,
- build tools,
- static analysis,
- repository setup conventions.

Task workers should start from known-good templates and be destroyed or reset after the job.

## Job Flow

```text
Human requests engineering work
        |
SLAIOS checks:
- user authority
- active product priority
- repo ownership
- risk
- required model/reviewer
        |
task scope created
        |
Forge starts isolated worker
        |
approved repo checked out
        |
task branch created
        |
agent loop:
read -> search -> patch -> test -> inspect -> patch
        |
focused tests / full tests / build / lint
        |
QA evidence
        |
Sol review if required
        |
human review
        |
PR / CI
        |
human merge/release
        |
worker destroyed/reset
        |
result recorded in SLAIOS
```

## Parallel Prompt Orchestration and Dependency Control

Forge should support multiple prompts/tasks running at the same time, but concurrency is a scheduling decision rather than a default.

The control plane should convert a larger engineering objective into a dependency graph:

```text
Release objective
      |
      +-- Slice A: implementation -----------+
      |                                     |
      +-- Slice B: independent tests -------+--> validation bundle
      |                                     |
      +-- Slice C: docs --------------------+
      |
      +-- Slice D: schema change
              |
              +--> Slice E: gateway update
              +--> Slice F: consumer update
```

Slices A/B/C may run together when their contracts and write surfaces do not conflict.

Slices D/E/F must respect the dependency edges and should not be launched as independent concurrent edits when E/F require D's final contract.

Before dispatch, SLAIOS/Forge should evaluate at least:

- repository and branch,
- files/directories likely to be touched,
- shared schemas/contracts,
- database/API/event boundaries,
- migration dependencies,
- security/payment/identity sensitivity,
- test ownership,
- required reviewer,
- expected merge order.

### Conflict handling

If two tasks are likely to change the same canonical file, schema, authority rule, migration, or tightly coupled contract, Forge should:

1. serialize the work,
2. split ownership more cleanly,
3. establish the shared contract first and make dependent tasks wait,
4. or escalate to the engineer when safe ordering is unclear.

Do not rely on Git merge conflicts as the primary dependency detector.

### Isolated execution

Concurrent workers should use isolated branches/worktrees or equivalent clean execution environments.

One worker must not silently consume another worker's unreviewed local state.

Any intentional dependency on another in-flight slice must reference an explicit approved commit/branch/interface.

### Prompt queue / scheduler

The future engineering surface should make concurrent work visible as a controlled queue:

```text
READY       RUNNING       BLOCKED       VALIDATING       REVIEW
Task A      Task B        Task D        Task C            Task E
Task F                    waits on D
```

The scheduler may start additional workers only when:

- dependencies are satisfied,
- concurrency/cost budgets permit it,
- the work is independent enough to avoid conflicting authority,
- required validation capacity exists.

The objective is not maximum simultaneous prompts.

The objective is **maximum safe throughput with minimal human coordination overhead**.

### Consolidated result

A multi-task objective should return one higher-level report that explains:

- which slices ran,
- which ran in parallel,
- dependencies that blocked/serialized work,
- commits/branches/PRs produced,
- tests/build/security evidence,
- conflicts or unresolved decisions,
- recommended merge order,
- items requiring human judgment.

The engineer should not have to reconstruct the release state from several unrelated agent transcripts.

## Tool Boundary

Prefer explicit tools over unrestricted shell when practical:

- repo.read_file,
- repo.search,
- repo.list,
- repo.apply_patch,
- test.run,
- build.run,
- lint.run,
- git.status,
- git.diff,
- git.branch,
- git.commit,
- git.push,
- github.create_pr.

Some jobs may require shell access, but that should be scoped by worker isolation and policy.

## Employee Remote Access Boundary

Forge should support remote employee development without requiring every employee to own or receive a high-end development workstation.

The endpoint should act primarily as a secure client while SLAI-controlled infrastructure provides approved execution environments.

Preferred access model:

~~~text
employee identity
→ SLAIOS authorization
→ assigned task/workspace
→ isolated Forge worker
→ bounded repo/tool access
→ tests/build/evidence
→ session ends
→ credentials expire/revoke
→ worker resets/destroys
~~~

Do not treat general RDP/desktop access to the Forge host as the long-term security model.

## Service / Workload Principal Model

Forge should distinguish the human responsible for work from the non-human principal used to execute it.

~~~text
Human actor
→ SLAIOS authorization
→ ForgeJob
→ provider principal
   ├─ user-backed principal where appropriate
   ├─ service account
   └─ short-lived workload identity
→ scoped execution
~~~

Candidate principal classes:

~~~text
ForgeImplementation
ForgeReview
ForgeCI
ForgeHighRisk
~~~

These are authority classes, not permanent provider-specific account names.

A disposable worker does not automatically deserve its own paid human seat. The commercial/authentication relationship should follow the provider's supported automation model.

Core rule:

> **SLAIOS governs human responsibility and business authority. The provider principal supplies execution identity.**

Provider principals must never increase task authority beyond the SLAIOS permission envelope.

## Credentials

Workers should receive minimum necessary, short-lived credentials where practical. Prefer brokered service/workload identities where supported so disposable workers do not contain long-lived personal credentials.

Do not provide:

- production database credentials,
- broad cloud admin keys,
- payroll/HR credentials,
- unrelated repo credentials,
- deployment authority,

unless a specifically authorized workflow requires them.

Production deployment should remain a separate controlled system.

## Engineering Agent Provider Boundary

Forge should not depend on automating a desktop coding-agent UI.

Use a provider boundary so the control plane can call the supported Codex/engineering-agent programmatic surface available at implementation time without making the rest of Forge provider-specific.

Canonical Alpha details:

- `Forge_Alpha_Spec.md`
- `Forge_Capacity_and_Budget_Governance.md`

## Model Routing

Examples:

- Luna: docs, reports, codebase/context retrieval, lower-risk cleanup
- Terra: ordinary implementation, tests, refactors, UI/workflow work
- Sol: security, payments, auth, tenant isolation, architecture, high-risk review

High-risk work may use:

```text
Terra implementation
   ->
Sol independent review
   ->
human approval
```

## Instruction Hierarchy

Forge should load the approved company/repository instruction hierarchy before editing.

For example:

- global engineering rules,
- repository rules,
- nearest nested rules,
- current product state,
- task-specific documents,
- explicit task scope and stop conditions.

A worker must stop/escalate if the required change crosses a prohibited boundary.

## Replay and Evidence

For each Forge run, preserve safe execution metadata such as:

- task ID,
- requesting user,
- model(s),
- starting commit,
- worker template/version,
- instructions/context references,
- patches,
- commands/tests,
- failures,
- QA evidence,
- final diff,
- PR,
- timestamps,
- approvals.

Do not log secrets.

## Cost Controls

Track:

- included provider/Codex capacity where measurable,
- API/model spend,
- capacity reservations,
- founder emergency reserve,
- worker time,
- concurrent jobs,
- test/build compute,
- storage/network use.

Founder-funded mode should use included capacity first where supported.

Paid API fallback is disabled by default. Capacity exhaustion should pause/queue work safely rather than silently converting an included-usage limit into cash spend.

SLAIOS should choose the lowest-cost adequate model, but cost pressure must never weaken required security, payments, auth, tenant-isolation, validation, or review gates.

Longer-term budgets may be nested by company → product → project → milestone/release → task slice. Forge may optimize inside an approved budget envelope; it may not enlarge that envelope on its own.

## Scale Path

Do not begin with a cluster.

```text
one worker
 -> prove value
 -> small worker pool
 -> queue/scheduler
 -> separate CPU test/build nodes if needed
 -> GPU/local-model workers only if justified
 -> multi-server cluster only when real demand requires it
```

The infrastructure should grow because engineering throughput demands it, not because the architecture is exciting.
