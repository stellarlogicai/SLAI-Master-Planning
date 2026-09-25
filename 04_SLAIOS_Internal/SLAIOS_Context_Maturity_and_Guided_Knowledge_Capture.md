# SLAIOS Context Maturity & Guided Knowledge Capture

**Status:** Future planning  
**Product Area:** SLAIOS / SLAIForge  
**Priority:** Parked until ServicesOS is stable  
**Purpose:** Define how SLAIOS should work for organizations that are less documented, less structured, or more dependent on tribal knowledge than Stellar Logic AI.

---

## 1. Core Design Assumption

Stellar Logic AI is unusually well documented.

SLAIOS should **not** assume future customer organizations will have the same level of:

- architecture documentation
- roadmaps
- product definitions
- decision history
- ownership records
- coding standards
- operating procedures
- deployment instructions
- project context
- workflow documentation
- company policies

Many organizations will begin with scattered or incomplete knowledge spread across:

- employee memory
- founders and managers
- Google Drive
- email
- chat systems
- Git repositories
- ticketing systems
- old documents
- spreadsheets
- outdated SOPs
- conflicting instructions
- undocumented workflows

SLAIOS must therefore work well even when organizational context is incomplete.

The system should not require a company to become fully documented before it can receive value.

**SLAIOS should help create organizational maturity while the company uses it.**

---

## 2. Core Principle

> **Authority should scale with context quality.**

SLAIOS should understand not only what information exists, but also how trustworthy, current, complete, and authoritative that information is.

Low-confidence context should reduce autonomous authority.

High-confidence, human-confirmed context can support increasingly capable workflows.

A conceptual progression:

**Low context**
- search
- summarize
- identify uncertainty
- ask questions

**Improving context**
- make recommendations
- prepare drafts
- surface conflicts
- propose structured knowledge

**Trusted context**
- perform routine and reversible work
- orchestrate approved workflows
- assemble reliable context packages

**Trusted context + explicit authority**
- execute bounded Forge engineering tasks
- perform deterministic operational actions
- use delegated permissions within defined limits

**Consequential actions**
- remain subject to appropriate human approval

---

## 3. Context Maturity Model

SLAIOS should track organizational context maturity rather than treating knowledge as simply present or absent.

### Stage 0 — Sparse

Very little trusted information is available.

SLAIOS may:

- interview the founder or responsible employees
- identify the organization's products and teams
- establish basic ownership
- create an initial company profile
- connect available systems
- identify the highest-value missing information

### Stage 1 — Imported

Existing sources have been connected or ingested.

Examples:

- repositories
- documents
- project systems
- approved email or communication sources
- operating files
- policies
- architecture notes

At this stage SLAIOS should **not assume imported information is canonical**.

### Stage 2 — Reconciled

SLAIOS begins identifying:

- conflicting instructions
- duplicated documents
- stale procedures
- missing owners
- undocumented systems
- inconsistent terminology
- unresolved decisions
- obsolete architecture
- areas where human knowledge exists but has never been written down

Important conflicts should be routed to an appropriate human authority.

### Stage 3 — Structured

Important organizational knowledge becomes structured and attributable.

Examples:

- products
- projects
- owners
- teams
- responsibilities
- objectives
- policies
- procedures
- architecture
- dependencies
- approval authority
- deployment processes
- important historical decisions

### Stage 4 — Operational

SLAIOS has sufficient trusted context to reliably support everyday company workflows.

The system can:

- assemble context automatically
- route work correctly
- identify responsible humans
- prepare recommendations
- perform permitted routine actions
- surface exceptions
- preserve audit history

### Stage 5 — Forge Ready

Engineering context is sufficiently mature for bounded SLAIForge execution.

Forge readiness may require:

- confirmed repository ownership
- canonical architecture context
- known build commands
- known test procedures
- deployment boundaries
- branch protections
- environment configuration
- coding standards
- protected files/systems
- approval requirements
- credential/access rules
- defined rollback procedures
- sufficient automated validation

A company may be highly useful in SLAIOS while still **not being Forge-ready**.

---

## 4. Guided Knowledge Capture

Missing information should not simply produce a dead end.

When SLAIOS finds a meaningful gap, it should be capable of asking the appropriate human for clarification.

Conceptual workflow:

**Detect gap  
→ determine importance  
→ identify appropriate authority  
→ ask focused question  
→ receive human answer  
→ structure the information  
→ request confirmation when consequential  
→ record provenance  
→ update context confidence  
→ unblock dependent workflows**

The conversation is the input mechanism.

The permanent output should be structured organizational knowledge.

> **Conversation is how SLAIOS learns. Structured company memory is what SLAIOS retains.**

---

## 5. Authority-Aware Question Routing

SLAIOS should not automatically send every question to the founder.

Questions should be routed according to organizational responsibility and authority.

Examples:

**Brand colors**
→ marketing/design owner

**Deployment procedure**
→ engineering owner

**Customer refund policy**
→ operations/founder/legal authority as appropriate

**Production authentication changes**
→ engineering/security authority

**Budget exception**
→ authorized manager/founder/finance role

The founder should function as an escalation or fallback authority where appropriate, not as the permanent answer source for every missing detail.

---

## 6. Founder / Management Knowledge Inbox

SLAIOS should eventually provide a centralized queue for unresolved knowledge questions.

Example:

### Knowledge Inbox

**7 questions need company input**

- 2 blocking active work
- 3 important
- 2 low priority

Questions should be:

- prioritized
- grouped when possible
- routed to the correct person
- batched when nonurgent
- linked to the workflow they are blocking

This reduces unnecessary interruptions while still allowing the company knowledge base to improve continuously.

---

## 7. Converting Tribal Knowledge Into Company Knowledge

