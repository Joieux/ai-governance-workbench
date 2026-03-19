# AI Governance Practitioner Workbench

A portfolio project that turns complex AI governance material into a usable browser based workflow.

I built this static web application to explore how major AI governance frameworks can be mapped, assessed, and translated into practical review steps. The tool brings together five frameworks in one interface, supports lightweight control tracking, and includes a structured AI risk assessment flow with exportable outputs.

It runs entirely in the browser using HTML, CSS, and JavaScript with no server, no build step, and no external dependencies.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Frameworks: 5](https://img.shields.io/badge/Frameworks-5-blue.svg)
![Controls: 40](https://img.shields.io/badge/Controls-40-purple.svg)
![Dependencies: None](https://img.shields.io/badge/Dependencies-None-lightgrey.svg)

## Screenshots

*Overview of the five framework Explore interface.*

![AI Governance Practitioner Workbench overview](docs/screenshot-overview.png)

![AI Governance Practitioner Workbench in action](docs/screenshot-in-action.png)

*Selected item view showing cross framework relationships and linked governance context.*

## Why I Built It

AI governance work is often fragmented across standards, control libraries, and risk guidance. In practice, that means a reviewer has to move between multiple sources, compare overlapping concepts, and decide how those ideas connect in a real assessment workflow.

I built this project to make that process easier to navigate in one place.

The goal was not to automate judgment or flatten framework differences. The goal was to create a lightweight tool that helps users understand how concepts relate across frameworks, track implementation status across a defined control set, and run a structured AI risk review with exportable outputs.

## What the Project Demonstrates

This project reflects how I approach applied governance and risk problems.

It shows that I can take a dense, standards heavy domain and turn it into a usable product flow. It shows judgment about scope by keeping the tool simple, local, and easy to inspect. It shows front end implementation without relying on dependency heavy tooling or unnecessary architecture.

It also shows an interest in practical internal style tools where structure, clarity, and traceability matter.

## Core Features

### Explore framework relationships

The workbench includes a five column cross reference view spanning NIST AI RMF, CSA AICM, ISO, MITRE ATLAS, and OWASP LLM Top 10 2025.

Selecting an item highlights related items across the other framework columns so users can quickly see overlap, alignment, and reinforcement across standards.

### Review control coverage

The assessment view tracks progress across 40 controls using three simple states: Done, In Progress, and Not Started.

This provides a lightweight control review layer without requiring a database or external service.

### Run a structured AI risk assessment

The risk workflow helps a user profile an AI system, review suggested risk scenarios, and generate documented findings.

This is designed as a structured review aid rather than a claim of formal assurance.

### Export results

The application generates markdown outputs for gap reports, selection mappings, and control inventories.

## Mapping Philosophy

The framework connections in this project are intended as practitioner friendly cross references, not strict one to one equivalence claims.

That distinction matters. Related concepts across frameworks often overlap without matching exactly. The purpose of the mapping layer is to support navigation and reasoning across standards while preserving the need for judgment.

## Technical Approach

I intentionally kept the implementation simple.

The application is a static browser based tool built with standard HTML, CSS, and JavaScript. There is no server, package manager, or build pipeline. That makes the project easy to inspect, easy to run locally, and easy to share directly from the repository.

That simplicity is part of the point. I wanted the project to feel like a practical working tool, not a demo wrapped in unnecessary complexity.

## Design Tradeoffs

Keeping the project lightweight comes with tradeoffs.

A static browser app is easy to run, but it does not provide shared persistence, collaboration, or evidence management.

A curated mapping model is useful for exploration, but it should not be treated as an authoritative substitution engine between frameworks.

A simple status model keeps the interface clear, but it does not capture the full nuance of control maturity or validation depth.

These tradeoffs were intentional. The project prioritizes clarity, accessibility, and workflow design over enterprise scale complexity.

## Future Improvements

Next steps I would explore include search and filtering across framework items, richer methodology notes for mapping decisions, saved assessment profiles, additional export formats, and stronger evidence tracking for deeper review workflows.

I would also make the distinction even clearer between exploratory mapping, internal review support, and formal audit oriented use cases.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Joieux/ai-governance-workbench.git
cd ai-governance-workbench
```
Open the main file in your browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```
## Repository Structure
```text
ai-governance-workbench/
├── index.html
├── script.js
├── styles.css
├── README.md
├── USER_GUIDE.md
├── docs/
│   ├── screenshot-overview.png
│   └── screenshot-in-action.png
└── LICENSE
```
## License

This project is licensed under the MIT License. See LICENSE￼ for details.

