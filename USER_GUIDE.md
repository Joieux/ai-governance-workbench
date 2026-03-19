# AI Governance Practitioner Workbench — User Guide

**Version 1.0**

---

## Table of Contents

1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Navigation](#3-navigation)
4. [Explore Mode](#4-explore-mode)
5. [Assess Mode](#5-assess-mode)
6. [Export Mode](#6-export-mode)
7. [Audit Mode](#7-audit-mode)
8. [Keyboard Shortcuts](#8-keyboard-shortcuts)
9. [Framework Reference](#9-framework-reference)
10. [Glossary](#10-glossary)

---

## 1. Overview

The AI Governance Practitioner Workbench is a browser-based tool designed for AI GRC practitioners, auditors, risk officers, and compliance teams. It serves two core purposes:

**Exploration and education** — understand how five major AI governance frameworks relate to each other, what each control requires, and why specific connections matter in practice.

**Structured risk assessment** — conduct a complete AI risk assessment for any organization using any AI system, producing audit-standard findings and a formatted report.

The tool runs entirely in your browser. There is no login, no server, and no data leaves your machine. Your work is saved automatically to your browser's local storage.

---

## 2. Getting Started

### Opening the tool

Download `ai-workbench-enterprise.html` and open it in any modern browser. No installation is required.

```
Chrome 120+  |  Firefox 121+  |  Safari 17+  |  Edge 120+
```

On macOS: double-click the file or drag it onto a browser window.
On Windows: right-click → Open with → your browser of choice.

### First time use

When the tool opens, you will land in **Explore mode** by default. The framework grid is visible immediately — five columns, one per framework, with all 40 controls listed.

Nothing is pre-selected. Click any item in any column to begin.

### Your data

The Assess mode saves your implementation status automatically to `localStorage` in your browser. This means:

- Your progress persists between sessions on the same browser and device
- Clearing browser data or using a different device will not carry your state over
- Use the **Export mode** to create a portable record before clearing browser data
- The **↺ Reset** button in Assess mode clears all saved state permanently after confirmation

---

## 3. Navigation

### Top navigation bar

The navigation bar runs across the top of every screen. From left to right:

**AI Governance Workbench** — the tool name. Clicking it does nothing; it is a label.

**Mode tabs** — four tabs that switch between the tool's main modes:

| Tab | Purpose |
|---|---|
| 🔍 Explore | Framework cross-reference map and documentation |
| 📋 Assess | Control coverage tracker |
| 📤 Export | Report and mapping exports |
| 🔍 Audit | AI risk assessment workflow |

**Search bar** — searches across all 40 controls in real time. Type any term to filter. Press **Escape** to clear. Press **⌘K** (Mac) or **Ctrl+K** (Windows/Linux) to focus the search bar from anywhere.

**Assess Coverage button** — shortcut to jump directly to Assess mode.

**↓ Export button** — shortcut to jump directly to Export mode.

**🔍 Audit button** — shortcut to jump directly to Audit mode.

**Theme toggle** — the circle button at the far right switches between dark mode (default) and light mode. Your preference is saved.

---

## 4. Explore Mode

Explore mode is the framework cross-reference map. It is the primary reference tool for understanding how AI governance frameworks relate to each other.

### The framework grid

Five columns, one per framework, displayed side by side:

| Column | Framework | Items |
|---|---|---|
| 1 | NIST AI RMF | 4 functions |
| 2 | CSA AICM | 11 control domains |
| 3 | ISO Standards | 5 standards |
| 4 | MITRE ATLAS | 10 tactics |
| 5 | OWASP LLM Top 10 2025 | 10 risks |

Each column scrolls independently. The column header stays fixed as you scroll down through items.

### Selecting an item

Click any item in any column to select it. When selected:

- The selected item highlights with a colored left border
- Every item connected to it across all five columns highlights in the same color
- All unconnected items dim significantly
- The **connector panel** appears above the grid

Click the same item again to deselect and return to the default view. Click any highlighted (related) item to open its full documentation. Press **Escape** to clear the selection.

### The connector panel

The connector panel appears between the search bar and the framework grid whenever an item is selected. It has three sections:

**Item title** — the name of the selected item in the framework's accent color. A **✕ Clear** button sits to the right to deselect.

**Narrative** — a practitioner paragraph explaining why this item connects to its related items, what the real-world implication is, and what you should do about it. This is the "so what" layer — not just tags, but context.

**Cross-framework tags** — four panels showing the connected items in each framework: NIST AI RMF, CSA AICM, ISO Standards, and ATLAS / OWASP.

### Opening documentation

Double-click any item, or click a highlighted (related) item after making a selection, to open the documentation modal. This modal contains:

- The item's full title and framework reference
- A summary paragraph
- A list of subcategories with descriptions and detail text
- A link to the official source documentation

Press **Escape** or click outside the modal to close it.

### NEW and UPDATED badges

Items that were published or significantly revised between 2022 and 2025 carry a colored badge next to their name:

| Badge | Meaning |
|---|---|
| NEW 2022 | First published in 2022 (ISO/IEC TS 5723:2022) |
| NEW 2023 | First published in 2023 (ISO/IEC 42001, ISO/IEC 5338) |
| UPDATED | Significantly updated (ATLAS agentic additions, 2025) |
| UPDATED 2025 | Full revision (OWASP LLM Top 10 2025 edition) |

### Domain cards

Below the framework grid, a set of governance domain cards provides a second way to explore connections. Domains cut across frameworks — clicking a domain card (for example, "Supply Chain & Third-Party Risk") highlights all framework items that touch that domain.

Domain cards include framework tags showing which frameworks address that domain and at which controls.

### Operational tools

Below the domain cards, a row of eight practitioner tools links directly to external resources:

| Tool | What it does |
|---|---|
| AIBOM Generator | Generates AI Bills of Materials for Hugging Face models |
| ATLAS Navigator | Interactive MITRE ATLAS matrix with coverage visualization |
| Arsenal (CALDERA Plugin) | Automated adversarial emulation against AI systems |
| NIST AI RMF Playbook | Suggested actions per RMF category with profile builder |
| AI Risk Database | Searchable database of AI incidents and vulnerabilities |
| OWASP Governance Checklist | LLM application governance checklist |
| ISO/IEC 42001:2023 | Official ISO standard page |
| Agentic AI Security Top 10 | OWASP risks for autonomous AI agents |

All tools open in a new tab.

### Search

Type in the search bar to filter items across all five columns simultaneously. Matching items remain visible; non-matching items dim. The hit count appears in the search bar.

Search matches against item names, IDs, and descriptions. It is case-insensitive.

Clear the search by pressing **Escape** or deleting the search text. If an item was selected before searching, the selection clears when you begin typing.

---

## 5. Assess Mode

Assess mode is a coverage tracker. Use it to record your organization's implementation status across all 40 controls and identify priority gaps.

### Opening Assess mode

Click the **📋 Assess** tab or the **📋 Assess Coverage** button in the navigation bar.

### Framework score cards

Five score cards at the top show implementation progress per framework. Each card displays:

- Number of controls implemented out of total
- Number in progress
- Number not started
- A progress bar

The cards update live as you change statuses.

### Overall progress bar

The header shows overall implementation percentage and in-progress count. This updates live.

### The controls table

All 40 controls are listed in a table with four columns:

**Priority** — P1, P2, or P3 based on risk significance:

| Priority | Meaning | Count |
|---|---|---|
| P1 | Highest risk — address first | 17 controls |
| P2 | Important — address after P1 | 19 controls |
| P3 | Foundational — address in sustained program | 4 controls |

**Control** — the control name and a brief description.

**Framework** — which framework the control belongs to, shown as a colored label.

**Status** — three buttons to set implementation status:

| Button | Meaning |
|---|---|
| ✓ Done | Control is fully implemented |
| ⚡ WIP | Control is in progress |
| ✗ | Control has not been started |

Click any status button to set that status. The change saves immediately to local storage.

### Filtering the table

Four filter buttons above the table narrow the view:

| Filter | Shows |
|---|---|
| All | All 40 controls |
| Not Started | Controls marked ✗ only |
| In Progress | Controls marked ⚡ only |
| Done | Controls marked ✓ only |

### Status badges in Explore mode

When you switch back to Explore mode after setting statuses in Assess mode, each item in the framework grid shows its implementation status:

- Green left border — Done
- Amber left border — In Progress
- ✓ badge (green circle) — Done
- ⚡ badge (amber circle) — In Progress

This lets you see coverage at a glance while exploring framework connections.

### Priority gap list

Below the controls table, the priority gap list automatically shows your top unimplemented controls sorted P1 first, then P2, then P3. Each gap item shows:

- Priority badge
- Control name and framework
- In-progress indicator if applicable
- A short narrative explaining why this control matters

The list updates live as you change statuses.

### Resetting assessment data

Click the **↺ Reset** button to clear all saved status data. A confirmation prompt appears before anything is deleted. This action cannot be undone.

---

## 6. Export Mode

Export mode generates portable markdown reports from your current workbench state.

### Opening Export mode

Click the **📤 Export** tab or the **↓ Export** button in the navigation bar.

### Export types

Three export types are available. Select the one you need from the left panel.

**Gap Report**

A coverage summary table plus a prioritized list of unimplemented controls, each with a narrative explaining why it matters. Best for board reporting, project planning, or communicating risk posture to leadership.

Contents:
- Overall coverage percentage
- Per-framework coverage table
- Top 20 priority gaps with status and narrative excerpts

**Selection Mapping**

A full cross-framework mapping for whichever item is currently selected in Explore mode. If no item is selected, the export prompts you to go back and select one first.

Best for writing control narratives, populating Jira tickets, drafting Confluence documentation, or preparing evidence for a specific control.

Contents:
- Item name and narrative
- Connected items in NIST AI RMF
- Connected items in CSA AICM
- Connected ISO standards
- Connected ATLAS tactics
- Connected OWASP LLM risks

**Full Control Inventory**

A complete list of all 40 controls organized by framework, with implementation status. Best for compliance evidence packages, audit preparation, or program tracking in external tools.

Contents:
- All 40 controls grouped by framework
- Implementation status per control (✅ Done / ⚡ WIP / ❌ Not Started)
- Priority rating per control

### Downloading and copying

**Copy to clipboard** — copies the full markdown text. Paste directly into Confluence, Notion, Jira, or any markdown-capable tool.

**↓ Download .md file** — downloads the report as a `.md` file named with the export type and today's date (e.g., `ai-governance-gap-report-2025-11-10.md`).

### Preview

The right panel shows a live preview of the markdown output before you copy or download. It updates automatically when you change export types or when your assessment state changes.

---

## 7. Audit Mode

Audit mode is a structured AI risk assessment workflow. It takes any organization through five steps and produces an audit-standard report with formal findings.

The workflow is fully generic. Nothing is pre-filled with organization names, system names, or sector-specific assumptions. All content comes from what you enter.

### Opening Audit mode

Click the **🔍 Audit** tab in the navigation bar.

### The five steps

A stepper at the top of the page tracks your position. Steps completed turn green. You can move backward at any step using the **← Back** button.

---

### Step 1 — System Profile

Capture the organization and AI system being assessed. This information scopes which risk scenarios are suggested in Step 2 and populates the report header in Step 5.

**Assessment metadata**

| Field | Required | Purpose |
|---|---|---|
| Assessment Title | Yes | Appears in the report header |
| Assessment Date | No | Defaults to today's date |
| Organization Name | Yes | Appears throughout the report |
| Assessor Name | No | Appears in the report header |

**System details**

| Field | Purpose |
|---|---|
| AI System Being Assessed | Name, vendor (if applicable), and type |
| What does this AI system do? | Function, inputs, outputs, users |

**Supply chain role** — select all roles that apply to the organization in relation to this specific system:

| Role | Description | Example |
|---|---|---|
| AI Customer (AIC) | Buys and uses AI services, builds nothing | Using ChatGPT Enterprise or Microsoft Copilot |
| Application Provider (AP) | Builds products on top of AI APIs | SaaS company calling OpenAI API |
| Orchestrated Service Provider (OSP) | Runs AI infrastructure and pipelines | Operating RAG pipelines or MLOps infrastructure |
| Model Provider (MP) | Trains or fine-tunes models | Internal ML team or foundation model vendor |

Many organizations occupy more than one role simultaneously. Select all that apply.

**Use case risk tier** — select the highest-risk tier that applies to this system:

| Tier | Label | Description |
|---|---|---|
| 1 | Productivity / Assistive | AI helps humans, no autonomous decisions. Writing assistance, search, summarization. |
| 2 | Decision Support | AI recommends, human decides. Credit scoring, medical triage, legal research. |
| 3 | Automated Decision | AI decides without real-time human review. Hiring screening, fraud detection, content moderation. |
| 4 | Autonomous Action | AI acts without human confirmation. Agents sending emails, executing trades, controlling systems. |

**Data processed** — select all data types this system handles. This affects which scenarios are suggested and which regulatory frameworks are cited in findings.

| Data Type | Regulatory relevance |
|---|---|
| Public data only | Minimal regulatory requirements |
| Internal / proprietary | Confidentiality and trade secret controls |
| Personal data (PII) | GDPR, CCPA, CPRA |
| Health data (PHI) | HIPAA, HITECH |
| Financial data | FCRA, GLBA, PCI-DSS |
| Employment data | EEOC, state employment AI laws |
| Biometric data | BIPA, GDPR special category |
| Classified / sensitive | Sector-specific security requirements |

**Deployment model** — select all that apply:

| Model | Description |
|---|---|
| Third-party SaaS — no model access | Vendor controls the model entirely |
| API consumer — calling external model | You call an external API but control the application |
| Self-hosted open source | You run the model infrastructure |
| Custom fine-tuned model | You have adapted a base model on your data |
| Internally trained model | You trained the model from scratch |
| Embedded in purchased software | AI is inside a product you bought |

**Sector** — optional. Selecting a sector adds sector-specific regulatory context to finding criteria (for example, SR 11-7 for financial services, HIPAA for healthcare).

**Governance maturity** — optional. Provides context for the root cause section of findings.

**Additional context** — free text for anything else relevant: pending procurement decisions, known incidents, regulatory deadlines, or current remediation work.

When complete, click **Next: Risk Scenarios →**.

---

### Step 2 — Risk Scenarios

Twenty pre-built risk scenarios are displayed. Each scenario represents a distinct AI risk that is relevant to organizations regardless of industry.

**Auto-suggestion**

When you arrive at Step 2, scenarios that match your profile are automatically pre-selected and marked "suggested." The match is based on your use case tier and data types. Suggestions are a starting point — review all scenarios and adjust the selection to reflect the actual risks for this system.

**Selecting scenarios**

Click any scenario card to select or deselect it. Selected cards show a checkmark. Each card shows:

- Scenario title
- Risk category
- Relevant framework tags (NIST, CSA, OWASP, ATLAS)
- A "suggested" indicator if it matches your profile

**The 20 scenarios**

| Scenario | Category |
|---|---|
| Algorithmic bias in automated decisions | Fairness & Bias |
| Third-party AI model with no visibility or control | Accountability & Third-Party Risk |
| Inability to explain AI decisions to affected individuals | Explainability & Transparency |
| Biased or unrepresentative training data | Data Quality |
| AI system deployed without formal risk assessment | Accountability & Third-Party Risk |
| Prompt injection vulnerability in LLM-powered system | Security |
| Sensitive data disclosure via AI outputs | Privacy & Data Protection |
| Insufficient human oversight of consequential AI decisions | Accountability & Third-Party Risk |
| AI supply chain compromise or poisoned components | Security |
| AI agent with excessive permissions or autonomy | Security |
| Non-compliance with applicable AI regulations | Accountability & Third-Party Risk |
| Model performance degradation and concept drift | Robustness & Reliability |
| No AI-specific incident response plan | Accountability & Third-Party Risk |
| Adversarial inputs evading AI security or safety controls | Security |
| Operational reliance on AI outputs without verification | Robustness & Reliability |
| No AI Bill of Materials — invisible component inventory | Accountability & Third-Party Risk |
| Training data poisoning or model backdoor | Security |
| Operational dependency on single AI vendor | Robustness & Reliability |
| Uncontrolled AI resource consumption | Robustness & Reliability |
| Insufficient employee AI literacy and acceptable use governance | Accountability & Third-Party Risk |

When you have selected all applicable scenarios, click **Build Risk Register →**.

---

### Step 3 — Risk Register

The risk register is generated from your selected scenarios. Each selected scenario becomes a risk entry with pre-populated content that you review, edit, and score.

**Risk cards**

Each risk appears as a card with the following editable fields:

**Risk title** — edit inline by clicking the title text. This appears in the report.

**Category** — select from seven standard NIST AI RMF risk categories:
- Fairness & Bias
- Explainability & Transparency
- Data Quality
- Robustness & Reliability
- Privacy & Data Protection
- Security
- Accountability & Third-Party Risk

**Risk description** — pre-populated from the scenario library. Edit to reflect the specifics of this system and context.

**Real-world precedent** — pre-populated with documented incidents relevant to this risk. Edit or add precedents specific to your sector.

**Risk rating — Likelihood × Impact**

Score both Likelihood and Impact on a 1 to 5 scale by clicking the numbered buttons. The score calculates automatically.

| Score | Rating |
|---|---|
| 20–25 | 🔴 CRITICAL |
| 12–19 | 🟠 HIGH |
| 6–11 | 🟡 MEDIUM |
| 1–5 | 🟢 LOW |

Default scores are pre-set based on the typical risk profile for each scenario. Adjust them to reflect your specific context — a Tier 1 system using public data should score differently than a Tier 3 system processing personal employment data.

**Controls table**

Each risk card includes four pre-designed controls. Each control has:

- **Description** — edit to reflect your specific environment
- **Type** — Preventive, Detective, or Corrective (select from dropdown)
- **Framework reference** — the specific control or sub-control in the relevant standard

Add rationale or context directly in the description field. The controls table populates the controls matrix in your report.

**Risk summary bar**

A summary bar above the risk cards shows a live count of Critical, High, Medium, and Low risks. It updates as you adjust scores.

When complete, click **Generate Findings →**. Formal findings are generated for all Critical and High risks.

---

### Step 4 — Formal Findings

The finding generator creates a formal finding for each Critical and High risk using the five-element audit format. This is the standard used by Big 4 firms, internal audit functions, and GRC teams.

Each finding is pre-drafted and fully editable. Edit every field to reflect your specific observations.

**The five elements**

| Element | Definition | Guidance |
|---|---|---|
| **Condition** | What was observed | Describe what you found during the assessment — what is currently wrong or absent |
| **Criteria** | What should be | Cite the specific frameworks, standards, regulations, or policies that require something different |
| **Cause** | Why it happened | Identify the root cause — not what is wrong, but why it exists |
| **Effect** | What is at risk | Describe the potential business, legal, regulatory, and operational consequences if not remediated |
| **Recommendation** | What to do | Provide specific, actionable steps. Reference controls and frameworks. Be concrete. |

**Finding metadata**

Each finding also captures:

| Field | Purpose |
|---|---|
| Finding ID | Auto-generated (e.g., AI-FIND-001). Edit if your organization has a different format. |
| Risk Rating | Set automatically from Step 3. Displays Critical / High with score. |
| Risk Owner | The person or role responsible for remediation |
| Remediation Deadline | Target date for completing remediation |
| Priority | Immediate (0–30 days) / Short-term (30–90 days) / Medium-term (90–180 days) / Long-term (180+ days) |

**Editing guidance**

The pre-drafted text is a starting point based on the scenario description and your profile. Before finalizing, ensure:

- The Condition reflects your actual observations, not generic language
- The Criteria cites regulations that specifically apply to your organization and jurisdiction
- The Cause reflects the actual root cause you identified, not a template phrase
- The Effect quantifies impact where possible (number of affected individuals, regulatory exposure, financial risk)
- The Recommendation is specific enough to assign to a person and track to completion

When complete, click **Generate Report →**.

---

### Step 5 — Report

The full AI risk assessment report is generated in markdown format.

**Report structure**

| Section | Contents |
|---|---|
| Assessment Header | Organization, system, date, assessor, methodology, supply chain role, tier, data types, deployment model, maturity |
| Executive Summary | Risk count table (Critical / High / Medium / Low) with immediate attention note |
| Risk Register | All risks with category, Likelihood × Impact score, description, precedent, and controls matrix |
| Formal Findings | All Critical and High findings in five-element format with owner, deadline, and priority |
| Framework Appendix | List of all frameworks applied with citations |

**Downloading the report**

**Copy Report** — copies the full markdown text to your clipboard. Paste into Confluence, Notion, SharePoint, or any document tool.

**↓ Download .md** — downloads the report as a markdown file named `ai-risk-assessment-{organization}-{date}.md`.

The markdown format renders cleanly in GitHub, Confluence, Notion, Jira, and any standard markdown renderer. It can also be converted to PDF or Word using Pandoc or any markdown editor.

---

## 8. Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| **⌘K** / **Ctrl+K** | Focus the search bar |
| **Escape** | Clear search / close documentation modal / deselect item |
| **Double-click** any item | Open documentation modal directly |

---

## 9. Framework Reference

### NIST AI Risk Management Framework (AI RMF 1.0)

Published by the National Institute of Standards and Technology. The AI RMF organizes AI risk management into four functions:

| Function | Focus |
|---|---|
| **GOVERN** | Policies, accountability structures, culture of AI risk management |
| **MAP** | Context establishment, risk identification, impact characterization |
| **MEASURE** | Risk analysis, testing, evaluation, monitoring |
| **MANAGE** | Risk treatment, response, recovery, communication |

Source: NIST AI 100-1 — https://doi.org/10.6028/NIST.AI.100-1

---

### CSA AI Controls Matrix (AICM v1.0.3)

Published by the Cloud Security Alliance. The AICM provides 18 AI-specific control domains mapped to the CSA supply chain role model.

The 11 domains covered in this workbench:

| Code | Domain |
|---|---|
| GRC | Governance, Risk & Compliance |
| MDS | Model & Data Security |
| DSP | Data Security & Privacy |
| TVM | Threat & Vulnerability Management |
| STA | Supply Chain Transparency & Assurance |
| SEF | Security Incident & Event Management |
| AIS | Application & Interface Security |
| LOG | Logging & Monitoring |
| BCR | Business Continuity & Resilience |
| IAM | Identity & Access Management |
| CCC | Change Control & Configuration Management |

Source: https://cloudsecurityalliance.org/research/working-groups/ai-controls-matrix

---

### ISO/IEC AI Standards

Five standards are cross-referenced in this workbench:

| Standard | Title | Focus |
|---|---|---|
| ISO/IEC 42001:2023 | AI Management Systems | Certification standard for AI governance programs |
| ISO/IEC 23894:2023 | AI Risk Management | Risk management guidance extending ISO 31000 into AI |
| ISO/IEC 5338:2023 | AI System Lifecycle | Engineering processes for AI system development and operation |
| ISO/IEC TS 5723:2022 | AI Trustworthiness | Vocabulary for the seven AI trustworthiness characteristics |
| ISO/IEC 27001 | Information Security | ISMS baseline — foundational security controls |

---

### MITRE ATLAS

The Adversarial Threat Landscape for AI Systems (ATLAS) is a knowledge base of adversarial tactics and techniques targeting AI systems, analogous to MITRE ATT&CK for traditional IT.

The 10 tactics covered in this workbench:

| Tactic | Description |
|---|---|
| TA0001 Reconnaissance | Gathering information about target AI systems |
| TA0003 Initial Access | Gaining initial foothold through AI supply chain or interfaces |
| TA0004 ML Model Access | Obtaining direct or indirect access to model internals |
| TA0006 Persistence | Maintaining access through model backdoors or parameter modification |
| TA0008 Defense Evasion | Crafting adversarial inputs to evade detection |
| TA0009 Credential Access | Stealing credentials from AI configurations and prompts |
| TA0011 Collection | Extracting sensitive data through AI inference |
| TA0012 ML Attack Staging | Preparing attacks against ML components before execution |
| TA0013 Exfiltration | Exfiltrating data via the AI inference channel |
| TA0014 Impact | Causing denial of service, misclassification, or system disruption |

Source: https://atlas.mitre.org

---

### OWASP LLM Top 10 2025

The Open Worldwide Application Security Project LLM Top 10 identifies the ten most critical security risks for applications built on large language models. The 2025 edition reflects evolved attack patterns including agentic systems.

| ID | Risk |
|---|---|
| LLM01 | Prompt Injection |
| LLM02 | Sensitive Information Disclosure |
| LLM03 | Supply Chain |
| LLM04 | Data and Model Poisoning |
| LLM05 | Improper Output Handling |
| LLM06 | Excessive Agency |
| LLM07 | System Prompt Leakage |
| LLM08 | Vector and Embedding Weaknesses |
| LLM09 | Misinformation |
| LLM10 | Unbounded Consumption |

Source: https://genai.owasp.org/llm-top-10

---

## 10. Glossary

**AIBOM** — AI Bill of Materials. A structured inventory of all AI model components, datasets, frameworks, and dependencies used in an AI system. Analogous to a software bill of materials (SBOM).

**AI Customer (AIC)** — An organization that purchases and uses AI services or products built by others, without building AI capabilities themselves.

**Application Provider (AP)** — An organization that builds applications or services on top of AI APIs or pre-trained models provided by a model provider.

**ATLAS** — Adversarial Threat Landscape for AI Systems. A MITRE knowledge base of tactics and techniques used to attack AI systems.

**Concept drift** — The degradation of a model's performance over time as the statistical properties of real-world data diverge from the data the model was trained on.

**Condition / Criteria / Cause / Effect / Recommendation** — The five-element audit finding format used by Big 4 firms and internal audit functions to document control deficiencies in a structured, actionable way.

**Control** — A safeguard or countermeasure designed to prevent, detect, or correct a risk. Controls are typed as Preventive, Detective, or Corrective.

**Corrective control** — A control that reduces the impact of a risk after it has occurred. Examples: model rollback, human review override, incident response activation.

**Detective control** — A control that identifies when a risk is occurring or has occurred. Examples: fairness audits, drift monitoring, anomaly alerts, inference logging.

**Governance maturity** — A five-level assessment of how formally an organization manages AI risk, from None (no formal processes) through Managed (measured and continuously improved).

**L × I score** — Likelihood multiplied by Impact. The standard quantitative risk rating method. Both dimensions are scored 1 to 5, producing a score of 1 to 25.

**Model Provider (MP)** — An organization that trains foundation models, fine-tunes models on proprietary data, or provides model hosting infrastructure to downstream consumers.

**NIST AI RMF** — The National Institute of Standards and Technology AI Risk Management Framework. A voluntary framework organized into four functions: GOVERN, MAP, MEASURE, MANAGE.

**Orchestrated Service Provider (OSP)** — An organization that operates AI infrastructure such as RAG pipelines, vector databases, model serving, or MLOps tooling.

**PDC** — Preventive / Detective / Corrective. The standard control type taxonomy.

**Preventive control** — A control that stops a risk from occurring. Examples: bias testing before deployment, input validation, vendor due diligence, access controls.

**Prompt injection** — An attack where malicious content in user input or external data overrides an LLM's instructions, causing it to take unintended actions or disclose sensitive information.

**RAG** — Retrieval-Augmented Generation. An architecture where an LLM is supplemented with information retrieved from an external knowledge base at inference time.

**Risk scenario** — A specific, plausible situation in which an AI-related risk could materialize. Risk scenarios are mapped to frameworks and controls in this workbench.

**Supply chain role** — An organization's position in the AI supply chain: AI Customer, Application Provider, Orchestrated Service Provider, or Model Provider. Determines which controls are most relevant.

**Use case tier** — A 1 to 4 classification of an AI system's risk level based on the degree of autonomous decision-making and the stakes of the decisions. Tier 1 is assistive; Tier 4 is fully autonomous.

---

*AI Governance Practitioner Workbench — User Guide v1.0*
