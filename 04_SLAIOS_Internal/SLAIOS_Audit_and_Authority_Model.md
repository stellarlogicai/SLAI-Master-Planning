# SLAIOS Audit and Authority Model

**Status:** Future design only  
**Implementation:** Post-ServicesOS-V1 / post-proven-workflow  
**Last Updated:** 2026-09-06  
**Primary Rule:** Do not build SLAIOS from this document yet.

## Purpose

Define how future SLAIOS automation should separate preparation, bounded execution, public writes, and high-authority actions.

## Authority Levels

### Level 1 — Prepare Automatically

Examples:

- gather authorized context,
- organize assets,
- create summaries,
- create draft task packets,
- compare versions,
- prepare recommendations.

Human action: none unless an exception occurs.

### Level 2 — Execute Bounded / Reversible

Examples:

- build customer preview,
- run tests,
- transform non-public artifacts,
- generate draft copy,
- prepare deployment candidate.

Human action: review exceptions and final customer-facing quality.

### Level 3 — Execute With Release Gate

Examples:

- publish customer-facing content,
- production website deployment,
- approved public-data publication,
- bounded external write actions.

Human action: explicit qualified approval before the consequential write.

### Level 4 — High Authority

Examples:

- shared-core deployment,
- booking/auth/security architecture change,
- pricing/contract change,
- refund exception,
- destructive data operation,
- security incident response.

Human action: founder or specifically authorized senior role.

### Prohibited

Never automatically:

- fabricate customer claims,
- bypass tenant permissions,
- expose private ServicesOS data,
- silently override a human rejection,
- bypass required release gates.

## Minimum Audit Event

Each consequential event should capture:

- timestamp,
- job ID,
- tenant/customer ID,
- actor type,
- actor ID,
- action,
- source context snapshot ID,
- task-template/version,
- model/worker where applicable,
- tools/actions invoked,
- changed artifact hashes/references,
- QA result IDs,
- approval ID,
- deployment/commit reference,
- cost/usage where relevant,
- result,
- rollback reference.

Do not log passwords, API keys, or unnecessary raw private customer data.

## Approval Context

An approval request should show:

- requested action,
- what changed,
- source versions,
- automated QA result,
- human QA result,
- client approval state,
- risk classification,
- protected/shared-core impact,
- rollback availability,
- effect of approving/rejecting.

Do not present consequential actions as context-free “Yes/No” prompts.

## Context Snapshot Rule

A task should run against a versioned immutable context snapshot containing only authorized information relevant to that task.

This prevents later data changes from silently changing the meaning of a previously approved job.

## Human Responsibility

AI may analyze, prepare, and execute bounded reversible work.

Humans remain responsible for consequential public, financial, legal, security, destructive, and shared-platform decisions.
