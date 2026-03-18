# AI Governance Practitioner Workbench

> A single-file, zero-dependency browser tool for AI governance practitioners — explore framework mappings, assess control coverage, and run structured AI risk assessments across five industry frameworks.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Frameworks: 5](https://img.shields.io/badge/Frameworks-5-purple.svg)
![Controls: 40](https://img.shields.io/badge/Controls-40-green.svg)
![No dependencies](https://img.shields.io/badge/Dependencies-none-brightgreen.svg)

---

## What It Does

The workbench answers two questions every AI GRC practitioner faces:

**"Where do I start?"** — Pick any item across five frameworks and instantly see everything connected to it, with a practitioner narrative explaining *why* the connection matters and what to do about it.

**"I have this system — what does that mean for my risk posture?"** — Run a structured AI risk assessment: profile the system, select applicable risk scenarios, score Likelihood × Impact, design controls, generate five-element audit findings, and export a formatted report.

---

## Live Demo

Open `ai-workbench-enterprise.html` directly in any modern browser. No server, no install, no dependencies.

```bash
git clone https://github.com/Joieux/ai-governance-workbench.git
cd ai-governance-workbench
open ai-workbench-enterprise.html   # macOS
# or: start ai-workbench-enterprise.html   (Windows)
# or: xdg-open ai-workbench-enterprise.html (Linux)
```

---

## Four Modes

### 🔍 Explore
Five-column bidirectional framework cross-reference map. Click any item — every connected item across all five frameworks highlights instantly. A connector panel shows a practitioner narrative explaining the real-world significance of each mapping.

- Real-time search across all 40 controls (⌘K)
- NEW / UPDATED badges on 2022–2025 items
- Click any highlighted item to open full documentation with source links
- Light/dark mode toggle

### 📋 Assess
Track your organization's implementation status across all 40 controls.

- Per-framework score cards with live progress bars
- Status cycling: Done / In Progress / Not Started
- P1/P2/P3 priority ratings per control
- Auto-generated priority gap list with why-it-matters narratives
- Persists to `localStorage` — your state survives page refreshes

### 📤 Export
Three export types as clean markdown:

| Type | Use for |
|---|---|
| Gap Report | Board reporting, project planning |
| Selection Mapping | Jira tickets, Confluence docs, control narratives |
| Full Control Inventory | Compliance evidence, audit prep |

Copy to clipboard or download as `.md`.

### 🔍 Audit
End-to-end AI risk assessment workflow in five steps:

1. **System Profile** — capture organization, system, supply chain role, use case tier, data sensitivity, deployment model, sector
2. **Risk Scenarios** — 20 industry-agnostic scenarios, auto-suggested based on your profile
3. **Risk Register** — Likelihood × Impact scoring, pre-populated descriptions and controls (Preventive / Detective / Corrective), fully editable
4. **Formal Findings** — five-element audit format (Condition / Criteria / Cause / Effect / Recommendation), pre-drafted and editable
5. **Report** — full audit report in markdown, downloadable as `ai-risk-assessment-{org}-{date}.md`

---

## Frameworks Covered

| Framework | Items | Coverage |
|---|---|---|
| **NIST AI RMF 1.0** | 4 functions (GOVERN · MAP · MEASURE · MANAGE) | Full function-level with subcategory detail |
| **CSA AICM v1.0.3** | 11 control domains | GRC · MDS · DSP · TVM · STA · SEF · AIS · LOG · BCR · IAM · CCC |
| **ISO/IEC AI Standards** | 5 standards | 42001:2023 · 23894:2023 · 5338:2023 · TS 5723:2022 · 27001 |
| **MITRE ATLAS v5** | 10 tactics | TA0001 · TA0003 · TA0004 · TA0006 · TA0008 · TA0009 · TA0011 · TA0012 · TA0013 · TA0014 |
| **OWASP LLM Top 10 2025** | 10 risks | LLM01–LLM10 (2025 edition) |

All 40 items are fully cross-mapped and bidirectional — selecting any item in any framework highlights its connections across all others.

---

## Risk Scenario Library

20 pre-built, industry-agnostic risk scenarios. Each includes a description, real-world precedent, framework mappings, and four pre-typed controls.

| Scenario | Category | Default Rating |
|---|---|---|
| Algorithmic bias in automated decisions | Fairness & Bias | CRITICAL |
| Third-party AI model with no visibility | Accountability | CRITICAL |
| Inability to explain AI decisions | Explainability | HIGH |
| Biased or unrepresentative training data | Data Quality | HIGH |
| AI deployed without formal risk assessment | Accountability | CRITICAL |
| Prompt injection vulnerability | Security | HIGH |
| Sensitive data disclosure via AI outputs | Privacy | HIGH |
| Insufficient human oversight | Accountability | CRITICAL |
| AI supply chain compromise | Security | HIGH |
| AI agent with excessive permissions | Security | HIGH |
| Non-compliance with AI regulations | Accountability | CRITICAL |
| Model performance degradation | Robustness | MEDIUM |
| No AI-specific incident response plan | Accountability | HIGH |
| Adversarial inputs evading controls | Security | MEDIUM |
| Operational reliance without verification | Robustness | HIGH |
| No AI Bill of Materials | Accountability | HIGH |
| Training data poisoning | Security | HIGH |
| Single vendor operational dependency | Robustness | MEDIUM |
| Uncontrolled AI resource consumption | Robustness | MEDIUM |
| Insufficient employee AI literacy | Accountability | HIGH |

Scenarios are automatically suggested based on the system profile you enter — supply chain role, use case tier, data sensitivity, and deployment model.

---

## Supply Chain Role Model

The audit mode uses the CSA AICM supply chain role taxonomy to scope which controls apply:

| Role | Description | Example |
|---|---|---|
| **AI Customer (AIC)** | Buys and uses AI services, builds nothing | ChatGPT Enterprise, Microsoft Copilot |
| **Application Provider (AP)** | Builds products on top of AI APIs | SaaS product calling OpenAI API |
| **Orchestrated Service Provider (OSP)** | Runs AI infrastructure and pipelines | RAG pipeline, model hosting, MLOps |
| **Model Provider (MP)** | Trains or fine-tunes models | Internal ML team, foundation model vendor |

Most organizations occupy more than one role simultaneously.

---

## Use Case Risk Tiers

| Tier | Label | Description | Examples |
|---|---|---|---|
| 1 | Productivity / Assistive | AI helps humans, no autonomous action | Writing assistance, search, summarization |
| 2 | Decision Support | AI recommends, human decides | Credit risk scoring, medical triage |
| 3 | Automated Decision | AI decides, human can appeal | Hiring screening, fraud detection |
| 4 | Autonomous Action | AI acts without human confirmation | AI agents, automated trading |

---

## Audit Report Output

The report export follows the five-element finding format used by Big 4 firms and internal audit functions:

```
Finding ID: AI-FIND-001
Rating: CRITICAL (Score: 20)

Condition      — What was observed
Criteria       — Standards and frameworks that require something different
Cause          — Root cause of the finding
Effect         — Business and legal consequences if not remediated
Recommendation — Specific, actionable steps with framework references

Risk Owner:    [name]
Deadline:      [date]
Priority:      Immediate (0–30 days)
```

The full report includes: assessment header table, executive summary with risk counts, complete risk register with controls matrix, all formal findings, and a framework appendix.

---

## Operational Tools Referenced

Eight practitioner tools linked directly from the Explore mode:

| Tool | Source | Purpose |
|---|---|---|
| AIBOM Generator | OWASP | Generate AI Bills of Materials |
| ATLAS Navigator | MITRE | Interactive ATLAS matrix visualization |
| Arsenal (CALDERA) | MITRE | Automated adversarial emulation |
| AI RMF Playbook | NIST | Suggested actions per RMF category |
| AI Risk Database | MITRE | AI incidents and vulnerability database |
| Governance Checklist | OWASP | LLM application governance checklist |
| ISO/IEC 42001:2023 | ISO | AI Management System standard |
| Agentic AI Security Top 10 | OWASP | Risks for autonomous AI agents |

---

## Technical Details

- **Single HTML file** — `ai-workbench-enterprise.html` (~255KB)
- **Zero dependencies** — no npm, no build step, no CDN calls except Google Fonts
- **No server required** — open directly in browser
- **localStorage persistence** — assessment state survives page refreshes
- **Light and dark mode** — toggle in the top-right corner, preference persists
- **Responsive** — works at 768px and above
- **Export** — markdown output, copy to clipboard or download as `.md`
- **American English** — all content uses American spelling throughout

### Browser Compatibility

Tested in Chrome 120+, Firefox 121+, Safari 17+, Edge 120+.

---

## Methodology

All framework mappings were audited against source documents:

- NIST AI 100-1 (NIST AI RMF 1.0)
- CSA AICM v1.0.3 (November 2025)
- ISO/IEC 42001:2023, 23894:2023, 5338:2023, TS 5723:2022, 27001:2022
- MITRE ATLAS v5 (including October 2025 agentic additions)
- OWASP LLM Top 10 2025

Cross-mappings are bidirectional and verified. Every item has a practitioner narrative, a DOC_LIBRARY entry with source documentation, and complete framework cross-references.

---

## Who This Is For

- **AI GRC Practitioners** — framework mapping, gap assessment, control design
- **Internal Auditors** — structured risk assessments with audit-standard finding format
- **CISOs and Risk Officers** — coverage tracking, board-ready gap reports
- **Compliance Teams** — regulatory mapping, evidence documentation
- **Security Architects** — ATLAS threat mapping, control architecture

---

## Contributing

Issues and pull requests welcome. When contributing:

- Maintain American English spelling throughout
- Verify framework mappings against primary source documents
- Risk scenarios must be generic — no organization names hardcoded
- JS syntax must pass `node --check` before submitting

---

## License

MIT License — free to use, modify, and distribute. See `LICENSE` for full terms.

---

## Acknowledgments

Built on the work of:
- NIST AI Risk Management Framework team
- Cloud Security Alliance AICM working group
- OWASP Top 10 for LLM Applications project
- MITRE ATLAS project team
- ISO/IEC JTC 1/SC 42 (AI standards committee)

---

*AI Governance Practitioner Workbench — built for practitioners, by a practitioner.*
