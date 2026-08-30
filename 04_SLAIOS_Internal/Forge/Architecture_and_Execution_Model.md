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

## Credentials

Workers should receive minimum necessary, short-lived credentials where practical.

Do not provide:

- production database credentials,
- broad cloud admin keys,
- payroll/HR credentials,
- unrelated repo credentials,
- deployment authority,

unless a specifically authorized workflow requires them.

Production deployment should remain a separate controlled system.

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

- API/model spend,
- worker time,
- concurrent jobs,
- test/build compute,
- storage/network use.

SLAIOS should choose the lowest-cost adequate model and avoid leaving workers idle.

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
