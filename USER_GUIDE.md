<a id="top"></a>

# AI Governance Practitioner Workbench User Guide

> **Version 1.0**  
> **Format:** Markdown guide for GitHub and local use

<p>
  <img src="https://img.shields.io/badge/Guide-User%20Guide-4F46E5" alt="User Guide badge" />
  <img src="https://img.shields.io/badge/App-Static%20Browser%20Tool-0F766E" alt="Static app badge" />
  <img src="https://img.shields.io/badge/Frameworks-5-2563EB" alt="Frameworks badge" />
  <img src="https://img.shields.io/badge/Controls-40-7C3AED" alt="Controls badge" />
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
    <td>Start with the table of contents, jump to the section you need, and use the return links to move back quickly.</td>
  </tr>
</table>

---

<a id="contents"></a>

## Table of Contents

<table>
  <tr>
    <td width="50%">

1. [Overview](#1-overview)  
2. [Getting Started](#2-getting-started)  
3. [Navigation](#3-navigation)  
4. [Explore Mode](#4-explore-mode)  
5. [Assess Mode](#5-assess-mode)

   </td>
   <td width="50%">

6. [Export Mode](#6-export-mode)  
7. [Audit Mode](#7-audit-mode)  
8. [Keyboard Shortcuts](#8-keyboard-shortcuts)  
9. [Framework Reference](#9-framework-reference)  
10. [Glossary](#10-glossary)

   </td>
  </tr>
</table>

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
    <td>It helps users understand how five major AI governance frameworks connect and supports a repeatable review workflow for assessing AI systems.</td>
  </tr>
  <tr>
    <td bgcolor="#FFF7ED"><strong>Data handling</strong></td>
    <td>The tool runs locally in the browser. There is no server, no login, and no external data transfer built into the app.</td>
  </tr>
</table>

### What the workbench is designed to do

The workbench supports two main jobs.

**Framework exploration**  
Understand how major governance, security, and assurance frameworks relate to each other and where concepts overlap.

**Structured risk assessment**  
Guide an organization through a repeatable AI risk review that can be documented and exported.

### What makes it useful

- It is lightweight and easy to open
- It brings multiple frameworks into one interface
- It supports practical control tracking
- It generates portable markdown outputs
- It helps translate standards into usable review steps

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

When the tool opens, it loads directly into **Explore mode**. The framework grid appears immediately, with five columns and all framework items visible.

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
| Audit | Structured risk assessment view |
| Search | Search framework items in real time |
| Theme toggle | Switch between light and dark mode |

### Search

The search bar filters framework items across the app in real time.

- Search is case insensitive
- Matching items remain visible
- Non matching items dim
- `Escape` clears search
- `Command K` on Mac or `Ctrl K` on Windows or Linux focuses the search field

### Theme toggle

The theme toggle switches between dark and light display modes. The selected theme is retained for future sessions.

[Back to contents](#contents)

---

<a id="4-explore-mode"></a>

## 4. Explore Mode

<table>
  <tr>
    <td bgcolor="#E0E7FF"><strong>Main purpose</strong></td>
    <td>Visual cross reference map of five frameworks</td>
  </tr>
  <tr>
    <td bgcolor="#D1FAE5"><strong>Best for</strong></td>
    <td>Research, framework comparison, concept mapping, and control discovery</td>
  </tr>
</table>

### Framework grid

Explore mode displays five columns side by side.

| Column | Framework |
|---|---|
| 1 | NIST AI RMF |
| 2 | CSA AICM |
| 3 | ISO |
| 4 | MITRE ATLAS |
| 5 | OWASP LLM Top 10 2025 |

Each column contains framework items or domains relevant to AI governance and security.

### Selecting items

Click any item to select it.

When selected:

- The chosen item is highlighted
- Related items in other columns are highlighted
- Unrelated items dim
- A connector panel appears with contextual detail

Clicking the same item again clears the selection.

### Connector panel

The connector panel explains why linked items matter together. It is meant to provide practical governance context, not just raw tags.

The panel includes:

- Selected item name
- Summary or narrative context
- Cross framework relationship display
- Quick clear option

### Documentation modal

Open detailed item documentation from Explore mode to review:

- Item description
- Framework references
- Supporting details
- Linked standards or concepts

### Domain cards and related exploration

The app also supports domain level exploration for broader themes such as supply chain risk, security, oversight, and governance alignment.

[Back to contents](#contents)

---

<a id="5-assess-mode"></a>

## 5. Assess Mode

<table>
  <tr>
    <td bgcolor="#ECFCCB"><strong>Main purpose</strong></td>
    <td>Track implementation status across the control set</td>
  </tr>
  <tr>
    <td bgcolor="#FCE7F3"><strong>Best for</strong></td>
    <td>Coverage review, gap visibility, and implementation planning</td>
  </tr>
</table>

### What it tracks

Assess mode tracks implementation status across 40 controls.

### Status options

| Status | Meaning |
|---|---|
| Done | Fully implemented |
| In Progress | Under active implementation |
| Not Started | Not yet addressed |

### What the view shows

Assess mode includes:

- Per framework progress cards
- Overall progress summary
- Control table
- Filter controls
- Priority gap list
- Reset option for local status data

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

Exports are produced as markdown so they can be reused in:

- GitHub
- Notion
- Confluence
- Jira
- Internal documentation
- Planning documents

### Export actions

Users can typically:

- Preview the export
- Copy it to the clipboard
- Download the `.md` file

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

This stage presents prebuilt risk scenarios to help the user choose relevant risks for the system under review.

Typical scenario categories include:

- Fairness and bias
- Explainability and transparency
- Data quality
- Privacy and data protection
- Security
- Accountability and third party risk
- Robustness and reliability

### Step 3: Risk Register

Selected scenarios become risk entries. Each entry can be reviewed, edited, and scored.

Typical risk data includes:

- Title
- Category
- Description
- Real world precedent
- Likelihood
- Impact
- Controls

### Step 4: Formal Findings

High priority risks can be turned into formal findings using a standard audit style structure:

- Condition
- Criteria
- Cause
- Effect
- Recommendation

### Step 5: Report

The final report can include:

- Assessment header
- Executive summary
- Risk register
- Formal findings
- Framework appendix

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

OWASP identifies critical risks for applications built on large language models, including prompt injection, supply chain risk, sensitive data disclosure, and excessive agency.

[Back to contents](#contents)

---

<a id="10-glossary"></a>

## 10. Glossary

| Term | Meaning |
|---|---|
| AIBOM | AI Bill of Materials |
| AP | Application Provider |
| AIC | AI Customer |
| ATLAS | Adversarial Threat Landscape for AI Systems |
| Condition | What was observed |
| Criteria | What should exist |
| Cause | Why the issue exists |
| Effect | What is at risk |
| Recommendation | What should be done |
| Detect, Prevent, Correct | Common control types used in governance and assurance work |
| LLM | Large language model |
| MP | Model Provider |
| OSP | Orchestrated Service Provider |
| RAG | Retrieval augmented generation |
| Risk scenario | A plausible AI related risk event or condition |
| Use case tier | Relative risk classification of the AI system under review |

[Back to contents](#contents)

---

## Notes for Repo Use

- Keep this guide as `USER_GUIDE.md` in the project root
- Link to it from `README.md`
- Keep screenshots in the main README for quick visual orientation
- Use this guide for deeper workflow and reference detail

---

*AI Governance Practitioner Workbench User Guide v1.0*