One of SLAIOS's most important long-term capabilities may be helping companies externalize knowledge currently stored only in employees' heads.

Examples:

SLAIOS notices the same question has been answered multiple times:

> "You have answered this type of question four times. Would you like me to create a company policy or SOP from the confirmed answers?"

SLAIOS detects conflicting explanations:

> "Three employees describe this process differently. There does not appear to be a canonical procedure. Would you like me to prepare a draft SOP for review?"

SLAIOS detects recurring Forge blockers:

> "Forge has been blocked repeatedly because the database migration process is undocumented. I can gather the required information from the engineering owner and prepare a migration procedure for approval."

The goal is not simply storing more documents.

The goal is creating **trusted, reusable organizational context**.

---

## 8. Knowledge Quality and Confidence

SLAIOS should eventually understand context quality at the topic, system, project, or product level.

Example:

### Payments Service — High Context Confidence

- architecture current
- owner identified
- deployment process confirmed
- tests healthy
- decision history available
- access boundaries known

### Legacy Customer Portal — Low Context Confidence

- architecture documents conflict
- no confirmed owner
- deployment instructions appear stale
- authentication policy unclear
- test status unknown

**Forge autonomous modification: prohibited until required gaps are resolved.**

The exact scoring system should be designed later.

The important principle is that SLAIOS should recognize uncertainty instead of pretending uncertainty does not exist.

---

## 9. Provenance

Important company knowledge should retain provenance.

Useful metadata may eventually include:

- source
- person who confirmed it
- role/authority of that person
- date confirmed
- affected product/project
- confidence level
- last reviewed date
- superseded information
- dependent workflows
- whether periodic reconfirmation is required

This allows SLAIOS to distinguish:

- discovered information
- inferred information
- employee-provided information
- founder-confirmed information
- formally approved company policy

---

## 10. Forge Safety Boundary

Forge should never interpret incomplete context as permission to improvise through important unknowns.

Example request:

> Fix bug #481.

A mature SLAI environment may already provide:

- correct repository
- product context
- architecture
- coding instructions
- protected files
- relevant historical decisions
- branch strategy
- build commands
- test requirements
- security restrictions
- approval requirements

A less mature company may provide:

- multiple possible applications
- outdated README files
- contradictory environment configuration
- unknown authentication authority
- broken tests
- unclear deployment ownership

Forge should be able to respond internally with a state equivalent to:

> **Task blocked: insufficient trusted engineering context.**

It should then identify the specific missing information needed to proceed safely.

The missing information can be routed back through SLAIOS's guided knowledge-capture workflow.

---

## 11. Continuous Organizational Learning Loop

The long-term loop should be:

**People work  
→ SLAIOS observes workflows  
→ knowledge gaps appear  
→ SLAIOS asks appropriate humans  
→ humans provide or approve context  
→ structured company knowledge improves  
→ SLAIOS and Forge receive better context  
→ work becomes easier and safer  
→ new gaps are discovered  
→ organizational knowledge continues improving**

This creates an important product outcome:

**A poorly documented company can become a well-documented company through normal use of SLAIOS.**

---

## 12. Different Customer Experiences Are Expected

SLAI's internal SLAIOS experience should be considered a **high-context reference implementation**, not the minimum customer requirement.

Different organizations may experience SLAIOS differently based on their starting maturity.

A mature company may receive value quickly from:

- orchestration
- analysis
- automation
- Forge execution
- governance

A poorly documented company may initially receive more value from:

- discovery
- knowledge capture
- ownership mapping
- process clarification
- documentation creation
- conflict detection
- context consolidation

Both paths should eventually converge toward stronger organizational context and safer automation.

---

## 13. Product Implication

SLAIOS should not merely be a company memory system.

It should become a system that understands:

- what the company knows
- what it does not know
- who is authorized to answer
- which information is trustworthy
- which information is stale
- what needs confirmation
- which workflows are safe to automate
- where human judgment is still required

This makes **knowledge quality** a first-class part of the SLAIOS architecture.

---

## 14. Relationship to SLAI Philosophy

This design directly supports SLAI's operating philosophy:

> **AI should amplify humanity, not replace it.**

SLAIOS should not invent company truth when information is missing.

It should surface uncertainty and involve the humans who possess the necessary knowledge or authority.

Humans remain responsible for important decisions.

AI helps:

- find missing context
- organize knowledge
- detect contradictions
- ask better questions
- reduce repetitive explanations
- preserve institutional memory
- prepare work
- automate safe, bounded tasks

---

## 15. Future Product Opportunity

This capability may eventually become one of SLAIOS's strongest adoption advantages.

A company would not need to say:

> "We need to fully document the company before we can use SLAIOS."

Instead:

> **"SLAIOS helps us document and structure the company while we use it."**

That lowers the organizational-maturity barrier to adoption while creating a pathway toward deeper SLAIOS capabilities and eventual Forge readiness.

---

## 16. Current Scope Guardrail

This document defines future SLAIOS / SLAIForge behavior only.

It does **not** authorize implementation work today.

Current development priority remains:

1. ServicesOS stability and testing
2. Wife beta
3. ServicesOS UI refinement
4. Payments / Stripe / Stripe Connect stabilization
5. Later planned work

SLAIOS and SLAIForge remain future products until explicitly promoted into active development.

---

## 17. Core Statements to Preserve

**SLAIOS should help create organizational maturity, not require it.**

**Authority should scale with context quality.**

**Conversation is how SLAIOS learns. Structured company memory is what SLAIOS retains.**

**Missing context should trigger guided human knowledge capture, not AI improvisation.**

**Forge readiness is earned through trustworthy engineering context and explicit authority.**

**Humans remain responsible for consequential decisions.**
