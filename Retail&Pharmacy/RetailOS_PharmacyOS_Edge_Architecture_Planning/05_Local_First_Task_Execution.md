# Local-First Task Execution

## Problem

Store employees are constantly interrupted by customers, coworkers, managers, vendors, phone calls, and urgent problems.

A workflow system must survive interruptions.

## Local-First Concept

The app should keep the active task state available locally on the device or store edge layer so an employee can resume without losing progress.

## Example

An employee is checking First Aid outdates and gets interrupted by a customer.

The system should remember:

- Current department
- Current task list
- Last scanned item
- Items already completed
- Items still remaining
- Any notes/photos already captured

## Resume Flow

```text
Employee reopens app
↓
System asks: Resume First Aid Outdates?
↓
Employee continues from last task
```

## Benefits

- Less repeated work
- Less mental load
- Fewer missed steps
- Better training for new employees
- Better task completion records

## Sync Strategy

- Save task progress locally.
- Sync completed steps to backend.
- Mark unsynced actions clearly.
- Retry failed sync automatically.
- Alert manager if compliance task fails to sync.

