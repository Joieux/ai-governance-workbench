<a id="top"></a>

# AI Governance Practitioner Workbench — User Guide

> **Version 1.2**  
> **Format:** Markdown guide for GitHub and local use

<p>
  <img src="https://img.shields.io/badge/Guide-User%20Guide-4F46E5" alt="User Guide badge" />
  <img src="https://img.shields.io/badge/App-Static%20Browser%20Tool-0F766E" alt="Static app badge" />
  <img src="https://img.shields.io/badge/Frameworks-6-2563EB" alt="Frameworks badge" />
  <img src="https://img.shields.io/badge/Modes-5-7C3AED" alt="Modes badge" />
</p>

<table>
  <tr>
    <td><strong>What this guide covers</strong></td>
    <td>Setup, navigation, all five modes, session management, GRC exports, keyboard shortcuts, and framework reference.</td>
  </tr>
  <tr>
    <td><strong>Who it is for</strong></td>
    <td>AI governance practitioners, auditors, risk leaders, compliance teams, and portfolio reviewers.</td>
  </tr>
  <tr>
    <td><strong>How to use it</strong></td>
    <td>Start with the table of contents, jump to the section you need, and use keyboard shortcuts for faster navigation during demos.</td>
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
8. [Dashboard Mode](#8-dashboard-mode)
9. [Session Management](#9-session-management)
10. [Keyboard Shortcuts](#10-keyboard-shortcuts)
11. [Framework Reference](#11-framework-reference)
12. [Glossary](#12-glossary)

---

<a id="1-overview"></a>

## 1. Overview

The AI Governance Practitioner Workbench is a zero-dependency browser application for exploring AI governance frameworks, tracking control coverage, running structured risk assessments, and visualising your governance posture — all in a single static file, with no install, no server, and no accounts required.

### What the workbench is designed to do

- Map relationships across six AI governance frameworks simultaneously
- Track implementation status for individual controls and generate gap reports
- Guide a five-step AI risk assessment from system profile through to report
- Provide a live coverage dashboard with per-framework breakdowns
- Export assessment outputs to markdown, Word (.docx), and GRC-platform CSV formats
- Save, resume, and share sessions via portable JSON files

### What makes it useful

All data lives in your browser. Nothing is sent to a server. Sessions persist through localStorage and can be exported as JSON for use on any device. The dashboard gives practitioners immediate visibility into coverage progress without switching tools.

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

When the tool opens, it loads directly into **Explore mode**. The framework grid appears immediately with six columns and all framework items visible.

No item is selected by default. Click any item to begin exploring framework relationships.

### Data persistence

Your assessment state is automatically saved to `localStorage` in your browser. This means your work persists across sessions on the same device and browser without any manual action. If you clear browser data, use **Export Session** first to save a backup.

### Session bar

A persistent **session toolbar** appears below the navigation bar. It is always visible regardless of which mode you are in.

| Button | Purpose |
|---|---|
| 💾 Save | Write current state to localStorage with a timestamp |
| 📥 Export | Download a portable `.json` session file |
| 📂 Import | Load a previously exported `.json` file |
| 🗑 Reset | Clear all state and start fresh (asks for confirmation) |

The **📥 Export Session** button also appears in the top navigation bar for quick access.

[Back to contents](#contents)

---

<a id="3-navigation"></a>

## 3. Navigation

<table>
  <tr>
    <td bgcolor="#F3E8FF"><strong>Modes</strong></td>
    <td>Explore, Assess, Export, Audit, Dashboard</td>
  </tr>
  <tr>
    <td bgcolor="#E0F2FE"><strong>Global tools</strong></td>
    <td>Search, theme toggle, export session button</td>
  </tr>
</table>

### Top navigation bar

The navigation bar appears at the top of the interface and is always visible.

| Element | Purpose |
|---|---|
| AI Governance Workbench | App title |
| Explore | Framework mapping view |
| Assess | Control tracking view |
| Export | Markdown export view |
| Audit | Structured five-step risk assessment |
| Dashboard | Coverage KPI summary and GRC exports |
| Search | Filter framework items by keyword |
| Theme toggle | Switch between dark and light mode |
| 📥 Export Session | Quick-access button to download session JSON |

### Session bar

The session bar sits directly below the navigation bar and provides session management controls (Save, Export, Import, Reset) at all times. See [Session Management](#9-session-management) for full details.

### Search

The search bar filters framework items across all six columns in real time. Type any keyword, framework name, article reference, or control concept to narrow the visible items.

Use **Command K** (macOS) or **Ctrl K** (Windows/Linux) to focus the search bar from anywhere in the tool.

Press **Escape** to clear the search and return all items.

### Theme toggle

Click the sun/moon icon to switch between dark and light mode. Your preference is saved to localStorage automatically.

[Back to contents](#contents)

---

<a id="4-explore-mode"></a>

## 4. Explore Mode

<table>
  <tr>
    <td bgcolor="#D1FAE5"><strong>Main purpose</strong></td>
    <td>Map and explore cross-framework relationships</td>
  </tr>
  <tr>
    <td bgcolor="#DBEAFE"><strong>Best for</strong></td>
    <td>Research, gap identification, stakeholder demos, and framework comparison</td>
  </tr>
</table>

### Framework grid

Six framework columns are displayed side by side. Each column represents one framework and contains its constituent domains and controls. The columns are:

| Column | Framework |
|---|---|
| NIST | NIST AI RMF (Govern, Map, Measure, Manage) |
| CSA | CSA AI Controls Matrix |
| ISO | ISO/IEC 42001 |
| ATLAS | MITRE ATLAS (adversarial ML tactics) |
| OWASP | OWASP LLM Top 10 2025 |
| EU AI Act | EU AI Act (Regulation 2024/1689) |

### Selecting items

Click any framework item to select it. The connector panel on the left will show cross-framework mappings — which items in other frameworks relate to the one you selected.

Click anywhere in empty space, or press **Escape**, to clear the selection.

### Connector panel

The connector panel is a contextual sidebar that appears on the left when an item is selected. It shows:

- The name and reference code of the selected item
- A list of related items in other frameworks with their mapping rationale
- A count of how many frameworks cover the same governance area

### Documentation modal

Double-click any item to open its documentation panel. This shows the full description, category, official documentation links, and any related EU AI Act provisions.

Press **Escape** or click the **✕** button to close the modal.

### Domain cards and related exploration

Click a domain card (the coloured header row within a column) to filter the framework view to items within that domain. This makes it easier to focus on a specific governance area such as risk management or transparency.

[Back to contents](#contents)

---

<a id="5-assess-mode"></a>

## 5. Assess Mode

<table>
  <tr>
    <td bgcolor="#FEF3C7"><strong>Main purpose</strong></td>
    <td>Track your organisation's implementation status across all controls</td>
  </tr>
  <tr>
    <td bgcolor="#F3E8FF"><strong>Best for</strong></td>
    <td>Readiness reviews, programme tracking, and progress reporting</td>
  </tr>
</table>

### What it tracks

Every framework item visible in Explore mode can be assigned a status in Assess mode. Status is stored per item and persists across sessions.

### Status options

| Status | Meaning |
|---|---|
| ✅ Done | Control is implemented and documented |
| 🔄 In Progress | Work has started but is not complete |
| (blank) | Not yet assessed or not applicable |

### What the view shows

The assess view displays a sortable and filterable list of all framework items alongside their current status. A progress bar at the top shows overall completion percentage and the number of items in progress.

### Filtering

Use the filter buttons to show only items in a specific state (Done, In Progress, or Not Started). Combine with the search bar to focus on a particular framework or domain.

### Why it matters

Assess mode feeds into several other features. The **Dashboard** uses assess data to populate KPI cards and per-framework coverage bars. The **Export** mode uses assess data to generate gap reports and control inventories. The **Audit** mode references assess status when generating findings.

[Back to contents](#contents)

---

<a id="6-export-mode"></a>

## 6. Export Mode

<table>
  <tr>
    <td bgcolor="#FFE4E6"><strong>Main purpose</strong></td>
    <td>Create portable markdown outputs for reporting and documentation</td>
  </tr>
  <tr>
    <td bgcolor="#EDE9FE"><strong>Best for</strong></td>
    <td>Board reporting, documentation, ticketing, and audit evidence</td>
  </tr>
</table>

### Available export types

| Export type | Use case |
|---|---|
| Gap Report | Show coverage status and priority gaps |
| Selection Mapping | Show linked framework items for a selected concept |
| Full Control Inventory | Complete control set with implementation status |

### Output format

Exports are produced as markdown so they can be reused in documentation systems, wikis, ticketing tools, or audit files. The full control inventory export includes EU AI Act compliance areas alongside all six frameworks.

### Export actions

- **Copy** — paste the markdown directly to your clipboard
- **Download .md** — save a markdown file to your device
- **Download .docx** (Audit tab only) — export the full audit report as a formatted Word document with cover page, risk register, and gap summary

### GRC platform exports

For integrations with enterprise GRC platforms, use the **Dashboard mode** which provides direct CSV exports in the following formats:

| Format | Compatible platform |
|---|---|
| ServiceNow GRC | Risk & Compliance module — Compliant / In Remediation / Non-Compliant status mapping |
| RSA Archer | Control Standards import — Implemented / Partially Implemented format |
| Jira / Linear | Task import — creates one task per incomplete control |
| Generic CSV | All controls with ID, framework, status, priority, and domain |

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

Audit mode guides the user through five structured stages. Each stage is represented as a step indicator at the top of the audit panel. Click any step to navigate directly to it, or use the **Back** and **Next** buttons within each stage.

| Step | Purpose |
|---|---|
| 1. System Profile | Capture the system being assessed |
| 2. Risk Scenarios | Select relevant AI risk scenarios |
| 3. Risk Register | Review and score identified risks |
| 4. Formal Findings | Draft findings using a structured audit format |
| 5. Report | Generate a final markdown assessment report |

### Step 1: System Profile

Captures context for the assessment including:

- Assessment title and date
- Organisation name
- AI system being assessed (example: Salesforce Einstein — AI-powered CRM lead scoring)
- Use case description
- Data types involved
- Deployment model
- Supply chain role
- Use case tier (select Tier 1–4 based on risk level)
- Sector and context notes

### Step 2: Risk Scenarios

Browse and select the AI risk scenarios relevant to your system. Scenarios are organised by risk theme. Selections are used to populate the risk register in step 3.

### Step 3: Risk Register

A generated register lists each selected risk scenario with fields for likelihood, impact, and commentary. Complete each entry before proceeding.

### Step 4: Formal Findings

Draft structured audit findings. Each finding includes:

- Finding title and reference
- Observation
- Risk implication
- Recommended action

### Step 5: Report

Generates a complete audit report from all prior inputs. The report includes the system profile, risk register, and formal findings formatted for review. Available export options:

- **Copy** — paste markdown to clipboard
- **Download .md** — save as a markdown file
- **Download .docx** — export as a formatted Word document

[Back to contents](#contents)

---

<a id="8-dashboard-mode"></a>

## 8. Dashboard Mode

<table>
  <tr>
    <td bgcolor="#D1FAE5"><strong>Main purpose</strong></td>
    <td>Live governance coverage summary and GRC integration hub</td>
  </tr>
  <tr>
    <td bgcolor="#DBEAFE"><strong>Best for</strong></td>
    <td>Status reviews, leadership updates, and exporting to GRC platforms</td>
  </tr>
</table>

The Dashboard mode provides an at-a-glance view of your governance posture, drawing directly from your Assess mode data.

### Coverage KPI cards

Five metric cards appear at the top of the dashboard:

| Card | What it shows |
|---|---|
| Total Controls | Count of all framework items across active frameworks |
| Implemented | Controls with status set to Done |
| In Progress | Controls marked as work in progress |
| Not Started | Controls with no status assigned |
| Coverage | Percentage of controls marked as Done |

### Coverage bar

A progress bar beneath the KPI cards visualises overall coverage. The green segment represents implemented controls; an amber overlay shows controls in progress.

### Framework coverage breakdown

A grid card for each active framework shows:

- Framework name
- An individual progress bar (green for done, amber for in progress)
- Control counts: done, wip, and gap
- Percentage coverage

Cards are colour-coded: green for high coverage (80%+), amber for medium (40–79%), and red for low (<40%).

### Session information

A summary card at the bottom of the dashboard shows:

| Field | Source |
|---|---|
| Last saved | Timestamp from last Save action |
| Active frameworks | Frameworks currently selected via chip filter |
| Audit tier | Tier selected in Audit mode Step 1 |
| Assessment system | System name from Audit mode Step 1 |

### GRC integration exports

Four export buttons generate CSV files compatible with enterprise GRC platforms. These are based on your current Assess mode status data.

| Button | Output format |
|---|---|
| ServiceNow GRC | Risk & Compliance module CSV |
| RSA Archer | Control Standards import CSV |
| Jira / Linear | Task import CSV (incomplete controls only) |
| Generic CSV | All controls — ID, framework, status, priority, domain |

Each export downloads automatically when clicked and includes a confirmation toast notification.

[Back to contents](#contents)

---

<a id="9-session-management"></a>

## 9. Session Management

The session bar appears directly below the top navigation bar and is visible in all modes.

### Session controls

| Button | Action |
|---|---|
| 💾 Save | Writes the full current state (assess data, audit profile, risk register, tier selection) to localStorage with a timestamp. The save indicator in the navigation bar updates to show the saved time. |
| 📥 Export | Downloads a `.json` file containing the complete session state. Use this to back up your work or transfer it to another device. |
| 📂 Import | Opens a file picker to load a previously exported `.json` session file. After import, reload the page to fully apply all session state. |
| 🗑 Reset | Clears all session data from localStorage and resets the tool to its initial state. A confirmation dialog appears before clearing. |

### Transferring sessions between devices

1. On device A: click **📥 Export** to download a `.json` session file
2. On device B: open the tool and click **📂 Import**
3. Select the downloaded file
4. Reload the page when prompted

### Session file format

Exported session files are plain JSON and contain the following fields:

| Field | Contents |
|---|---|
| `assessState` | Object mapping control IDs to their status |
| `auditTier` | Selected tier number (1–4) |
| `auditSystemName` | System name from audit profile |
| `auditSystemDesc` | System description |
| `auditSystemOwner` | Assessor or owner name |
| `auditAuditDate` | Assessment date |
| `activeFrameworks` | Selected framework chips |
| `exportType` | Last used export format |
| `savedAt` | ISO timestamp of the last save |
| `version` | Session schema version |

### Notifications

The tool uses non-blocking toast notifications rather than browser alert dialogs. Notifications appear in the bottom-right corner and dismiss automatically after a few seconds. The × button dismisses them immediately.

[Back to contents](#contents)

---

<a id="10-keyboard-shortcuts"></a>

## 10. Keyboard Shortcuts

<table>
  <tr>
    <td bgcolor="#F0FDF4"><strong>Tip</strong></td>
    <td>These shortcuts make the tool faster to navigate during demos and reviews.</td>
  </tr>
</table>

| Shortcut | Action |
|---|---|
| Command K / Ctrl K | Focus the search bar from anywhere |
| Escape | Clear search, close documentation modal, or deselect item |
| Double click item | Open documentation modal directly |
| Enter or Space | Activate focused audit step or tier card (keyboard navigation) |
| Ctrl+P / Cmd+P | Print or export current view to PDF (works best from Audit Report step) |

[Back to contents](#contents)

---

<a id="11-framework-reference"></a>

## 11. Framework Reference

### NIST AI RMF

The NIST Artificial Intelligence Risk Management Framework (AI RMF 1.0, January 2023) provides a voluntary, rights-preserving framework for organisations to manage AI-related risks. It is structured around four core functions: **Govern**, **Map**, **Measure**, and **Manage**. Each function contains numbered subcategories that represent specific risk management activities.

The workbench maps NIST AI RMF at the subcategory level and cross-references it to CSA, ISO, ATLAS, OWASP, and EU AI Act requirements.

### CSA AICM

The Cloud Security Alliance AI Controls Matrix (AICM) provides a structured set of controls for securing AI systems, particularly those deployed in cloud environments. It aligns to common cloud security principles and extends them to cover AI-specific risks including model integrity, training data governance, and inference security.

### ISO

The workbench includes coverage of **ISO/IEC 42001:2023** (AI management systems — requirements and guidance) and references to **ISO/IEC 27001** (information security management). ISO/IEC 42001 provides a certification framework for responsible AI and maps closely to NIST AI RMF governance categories.

### MITRE ATLAS

ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) is a knowledge base of adversarial tactics, techniques, and case studies targeting ML systems. It is modelled after MITRE ATT&CK and covers the AI-specific attack lifecycle including reconnaissance, resource development, initial access to ML pipelines, and impact.

The workbench maps ATLAS tactic categories to related NIST and CSA controls to help practitioners identify defensive gaps against adversarial ML threats.

### OWASP LLM Top 10 2025

The OWASP Top 10 for Large Language Model Applications (2025 edition) identifies the ten most critical security risks for LLM-based systems. Risks include prompt injection, insecure output handling, training data poisoning, model denial of service, and excessive agency.

The workbench maps each OWASP LLM risk to corresponding NIST subcategories and CSA controls to support threat-led control prioritisation.

### EU AI Act (Regulation 2024/1689)

The EU Artificial Intelligence Act (published June 2024, entering force in stages from 2024–2027) establishes a risk-based regulatory framework for AI systems in the EU market. It classifies AI systems by risk level:

| Risk level | Examples | Requirements |
|---|---|---|
| Unacceptable risk | Social scoring, real-time biometric surveillance | Prohibited |
| High risk | Hiring tools, credit scoring, medical devices, law enforcement | Conformity assessment, registration, human oversight, transparency |
| Limited risk | Chatbots, deepfakes | Transparency obligations |
| Minimal risk | Spam filters, AI in video games | No specific requirements |

Key compliance areas documented in the workbench:

| Article area | Subject |
|---|---|
| Article 9 | Risk management system |
| Article 10 | Data and data governance |
| Article 11 | Technical documentation |
| Article 12 | Record-keeping and logging |
| Article 13 | Transparency and information to users |
| Article 14 | Human oversight |
| Article 15 | Accuracy, robustness and cybersecurity |
| Article 17 | Quality management system |
| Article 72 | Post-market monitoring |

[Back to contents](#contents)

---

<a id="12-glossary"></a>

## 12. Glossary

| Term | Definition |
|---|---|
| Control | A specific requirement, safeguard, or practice within a governance framework |
| Domain | A thematic grouping of related controls within a framework |
| Framework | A structured set of guidance documents governing AI risk or security (e.g. NIST AI RMF, ISO 42001) |
| Gap | A control that has not been implemented or assessed |
| Coverage | The proportion of controls marked as Done relative to total controls |
| Mapping | A documented relationship between equivalent or related items in different frameworks |
| Session | The complete state of an assessment at a point in time — can be saved, exported, and imported |
| Tier | A risk classification (1–4) applied to an AI system in Audit mode, indicating overall risk level |
| GRC | Governance, Risk, and Compliance — a category of enterprise software for managing risk and regulatory obligations |
| CSP | Content Security Policy — a browser security mechanism that restricts what resources a page can load |
| SRI | Subresource Integrity — a security feature that validates the integrity of externally loaded scripts |
| ARIA | Accessible Rich Internet Applications — HTML attributes that improve screen reader support |
| Toast | A brief, non-blocking notification that appears at the screen edge and dismisses automatically |
| localStorage | Browser-native key-value storage that persists data between sessions on the same device |

[Back to contents](#contents)

---

## Notes for Repo Use

- Keep this guide as `USER_GUIDE.md` in the project root
- Link to it from `README.md`
- Keep screenshots in the `docs/` folder and reference them from `README.md`
- Use this guide for deeper workflow and reference detail

[Back to top](#top)
