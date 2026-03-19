<a id="top"></a>

# AI Governance Practitioner Workbench User Guide

> **Version 1.1**  
> **Format:** Markdown guide for GitHub and local use

<p>
  <img src="https://img.shields.io/badge/Guide-User%20Guide-4F46E5" alt="User Guide badge" />
  <img src="https://img.shields.io/badge/App-Static%20Browser%20Tool-0F766E" alt="Static app badge" />
  <img src="https://img.shields.io/badge/Frameworks-6-2563EB" alt="Frameworks badge" />
  <img src="https://img.shields.io/badge/Controls-47-7C3AED" alt="Controls badge" />
</p>

<table>
  <tr>
    <td><strong>What this guide covers</strong></td>
    <td>Setup, navigation, framework mapping, control review, exports, risk assessment workflow, shortcuts, and reference terms.</td>
  </tr>
  <tr>
    <td><strong>Who it is for</strong></td>
    <td>AI governance practitioners, auditors, risk leaders, compliance teams, and portfolio reviewers.</td>
  </tr>
  <tr>
    <td><strong>How to use it</strong></td>
    <td>Start with the table of contents, jump to the section you need, and return to it during actual review work.</td>
  </tr>
</table>

---

<a id="contents"></a>

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

<a id="1-overview"></a>

## 1. Overview

<table>
  <tr>
    <td bgcolor="#EEF2FF"><strong>Purpose</strong></td>
    <td>The AI Governance Practitioner Workbench is a browser based tool for mapping governance frameworks, reviewing control coverage, and running a structured AI risk assessment.</td>
  </tr>
  <tr>
    <td bgcolor="#ECFDF5"><strong>Primary use</strong></td>
    <td>It helps users understand how six major AI governance frameworks connect and supports a repeatable review workflow for assessing AI systems.</td>
  </tr>
  <tr>
    <td bgcolor="#FFF7ED"><strong>Data handling</strong></td>
    <td>The tool runs locally in the browser. There is no server, no login, and no external data transfer built into the app.</td>
  </tr>
</table>

### What the workbench is designed to do

The workbench supports two main jobs.

**Framework exploration**  
Understand how major governance, security, and assurance frameworks relate to each other and where concepts overlap. The workbench now covers six frameworks: NIST AI RMF, CSA AICM, ISO standards, MITRE ATLAS, OWASP LLM Top 10 2025, and the EU AI Act (Regulation 2024/1689).

**Structured risk assessment**  
Guide an organisation or practitioner through a five step AI risk assessment process that produces a markdown report.

### What makes it useful

- No install or server required. Open the HTML file and use it immediately.
- Cross framework mapping is built in. Clicking an item in one column highlights related items in other columns, including EU AI Act compliance areas.
- Control tracking persists in the browser. Assessment state is stored locally so work continues across sessions.
- Outputs are portable markdown that can be pasted into reports, tickets, or documentation systems.

[Back to contents](#contents)

---

<a id="2-getting-started"></a>

## 2. Getting Started

<table>
  <tr>
    <td bgcolor="#DBEAFE"><strong>Entry file</strong></td>
    <td><code>index.html</code></td>
  </tr>
  <tr>
    <td bgcolor="#DCFCE7"><strong>Install required</strong></td>
    <td>No</td>
  </tr>
  <tr>
    <td bgcolor="#FEF3C7"><strong>Recommended browsers</strong></td>
    <td>Chrome 120+, Firefox 121+, Safari 17+, Edge 120+</td>
  </tr>
</table>

### Opening the tool

Open `index.html` in any modern browser.

```text
Chrome 120+  |  Firefox 121+  |  Safari 17+  |  Edge 120+
```

On macOS, double click the file or drag it into a browser window.  
On Windows, right click the file and choose your preferred browser.  
On Linux, open it from your file manager or launch it from the terminal.

### First run experience

When the tool opens, it loads directly into **Explore mode**. The framework grid appears immediately, with six columns and all framework items visible.

No item is selected by default. Click any item to begin exploring framework relationships.

### Data persistence

Assessment data is stored in browser `localStorage`.

That means:

- Progress stays saved on the same browser and device
- Clearing browser data removes saved assessment state
- Using a different browser or machine will not carry progress over
- Exporting reports is the best way to keep portable documentation

[Back to contents](#contents)

---

<a id="3-navigation"></a>

## 3. Navigation

<table>
  <tr>
    <td bgcolor="#F3E8FF"><strong>Modes</strong></td>
    <td>Explore, Assess, Export, Audit</td>
  </tr>
  <tr>
    <td bgcolor="#E0F2FE"><strong>Global tools</strong></td>
    <td>Search, theme toggle, quick navigation buttons</td>
  </tr>
</table>

### Top navigation bar

The navigation bar appears at the top of the interface.

| Element | Purpose |
|---|---|
| AI Governance Workbench | App title |
| Explore | Framework mapping view |
| Assess | Control tracking view |
| Export | Markdown export view |
| Audit | Structured risk assessment workflow |
| Search | Filter framework items by keyword |
| Theme toggle | Switch between dark and light mode |

### Search

The search bar filters framework items across all six columns in real time. Type any keyword, framework name, article reference, or control concept to narrow the visible items.

Use **Command K** (macOS) or **Ctrl K** (Windows/Linux) to focus the search bar from anywhere in the tool.

Press **Escape** to clear the search and restore the full grid.

### Theme toggle

The theme toggle switches between dark mode (default) and light mode. The selected theme is preserved in browser storage between sessions.

[Back to contents](#contents)

---

<a id="4-explore-mode"></a>

## 4. Explore Mode

<table>
  <tr>
    <td bgcolor="#E0E7FF"><strong>Main purpose</strong></td>
    <td>Visual cross reference map of six frameworks</td>
  </tr>
  <tr>
    <td bgcolor="#D1FAE5"><strong>Best for</strong></td>
    <td>Research, framework comparison, concept mapping, regulatory alignment, and control discovery</td>
  </tr>
</table>

### Framework grid

Explore mode displays six columns side by side.

| Column | Framework | Colour |
|---|---|---|
| 1 | NIST AI RMF | Blue |
| 2 | CSA AICM | Purple |
| 3 | ISO Standards | Green |
| 4 | MITRE ATLAS | Red |
| 5 | OWASP LLM Top 10 2025 | Amber |
| 6 | EU AI Act (Reg. 2024/1689) | Fuchsia |

Each column contains framework items or domains relevant to AI governance and security.

### Selecting items

Click any item to select it.

When selected:

- The chosen item is highlighted
- Related items in other columns are highlighted
- Unrelated items dim
- A connector panel appears with contextual detail

Clicking the same item again clears the selection.

The EU AI Act column follows the same interaction pattern. Clicking an EU AI Act compliance area highlights related NIST functions, CSA domains, and ISO standards, and vice versa.

### Connector panel

The connector panel explains why linked items matter together. It is meant to provide narrative context rather than just a list of references. The panel appears on the left side of the grid when an item is selected.

### Documentation modal

Double clicking any framework item opens a documentation modal with:

- Full framework reference
- Summary of the item
- Sub categories and detailed descriptions
- A link to the source document

For EU AI Act items, the modal includes the specific article references, compliance obligations, and a direct link to the official EUR-Lex text of Regulation 2024/1689.

### Domain cards and related exploration

Domain cards appear below the framework grid. Each card represents a governance theme such as transparency, safety, or threat.

Clicking a domain card highlights all framework items across all six columns that relate to that domain, including any EU AI Act articles that address that theme.

[Back to contents](#contents)

---

<a id="5-assess-mode"></a>

## 5. Assess Mode

<table>
  <tr>
    <td bgcolor="#FFF7ED"><strong>Main purpose</strong></td>
    <td>Track review status for each framework control</td>
  </tr>
  <tr>
    <td bgcolor="#ECFDF5"><strong>Best for</strong></td>
    <td>Control gap reviews, compliance tracking, and audit preparation</td>
  </tr>
</table>

### What it tracks

Assess mode shows all 47 framework items across all six frameworks and allows a status to be set for each one.

### Status options

| Status | Meaning |
|---|---|
| Not Started | No review has been done yet |
| In Progress | Review is underway |
| Done | Review is complete |

### What the view shows

The assess view shows each framework item with its current status. Items include EU AI Act compliance areas alongside the existing NIST, CSA, ISO, ATLAS, and OWASP items.

Priority markers indicate which items are considered highest impact. EU AI Act items in Chapter II (Prohibited Practices), Chapter III (High-Risk Requirements and Obligations), and Chapter V (GPAI Models) are marked P1.

### Filtering

You can filter by:

- All
- Not Started
- In Progress
- Done

### Why it matters

This mode turns the tool from a reference experience into a practical review workflow. It gives users a simple way to see where work is complete and where the most important gaps remain.

[Back to contents](#contents)

---

<a id="6-export-mode"></a>

## 6. Export Mode

<table>
  <tr>
    <td bgcolor="#FFE4E6"><strong>Main purpose</strong></td>
    <td>Create portable markdown outputs</td>
  </tr>
  <tr>
    <td bgcolor="#EDE9FE"><strong>Best for</strong></td>
    <td>Reporting, documentation, planning, and record keeping</td>
  </tr>
</table>

### Available export types

| Export type | Use case |
|---|---|
| Gap Report | Show coverage status and priority gaps |
| Selection Mapping | Show linked framework items for a selected concept |
| Full Control Inventory | Export the complete control set with statuses |

### Output format

Exports are produced as markdown so they can be reused in documentation systems, ticketing tools, or audit files. The full control inventory export includes EU AI Act compliance areas alongside the other five frameworks.

### Export actions

- **Copy** pastes the markdown to your clipboard
- **Download** saves a `.md` file to your device

[Back to contents](#contents)

---

<a id="7-audit-mode"></a>

## 7. Audit Mode

<table>
  <tr>
    <td bgcolor="#FEF2F2"><strong>Main purpose</strong></td>
    <td>Guide a structured AI risk assessment workflow</td>
  </tr>
  <tr>
    <td bgcolor="#ECFEFF"><strong>Best for</strong></td>
    <td>Documented review, internal audit support, and risk analysis</td>
  </tr>
</table>

### Five step workflow

Audit mode guides the user through five structured stages.

| Step | Purpose |
|---|---|
| 1. System Profile | Capture the system being assessed |
| 2. Risk Scenarios | Select relevant AI risk scenarios |
| 3. Risk Register | Review and score identified risks |
| 4. Formal Findings | Draft findings using a structured audit format |
| 5. Report | Generate a final markdown assessment report |

### Step 1: System Profile

This stage captures context such as:

- Assessment title
- Organization name
- AI system being assessed
- Use case description
- Data types involved
- Deployment model
- Supply chain role
- Use case tier
- Sector and context notes

### Step 2: Risk Scenarios

Select the risk scenarios relevant to the system under review. Scenarios are drawn from the framework content and cover adversarial threats, data risks, governance failures, and regulatory exposures including EU AI Act obligations.

### Step 3: Risk Register

The risk register calculates ratings based on likelihood and impact. Entries are generated from selected scenarios and can be reviewed, scored, and annotated.

### Step 4: Formal Findings

Draft findings follow a structured format including:

- Condition: what was observed
- Criteria: what should exist
- Cause: why the issue exists
- Effect: what is at risk
- Recommendation: what should be done

### Step 5: Report

The final report is generated as markdown and includes the system profile, risk register, and formal findings. It can be copied or downloaded for use in documentation or governance reporting.

[Back to contents](#contents)

---

<a id="8-keyboard-shortcuts"></a>

## 8. Keyboard Shortcuts

<table>
  <tr>
    <td bgcolor="#F0FDF4"><strong>Tip</strong></td>
    <td>These shortcuts make the tool much faster to navigate during demos and reviews.</td>
  </tr>
</table>

| Shortcut | Action |
|---|---|
| Command K / Ctrl K | Focus search |
| Escape | Clear search, close modal, or deselect current item |
| Double click item | Open documentation directly |

[Back to contents](#contents)

---

<a id="9-framework-reference"></a>

## 9. Framework Reference

### NIST AI RMF

The NIST AI Risk Management Framework organizes AI risk work into four functions.

| Function | Focus |
|---|---|
| Govern | Accountability, policy, oversight, culture |
| Map | Context, system purpose, and risk identification |
| Measure | Evaluation, testing, analysis, and monitoring |
| Manage | Response, treatment, and governance action |

### CSA AICM

The Cloud Security Alliance AI Controls Matrix brings together AI security and governance controls across multiple domains relevant to the AI supply chain.

### ISO

The workbench references ISO standards relevant to AI governance, AI risk management, lifecycle practice, trustworthiness, and baseline security.

### MITRE ATLAS

MITRE ATLAS focuses on adversarial threats to AI systems and helps frame attacker behavior, techniques, and defensive thinking.

### OWASP LLM Top 10 2025

OWASP identifies critical risks for applications built on large language models, including prompt injection, supply chain risk, and excessive agency.

### EU AI Act (Regulation 2024/1689)

The EU AI Act is the European Union's comprehensive legal framework for artificial intelligence, published in the Official Journal on 12 July 2024. It applies to providers, deployers, importers, and distributors of AI systems and general-purpose AI models in or affecting the EU market.

The workbench maps seven compliance areas drawn from the Act's substantive chapters.

| Compliance Area | Chapter / Articles | Priority |
|---|---|---|
| Prohibited AI Practices | Ch. II · Art. 5 | P1 |
| High-Risk AI Requirements | Ch. III · Arts. 8–15 | P1 |
| Provider and Deployer Obligations | Ch. III · Arts. 16–27, 43–49 | P1 |
| Transparency Obligations | Ch. IV · Art. 50 | P2 |
| General-Purpose AI Models | Ch. V · Arts. 51–56 | P1 |
| Governance and AI Office | Ch. VII · Arts. 64–70 | P2 |
| Post-Market Monitoring and Incidents | Ch. IX · Arts. 72–74 | P2 |

**Key obligations by role**

*Providers* (organisations that develop and place AI systems or GPAI models on the market) are responsible for conformity assessment, technical documentation, quality management systems, and logging.

*Deployers* (organisations that put AI systems into use) are responsible for human oversight, fundamental rights impact assessments in public-sector contexts, and incident reporting.

*GPAI model providers* must meet baseline documentation and copyright obligations. Those with systemic risk (training compute exceeding 10^25 FLOPs) must additionally conduct adversarial testing and report serious incidents to the EU AI Office.

**Penalty tiers**

| Violation type | Maximum penalty |
|---|---|
| Prohibited AI practices (Art. 5) | €35 million or 7% of global annual turnover |
| Other high-risk AI obligations | €15 million or 3% of global annual turnover |
| Providing incorrect information | €7.5 million or 1% of global annual turnover |

**Cross-framework alignment**

EU AI Act compliance areas are mapped to NIST AI RMF functions, CSA AICM domains, and ISO standards in the tool. Clicking any EU AI Act item in Explore mode highlights its related NIST, CSA, and ISO counterparts, and vice versa.

[Back to contents](#contents)

---

<a id="10-glossary"></a>

## 10. Glossary

| Term | Meaning |
|---|---|
| AIBOM | AI Bill of Materials |
| AI Office | EU body within the European Commission responsible for supervising GPAI models and overseeing application of the EU AI Act |
| AP | Application Provider |
| AIC | AI Customer |
| ATLAS | Adversarial Threat Landscape for AI Systems |
| Condition | What was observed |
| Criteria | What should exist |
| Cause | Why the issue exists |
| CE Marking | Conformity marking required for high-risk AI systems placed on the EU market |
| Conformity Assessment | Procedure by which a provider verifies a high-risk AI system meets EU AI Act requirements |
| Deployer | Organisation or individual that puts an AI system into use under its own authority |
| Effect | What is at risk |
| FRIA | Fundamental Rights Impact Assessment (required by Art. 27 for certain deployers of high-risk AI) |
| GPAI | General-Purpose AI model — a model trained on broad data and capable of a wide range of tasks |
| LLM | Large language model |
| MP | Model Provider |
| OSP | Orchestrated Service Provider |
| Provider | Organisation or individual that develops an AI system or GPAI model and places it on the market |
| RAG | Retrieval augmented generation |
| Recommendation | What should be done |
| Risk scenario | A plausible AI related risk event or condition |
| Systemic risk | Classification applied to GPAI models exceeding 10^25 FLOPs training compute, carrying enhanced EU AI Act obligations |
| Use case tier | Relative risk classification of the AI system under review |
| Detect, Prevent, Correct | Common control types used in governance and assurance work |

[Back to contents](#contents)

---

## Notes for Repo Use

- Keep this guide as `USER_GUIDE.md` in the project root
- Link to it from `README.md`
- Keep screenshots in the main README for quick visual orientation
- Use this guide for deeper workflow and reference detail

[Back to top](#top)
