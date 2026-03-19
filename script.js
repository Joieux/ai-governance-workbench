const DOC_LIBRARY = {
  "nist-gov": {
    title: `GOVERN Function`,
    framework: "NIST AI RMF 1.0",
    ref: `NIST AI 100-1 · Section 5.1 · Table 1`,
    color: "#38bdf8",
    summary: `The GOVERN function cultivates and implements a culture of AI risk management across the organization. It is a cross-cutting function, explicitly designed to be infused throughout MAP, MEASURE, and MANAGE.`,
    categories: [
      {
        id: "GV-1",
        name: "Policies, Processes & Procedures",
        detail: `Legal and regulatory requirements involving AI are understood, managed, and documented. Trustworthy AI characteristics are integrated into organizational policies. Risk management processes are established through transparent policies.`,
      },
      {
        id: "GV-2",
        name: "Accountability Structures",
        detail: `Roles and responsibilities for AI risk management are documented and clear throughout the organization. Personnel and partners receive AI risk management training. Executive leadership takes responsibility for AI risk decisions.`,
      },
      {
        id: "GV-3",
        name: "Workforce DEI & Accessibility",
        detail: `Decision-making related to mapping, measuring, and managing AI risks is informed by a diverse team across demographics, disciplines, experience, and backgrounds.`,
      },
      {
        id: "GV-4",
        name: "Organizational Risk Culture",
        detail: `Policies foster a critical thinking and safety-first mindset. Teams document and communicate AI risks and potential impacts. Practices enable AI testing, incident identification, and information sharing.`,
      },
      {
        id: "GV-5",
        name: "Stakeholder Engagement",
        detail: `Processes collect, consider, and integrate feedback from those external to the development team regarding potential societal impacts. Mechanisms enable adjudicated feedback to be incorporated into system design.`,
      },
      {
        id: "GV-6",
        name: "Third-Party & Supply Chain Risk",
        detail: `Policies address AI risks from third-party entities including IP infringement risks. Contingency processes handle failures or incidents in third-party data or AI systems deemed high-risk.`,
      },
    ],
    docLink: "https://doi.org/10.6028/NIST.AI.100-1",
  },
  "nist-map": {
    title: `MAP Function`,
    framework: "NIST AI RMF 1.0",
    ref: `NIST AI 100-1 · Section 5.2 · Table 2`,
    color: "#38bdf8",
    summary: `The MAP function establishes the context to frame risks related to an AI system. It enables an initial go/no-go decision and identifies societal impacts. Outcomes in MAP are the basis for MEASURE and MANAGE.`,
    categories: [
      {
        id: "MP-1",
        name: "Context Established",
        detail: `Intended purposes, beneficial uses, context-specific laws, and deployment settings are understood and documented. Considers specific user types, positive and negative impacts, and assumptions about AI system purposes.`,
      },
      {
        id: "MP-2",
        name: "AI System Categorization",
        detail: `Specific tasks and methods used by the AI system are defined. Information about knowledge limits and how system output may be utilized and overseen by humans is documented.`,
      },
      {
        id: "MP-3",
        name: "Benefits & Costs Understood",
        detail: `Potential benefits of intended AI functionality are examined. Potential costs — including non-monetary costs from errors — connected to organizational risk tolerance are documented.`,
      },
      {
        id: "MP-4",
        name: "Third-Party Risk Mapping",
        detail: `Approaches for mapping AI technology and legal risks of components — including third-party data or software — are in place, followed, and documented.`,
      },
      {
        id: "MP-5",
        name: "Impact Characterization",
        detail: `Likelihood and magnitude of each identified impact, both beneficial and harmful, based on expected use, past uses, public incident reports, and external feedback are identified and documented.`,
      },
    ],
    docLink: "https://doi.org/10.6028/NIST.AI.100-1",
  },
  "nist-meas": {
    title: `MEASURE Function`,
    framework: "NIST AI RMF 1.0",
    ref: `NIST AI 100-1 · Section 5.3 · Table 3`,
    color: "#38bdf8",
    summary: `The MEASURE function employs quantitative, qualitative, or mixed methods to analyze, assess, benchmark, and monitor AI risk. It covers all 7 trustworthiness characteristics and informs the MANAGE function.`,
    categories: [
      {
        id: "MS-1",
        name: "Methods & Metrics Identified",
        detail: `Approaches and metrics for AI risk measurement are selected starting with most significant risks. Appropriateness of AI metrics and effectiveness of existing controls are regularly assessed.`,
      },
      {
        id: "MS-2",
        name: "Trustworthiness Evaluation",
        detail: `Covers MEASURE 2.1–2.13 including: safety risks (2.6), security & resilience (2.7), transparency & accountability (2.8), model explanation (2.9), privacy risk (2.10), fairness & bias (2.11), environmental impact (2.12).`,
      },
      {
        id: "MS-3",
        name: "Risk Tracking Mechanisms",
        detail: `Approaches, personnel, and documentation are in place to regularly identify and track existing, unanticipated, and emergent AI risks. Feedback processes for end users to report problems are established.`,
      },
      {
        id: "MS-4",
        name: "Measurement Feedback",
        detail: `Measurement approaches for identifying AI risks are connected to deployment contexts and informed through expert consultation. Results regarding trustworthiness in deployment contexts are documented.`,
      },
    ],
    docLink: "https://doi.org/10.6028/NIST.AI.100-1",
  },
  "nist-mgmt": {
    title: `MANAGE Function`,
    framework: "NIST AI RMF 1.0",
    ref: `NIST AI 100-1 · Section 5.4 · Table 4`,
    color: "#38bdf8",
    summary: `The MANAGE function allocates risk resources to mapped and measured risks on a regular basis. Risk treatment comprises plans to respond to, recover from, and communicate about incidents or events.`,
    categories: [
      {
        id: "MG-1",
        name: "Risk Prioritization & Response",
        detail: `Determination is made whether AI system achieves intended purposes. Risk treatment is prioritized based on impact, likelihood, and resources. Response options include mitigating, transferring, avoiding, or accepting.`,
      },
      {
        id: "MG-2",
        name: "Benefits Maximized / Harms Minimized",
        detail: `Resources required to manage AI risks are considered along with viable non-AI alternatives. Mechanisms sustain value of deployed AI systems. Procedures respond to previously unknown risks when identified.`,
      },
      {
        id: "MG-3",
        name: "Third-Party Risk Managed",
        detail: `AI risks and benefits from third-party resources are regularly monitored and controls are applied. Pre-trained models used for development are monitored as part of regular AI system maintenance.`,
      },
      {
        id: "MG-4",
        name: "Risk Treatment & Communication",
        detail: `Post-deployment AI system monitoring plans are implemented including mechanisms for user feedback, appeals, override, decommissioning, incident response, and recovery. Incidents are communicated to relevant AI actors.`,
      },
    ],
    docLink: "https://doi.org/10.6028/NIST.AI.100-1",
  },
  "csa-grc": {
    title: `GRC — Governance, Risk & Compliance`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · GRC Domain`,
    color: "#a78bfa",
    summary: `Establishes AI governance policies, risk management programs, regulatory compliance frameworks, and AI impact assessments. The foundational governance domain that underpins all AICM controls.`,
    categories: [
      {
        id: "GRC-01",
        name: "AI Governance Policy",
        detail: `Establish, document, and maintain AI governance policies aligned with ISO/IEC 42001, NIST AI RMF, EU AI Act, and applicable regulations. Define roles and responsibilities for AI governance.`,
      },
      {
        id: "GRC-02",
        name: "Risk Management Program",
        detail: `Implement a risk management program specific to AI systems using frameworks like ISO 31000 or NIST AI RMF. Identify, assess, and treat AI-specific risks including model bias, adversarial attacks, and non-compliance.`,
      },
      {
        id: "GRC-03",
        name: "Regulatory Compliance",
        detail: `Identify and comply with all applicable AI regulations across jurisdictions: GDPR, CCPA, EU AI Act, HIPAA, ISO 27001/42001. Integrate compliance checks into AI governance frameworks.`,
      },
      {
        id: "GRC-10",
        name: "AI Impact Assessment",
        detail: `Conduct AI Impact Assessments following ISO/IEC 42001 standards at key SDLC stages and after major changes. Document potential harms, affected populations, and mitigation strategies.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-mds": {
    title: `MDS — Model Security`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · MDS Domain`,
    color: "#a78bfa",
    summary: `Covers model hardening, adversarial robustness testing, model integrity verification across the full model lifecycle from training through deployment. AICM's dedicated AI-native security domain.`,
    categories: [
      {
        id: "MDS-01",
        name: "Model Security Policy",
        detail: `Establish model security policies covering the AI model development lifecycle including training data selection, model architecture design, training processes, model validation, and governance activities.`,
      },
      {
        id: "MDS-02",
        name: "Adversarial Robustness",
        detail: `Test models against adversarial examples (AML.T0043), data poisoning (AML.T0020), and model inversion attacks. Implement defenses including adversarial training, input preprocessing, and ensemble methods.`,
      },
      {
        id: "MDS-03",
        name: "Model Integrity",
        detail: `Implement cryptographic verification of model artifacts. Detect unauthorized modifications to model weights. Establish model signing and provenance tracking across the supply chain.`,
      },
      {
        id: "MDS-04",
        name: "Model Access Control",
        detail: `Restrict access to model artifacts, training data, and inference endpoints. Implement authentication and authorization for inference APIs. Monitor and log all model access events.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-dsp": {
    title: `DSP — Data Security & Privacy`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · DSP Domain`,
    color: "#a78bfa",
    summary: `Controls for training data lifecycle, inference data protection, differential privacy implementation, and output filtering. Extends ISO/IEC 27001 into AI-specific data handling contexts.`,
    categories: [
      {
        id: "DSP-01",
        name: "Data Security Policy",
        detail: `Establish data security and privacy policies for AI systems covering data collection, curation, storage, and deletion across the AI lifecycle. Align with GDPR, CCPA, and ISO 27001.`,
      },
      {
        id: "DSP-04",
        name: "Training Data Protection",
        detail: `Implement access controls, encryption, and integrity checks on training datasets. Track data lineage and provenance. Apply anonymization or differential privacy techniques where applicable.`,
      },
      {
        id: "DSP-07",
        name: "Inference Data Controls",
        detail: `Protect user data submitted to AI inference endpoints. Prevent sensitive data from being stored in model outputs, logs, or training feedback loops. Implement output filtering for PII.`,
      },
      {
        id: "DSP-09",
        name: "Privacy-Preserving Techniques",
        detail: `Apply federated learning, differential privacy, secure multi-party computation, or homomorphic encryption where AI use cases involve sensitive personal data.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-tvm": {
    title: `TVM — Threat & Vulnerability Management`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · TVM Domain`,
    color: "#a78bfa",
    summary: `Adversarial testing, red-teaming, penetration testing, and vulnerability scanning specifically for AI systems. Maps directly to MITRE ATLAS tactics for threat-informed defense.`,
    categories: [
      {
        id: "TVM-01",
        name: "Vulnerability Management Policy",
        detail: `Establish vulnerability management policies for AI systems including model vulnerabilities, adversarial attack vectors, and infrastructure weaknesses. Integrate with MITRE ATLAS tactic matrix.`,
      },
      {
        id: "TVM-03",
        name: "AI Red-Teaming",
        detail: `Conduct adversarial red-team exercises simulating ATLAS tactics including prompt injection (T0051), data poisoning (T0020), and model evasion (T0043). Use Arsenal/CALDERA for automated emulation.`,
      },
      {
        id: "TVM-06",
        name: "Penetration Testing",
        detail: `Perform penetration testing on AI inference APIs, model serving infrastructure, and MLOps pipelines. Test for ML Model Access (TA0004) and Initial Access (TA0003) vulnerabilities.`,
      },
      {
        id: "TVM-07",
        name: "Threat Intelligence",
        detail: `Consume and integrate MITRE ATLAS threat intelligence. Subscribe to AI incident sharing initiatives. Update threat models as new ATLAS techniques are published.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-sta": {
    title: `STA — Supply Chain, Transparency & Accountability`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · STA Domain`,
    color: "#a78bfa",
    summary: `AI supply chain integrity, model provenance tracking, third-party AI component transparency, and documentation requirements including model cards.`,
    categories: [
      {
        id: "STA-01",
        name: "Supply Chain Transparency",
        detail: `Document and assess all third-party AI components including pre-trained models, datasets, and ML libraries. Verify provenance of model artifacts against ATLAS Supply Chain Compromise (TA0003) risks.`,
      },
      {
        id: "STA-03",
        name: "Third-Party AI Assessment",
        detail: `Assess AI service providers against AICM controls. Review SOC 2, ISO 27001, and AI-specific certifications. Evaluate supply chain risks before integrating pre-trained models.`,
      },
      {
        id: "STA-04",
        name: "Model Documentation",
        detail: `Produce model cards documenting model purpose, training data, known limitations, performance metrics, and intended/prohibited use cases. Align with ISO/IEC 42001 documentation requirements.`,
      },
      {
        id: "STA-09",
        name: "AI Service Provider Contracts",
        detail: `Establish contractual obligations for AI service providers including security requirements, audit rights, incident notification, and data handling. Align with NIST GOVERN 6.1 requirements.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-sef": {
    title: `SEF — Security Incident Management`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · SEF Domain`,
    color: "#a78bfa",
    summary: `AI-specific incident classification, response plans, recovery procedures, and lessons learned integration. Covers adversarial attacks, model failures, and AI safety incidents.`,
    categories: [
      {
        id: "SEF-01",
        name: "Incident Response Policy",
        detail: `Establish AI-specific incident response policies covering adversarial attacks, model failures, data poisoning, and bias-induced harms. Integrate with NIST MANAGE 4 incident communication requirements.`,
      },
      {
        id: "SEF-05",
        name: "AI Incident Classification",
        detail: `Classify AI incidents across technical (adversarial attack, model failure), safety (unintended harm), and compliance (regulatory breach) categories. Map to ATLAS Impact tactic (TA0014) for technical incidents.`,
      },
      {
        id: "SEF-06",
        name: "Response & Recovery",
        detail: `Execute incident response including isolation of compromised models, rollback to clean model versions, stakeholder notification, and post-incident root cause analysis.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-ais": {
    title: `AIS — Application & Interface Security`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · AIS Domain`,
    color: "#a78bfa",
    summary: `Secure AI application development lifecycle, API security, input validation, and prompt injection defenses. Extends standard application security into AI-specific attack vectors.`,
    categories: [
      {
        id: "AIS-01",
        name: "Application Security Policy",
        detail: `Establish security policies covering AI application development lifecycle, secure API integrations, and runtime protections. Review annually and after significant system changes.`,
      },
      {
        id: "AIS-02",
        name: "Baseline Security Requirements",
        detail: `Define security baselines for AI applications covering authentication, authorization, input validation, output encoding, and secure coding. Align with OWASP Top 10 and OWASP LLM Top 10.`,
      },
      {
        id: "AIS-04",
        name: "Secure AI SDLC",
        detail: `Implement threat modeling for AI-specific risks (poisoning, model inversion, prompt injection) early in SDLC. Conduct static/dynamic analysis, adversarial testing, and penetration testing before deployment.`,
      },
      {
        id: "AIS-05",
        name: "Prompt Injection Defense",
        detail: `Implement input sanitization, instruction hierarchy enforcement, and output filtering to defend against ATLAS T0051 (Direct Prompt Injection) and T0051.002 (Indirect Prompt Injection).`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-log": {
    title: `LOG — Logging & Monitoring`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · LOG Domain`,
    color: "#a78bfa",
    summary: `AI system telemetry, inference audit trails, anomaly detection for adversarial inputs, and real-time monitoring. Enables detection of ATLAS Defense Evasion (TA0008) tactics.`,
    categories: [
      {
        id: "LOG-01",
        name: "Logging Policy",
        detail: `Establish logging policies for AI systems covering inference requests, model outputs, data access events, and system configuration changes. Retain logs per regulatory requirements.`,
      },
      {
        id: "LOG-05",
        name: "AI Security Monitoring",
        detail: `Implement real-time monitoring for anomalous inference patterns, adversarial inputs, and unusual model behavior. Detect ATLAS Defense Evasion (TA0008) and Collection (TA0011) tactics.`,
      },
      {
        id: "LOG-08",
        name: "Audit Trail Integrity",
        detail: `Ensure integrity and non-repudiation of AI audit trails. Implement tamper-evident logging to prevent adversarial log manipulation. Correlate AI events with broader SIEM telemetry.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-bcr": {
    title: `BCR — Business Continuity & Resilience`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · BCR Domain`,
    color: "#a78bfa",
    summary: `AI system resilience, fail-safe design, operational continuity under adversarial conditions, and recovery from denial-of-ML-service attacks (ATLAS TA0014).`,
    categories: [
      {
        id: "BCR-01",
        name: "Business Continuity Policy",
        detail: `Establish AI-specific BCR policies covering service degradation, model fallback procedures, and recovery time objectives. Align with NIST MEASURE 2.6 (safety evaluation) requirements.`,
      },
      {
        id: "BCR-03",
        name: "Fail-Safe Design",
        detail: `Design AI systems with explicit fail-safe behaviors when operating outside knowledge limits. Implement human-in-the-loop mechanisms for high-stakes decisions when AI confidence is low.`,
      },
      {
        id: "BCR-05",
        name: "DoS Resilience",
        detail: `Protect AI inference infrastructure against denial-of-service attacks (ATLAS TA0014). Implement rate limiting, request queuing, and model serving redundancy.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-iam": {
    title: `IAM — Identity & Access Management`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · IAM Domain`,
    color: "#a78bfa",
    summary: `ML model access controls, inference API authentication and authorization, least-privilege for AI pipelines. Mitigates ATLAS ML Model Access (TA0004) and Credential Access (TA0009) tactics.`,
    categories: [
      {
        id: "IAM-01",
        name: "Identity Management Policy",
        detail: `Define IAM policies for AI system access covering model artifacts, training infrastructure, inference APIs, and AI agent tool permissions. Apply zero-trust principles.`,
      },
      {
        id: "IAM-06",
        name: "Least Privilege for AI",
        detail: `Apply least-privilege access to all AI pipeline components. Restrict model artifact access to authorized personnel. Implement just-in-time access for sensitive ML operations.`,
      },
      {
        id: "IAM-09",
        name: "AI Agent Permissions",
        detail: `Define and enforce minimal tool permissions for AI agents. Prevent ATLAS Credential Access (TA0009) by securing agent configuration files. Audit agent action logs regularly.`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "csa-ccc": {
    title: `CCC — Change Control & Configuration`,
    framework: "CSA AICM v1.0.3",
    ref: `Cloud Security Alliance · AICM v1.0.3 · CCC Domain`,
    color: "#a78bfa",
    summary: `Model version control, MLOps pipeline change management, and deployment gates. Protects against ATLAS Persistence (TA0006) — unauthorized modification of AI agent configurations.`,
    categories: [
      {
        id: "CCC-01",
        name: "Change Management Policy",
        detail: `Establish change management policies for AI model updates, training pipeline modifications, and inference infrastructure changes. Require approval gates for production model deployments.`,
      },
      {
        id: "CCC-04",
        name: "Model Version Control",
        detail: `Implement version control for all model artifacts, training configurations, and evaluation results. Maintain immutable records of model lineage to detect ATLAS Persistence (TA0006) modifications.`,
      },
      {
        id: "CCC-07",
        name: "Deployment Approval Gates",
        detail: `Require security review and approval before deploying new or updated AI models to production. Validate model integrity and check against known backdoor signatures (ATLAS T0044).`,
      },
    ],
    docLink:
      "https://cloudsecurityalliance.org/research/working-groups/artificial-intelligence",
  },
  "iso-42001": {
    title: `ISO/IEC 42001:2023`,
    framework: "ISO Standards",
    ref: `ISO/IEC 42001:2023 — Artificial Intelligence Management Systems (AIMS)`,
    color: "#34d399",
    summary: `The first international standard specifying requirements for an AI Management System. The ISO 27001 equivalent for AI — provides the governance framework for responsible AI development and deployment.`,
    categories: [
      {
        id: "Clause 4",
        name: "Context of the Organization",
        detail: `Understanding internal and external issues relevant to AI. Identifying interested parties and their AI-related requirements. Determining the scope of the AI management system.`,
      },
      {
        id: "Clause 5",
        name: "Leadership & Policy",
        detail: `Top management leadership and commitment to the AIMS. Establishing AI policy including commitments to responsible development, beneficial use, and continual improvement.`,
      },
      {
        id: "Clause 6",
        name: "Planning",
        detail: `Addressing AI risks and opportunities. Setting AI objectives. Planning to achieve AI objectives including resource requirements.`,
      },
      {
        id: "Annex A",
        name: "AI Controls",
        detail: `Reference control objectives covering: AI system impact assessment, data governance, responsible design, transparency and explainability, human oversight, and AI system safety.`,
      },
    ],
    docLink: "https://www.iso.org/standard/81230.html",
  },
  "iso-23894": {
    title: `ISO/IEC 23894:2023`,
    framework: "ISO Standards",
    ref: `ISO/IEC 23894:2023 — Artificial Intelligence Risk Management`,
    color: "#34d399",
    summary: `Guidance on managing risks specific to AI systems. Extends ISO 31000 (general risk management) and ISO 31010 (risk assessment techniques) into AI-specific contexts. Directly aligned with NIST AI RMF MAP and MANAGE functions.`,
    categories: [
      {
        id: "5.0",
        name: "AI Risk Management Principles",
        detail: `Risk management should be integrated, structured, comprehensive, inclusive, dynamic, and informed by best available information. Explicitly references AI-specific characteristics including socio-technical nature.`,
      },
      {
        id: "6.0",
        name: "AI Risk Management Framework",
        detail: `Leadership and commitment. Integration with organizational processes. Design, implementation, and evaluation of the AI risk management framework.`,
      },
      {
        id: "7.0",
        name: "AI Risk Management Process",
        detail: `Scope definition, context establishment, and stakeholder communication. Risk identification, analysis, and evaluation specific to AI. Risk treatment including sharing, avoiding, accepting, or reducing AI risks.`,
      },
      {
        id: "Annex B",
        name: "AI-Specific Risk Sources",
        detail: `Bias in training data, model opacity, adversarial attacks, distributional shift, emergent behavior, misuse, and unintended consequences. Maps to ATLAS attack categories.`,
      },
    ],
    docLink: "https://www.iso.org/standard/77304.html",
  },
  "iso-5338": {
    title: `ISO/IEC 5338:2023`,
    framework: "ISO Standards",
    ref: `ISO/IEC 5338:2023 — AI System Life Cycle Processes`,
    color: "#34d399",
    summary: `Defines processes for AI system lifecycle management. The MLOps process standard — covers design, development, deployment, operation, and retirement. Used in AICM MDS, CCC, and STA domains.`,
    categories: [
      {
        id: "ML Process",
        name: "Machine Learning Process",
        detail: `Data processes: collection, preprocessing, quality assurance. Model processes: design, training, evaluation, testing. Deployment processes: packaging, release, monitoring.`,
      },
      {
        id: "Lifecycle Mgmt",
        name: "AI Lifecycle Management",
        detail: `Plan, design, implement, integrate, verify, transition, operate, maintain, and retire AI systems. Explicitly addresses MLOps continuous delivery pipelines.`,
      },
      {
        id: "Quality",
        name: "AI Quality Processes",
        detail: `Quality planning, quality assurance, and quality control for AI systems. Verification and validation specific to machine learning components. Addresses concept drift and model degradation.`,
      },
      {
        id: "Supply Chain",
        name: "AI Supply Chain",
        detail: `Acquisition and supply processes for AI components including pre-trained models, datasets, and AI services. Maps to ATLAS Supply Chain Compromise (TA0003) mitigation requirements.`,
      },
    ],
    docLink: "https://www.iso.org/standard/81118.html",
  },
  "iso-5723": {
    title: `ISO/IEC TS 5723:2022`,
    framework: "ISO Standards",
    ref: `ISO/IEC TS 5723:2022 — Trustworthiness in AI Systems`,
    color: "#34d399",
    summary: `Defines the vocabulary for AI trustworthiness characteristics. Used by NIST MEASURE function to frame evaluation criteria. The 7 characteristics form the basis for all AI trustworthiness assessments.`,
    categories: [
      {
        id: "Char 1–2",
        name: "Valid & Reliable / Safe",
        detail: `Valid & Reliable: AI system performs as intended under defined conditions. Safe: AI system does not cause harm under normal use or reasonably foreseeable misuse — aligns with NIST MEASURE 2.6.`,
      },
      {
        id: "Char 3–4",
        name: "Secure & Resilient / Accountable",
        detail: `Secure & Resilient: AI system withstands adversarial conditions and recovers from failures — maps to ATLAS TA0008 and TA0014. Accountable & Transparent: actions traceable to responsible actors.`,
      },
      {
        id: "Char 5–6",
        name: "Explainable / Privacy-Enhanced",
        detail: `Explainable & Interpretable: AI outputs understood by humans — aligns with NIST MEASURE 2.9. Privacy-Enhanced: AI protects personal data — aligns with NIST MEASURE 2.10 and AICM DSP.`,
      },
      {
        id: "Char 7",
        name: "Fair",
        detail: `AI system treats all people equitably without harmful discrimination. Aligns with NIST MEASURE 2.11 (fairness and bias evaluation).`,
      },
    ],
    docLink: "https://www.iso.org/standard/81258.html",
  },
  "iso-27001": {
    title: `ISO/IEC 27001`,
    framework: "ISO Standards",
    ref: `ISO/IEC 27001 — Information Security Management Systems (ISMS)`,
    color: "#34d399",
    summary: `The foundational information security management standard. Extended into AI contexts by AICM DSP, IAM, LOG, and AIS domains. Provides the baseline security controls framework that AICM builds upon for AI-specific requirements.`,
    categories: [
      {
        id: "Annex A",
        name: "Information Security Controls",
        detail: `93 controls across 4 themes: organizational controls, people controls, physical controls, and technological controls. AICM DSP, IAM, LOG, and AIS extend these into AI-specific contexts.`,
      },
      {
        id: "A.8",
        name: "Technological Controls",
        detail: `User endpoint devices, privileged access rights, information access restriction, secure authentication, cryptography, and secure development lifecycle. Foundational for AICM AIS and IAM domains.`,
      },
      {
        id: "A.5",
        name: "Organizational Controls",
        detail: `Information security policies, roles and responsibilities, threat intelligence, information security in project management. Foundational for AICM GRC and A&A domains.`,
      },
      {
        id: "AI Extension",
        name: "AI-Specific Extension in AICM",
        detail: `AICM extends ISO 27001 with AI-specific controls for: training data security (DSP), ML model access control (IAM), inference API security (AIS), and AI-specific audit logging (LOG).`,
      },
    ],
    docLink: "https://www.iso.org/standard/27001",
  },
  "atlas-ta0001": {
    title: `AML.TA0001 — Reconnaissance`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0001`,
    color: "#f87171",
    summary: `Adversaries gather information about target ML systems before launching attacks. Information collected informs targeting and attack design. Maps to NIST MAP 5.1 (impact likelihood) and AICM TVM threat intelligence controls.`,
    categories: [
      {
        id: "T0000",
        name: "Gather ML Artifact Information",
        detail: `Adversaries search public repositories, GitHub, arXiv, and documentation to identify model architectures, training frameworks, and hyperparameters.`,
      },
      {
        id: "T0001",
        name: "Discover ML Model Ontology",
        detail: `Determine the semantic structure of the target model — what categories/labels it uses — to design effective adversarial examples or targeted queries.`,
      },
      {
        id: "T0002",
        name: "Discover ML Model Family",
        detail: `Identify whether the target model is a CNN, transformer, ensemble, etc. to select appropriate attack algorithms. Informs ML Attack Staging (TA0012).`,
      },
      {
        id: "T0003",
        name: "Active Scanning",
        detail: `Actively probe inference APIs to map model behavior, measure confidence outputs, and infer architecture. Required for black-box adversarial attacks.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0001",
  },
  "atlas-ta0003": {
    title: `AML.TA0003 — Initial Access`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0003`,
    color: "#f87171",
    summary: `Adversaries gain initial access to AI/ML systems. Includes supply chain compromise of pre-trained models and prompt injection. One of the most practically realized ATLAS tactics in documented incidents.`,
    categories: [
      {
        id: "T0010",
        name: "ML Supply Chain Compromise",
        detail: `Compromise pre-trained models, ML libraries, or training datasets before they reach the target. Mirrors ATLAS case studies including ShadowRay supply chain attack.`,
      },
      {
        id: "T0051",
        name: "Prompt Injection",
        detail: `Craft malicious inputs that override LLM instructions. Direct injection targets the model directly; indirect injection (T0051.002) manipulates context via RAG, tool outputs, or documents. Maps to OWASP LLM01.`,
      },
      {
        id: "T0012",
        name: "Valid Accounts",
        detail: `Use stolen or legitimately obtained credentials to access ML infrastructure, model repositories, or inference APIs. Enables subsequent ML Model Access (TA0004).`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0003",
  },
  "atlas-ta0004": {
    title: `AML.TA0004 — ML Model Access ★ AI-Specific`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0004 (AI-Unique)`,
    color: "#f87171",
    summary: `An AI-specific tactic with no ATT&CK equivalent. Adversaries gain access to target ML models through inference APIs or direct artifact access. Model access level determines which subsequent attacks are possible.`,
    categories: [
      {
        id: "API Access",
        name: "Inference API Access",
        detail: `Black-box access via public or compromised inference APIs. Adversary can only observe inputs and outputs. Enables model extraction (T0040) and black-box adversarial attacks.`,
      },
      {
        id: "Artifact",
        name: "ML Artifact Collection",
        detail: `White-box access — adversary obtains actual model weights, architecture, and parameters. Enables far more powerful gradient-based adversarial attacks and backdoor insertion.`,
      },
      {
        id: "Physical",
        name: "Physical Environment Access",
        detail: `Access to the physical or virtual environment where the ML system is deployed. Can enable side-channel attacks on model inference timing or memory usage.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0004",
  },
  "atlas-ta0006": {
    title: `AML.TA0006 — Persistence`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0006`,
    color: "#f87171",
    summary: `Adversaries maintain access to AI systems across interruptions. Model backdoors and agent configuration modifications are primary persistence mechanisms. Maps to AICM CCC (Change Control) and LOG (Monitoring) domains.`,
    categories: [
      {
        id: "T0044",
        name: "Backdoor ML Model",
        detail: `Insert a hidden trigger into a model that activates specific behavior when a secret input pattern is present. Backdoored model performs normally on clean inputs, making detection difficult.`,
      },
      {
        id: "Agent Config",
        name: "Modify AI Agent Configuration",
        detail: `Oct 2025 addition. Alter AI agent system prompts, memory contents, or tool configurations to maintain persistent access or influence over agent behavior across sessions.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0006",
  },
  "atlas-ta0008": {
    title: `AML.TA0008 — Defense Evasion`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0008`,
    color: "#f87171",
    summary: `Adversaries evade ML-based security detectors or escape model safety constraints. Adversarial perturbation is the primary technique — crafting inputs that are indistinguishable to humans but cause model misclassification.`,
    categories: [
      {
        id: "T0043",
        name: "Craft Adversarial Examples",
        detail: `Apply perturbations to inputs to cause model misclassification while appearing normal. FGSM, PGD, C&W attacks for image models; token manipulation for text models. Cylance AV bypass is a documented case.`,
      },
      {
        id: "T0054",
        name: "LLM Jailbreak",
        detail: `Craft prompts that bypass safety filters and content policies of LLMs. Includes role-playing scenarios, hypothetical framings, and encoded instructions.`,
      },
      {
        id: "T0055",
        name: "Evade ML Model",
        detail: `Modify adversarial content specifically to avoid detection by ML-based classifiers — spam filters, malware detectors, fraud systems. Requires knowledge of the target model family.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0008",
  },
  "atlas-ta0009": {
    title: `AML.TA0009 — Credential Access`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0009`,
    color: "#f87171",
    summary: `Adversaries steal API keys, credentials, and secrets from AI agent configurations and model serving infrastructure. Maps to AICM IAM domain and NIST MEASURE 2.7 (security and resilience).`,
    categories: [
      {
        id: "Agent Creds",
        name: "Credentials from Agent Config",
        detail: `Extract API keys, database credentials, and service tokens embedded in AI agent system prompts, memory stores, or configuration files. Oct 2025 addition targeting agentic AI systems.`,
      },
      {
        id: "ML Secrets",
        name: "ML Infrastructure Secrets",
        detail: `Target environment variables, CI/CD secrets, and cloud credentials in MLOps pipelines. Access to training infrastructure credentials can enable data poisoning attacks.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0009",
  },
  "atlas-ta0011": {
    title: `AML.TA0011 — Collection`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0011`,
    color: "#f87171",
    summary: `Adversaries collect data from AI systems including sensitive information retrieved through RAG databases and LLM context windows. Maps to AICM DSP and LOG domains and NIST MEASURE 2.10 (privacy).`,
    categories: [
      {
        id: "T0060",
        name: "RAG Database Retrieval",
        detail: `Craft queries that cause RAG-enabled LLMs to retrieve and expose sensitive documents from vector databases. The iProov deepfake case study demonstrates similar retrieval exploitation.`,
      },
      {
        id: "Context",
        name: "Context Window Extraction",
        detail: `Extract system prompts, previous conversation history, injected instructions, or other sensitive content from LLM context windows via prompt injection.`,
      },
      {
        id: "T0056",
        name: "Data from AI Services",
        detail: `Exfiltrate sensitive data processed by AI services including PII, proprietary information, or confidential documents submitted to inference APIs.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0011",
  },
  "atlas-ta0012": {
    title: `AML.TA0012 — ML Attack Staging ★ AI-Specific`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0012 (AI-Unique)`,
    color: "#f87171",
    summary: `An AI-specific tactic with no ATT&CK equivalent. Adversaries prepare attacks that target ML models — poisoning training data, inserting backdoors, and crafting adversarial payloads before launching the final attack.`,
    categories: [
      {
        id: "T0020",
        name: "Poison Training Data",
        detail: `Inject malicious examples into training datasets to corrupt model behavior. Clean-label poisoning makes training examples appear legitimate while causing targeted misclassification.`,
      },
      {
        id: "T0044",
        name: "Backdoor ML Model",
        detail: `Insert a hidden trigger into a model that activates specific behavior when a secret input pattern is present. Most dangerous when targeting pre-trained models distributed via public repositories.`,
      },
      {
        id: "T0042",
        name: "Verify Attack",
        detail: `Test adversarial examples against local substitute models or the target system to confirm effectiveness before deploying the full attack. Reduces detection risk from repeated probing.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0012",
  },
  "atlas-ta0013": {
    title: `AML.TA0013 — Exfiltration`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0013`,
    color: "#f87171",
    summary: `Adversaries exfiltrate sensitive data through AI systems using inference APIs or AI agent tool invocations as covert channels. Maps to AICM DSP, LOG, and IAM domains.`,
    categories: [
      {
        id: "T0057",
        name: "Exfil via Inference API",
        detail: `Use ML inference API responses as a covert channel to exfiltrate data. Encode sensitive information in model query patterns or decode sensitive information from model outputs.`,
      },
      {
        id: "T0061",
        name: "Exfil via AI Agent Tools",
        detail: `Oct 2025 addition. Use AI agent tool calls (file system, web requests, APIs) as exfiltration channels. EchoLeak (CVE-2025-32711) demonstrated zero-click exfil through Microsoft Copilot.`,
      },
      {
        id: "T0040",
        name: "ML Model Theft",
        detail: `Reconstruct a functional copy of a proprietary model through systematic inference API queries. Enables subsequent attacks without direct model access.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0013",
  },
  "atlas-ta0014": {
    title: `AML.TA0014 — Impact`,
    framework: "MITRE ATLAS",
    ref: `MITRE ATLAS v5.x · Tactic AML.TA0014`,
    color: "#f87171",
    summary: `Adversaries manipulate, interrupt, or destroy AI systems or data. Includes denial-of-ML-service attacks, causing models to produce incorrect outputs, and spamming ML systems. Maps to NIST MEASURE 2.6 (safety) and AICM BCR.`,
    categories: [
      {
        id: "T0029",
        name: "Denial of ML Service",
        detail: `Flood inference APIs with computationally expensive requests to exhaust resources and deny service to legitimate users. Sponge examples exploit worst-case model execution paths.`,
      },
      {
        id: "T0031",
        name: "Evade ML Model",
        detail: `Cause an ML model to produce incorrect outputs in targeted or untargeted ways. Used to bypass ML-based access control, fraud detection, or content moderation systems.`,
      },
      {
        id: "T0046",
        name: "Spamming ML System",
        detail: `Submit large volumes of queries to degrade ML system performance, exhaust rate limits, or pollute online learning models with adversarial feedback.`,
      },
    ],
    docLink: "https://atlas.mitre.org/tactics/AML.TA0014",
  },
  "owasp-llm01": {
    title: `LLM01:2025 — Prompt Injection`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM01`,
    color: "#f59e0b",
    summary: `Prompt injection occurs when user-supplied input alters LLM behavior in unintended ways. Direct injection targets the model directly; indirect injection manipulates context via documents, emails, RAG sources, or tool outputs.`,
    categories: [
      {
        id: "Direct",
        name: "Direct Prompt Injection",
        detail: `Adversary crafts a prompt that overrides system instructions. Includes jailbreaks, role-play exploits, and instruction injection. Maps to ATLAS T0051.001. AICM control: AIS-05 (input sanitization, instruction hierarchy enforcement).`,
      },
      {
        id: "Indirect",
        name: "Indirect Prompt Injection",
        detail: `Malicious instructions embedded in documents, web pages, emails, or RAG-retrieved content that are processed by the LLM. The EchoLeak (CVE-2025-32711) and CurXecute (CVE-2025-54135) vulnerabilities are documented examples. Maps to ATLAS T0051.002.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Input validation and sanitization at the application boundary. Enforce instruction hierarchy (system prompt authority over user input). Output filtering and content classification. Privilege separation for agent tool access. Map to NIST MAP 5.1 and MANAGE 2.3.`,
      },
    ],
    docLink: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
  },
  "owasp-llm02": {
    title: `LLM02:2025 — Sensitive Information Disclosure`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM02`,
    color: "#f59e0b",
    summary: `LLM outputs expose PII, credentials, proprietary data, or training data memorized during training. Includes both inadvertent disclosure and adversarially induced extraction.`,
    categories: [
      {
        id: "Training",
        name: "Training Data Memorization",
        detail: `Models can memorize and reproduce verbatim text from training data including PII, API keys, internal documents, and copyrighted content. Exposure risk increases with fine-tuning on sensitive corpora.`,
      },
      {
        id: "RAG",
        name: "RAG Data Leakage",
        detail: `Retrieval-augmented generation systems may expose documents that should be access-controlled. Maps to ATLAS T0060 (RAG Database Retrieval). AICM DSP-07 covers inference data controls.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Apply differential privacy during training. Implement output filtering for PII patterns. Enforce access controls on RAG vector databases. Rate-limit inference API responses. Map to NIST MEASURE 2.10 and AICM DSP domain.`,
      },
    ],
    docLink:
      "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/",
  },
  "owasp-llm03": {
    title: `LLM03:2025 — Supply Chain`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM03`,
    color: "#f59e0b",
    summary: `LLM supply chains are susceptible to vulnerabilities in pre-trained models, datasets, third-party plugins, and ML libraries. Compromised supply chain components affect all downstream deployments.`,
    categories: [
      {
        id: "Models",
        name: "Pre-Trained Model Risks",
        detail: `Third-party foundation models may contain backdoors (ATLAS T0044), biases, or malicious weights. Use OWASP AIBOM Generator to create and verify AI Bills of Materials for all models consumed from Hugging Face or other registries.`,
      },
      {
        id: "AIBOM",
        name: "AIBOM as the Control",
        detail: `An AI Bill of Materials (AIBOM) documents model components, training data sources, framework versions, and licenses in CycloneDX/SPDX format. OWASP AIBOM Generator automates generation and completeness scoring. Direct implementation of NIST GOVERN 6 and AICM STA-01.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Generate AIBOMs for all third-party models using OWASP AIBOM Generator. Verify cryptographic hashes of model artifacts (AICM MDS-03). Audit model licenses and data provenance (AICM STA-04). Map to NIST GOVERN 6.1-6.2 and ISO/IEC 5338:2023.`,
      },
    ],
    docLink: "https://genai.owasp.org/llmrisk/llm032025-supply-chain/",
  },
  "owasp-llm04": {
    title: `LLM04:2025 — Data & Model Poisoning`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM04`,
    color: "#f59e0b",
    summary: `Training, fine-tuning, or embedding data is manipulated to introduce backdoors, bias, or vulnerabilities that persist through deployment. Maps directly to ATLAS ML Attack Staging (TA0012).`,
    categories: [
      {
        id: "Poison",
        name: "Training Data Poisoning",
        detail: `Attacker injects malicious examples into training datasets (T0020). Clean-label poisoning uses correctly-labelled examples that still manipulate decision boundaries. Particularly dangerous for fine-tuning with user-contributed data.`,
      },
      {
        id: "Backdoor",
        name: "Backdoor Insertion",
        detail: `Hidden triggers cause specific model behavior when activated by a secret input pattern (T0044). Model performs normally on clean inputs. Impossible to detect without complete training data auditing.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Data provenance tracking and integrity verification before training. Anomaly detection on training data distributions. Model behavior testing against known trigger patterns. AIBOM documents data lineage for auditability. Maps to NIST MEASURE 2.5 and AICM MDS-02.`,
      },
    ],
    docLink:
      "https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/",
  },
  "owasp-llm05": {
    title: `LLM05:2025 — Improper Output Handling`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM05`,
    color: "#f59e0b",
    summary: `Insufficient validation of LLM outputs before passing downstream leads to XSS, CSRF, SSRF, privilege escalation, or RCE. LLM output is untrusted input to every downstream system.`,
    categories: [
      {
        id: "XSS",
        name: "Cross-Site Scripting via Output",
        detail: `LLM-generated HTML or JavaScript injected directly into web pages without sanitization. An adversary crafts inputs that cause the LLM to produce malicious HTML. Maps to ATLAS TA0008 (Defense Evasion).`,
      },
      {
        id: "RCE",
        name: "Code Execution Risks",
        detail: `LLM outputs passed to eval(), exec(), or shell commands without sanitization. Particularly dangerous in coding assistants and agent tool-call pipelines. CurXecute (CVE-2025-54135) exploited this in the Cursor IDE.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Treat all LLM output as untrusted. Apply context-appropriate output encoding (HTML, SQL, shell). Never pass LLM output directly to eval() or exec(). Implement output classification and content filtering. Maps to NIST MEASURE 2.7 and AICM AIS-02.`,
      },
    ],
    docLink:
      "https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/",
  },
  "owasp-llm06": {
    title: `LLM06:2025 — Excessive Agency`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM06`,
    color: "#f59e0b",
    summary: `LLM agents granted excessive permissions, access, or autonomy beyond task requirements. Enables unintended actions, data exfiltration, or system modification through agent tool misuse.`,
    categories: [
      {
        id: "Permissions",
        name: "Over-Privileged Agents",
        detail: `Agents granted write access to file systems, databases, or APIs beyond what tasks require. Maps to ATLAS TA0006 (Persistence) and TA0013 (Exfiltration). AICM IAM-09 covers AI agent permission scoping.`,
      },
      {
        id: "Autonomy",
        name: "Excessive Autonomy",
        detail: `Agents permitted to take irreversible actions (delete, send, purchase) without human confirmation. Amplifies impact of prompt injection attacks — attacker controls agent with broad permissions.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Enforce least-privilege for all agent tool permissions. Require human-in-the-loop for sensitive or irreversible actions. Constrain agents to the minimum tools needed per task. Log all agent actions (AICM LOG). Maps to NIST GOVERN 1 and AICM IAM-09.`,
      },
    ],
    docLink: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/",
  },
  "owasp-llm07": {
    title: `LLM07:2025 — System Prompt Leakage`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM07`,
    color: "#f59e0b",
    summary: `System prompt contents — including business logic, credentials, jailbreak defenses, and confidential instructions — are extracted by adversaries via prompt injection or inference probing.`,
    categories: [
      {
        id: "Extraction",
        name: "Prompt Extraction Attacks",
        detail: `Adversary crafts inputs to cause the model to repeat, summarize, or reveal its system prompt. Maps to ATLAS TA0011 (Collection). Exposed system prompts reveal security measures, enabling targeted bypass.`,
      },
      {
        id: "Credential",
        name: "Credential Exposure",
        detail: `API keys, passwords, and service credentials embedded in system prompts are at risk. Any prompt injection vulnerability immediately exposes these credentials. AICM DSP-07 and IAM-09 apply.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Never embed credentials in system prompts — use secrets management. Design system prompts assuming they may be exposed (security through obscurity is not a control). Implement monitoring for prompt extraction patterns (AICM LOG-05). Maps to NIST MEASURE 2.10.`,
      },
    ],
    docLink: "https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/",
  },
  "owasp-llm08": {
    title: `LLM08:2025 — Vector & Embedding Weaknesses`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM08`,
    color: "#f59e0b",
    summary: `Vulnerabilities in vector databases and embedding models including poisoned embeddings, unauthorized cross-tenant retrieval, and adversarial similarity attacks targeting RAG pipelines.`,
    categories: [
      {
        id: "Poisoning",
        name: "Embedding Poisoning",
        detail: `Attacker injects adversarially crafted documents into vector databases that are retrieved in response to specific queries. Poisoned embeddings cause the RAG system to retrieve and incorporate malicious content. Maps to ATLAS TA0012.`,
      },
      {
        id: "CrossTenant",
        name: "Cross-Tenant Data Leakage",
        detail: `Vector databases serving multiple tenants may leak data between tenants if access controls are misconfigured. Similarity searches can retrieve documents from other tenants. AICM DSP and IAM domains apply.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Implement strict access controls on vector databases. Validate and sanitize documents before embedding. Audit retrieval results for unexpected content. Separate vector stores per tenant. Maps to NIST MEASURE 2.7 and AICM DSP, MDS domains.`,
      },
    ],
    docLink:
      "https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/",
  },
  "owasp-llm09": {
    title: `LLM09:2025 — Misinformation`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM09`,
    color: "#f59e0b",
    summary: `LLMs generate false, misleading, or fabricated content presented with high confidence. Hallucination, confident incorrect answers, and the potential for high-quality disinformation at scale.`,
    categories: [
      {
        id: "Hallucination",
        name: "Hallucination & Fabrication",
        detail: `Models generate plausible-sounding but factually incorrect information, including fake citations, invented statistics, and fabricated events. Risk increases when models operate outside training distribution.`,
      },
      {
        id: "Disinformation",
        name: "Disinformation at Scale",
        detail: `LLMs can generate high-quality, convincing disinformation at a scale and speed not previously possible. Deepfake-quality text content creation without prior expertise. No direct ATLAS mapping — this is an ethics and safety domain.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Implement retrieval augmentation with verified sources. Human review for high-stakes outputs. Uncertainty quantification and confidence scoring. User disclosure of AI-generated content. Maps to NIST MEASURE 2.9 (Model Explanation) and ISO/IEC TS 5723:2022 (Trustworthiness).`,
      },
    ],
    docLink: "https://genai.owasp.org/llmrisk/llm092025-misinformation/",
  },
  "owasp-llm10": {
    title: `LLM10:2025 — Unbounded Consumption`,
    framework: "OWASP LLM Top 10 · 2025",
    ref: `OWASP GenAI Security Project · LLM Top 10 2025 · LLM10`,
    color: "#f59e0b",
    summary: `Uncontrolled inference resource consumption leads to denial of service, cost exhaustion, or model degradation. Includes sponge examples that exploit worst-case execution paths and API flooding.`,
    categories: [
      {
        id: "Sponge",
        name: "Sponge Examples",
        detail: `Adversarially crafted inputs that maximize LLM computation time and resource consumption. Appear as normal requests but cause dramatically extended inference time. Maps directly to ATLAS TA0014 (Denial of ML Service / Spamming ML System).`,
      },
      {
        id: "Cost",
        name: "Cost Exhaustion",
        detail: `Automated abuse of LLM APIs to exhaust token budgets, API credits, or cloud spend. Particularly impactful for organizations using pay-per-token APIs at scale. AICM BCR-05 (DoS Resilience) applies.`,
      },
      {
        id: "Mitigation",
        name: "Key Mitigations",
        detail: `Implement rate limiting and request quotas per user/tenant. Set maximum token limits per request. Monitor inference costs and alert on anomalies. Implement circuit breakers for expensive queries. Maps to NIST MEASURE 2.6 and AICM BCR-05, LOG-05.`,
      },
    ],
    docLink: "https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/",
  },
,
  // ─────────────────────────────────────────────────────────────────
  // EU AI ACT (Regulation 2024/1689)
  // ─────────────────────────────────────────────────────────────────
  "euaia-ch2": {
    title: `Prohibited AI Practices`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter II · Article 5`,
    color: "#e879f9",
    summary: `Article 5 bans AI systems that deploy subliminal manipulation, exploit vulnerabilities, conduct untargeted facial-image scraping, infer emotions in workplaces/schools, derive sensitive attributes from biometrics, assess criminal risk by profiling, and real-time remote biometric identification in public spaces (with narrow exceptions). Non-compliance carries the highest penalty tier (up to €35 million or 7% global turnover).`,
    categories: [
      {
        id: "Art.5(a-b)",
        name: "Subliminal / Manipulative AI",
        detail: `Prohibition on AI that deploys subliminal techniques beyond conscious awareness or exploits vulnerabilities of specific groups to materially distort behaviour causing harm. Covers deceptive nudging, dark patterns driven by AI, and targeted manipulation of vulnerable populations.`,
      },
      {
        id: "Art.5(c)",
        name: "Social Scoring by Public Authorities",
        detail: `Prohibition on AI systems used by public authorities that evaluate or classify natural persons based on social behaviour or inferred personal characteristics, leading to detrimental or unfavourable treatment.`,
      },
      {
        id: "Art.5(d-g)",
        name: "Real-Time Biometric ID & Emotion Inference",
        detail: `Prohibition on: real-time remote biometric identification in publicly accessible spaces (narrow law-enforcement exceptions apply); emotion recognition in workplaces and educational institutions; biometric categorisation inferring race, political opinions, or other sensitive attributes; untargeted facial-image scraping.`,
      },
      {
        id: "Art.5(h)",
        name: "Predictive Policing by Profiling",
        detail: `Prohibition on AI systems that assess the risk of an individual committing a criminal offence based solely on profiling or on assessing personality traits, without substantive factual activity by the individual.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  },
  "euaia-ch3-req": {
    title: `High-Risk AI Requirements`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter III · Articles 8–15`,
    color: "#e879f9",
    summary: `High-risk AI systems (Annex III sectors: biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice) must satisfy six mandatory requirements before market placement: a risk management system, data governance, technical documentation, automatic logging, transparency with instructions for use, human oversight measures, and accuracy/robustness/cybersecurity.`,
    categories: [
      {
        id: "Art.9",
        name: "Risk Management System",
        detail: `Mandatory continuous risk management lifecycle: identify and analyse known and reasonably foreseeable risks; estimate and evaluate risks under intended use and foreseeable misuse; adopt risk mitigation measures. Residual risks must be judged acceptable against societal benefits.`,
      },
      {
        id: "Art.10",
        name: "Data & Data Governance",
        detail: `Training, validation, and test datasets must satisfy quality criteria: relevant, sufficiently representative, free of errors and complete as possible; appropriate data governance and management practices; bias examination; personal data only where strictly necessary with appropriate safeguards.`,
      },
      {
        id: "Art.11–12",
        name: "Technical Documentation & Logging",
        detail: `Providers must prepare Annex IV technical documentation before market placement and keep it updated. Systems must enable automatic logging of events throughout lifetime, retained for at least 6 months, available to competent authorities on request.`,
      },
      {
        id: "Art.13–14",
        name: "Transparency & Human Oversight",
        detail: `Systems must be transparent so deployers can interpret output and use it appropriately; instructions for use must accompany the system. Human oversight measures must be built in by design: ability to understand, monitor, override, and shut down the system.`,
      },
      {
        id: "Art.15",
        name: "Accuracy, Robustness & Cybersecurity",
        detail: `High-risk AI systems must achieve appropriate accuracy levels throughout lifecycle, documented in technical documentation. Systems must be resilient to errors, faults, inconsistencies, and adversarial attacks (data poisoning, model evasion, adversarial examples) with cybersecurity measures proportionate to risk.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  },
  "euaia-ch3-obl": {
    title: `Provider & Deployer Obligations`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter III · Articles 16–27 & 43–49`,
    color: "#e879f9",
    summary: `Detailed obligations on providers (place on market), importers, distributors, and deployers of high-risk AI. Includes quality management systems, conformity assessment procedures (internal or notified body), CE marking, registration in the EU database, post-market monitoring, and fundamental rights impact assessments for public-sector deployers.`,
    categories: [
      {
        id: "Art.16–17",
        name: "Provider Obligations & Quality Management System",
        detail: `Providers must ensure conformity, affix CE marking, and implement a quality management system (policies, procedures, design controls, data management, risk management, post-market monitoring, incident reporting, and corrective actions) documented and kept updated.`,
      },
      {
        id: "Art.19–21",
        name: "Logging, Corrective Actions & Duty to Inform",
        detail: `Providers must retain automatically generated logs. When non-conformity or serious incidents are identified, providers must take corrective actions, withdraw or recall the system, and inform distributors, deployers, importers, and market surveillance authorities.`,
      },
      {
        id: "Art.25–26",
        name: "Value Chain Responsibilities & Deployer Obligations",
        detail: `Deployers who put their name/trademark on a high-risk AI system assume full provider obligations. Deployers must: assign human oversight; monitor operation; document incidents; conduct fundamental rights impact assessment (Art.27) before deploying in certain public-sector contexts.`,
      },
      {
        id: "Art.43–49",
        name: "Conformity Assessment & CE Marking",
        detail: `Before market placement: undergo conformity assessment procedure (internal control for most Annex III systems; third-party notified body for Annex I biometric/critical systems). Issue EU Declaration of Conformity, affix CE marking, register in the EU database.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  },
  "euaia-ch4": {
    title: `Transparency Obligations`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter IV · Article 50`,
    color: "#e879f9",
    summary: `Article 50 mandates disclosure for AI systems that interact with humans or generate synthetic content. Chatbot providers must disclose AI interaction upfront. Generative AI systems producing synthetic images, audio, video, or text must label outputs as AI-generated using machine-readable watermarking or provenance signals. Applies to providers and deployers.`,
    categories: [
      {
        id: "Art.50(a)",
        name: "AI Interaction Disclosure (Chatbots)",
        detail: `Providers and deployers of AI systems intended to interact directly with natural persons must inform users they are interacting with AI at the outset, unless it is obvious from context. Exceptions: lawfully authorised law enforcement.`,
      },
      {
        id: "Art.50(b-c)",
        name: "Emotion & Biometric System Disclosure",
        detail: `Deployers of emotion recognition systems or biometric categorisation systems must inform natural persons exposed to these systems. Exceptions apply for safety purposes, authorised law enforcement, and content moderation.`,
      },
      {
        id: "Art.50(d)",
        name: "Synthetic Content Labelling / AI Watermarking",
        detail: `Providers of GPAI systems that generate synthetic images, audio, video, or text must ensure outputs are machine-readable marked as AI-generated. Providers of GPAI with systemic risk must implement technical measures ensuring traceability of synthetic content.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  },
  "euaia-ch5": {
    title: `General-Purpose AI Models`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter V · Articles 51–56`,
    color: "#e879f9",
    summary: `All providers of GPAI models (foundation models) placed on the EU market must meet baseline obligations: technical documentation, downstream provider information, copyright compliance policy, and training data summary. GPAI models with systemic risk (≥10^25 FLOPs training compute or designated by Commission) carry additional obligations including adversarial testing (red-teaming), serious incident reporting to the AI Office, and cybersecurity measures.`,
    categories: [
      {
        id: "Art.53",
        name: "GPAI Baseline Obligations",
        detail: `All GPAI model providers must: maintain up-to-date technical documentation (Annex XI); supply information and documentation to downstream providers integrating the model into AI systems; publish a sufficiently detailed summary of training data used; implement a copyright compliance policy.`,
      },
      {
        id: "Art.55",
        name: "Systemic-Risk GPAI Obligations",
        detail: `GPAI models with systemic risk must additionally: perform model evaluations including adversarial testing (red-teaming) prior to and after market placement; track, document, and report serious incidents and corrective actions to the AI Office without undue delay; ensure adequate cybersecurity protection.`,
      },
      {
        id: "Art.51–52",
        name: "Systemic Risk Classification",
        detail: `A GPAI model has systemic risk if trained with a compute threshold exceeding 10^25 FLOPs or if designated by the Commission based on qualitative criteria (reach, capabilities, societal/economic impact). Providers may rebut the presumption.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  },
  "euaia-ch7": {
    title: `Governance Structure`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter VII · Articles 64–70`,
    color: "#e879f9",
    summary: `The EU governance architecture for AI: the AI Office (within European Commission) as the primary body for GPAI models; the European AI Board coordinating Member States; the Scientific Panel of independent AI experts advising on systemic risks; national competent authorities designated by each Member State. All operators must cooperate with supervisory authorities.`,
    categories: [
      {
        id: "Art.64",
        name: "AI Office",
        detail: `The AI Office is the primary EU-level supervisory body, responsible for: enforcing GPAI model obligations; managing codes of practice; issuing guidance and recommendations; coordinating with national authorities; monitoring AI developments and risks.`,
      },
      {
        id: "Art.65–68",
        name: "European AI Board & Scientific Panel",
        detail: `The European AI Board (one senior representative per Member State + Commission) facilitates consistent application and advises on implementation. The Advisory Forum includes industry, civil society, and academia. The Scientific Panel provides independent technical expertise on systemic risks of GPAI models.`,
      },
      {
        id: "Art.70",
        name: "National Competent Authorities",
        detail: `Member States must designate one or more national competent authorities and a single point of contact by 2 August 2025. Authorities must be independent, resourced for enforcement, and have powers to request documentation, conduct audits, and impose penalties.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  },
  "euaia-ch9": {
    title: `Post-Market Monitoring & Incidents`,
    framework: "EU AI Act",
    ref: `Reg. 2024/1689 · Chapter IX · Articles 72–74`,
    color: "#e879f9",
    summary: `Providers of high-risk AI systems must proactively monitor performance after market placement, collect and analyse data throughout the system's lifetime, report serious incidents to market surveillance authorities, and take corrective actions. Deployers have complementary incident reporting duties. Authorities have broad investigative and enforcement powers.`,
    categories: [
      {
        id: "Art.72",
        name: "Post-Market Monitoring Plan",
        detail: `Providers must implement a post-market monitoring system integrated into technical documentation. The plan must actively gather, document, and analyse data on system performance throughout lifetime, including feedback from deployers and affected persons, to identify issues and trigger corrective action.`,
      },
      {
        id: "Art.73",
        name: "Serious Incident Reporting",
        detail: `Providers (and deployers when they become aware) must report serious incidents to market surveillance authorities without undue delay. Timeframes: immediately for life-threatening incidents; within 15 days for other serious incidents. Deployers must inform providers and authorities of incidents.`,
      },
      {
        id: "Art.74",
        name: "Market Surveillance & Enforcement",
        detail: `National market surveillance authorities have full investigative powers: request and access all documentation and source code; conduct tests and evaluations; require corrective actions; order withdrawals, recalls, or prohibitions. Providers, importers, distributors, and deployers must fully cooperate.`,
      },
    ],
    docLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689",
  }
};

// ══════════════════════════════════════════════
// DATA LAYER
// ══════════════════════════════════════════════

const NIST_TO_CSA = {
  "nist-gov": ["GRC", "A&A", "HRS", "STA"],
  "nist-map": ["GRC", "TVM", "SEF", "MDS"],
  "nist-meas": ["TVM", "MDS", "DSP", "LOG", "AIS", "BCR"],
  "nist-mgmt": ["TVM", "SEF", "BCR", "STA", "CCC", "IAM", "LOG", "MDS"],
};

const CSA_CODE_MAP = {
  GRC: "csa-grc",
  MDS: "csa-mds",
  DSP: "csa-dsp",
  TVM: "csa-tvm",
  STA: "csa-sta",
  SEF: "csa-sef",
  AIS: "csa-ais",
  LOG: "csa-log",
  BCR: "csa-bcr",
  IAM: "csa-iam",
  CCC: "csa-ccc",
  HRS: null,
  "A&A": null,
  CEK: null,
};


// ══════════════════════════════════════════════════════════
// EU AI ACT CROSS-FRAMEWORK MAPPINGS
// ══════════════════════════════════════════════════════════

// EU AI Act → NIST AI RMF mapping
const EUAIA_TO_NIST = {
  "euaia-ch2":     ["nist-gov", "nist-map"],
  "euaia-ch3-req": ["nist-gov", "nist-map", "nist-meas", "nist-mgmt"],
  "euaia-ch3-obl": ["nist-gov", "nist-mgmt"],
  "euaia-ch4":     ["nist-gov", "nist-map"],
  "euaia-ch5":     ["nist-gov", "nist-map", "nist-meas"],
  "euaia-ch7":     ["nist-gov"],
  "euaia-ch9":     ["nist-meas", "nist-mgmt"],
};

// EU AI Act → CSA AICM mapping
const EUAIA_TO_CSA = {
  "euaia-ch2":     ["GRC", "AIS"],
  "euaia-ch3-req": ["GRC", "TVM", "MDS", "DSP", "AIS", "LOG"],
  "euaia-ch3-obl": ["GRC", "MDS", "CCC"],
  "euaia-ch4":     ["GRC", "AIS", "MDS"],
  "euaia-ch5":     ["GRC", "MDS", "TVM"],
  "euaia-ch7":     ["GRC", "STA"],
  "euaia-ch9":     ["LOG", "TVM", "BCR"],
};
const OWASP_TO_CSA = {
  "owasp-llm01": ["AIS", "TVM"],
  "owasp-llm02": ["DSP", "LOG"],
  "owasp-llm03": ["STA", "MDS", "CCC"],
  "owasp-llm04": ["MDS", "DSP", "TVM"],
  "owasp-llm05": ["AIS", "LOG"],
  "owasp-llm06": ["IAM", "LOG", "CCC"],
  "owasp-llm07": ["AIS", "LOG", "DSP"],
  "owasp-llm08": ["DSP", "MDS", "LOG"],
  "owasp-llm09": ["GRC", "LOG"],
  "owasp-llm10": ["BCR", "LOG", "TVM"],
};

const OWASP_TO_NIST = {
  "owasp-llm01": ["nist-map", "nist-meas"],
  "owasp-llm02": ["nist-meas"],
  "owasp-llm03": ["nist-gov"],
  "owasp-llm04": ["nist-map", "nist-meas", "nist-mgmt"],
  "owasp-llm05": ["nist-meas"],
  "owasp-llm06": ["nist-gov", "nist-meas"],
  "owasp-llm07": ["nist-meas"],
  "owasp-llm08": ["nist-meas", "nist-mgmt"],
  "owasp-llm09": ["nist-meas"],
  "owasp-llm10": ["nist-meas", "nist-mgmt"],
};

// Practitioner narratives — the "so what" layer
const NARRATIVES = {
  "nist-gov": `GOVERN is the spine of your AI risk program. Every other function — MAP, MEASURE, MANAGE — depends on the policies, accountability structures, and cultural norms you establish here first. If GOVERN is weak, controls downstream are decoration. In the CSA AICM, the GRC, A&A, and STA domains operationalise GOVERN. ISO/IEC 42001:2023 is the certification pathway. OWASP maps here through LLM03 (supply chain governance) and LLM06 (agent permission policies).`,
  "nist-map": `MAP answers the question your organization must answer before deploying anything: what is this system, who does it affect, and what could go wrong? Without MAP you are managing AI risks blind. It directly feeds MEASURE (what to test) and MANAGE (what to treat). ATLAS Reconnaissance (TA0001) and Initial Access (TA0003) represent what adversaries do when you haven't mapped your AI attack surface. OWASP LLM04 (data poisoning) and LLM01 (prompt injection) are the developer-facing view of the same risk landscape.`,
  "nist-meas": `MEASURE is where governance becomes engineering. The seven trustworthiness characteristics — valid, safe, secure, accountable, transparent, explainable, fair — each require specific metrics, test sets, and evaluation methodologies. MEASURE 2.6 (safety) and 2.7 (security/resilience) are directly countered by ATLAS tactics TA0008 (evasion) and TA0014 (impact). AICM TVM and MDS domains are the control implementation layer. OWASP provides the application-layer test cases.`,
  "nist-mgmt": `MANAGE is the response and recovery function — what you actually do when risks materialise. Risk treatment options are explicit: mitigate, transfer, avoid, or accept. MANAGE 3.2 (pre-trained model monitoring) is where AIBOM becomes operationally critical — you can't monitor what you haven't inventoried. ATLAS Persistence (TA0006) and Exfiltration (TA0013) represent the operational incidents this function must handle. OWASP LLM10 (unbounded consumption) and LLM06 (excessive agency) are common MANAGE-phase incidents.`,
  "csa-grc": `GRC is the AICM equivalent of NIST GOVERN — the policy and accountability superstructure. The key differentiator is GRC-10 (AI Impact Assessment), which is the practical control implementation of ISO/IEC 42001 Annex A. If you're pursuing AI governance maturity, GRC is where you start building artefacts. No ATLAS mapping here — ATLAS is a threat framework, not a governance one.`,
  "csa-mds": `Model Security is the AICM's most AI-native domain — no equivalent exists in traditional security frameworks. MDS-02 (adversarial robustness) and MDS-03 (model integrity) directly counter ATLAS TA0012 (ML Attack Staging). This is where theoretical ATLAS threats become concrete engineering controls. If your organization uses third-party pre-trained models, MDS-03 combined with an AIBOM from OWASP is the minimum viable supply chain control.`,
  "csa-dsp": `DSP extends ISO 27001 into AI-specific data handling that traditional ISMS frameworks never contemplated: training data lifecycle, inference privacy, RAG data access controls, and output filtering for PII. The ATLAS Collection tactic (TA0011) — particularly RAG Database Retrieval (T0060) — is the primary threat vector this domain controls. OWASP LLM02 (sensitive disclosure) and LLM07 (system prompt leakage) are the application developer's view of the same risks.`,
  "csa-tvm": `TVM is where the AICM makes ATLAS actionable. The threat intelligence in ATLAS is academic until it becomes a red-team exercise (TVM-03) or penetration test (TVM-06). MITRE Arsenal automates ATLAS technique emulation directly into CALDERA. A mature TVM program means you've run adversarial tests against your models before adversaries do. TVM-07 (threat intelligence) closes the loop — subscribe to the MITRE AI Incident Sharing initiative to stay current.`,
  "csa-sta": `STA is the supply chain transparency domain that most organizations underinvest in until they have an incident. STA-01 requires documenting every third-party AI component — this is where OWASP AIBOM Generator provides the tooling to make compliance tractable. ATLAS TA0003 (supply chain compromise) is the primary threat. OWASP LLM03 is the application risk framing. ISO/IEC 5338:2023 is the lifecycle standard. Without STA controls, you cannot answer the question: "what is actually running in our AI systems?"`,
  "csa-sef": `SEF is your AI incident response playbook. The critical distinction from traditional IR: AI incidents span technical (adversarial attack), safety (unintended harm), and compliance (regulatory breach) categories — each requires different response procedures. SEF maps to NIST MANAGE 4 (incident communication and recovery). ATLAS Impact (TA0014) represents the class of incidents SEF must handle. OWASP LLM10 (unbounded consumption) is one of the most commonly realized SEF incidents in production.`,
  "csa-ais": `AIS brings traditional OWASP AppSec discipline into the AI application layer. The critical addition is prompt injection defense (AIS-05) — a control class that didn't exist before LLMs. AIS-04 (secure AI SDLC) is where ATLAS TA0003 threats are caught early through threat modeling. OWASP LLM01, LLM05, and LLM07 are the developer-facing risk descriptions that AIS controls address. Without AIS, application-layer controls are the missing layer in an otherwise framework-complete program.`,
  "csa-log": `LOG is frequently the last domain implemented and the first one that matters when something goes wrong. AI-specific logging is different from traditional application logging — you need inference audit trails, anomaly detection on input patterns, and tamper-evident logs that can withstand forensic scrutiny. ATLAS TA0008 (defense evasion) specifically targets the ability to detect adversarial inputs — LOG-05 is the detection control. Without LOG, you cannot answer "were we attacked?" after the fact.`,
  "csa-bcr": `BCR is your insurance policy against AI system failure under adversarial or operational stress. The key AI-specific requirement is fail-safe design — systems must degrade gracefully rather than fail dangerously. ATLAS TA0014 (Impact / Denial of ML Service) is the primary threat. OWASP LLM10 (unbounded consumption) is how DoS manifests in practice. NIST MEASURE 2.6 requires demonstrating that residual safety risk is within tolerance — BCR controls are what makes that demonstration credible.`,
  "csa-iam": `IAM for AI systems is more complex than traditional IAM because you're managing permissions for both human users and AI agents. ATLAS TA0004 (ML Model Access) and TA0009 (Credential Access) are the primary threats. The emerging risk is agentic AI — LLM06 (Excessive Agency) from OWASP describes what happens when agent tool permissions aren't governed by IAM principles. IAM-09 (AI agent permissions) is the newest control in this domain, added in response to 2025 agentic AI incidents.`,
  "csa-ccc": `CCC in the AI context is primarily about model version control and deployment approval gates — controls that prevent ATLAS TA0006 (Persistence / Backdoor insertion) from surviving into production. CCC-04 (model version control) means that any modification to model weights creates an audit trail detectable against the AIBOM. CCC-07 (deployment approval gates) is your last line of defense before a backdoored model reaches production. OWASP LLM03 supply chain risks are caught here if CCC controls are mature.`,
  "iso-42001": `ISO/IEC 42001:2023 is the AI Management System standard — the ISO 27001 equivalent for AI governance. Certification is achievable and increasingly required for enterprise AI procurement. Annex A control objectives map directly to NIST GOVERN categories and CSA GRC and A&A domains. This is the standard that transforms a governance program from best-effort to auditable. No ATLAS mapping — this is the governance spine, not the security control layer.`,
  "iso-23894": `ISO/IEC 23894:2023 extends ISO 31000 (general risk management) into AI-specific risk contexts. It provides the risk management methodology that underpins both NIST MAP and NIST MANAGE. Annex B documents AI-specific risk sources — bias, adversarial attacks, distributional shift, emergent behavior — that form the taxonomy ATLAS operationalises as attack tactics. If you're implementing NIST AI RMF and ISO 23894 simultaneously, they are intentionally complementary.`,
  "iso-5338": `ISO/IEC 5338:2023 is the AI system lifecycle process standard — the engineering process foundation for MLOps. It addresses what happens between "we have a model" and "the model is in production and monitored" with the rigour of a process standard. STA and MDS in the AICM are the security overlay on top of 5338 processes. ATLAS supply chain threats (TA0003) exploit gaps in 5338 compliance — specifically weak provenance tracking and absent integrity verification.`,
  "iso-5723": `ISO/IEC TS 5723:2022 defines the vocabulary for AI trustworthiness — the seven characteristics that NIST MEASURE evaluates. This standard is the conceptual foundation that makes cross-framework communication possible: when NIST says "safety" and AICM says "BCR", they're both referencing characteristics defined here. ATLAS TA0008 (evasion) and TA0014 (impact) are threats to the "secure and resilient" and "safe" characteristics specifically.`,
  "iso-27001": `ISO/IEC 27001 is the foundational ISMS standard that most enterprise AI programs already have in place. The AICM DSP, IAM, LOG, and AIS domains are AI-specific extensions of 27001 controls. The critical insight: existing 27001 certification does not cover AI-specific risks — you need the AICM overlay to close the gap. ATLAS Credential Access (TA0009), Collection (TA0011), and Exfiltration (TA0013) are threats that ISO 27001 technically covers but its AI extensions address specifically.`,
  "atlas-ta0001": `Reconnaissance is where AI attacks begin, not where they end. Adversaries who know your model family, architecture, and training data can design targeted attacks with far higher success rates than blind probing. The defensive response is MAP 5.1 — characterizing your AI system's information exposure surface. TVM-07 (threat intelligence) tells you what adversaries already know about model families you're using. Make your model's attack surface harder to map than your competitor's.`,
  "atlas-ta0003": `Initial Access through supply chain compromise is the highest-impact AI attack vector with documented real-world incidents. ShadowRay compromised AI workloads via the Ray framework. The AIBOM Generator directly addresses this: if you have a complete, verified AIBOM for every model in your environment, supply chain compromise is detectable before deployment. OWASP LLM03 is the developer-facing risk framing. NIST GOVERN 6 is the policy requirement. AICM STA is the control domain.`,
  "atlas-ta0004": `ML Model Access is an AI-unique tactic — there's no ATT&CK equivalent. The distinction between black-box (inference API only) and white-box (model weights) access determines which attacks are possible. Black-box access enables extraction and adversarial examples; white-box enables backdoor validation and gradient-based attacks. IAM-09 and AIS API security controls govern who can reach inference endpoints. The access level adversaries achieve determines everything that follows.`,
  "atlas-ta0006": `Persistence in AI systems is fundamentally different from persistence in traditional IT. A backdoored model can persist across system reinstalls, container rebuilds, and code deployments — because the malicious payload lives in the weights, not the infrastructure. CCC-04 (version control with hash verification) and AIBOM hash fields are the primary detection controls. OWASP LLM06 (excessive agency) creates the conditions that make persistence attacks impactful.`,
  "atlas-ta0008": `Defense Evasion in ML systems means crafting inputs that appear normal to humans but cause model misclassification. The Cylance AV bypass case study demonstrates this is not theoretical — production security tools can be defeated. NIST MEASURE 2.6 (safety evaluation) and AICM TVM-03 (adversarial red-teaming) are the assessment controls. LOG-05 (anomaly detection on inference patterns) is the operational detection control. Arsenal automates adversarial example generation for red team exercises.`,
  "atlas-ta0009": `Credential Access in AI systems increasingly targets AI agent configuration files, which often contain API keys, database credentials, and service tokens embedded directly in system prompts. This is a consequence of LLM06 (excessive agency) — agents granted broad access become high-value credential repositories. IAM-09 (agent permissions) and DSP-07 (never embed credentials in prompts) are the primary preventive controls. OWASP LLM07 (system prompt leakage) is how these credentials are extracted.`,
  "atlas-ta0011": `Collection in AI systems primarily means extracting sensitive information through inference — asking models questions that cause them to reveal training data, system prompts, or RAG-retrieved documents. T0060 (RAG database retrieval) is the most practically significant technique in 2025, demonstrated by the Morris II worm. AICM DSP-04 (training data protection) and DSP-07 (inference data controls) are the primary controls. OWASP LLM02 and LLM07 cover the application-layer exposure.`,
  "atlas-ta0012": `ML Attack Staging is AI-unique — there's no ATT&CK equivalent. Adversaries prepare attacks against ML models before deploying them, particularly by poisoning training data (T0020) and inserting backdoors (T0044). The critical defensive insight: by the time you detect the attack impact, the staging has already occurred — possibly months ago during training. AIBOM data lineage tracking, AICM MDS-02 adversarial testing, and OWASP LLM04 mitigations are your prevention-side controls. You cannot respond your way out of a backdoor — you must prevent it.`,
  "atlas-ta0013": `Exfiltration via AI systems uses the inference API as a covert channel — the model's responses encode or directly contain sensitive data extracted from training, RAG databases, or system context. CVE-2025-32711 (EchoLeak) demonstrated zero-click exfiltration through Microsoft Copilot via indirect prompt injection combined with prompt reflection. LOG monitoring of inference response patterns is the primary detection control. OWASP LLM02 and LLM07 describe the application-layer attack surface.`,
  "atlas-ta0014": `Impact is the end state of an AI attack — the adversary achieves their objective. This spans denial of ML service (DoS via sponge examples), causing model misclassification (the Cylance case), and spamming ML systems to degrade online learning. BCR-05 (DoS resilience) and NIST MEASURE 2.6 (safety evaluation) are the primary controls. OWASP LLM10 (unbounded consumption) is how DoS manifests in LLM deployments. The defensive posture is: make impact expensive and recoverable.`,
  "owasp-llm01": `Prompt injection is the SQL injection of the LLM era — and like SQL injection, it's fundamentally a failure to separate instructions from data. Direct injection targets the model; indirect injection (via RAG, tool outputs, or documents) is more dangerous because the attack surface is invisible to the user. ATLAS T0051 is the threat taxonomy entry. AIS-05 (input sanitization) and NIST MAP 5.1 are the governance and control responses. Every LLM application that processes external content is vulnerable until proven otherwise.`,
  "owasp-llm02": `Sensitive information disclosure from LLMs has two sources: memorised training data (you can't fully predict what was memorised) and inference-time disclosure via RAG or context. The practical implication: treat all LLM outputs as potentially containing sensitive data, even when the input appears benign. ATLAS T0060 (RAG retrieval) is the active exploitation technique. NIST MEASURE 2.10 and AICM DSP are the control framework. Rate-limit inference APIs — extraction attacks require volume to succeed.`,
  "owasp-llm03": `LLM supply chain is the highest-risk category for organizations using third-party foundation models. You have zero visibility into what a pre-trained model memorised, what backdoors it might contain, or whether its training data was poisoned. The OWASP AIBOM Generator is the practical tool that makes supply chain risk visible — generate AIBOMs for every model, verify hashes, track provenance. This maps directly to NIST GOVERN 6, AICM STA, and ATLAS TA0003. No AIBOM means no supply chain assurance.`,
  "owasp-llm04": `Data and model poisoning is uniquely dangerous because it's invisible until triggered. A backdoored model passes all standard tests — it only behaves maliciously when it sees its trigger pattern. ATLAS TA0012 is the adversary's staging process. NIST MEASURE 2.5 (validity and reliability) requires testing specifically for this. AICM MDS-02 (adversarial robustness testing) is the control. The defensive question: can you prove your model behaves correctly on both clean and adversarially crafted inputs?`,
  "owasp-llm05": `Improper output handling is a classical web security failure applied to a new context — developers trust LLM output when they shouldn't. Every LLM output is attacker-controlled input to your downstream systems. CurXecute (CVE-2025-54135) exploited this in the Cursor IDE to achieve remote code execution via prompt injection through MCP tool configurations. ATLAS TA0008 (evasion) is the enabling technique. The fix is simple but requires cultural change: treat LLM output as untrusted, always.`,
  "owasp-llm06": `Excessive agency amplifies every other LLM risk. An agent with file system write access and internet connectivity can exfiltrate data, persist changes, and pivot to other systems — all triggered by a single prompt injection. This is the intersection of LLM01 (injection as entry) and LLM06 (agency as impact amplifier). ATLAS TA0006 (persistence) and TA0013 (exfiltration) are the adversary tactics. AICM IAM-09 (agent permissions) and NIST GOVERN 1 (policy) are the controls. Principle of least privilege applies to agents.`,
  "owasp-llm07": `System prompt leakage is simultaneously a confidentiality failure and a security control bypass — exposed system prompts reveal the defenses, enabling targeted attacks. The operational implication: design system prompts assuming adversaries will read them. Security through obscurity is not a control. ATLAS TA0011 (collection) is the attack mechanism. AICM AIS and DSP provide the controls. The practical mitigation: never rely on system prompt confidentiality as a security boundary.`,
  "owasp-llm08": `Vector and embedding weaknesses are the RAG pipeline's attack surface — a domain that barely existed two years ago and is now in production everywhere. Poisoned embeddings cause RAG systems to retrieve and incorporate adversarial content; cross-tenant leakage exposes documents across organisational boundaries. ATLAS TA0011 (collection) and TA0012 (attack staging via embedding poisoning) are the threat entries. AICM DSP and MDS are the control domains. Treat vector databases with the same rigour as production databases.`,
  "owasp-llm09": `Misinformation is the only LLM Top 10 entry with no ATLAS mapping — it's not an adversarial attack, it's an inherent model capability failure. Hallucination at scale creates liability, reputational risk, and in regulated contexts, legal exposure. NIST MEASURE 2.9 (model explanation and validation) and ISO/IEC TS 5723:2022 (trustworthiness) are the framework references. The mitigation architecture is retrieval augmentation over parametric knowledge plus human review for high-stakes outputs. You cannot test your way to zero hallucination.`,
  "owasp-llm10": `Unbounded consumption is the DoS vector native to LLMs — and it's directly monetisable as a cost attack against pay-per-token deployments. Sponge examples (ATLAS T0029) exploit worst-case inference paths. NIST MEASURE 2.6 requires demonstrating fail-safe behavior under resource pressure. AICM BCR-05 (DoS resilience) is the control. The practical floor: rate limiting, token limits, circuit breakers, and cost anomaly alerting. Without these, a motivated adversary can run up your API bill faster than your security team can respond.`,
,
  "euaia-ch2": `The EU AI Act's prohibited practices list is the hard boundary of lawful AI in Europe. Article 5 bans eight categories — from subliminal manipulation to real-time biometric surveillance. If a system you're assessing touches any of these, it's not a compliance gap — it's an outright ban. Start here.`,
  "euaia-ch3-req": `Chapter III requirements are the engineering spec for high-risk AI. Risk management (Art.9), data governance (Art.10), technical documentation (Art.11), logging (Art.12), transparency (Art.13), human oversight (Art.14), and robustness/cybersecurity (Art.15) must all be satisfied before market placement. Map each requirement to your SDLC.`,
  "euaia-ch3-obl": `The obligations chapter tells you who is responsible for what along the AI value chain. Providers own quality management and conformity. Deployers who rebrand take on provider duties. Fundamental rights impact assessments (Art.27) apply to many public-sector deployments. Know your role before you build your compliance program.`,
  "euaia-ch4": `Transparency is not optional. If your AI system talks to users, it must say it's AI. If your generative AI makes synthetic media, the output must be machine-readable labelled. Article 50 is already in force — watermarking infrastructure and disclosure UX need to be in your product roadmap now.`,
  "euaia-ch5": `GPAI obligations apply to every foundation model provider operating in the EU — not just the big names. Baseline: technical documentation + downstream provider info + copyright policy + training data summary. Systemic risk (10^25 FLOPs threshold): add red-teaming, incident reporting to the AI Office, and cybersecurity hardening.`,
  "euaia-ch7": `Governance is the enforcement scaffolding. The AI Office holds the pen on GPAI enforcement. National competent authorities come online August 2025. Codes of practice create presumption of conformity. Build a regulatory radar: track AI Office guidance, participate in codes of practice, designate your internal single point of contact.`,
  "euaia-ch9": `Post-market is where most compliance programs fall short. The EU AI Act demands active monitoring, not just reactive incident reporting. Build your monitoring plan into the technical documentation. Wire your incident reporting to market surveillance authority notification within 15 days of any serious incident. Deployers: your reporting duty is real.`
};

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let activeId = null;
let activeFw = null;
let currentMode = "explore";
let searchQuery = "";
let searchTimer = null;
let assessState = JSON.parse(localStorage.getItem("ai_assess_state") || "{}");
let assessFilter = "all";
let exportType = "gap-report";

const ALL_ITEMS = () => document.querySelectorAll(".fw-item");
const ALL_CARDS = () => document.querySelectorAll(".domain-card");

// ══════════════════════════════════════════════
// HELPER UTILITIES
// ══════════════════════════════════════════════
function splitAttr(el, attr) {
  const val = el.getAttribute(attr) || "";
  if (!val || val === "none") return [];
  return val
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isoLabelToId(label) {
  const m = {
    "ISO/IEC 42001:2023": "iso-42001",
    "ISO/IEC 23894:2023": "iso-23894",
    "ISO/IEC 5338:2023": "iso-5338",
    "ISO/IEC TS 5723:2022": "iso-5723",
    "ISO/IEC 27001": "iso-27001",
    "iso-42001": "iso-42001",
    "iso-23894": "iso-23894",
    "iso-5338": "iso-5338",
    "iso-5723": "iso-5723",
    "iso-27001": "iso-27001",
  };
  return m[label] || null;
}

function atlasTacticToId(t) {
  const m = {
    "AML.TA0001": "atlas-ta0001",
    "AML.TA0003": "atlas-ta0003",
    "AML.TA0004": "atlas-ta0004",
    "AML.TA0006": "atlas-ta0006",
    "AML.TA0008": "atlas-ta0008",
    "AML.TA0009": "atlas-ta0009",
    "AML.TA0011": "atlas-ta0011",
    "AML.TA0012": "atlas-ta0012",
    "AML.TA0013": "atlas-ta0013",
    "AML.TA0014": "atlas-ta0014",
    "atlas-ta0001": "atlas-ta0001",
    "atlas-ta0003": "atlas-ta0003",
    "atlas-ta0004": "atlas-ta0004",
    "atlas-ta0006": "atlas-ta0006",
    "atlas-ta0008": "atlas-ta0008",
    "atlas-ta0009": "atlas-ta0009",
    "atlas-ta0011": "atlas-ta0011",
    "atlas-ta0012": "atlas-ta0012",
    "atlas-ta0013": "atlas-ta0013",
    "atlas-ta0014": "atlas-ta0014",
  };
  return m[t] || null;
}

function itemsArray() {
  return Array.from(document.querySelectorAll(".fw-item"));
}
function cardsArray() {
  return Array.from(document.querySelectorAll(".domain-card"));
}

// ══════════════════════════════════════════════
// RELATED IDS ENGINE
// ══════════════════════════════════════════════
function getRelatedIds(item) {
  const fw = item.dataset.fw;
  const id = item.dataset.id;
  const rel = new Set([id]);

  function addCsa(codes) {
    codes.forEach((c) => {
      if (CSA_CODE_MAP[c]) rel.add(CSA_CODE_MAP[c]);
    });
  }
  function addIso(refs) {
    refs.forEach((r) => {
      const i = isoLabelToId(r);
      if (i) rel.add(i);
    });
  }
  function addAtlas(refs) {
    refs.forEach((r) => {
      const i = atlasTacticToId(r);
      if (i) rel.add(i);
    });
  }
  function addNist(refs) {
    refs.forEach((n) => rel.add(n));
  }
  function addDomains(d) {
    d.forEach((x) => rel.add("domain-" + x));
  }
  function addOwasp(ids) {
    ids.forEach((o) => rel.add(o));
  }

  if (fw === "nist") {
    addCsa(NIST_TO_CSA[id] || []);
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP reverse
    Object.entries(OWASP_TO_NIST).forEach(([k, v]) => {
      if (v.includes(id)) rel.add(k);
    });
  } else if (fw === "csa") {
    addNist(splitAttr(item, "data-nist"));
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP reverse
    const myCode = Object.entries(CSA_CODE_MAP).find(([k, v]) => v === id)?.[0];
    if (myCode)
      Object.entries(OWASP_TO_CSA).forEach(([k, v]) => {
        if (v.includes(myCode)) rel.add(k);
      });
  } else if (fw === "iso") {
    addNist(splitAttr(item, "data-nist"));
    addCsa(splitAttr(item, "data-csa"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP via shared ISO refs
    itemsArray()
      .filter((i) => i.dataset.fw === "owasp")
      .forEach((oi) => {
        if (splitAttr(oi, "data-iso").some((r) => isoLabelToId(r) === id))
          rel.add(oi.dataset.id);
      });
  } else if (fw === "atlas") {
    addNist(splitAttr(item, "data-nist"));
    addCsa(splitAttr(item, "data-csa"));
    addIso(splitAttr(item, "data-iso"));
    addDomains(splitAttr(item, "data-domains"));
    // → OWASP reverse
    itemsArray()
      .filter((i) => i.dataset.fw === "owasp")
      .forEach((oi) => {
        if (splitAttr(oi, "data-atlas").some((t) => atlasTacticToId(t) === id))
          rel.add(oi.dataset.id);
      });
  } else if (fw === "owasp") {
    addNist(OWASP_TO_NIST[id] || []);
    addCsa(OWASP_TO_CSA[id] || []);
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
  }

  return rel;
}

function getDomainRelatedIds(card) {
  const rel = new Set(["domain-" + card.dataset.domain]);
  splitAttr(card, "data-nist").forEach((n) => rel.add(n));
  (card.dataset.iso || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((i) => rel.add(i));
  (card.dataset.atlas || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((a) => rel.add(a));
  const csaAttr = card.dataset.csa || "";
  csaAttr
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((c) => {
      if (CSA_CODE_MAP[c]) rel.add(CSA_CODE_MAP[c]);
    });
  // → OWASP
  const domainName = card.dataset.domain;
  itemsArray()
    .filter((i) => i.dataset.fw === "owasp")
    .forEach((oi) => {
      if (splitAttr(oi, "data-domains").includes(domainName))
        rel.add(oi.dataset.id);
    });
  return rel;
}

// ══════════════════════════════════════════════
// HIGHLIGHT ENGINE
// ══════════════════════════════════════════════
function applyHighlight(relIds, color, label, narrative) {
  itemsArray().forEach((item) => {
    const iid = item.dataset.id;
    if (relIds.has(iid)) {
      item.classList.remove("dimmed", "search-no-match");
      item.classList.add(iid === activeId ? "active" : "related");
      item.style.boxShadow =
        iid === activeId
          ? `inset 4px 0 0 ${color}, 0 0 0 1px ${color}55, 0 2px 16px ${color}25`
          : `inset 3px 0 0 ${color}, 0 0 0 1px ${color}30`;
      item.style.background = iid === activeId ? "" : "";
    } else if (fw === "euaia") {
    addNist(EUAIA_TO_NIST[id] || []);
    addCsa(EUAIA_TO_CSA[id] || []);
    addIso(splitAttr(item, "data-iso"));
    addAtlas(splitAttr(item, "data-atlas"));
    addDomains(splitAttr(item, "data-domains"));
    // → reverse: NIST items that map to this EU AI Act article
    Object.entries(EUAIA_TO_NIST).forEach(([k, v]) => {
      if (v.includes(id)) rel.add(k);
    });
  } else {
      item.classList.add("dimmed");
      item.classList.remove("active", "related");
      item.style.boxShadow = "";
      item.style.background = "";
    }
  });

  cardsArray().forEach((card) => {
    const did = "domain-" + card.dataset.domain;
    if (relIds.has(did)) {
      card.classList.remove("dimmed", "search-no-match");
      card.classList.add("related");
      card.style.borderColor = color;
      card.style.boxShadow = `0 0 0 2px ${color}80, 0 6px 24px ${color}35`;
      card.style.background = "";
    } else {
      card.classList.add("dimmed");
      card.classList.remove("related");
      card.style.borderColor = "";
      card.style.boxShadow = "";
      card.style.background = "";
    }
  });

  // Update connector panel
  showConnPanel(color, label, narrative, buildConnTags(activeId));
  updateStatusBar(relIds, color, label);
}

function clearHighlight() {
  activeId = null;
  activeFw = null;
  itemsArray().forEach((item) => {
    item.classList.remove("active", "related", "dimmed", "search-no-match");
    item.style.boxShadow = "";
    item.style.background = "";
  });
  cardsArray().forEach((card) => {
    card.classList.remove("related", "dimmed", "search-no-match");
    card.style.borderColor = "";
    card.style.boxShadow = "";
    card.style.background = "";
  });
  document.getElementById("conn-panel").classList.remove("visible");
  updateStatusBar(null, null, null);
}

// ══════════════════════════════════════════════
// CONNECTOR PANEL
// ══════════════════════════════════════════════
function buildConnTags(id) {
  if (!id) return {};
  const item = document.querySelector(`[data-id="${id}"]`);
  if (!item) return {};
  const fw = item.dataset.fw;
  const nistNames = {
    "nist-gov": "GOVERN",
    "nist-map": "MAP",
    "nist-meas": "MEASURE",
    "nist-mgmt": "MANAGE",
  };

  let nist = [],
    csa = [],
    iso = [],
    atlas = [],
    owasp = [];

  if (fw === "nist") {
    csa = NIST_TO_CSA[id] || [];
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
    owasp = Object.entries(OWASP_TO_NIST)
      .filter(([k, v]) => v.includes(id))
      .map(([k]) => k.replace("owasp-llm", "LLM").replace("LLM0", "LLM0"));
  } else if (fw === "csa") {
    nist = splitAttr(item, "data-nist").map((n) => nistNames[n] || n);
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
    const myCode = Object.entries(CSA_CODE_MAP).find(([k, v]) => v === id)?.[0];
    if (myCode)
      owasp = Object.entries(OWASP_TO_CSA)
        .filter(([k, v]) => v.includes(myCode))
        .map(([k]) => k.replace("owasp-llm", "LLM"));
  } else if (fw === "iso") {
    nist = splitAttr(item, "data-nist").map((n) => nistNames[n] || n);
    csa = splitAttr(item, "data-csa").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
    owasp = itemsArray()
      .filter(
        (i) =>
          i.dataset.fw === "owasp" &&
          splitAttr(i, "data-iso").some((r) => isoLabelToId(r) === id),
      )
      .map((i) => i.dataset.id.replace("owasp-llm", "LLM"));
  } else if (fw === "atlas") {
    nist = splitAttr(item, "data-nist").map((n) => nistNames[n] || n);
    csa = splitAttr(item, "data-csa").filter((s) => s !== "none");
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    owasp = itemsArray()
      .filter(
        (i) =>
          i.dataset.fw === "owasp" &&
          splitAttr(i, "data-atlas").some((t) => atlasTacticToId(t) === id),
      )
      .map((i) => i.dataset.id.replace("owasp-llm", "LLM"));
  } else if (fw === "owasp") {
    nist = (OWASP_TO_NIST[id] || []).map((n) => nistNames[n] || n);
    csa = OWASP_TO_CSA[id] || [];
    iso = splitAttr(item, "data-iso").filter((s) => s !== "none");
    atlas = splitAttr(item, "data-atlas").filter((s) => s !== "none");
  }
  return { nist, csa, iso, atlas, owasp };
}

function showConnPanel(color, label, narrative, tags) {
  const panel = document.getElementById("conn-panel");
  const { nist = [], csa = [], iso = [], atlas = [], owasp = [] } = tags;

  document.getElementById("conn-title").innerHTML =
    `<span style="color:${color}">${label}</span>`;
  document.getElementById("conn-narrative").textContent = narrative || "";

  const makeTag = (cls, items) =>
    items.length
      ? items.map((t) => `<span class="conn-tag ${cls}">${t}</span>`).join("")
      : `<span style="font-size:9px;color:var(--muted)">—</span>`;

  document.getElementById("conn-body").innerHTML = `
    <div class="conn-section"><div class="conn-section-label">NIST AI RMF</div><div class="conn-tags">${makeTag("conn-tag-nist", nist)}</div></div>
    <div class="conn-section"><div class="conn-section-label">CSA AICM</div><div class="conn-tags">${makeTag("conn-tag-csa", csa)}</div></div>
    <div class="conn-section"><div class="conn-section-label">ISO Standards</div><div class="conn-tags">${makeTag("conn-tag-iso", iso)}</div></div>
    <div class="conn-section" style="border-right:none"><div class="conn-section-label">ATLAS / OWASP</div><div class="conn-tags">${makeTag("conn-tag-atlas", atlas)} ${makeTag("conn-tag-owasp", owasp)}</div></div>
  `;
  panel.classList.add("visible");
}

function updateStatusBar(relIds, color, label) {
  const bar = document.getElementById("status-bar");
  if (!bar) return;
  if (!relIds) {
    bar.innerHTML = `
      <div class="status-item"><div class="status-dot" style="background:var(--nist)"></div><span class="status-label">NIST</span><span class="status-val" id="sb-nist">4 functions</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--csa)"></div><span class="status-label">CSA</span><span class="status-val" id="sb-csa">11 domains</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--iso)"></div><span class="status-label">ISO</span><span class="status-val" id="sb-iso">5 standards</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--atlas)"></div><span class="status-label">ATLAS</span><span class="status-val" id="sb-atlas">10 tactics</span></div>
      <div class="status-item"><div class="status-dot" style="background:var(--owasp)"></div><span class="status-label">OWASP</span><span class="status-val" id="sb-owasp">10 risks</span></div>
      <div class="status-item" style="margin-left:auto;color:var(--muted);font-size:9px;">Click any item to explore connections</div>
    `;
    return;
  }
  const counts = { nist: 0, csa: 0, iso: 0, atlas: 0, owasp: 0 };
  relIds.forEach((id) => {
    if (id.startsWith("nist-")) counts.nist++;
    else if (id.startsWith("csa-")) counts.csa++;
    else if (id.startsWith("iso-")) counts.iso++;
    else if (id.startsWith("atlas-")) counts.atlas++;
    else if (id.startsWith("owasp-")) counts.owasp++;
  });
  bar.innerHTML = `
    <div class="status-item"><span style="color:${color};font-size:10px;font-weight:600;">▶ ${label}</span></div>
    <div class="status-item" style="margin-left:8px"><div class="status-dot" style="background:var(--nist)"></div><span class="status-val">${counts.nist} NIST</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--csa)"></div><span class="status-val">${counts.csa} CSA</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--iso)"></div><span class="status-val">${counts.iso} ISO</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--atlas)"></div><span class="status-val">${counts.atlas} ATLAS</span></div>
    <div class="status-item"><div class="status-dot" style="background:var(--owasp)"></div><span class="status-val">${counts.owasp} OWASP</span></div>
    <button class="nav-btn" style="margin-left:auto;font-size:9px;" onclick="clearHighlight()">✕ Clear</button>
  `;
}

// ══════════════════════════════════════════════
// SEARCH ENGINE
// ══════════════════════════════════════════════
function doSearch(query) {
  searchQuery = query.trim().toLowerCase();
  const all = itemsArray();
  const cards = cardsArray();

  if (!searchQuery) {
    all.forEach((i) => {
      i.classList.remove("search-match", "search-no-match");
    });
    cards.forEach((c) => {
      c.classList.remove("search-match", "search-no-match");
    });
    document.getElementById("search-count").textContent = "";
    if (activeId) {
      const activeItem = document.querySelector(`[data-id="${activeId}"]`);
      if (activeItem) {
        const rel = getRelatedIds(activeItem);
        applyHighlight(
          rel,
          activeItem.dataset.color,
          activeItem.dataset.label,
          NARRATIVES[activeId] || activeItem.dataset.desc,
        );
      }
    }
    return;
  }

  // Clear selection when searching
  clearHighlight();

  let matchCount = 0;
  all.forEach((item) => {
    const text = [
      item.dataset.label || "",
      item.dataset.desc || "",
      item.dataset.id || "",
      item.querySelector(".fw-item-name")?.textContent || "",
      item.querySelector(".fw-item-desc")?.textContent || "",
    ]
      .join(" ")
      .toLowerCase();

    const hit = text.includes(searchQuery);
    item.classList.toggle("search-match", hit);
    item.classList.toggle("search-no-match", !hit);
    if (hit) matchCount++;
  });

  cards.forEach((card) => {
    const text = [
      card.querySelector(".dc-name")?.textContent || "",
      card.querySelector(".dc-sub")?.textContent || "",
      card.dataset.domain || "",
    ]
      .join(" ")
      .toLowerCase();
    const hit = text.includes(searchQuery);
    card.classList.toggle("search-match", hit);
    card.classList.toggle("search-no-match", !hit);
  });

  document.getElementById("search-count").textContent = matchCount
    ? `${matchCount} match${matchCount > 1 ? "es" : ""}`
    : "no matches";
}

// ══════════════════════════════════════════════
// CLICK HANDLERS
// ══════════════════════════════════════════════
function handleItemClick(item, e) {
  e.stopPropagation();

  // In assess mode, cycle status
  if (currentMode === "assess") {
    const id = item.dataset.id;
    const cur = assessState[id] || "none";
    const next = cur === "none" ? "done" : cur === "done" ? "wip" : "none";
    assessState[id] = next;
    localStorage.setItem("ai_assess_state", JSON.stringify(assessState));
    renderAssessBadges();
    renderAssessMode();
    return;
  }

  const id = item.dataset.id;

  // Toggle off
  if (activeId === id) {
    clearHighlight();
    return;
  }

  // Click highlighted item → open docs
  if (
    activeId &&
    (item.classList.contains("related") || item.classList.contains("active")) &&
    DOC_LIBRARY[id]
  ) {
    openDoc(id);
    return;
  }

  // Fresh selection
  if (searchQuery) {
    const inp = document.getElementById("search-input");
    if (inp) {
      inp.value = "";
      doSearch("");
    }
  }

  activeId = id;
  activeFw = item.dataset.fw;
  const rel = getRelatedIds(item);
  applyHighlight(
    rel,
    item.dataset.color,
    item.dataset.label,
    NARRATIVES[id] || item.dataset.desc || "",
  );
}

function handleCardClick(card, e) {
  e.stopPropagation();
  const domain = card.dataset.domain;
  const domId = "domain-" + domain;
  if (activeId === domId) {
    clearHighlight();
    return;
  }
  activeId = domId;
  activeFw = "domain";
  const rel = getDomainRelatedIds(card);
  const name = card.querySelector(".dc-name")?.textContent || domain;
  const tags = buildCardConnTags(card);
  showConnPanel(
    card.dataset.color,
    name,
    `The ${name} domain intersects with the selected frameworks as shown. Click any highlighted item in the columns above to drill into its documentation.`,
    tags,
  );
  applyHighlight(rel, card.dataset.color, name, "");
}

function buildCardConnTags(card) {
  const nistNames = {
    "nist-gov": "GOVERN",
    "nist-map": "MAP",
    "nist-meas": "MEASURE",
    "nist-mgmt": "MANAGE",
  };
  const nist = (card.dataset.nist || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((n) => nistNames[n] || n);
  const csa = (card.dataset.csa || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const iso = (card.dataset.iso || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const atlas = (card.dataset.atlas || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((s) => s !== "none");
  const domain = card.dataset.domain;
  const owasp = itemsArray()
    .filter(
      (i) =>
        i.dataset.fw === "owasp" &&
        splitAttr(i, "data-domains").includes(domain),
    )
    .map((i) => i.dataset.id.replace("owasp-llm", "LLM"));
  return { nist, csa, iso, atlas, owasp };
}

// ══════════════════════════════════════════════
// MODE SWITCHING
// ══════════════════════════════════════════════
function switchMode(mode) {
  currentMode = mode;
  document
    .querySelectorAll(".nav-mode")
    .forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  document
    .querySelectorAll(".mode-panel")
    .forEach((p) => p.classList.toggle("active", p.id === `mode-${mode}`));
  if (mode === "assess") renderAssessMode();
  if (mode === "export") renderExportMode();
  if (mode === "audit") {
    /* audit mode init handled by goAuditStep */
  }
}

// ══════════════════════════════════════════════
// ASSESSMENT MODE
// ══════════════════════════════════════════════
function getAssessStats() {
  const allItems = itemsArray();
  const total = allItems.length;
  let done = 0,
    wip = 0;
  allItems.forEach((i) => {
    const s = assessState[i.dataset.id] || "none";
    if (s === "done") done++;
    if (s === "wip") wip++;
  });
  const fwStats = {};
  ["nist", "csa", "iso", "atlas", "owasp"].forEach((fw) => {
    const fwItems = allItems.filter((i) => i.dataset.fw === fw);
    const fwDone = fwItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "done",
    ).length;
    const fwWip = fwItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "wip",
    ).length;
    fwStats[fw] = { total: fwItems.length, done: fwDone, wip: fwWip };
  });
  return { total, done, wip, none: total - done - wip, fwStats };
}

const FW_META = {"nist":{"name":"NIST AI RMF","color":"#38bdf8"},"csa":{"name":"CSA AICM","color":"#a78bfa"},"iso":{"name":"ISO Standards","color":"#34d399"},"atlas":{"name":"MITRE ATLAS","color":"#f87171"},"owasp":{"name":"OWASP LLM 10","color":"#f59e0b"},"euaia":{"name":"EU AI Act","color":"#e879f9"}};

const PRIORITY_MAP = {
  "nist-gov": "P1",
  "nist-map": "P1",
  "nist-meas": "P2",
  "nist-mgmt": "P2",
  "csa-grc": "P1",
  "csa-mds": "P1",
  "csa-tvm": "P1",
  "csa-sta": "P1",
  "csa-dsp": "P2",
  "csa-ais": "P2",
  "csa-log": "P2",
  "csa-iam": "P2",
  "csa-bcr": "P3",
  "csa-sef": "P2",
  "csa-ccc": "P3",
  "iso-42001": "P1",
  "iso-23894": "P2",
  "iso-5338": "P2",
  "iso-5723": "P3",
  "iso-27001": "P1",
  "atlas-ta0001": "P2",
  "atlas-ta0003": "P1",
  "atlas-ta0004": "P1",
  "atlas-ta0006": "P2",
  "atlas-ta0008": "P1",
  "atlas-ta0009": "P2",
  "atlas-ta0011": "P2",
  "atlas-ta0012": "P1",
  "atlas-ta0013": "P2",
  "atlas-ta0014": "P2",
  "owasp-llm01": "P1",
  "owasp-llm02": "P1",
  "owasp-llm03": "P1",
  "owasp-llm04": "P1",
  "owasp-llm05": "P2",
  "owasp-llm06": "P1",
  "owasp-llm07": "P2",
  "owasp-llm08": "P2",
  "owasp-llm09": "P3",
  "owasp-llm10": "P2",
  "euaia-ch2": "P1",
  "euaia-ch3-req": "P1",
  "euaia-ch3-obl": "P1",
  "euaia-ch4": "P2",
  "euaia-ch5": "P1",
  "euaia-ch7": "P2",
  "euaia-ch9": "P2"
};

function renderAssessMode() {
  const stats = getAssessStats();
  const pct = Math.round((stats.done / stats.total) * 100);
  const wipPct = Math.round((stats.wip / stats.total) * 100);

  // Overall progress
  document.getElementById("assess-pct").textContent =
    `${pct}% implemented · ${stats.wip} in progress`;
  document.getElementById("assess-bar").style.width = pct + "%";

  // Per-framework score cards
  const scoresEl = document.getElementById("fw-scores");
  scoresEl.innerHTML = Object.entries(FW_META)
    .map(([fw, meta]) => {
      const s = stats.fwStats[fw];
      const p = Math.round((s.done / s.total) * 100);
      return `
      <div class="fw-score-card">
        <div class="fw-score-name" style="color:${meta.color}">${meta.name}</div>
        <div class="fw-score-nums" style="color:${meta.color}">${s.done}<span style="font-size:16px;color:var(--dim)">/${s.total}</span></div>
        <div class="fw-score-sub">${s.wip} in progress · ${s.total - s.done - s.wip} not started</div>
        <div class="fw-score-bar"><div class="fw-score-fill" style="width:${p}%;background:${meta.color}"></div></div>
      </div>`;
    })
    .join("");

  // Controls table
  renderAssessTable();

  // Gap analysis
  renderGapAnalysis();
}

function renderAssessTable() {
  const allItems = itemsArray();
  let filtered = allItems;
  if (assessFilter === "done")
    filtered = allItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "done",
    );
  if (assessFilter === "wip")
    filtered = allItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "wip",
    );
  if (assessFilter === "none")
    filtered = allItems.filter(
      (i) => (assessState[i.dataset.id] || "none") === "none",
    );

  const tbody = document.getElementById("assess-tbody");
  tbody.innerHTML = filtered
    .map((item) => {
      const id = item.dataset.id;
      const fw = item.dataset.fw;
      const st = assessState[id] || "none";
      const pri = PRIORITY_MAP[id] || "P3";
      const priCls =
        pri === "P1" ? "gap-p1" : pri === "P2" ? "gap-p2" : "gap-p3";
      const fwColor = FW_META[fw]?.color || "#888";
      const label = item.querySelector(".fw-item-name")?.textContent || id;
      const desc = item.querySelector(".fw-item-desc")?.textContent || "";

      return `<div class="assess-row" data-id="${id}">
      <div class="assess-cell">
        <span class="gap-priority ${priCls}">${pri}</span>
      </div>
      <div class="assess-cell">
        <div style="font-size:10px;font-weight:500;color:var(--text);margin-bottom:2px;">${label}</div>
        <div style="font-size:9px;color:var(--dim)">${desc}</div>
      </div>
      <div class="assess-cell">
        <span style="font-size:9px;padding:2px 6px;background:${fwColor}15;border:1px solid ${fwColor}30;color:${fwColor};border-radius:2px">${FW_META[fw]?.name || fw}</span>
      </div>
      <div class="assess-cell">
        <div class="status-toggles">
          <button class="status-btn ${st === "done" ? "done" : ""}" onclick="setStatus('${id}','done')">✓ Done</button>
          <button class="status-btn ${st === "wip" ? "wip" : ""}" onclick="setStatus('${id}','wip')">⚡ WIP</button>
          <button class="status-btn ${st === "none" ? "none" : ""}" onclick="setStatus('${id}','none')">✗</button>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

function setStatus(id, status) {
  assessState[id] = status;
  localStorage.setItem("ai_assess_state", JSON.stringify(assessState));
  renderAssessBadges();
  renderAssessMode();
}

function renderAssessBadges() {
  itemsArray().forEach((item) => {
    const id = item.dataset.id;
    const st = assessState[id] || "none";
    item.classList.toggle("status-done", st === "done");
    item.classList.toggle("status-wip", st === "wip");
    item.classList.toggle("status-none", st === "none");
    // Badge
    let badge = item.querySelector(".assess-badge");
    if (st === "done") {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "assess-badge done";
        item.appendChild(badge);
      }
      badge.className = "assess-badge done";
      badge.textContent = "✓";
    } else if (st === "wip") {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "assess-badge wip";
        item.appendChild(badge);
      }
      badge.className = "assess-badge wip";
      badge.textContent = "⚡";
    } else {
      if (badge) badge.remove();
    }
  });
}

function renderGapAnalysis() {
  const allItems = itemsArray();
  const gaps = allItems
    .filter((i) => (assessState[i.dataset.id] || "none") !== "done")
    .sort((a, b) => {
      const pa = PRIORITY_MAP[a.dataset.id] || "P3";
      const pb = PRIORITY_MAP[b.dataset.id] || "P3";
      return pa.localeCompare(pb);
    })
    .slice(0, 12);

  const gapEl = document.getElementById("gap-list");
  if (gaps.length === 0) {
    gapEl.innerHTML = `<div style="text-align:center;padding:24px;color:var(--dim);font-size:11px;">🎉 All controls marked as implemented. Export a compliance report from the Export tab.</div>`;
    return;
  }

  gapEl.innerHTML = gaps
    .map((item) => {
      const id = item.dataset.id;
      const pri = PRIORITY_MAP[id] || "P3";
      const st = assessState[id] || "none";
      const priCls =
        pri === "P1" ? "gap-p1" : pri === "P2" ? "gap-p2" : "gap-p3";
      const label = item.querySelector(".fw-item-name")?.textContent || id;
      const fw = item.dataset.fw;
      const narrative = NARRATIVES[id] || item.dataset.desc || "";
      const shortNarrative =
        narrative.length > 180 ? narrative.slice(0, 180) + "…" : narrative;
      const stLabel =
        st === "wip"
          ? ' <span style="color:#f59e0b;font-size:9px">⚡ In progress</span>'
          : "";
      return `<div class="gap-item">
      <span class="gap-priority ${priCls}">${pri}</span>
      <div class="gap-body">
        <div class="gap-title">${label} <span style="font-size:9px;color:var(--muted)">[${FW_META[fw]?.name || fw}]</span>${stLabel}</div>
        <div class="gap-why">${shortNarrative}</div>
      </div>
    </div>`;
    })
    .join("");
}

function setAssessFilter(f) {
  assessFilter = f;
  document
    .querySelectorAll(".assess-filter-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
  renderAssessTable();
}

// ══════════════════════════════════════════════
// EXPORT MODE
// ══════════════════════════════════════════════
function renderExportMode() {
  generateExportPreview(exportType);
}

function setExportType(type) {
  exportType = type;
  document
    .querySelectorAll(".export-opt-card")
    .forEach((c) => c.classList.toggle("selected", c.dataset.type === type));
  generateExportPreview(type);
}

function generateExportPreview(type) {
  const stats = getAssessStats();
  const pct = Math.round((stats.done / stats.total) * 100);
  const allItems = itemsArray();
  let md = "";
  const ts = new Date().toISOString().split("T")[0];

  if (type === "gap-report") {
    md = `# AI Governance Gap Report\n**Generated:** ${ts}  |  **Overall Coverage:** ${pct}% (${stats.done}/${stats.total} controls)\n\n`;
    md += `## Coverage Summary\n\n| Framework | Implemented | In Progress | Not Started | Coverage |\n|---|---|---|---|---|\n`;
    Object.entries(FW_META).forEach(([fw, meta]) => {
      const s = stats.fwStats[fw];
      const p = Math.round((s.done / s.total) * 100);
      md += `| ${meta.name} | ${s.done} | ${s.wip} | ${s.total - s.done - s.wip} | ${p}% |\n`;
    });
    const gaps = allItems
      .filter((i) => (assessState[i.dataset.id] || "none") !== "done")
      .sort((a, b) =>
        (PRIORITY_MAP[a.dataset.id] || "P3").localeCompare(
          PRIORITY_MAP[b.dataset.id] || "P3",
        ),
      )
      .slice(0, 20);
    md += `\n## Priority Gaps (Top ${gaps.length})\n\n`;
    gaps.forEach((item) => {
      const id = item.dataset.id,
        pri = PRIORITY_MAP[id] || "P3",
        st = assessState[id] || "none";
      const label = item.querySelector(".fw-item-name")?.textContent || id;
      const fw = FW_META[item.dataset.fw]?.name || item.dataset.fw;
      md += `### [${pri}] ${label} *(${fw})*\n`;
      md += `**Status:** ${st === "wip" ? "In Progress" : "Not Started"}  \n`;
      const narr = NARRATIVES[id] || item.dataset.desc || "";
      if (narr) md += `**Why it matters:** ${narr.slice(0, 200)}...\n\n`;
      else md += "\n";
    });
  } else if (type === "selection") {
    if (!activeId) {
      md = `# Selection Export\n\n*No item currently selected. Go to Explore mode and select an item first.*`;
    } else {
      const activeItem = document.querySelector(`[data-id="${activeId}"]`);
      const label = activeItem?.dataset.label || activeId;
      const color = activeItem?.dataset.color || "#888";
      md = `# Cross-Framework Mapping: ${label}\n**Generated:** ${ts}\n\n`;
      md += `## Narrative\n\n${NARRATIVES[activeId] || activeItem?.dataset.desc || ""}\n\n`;
      const tags = buildConnTags(activeId);
      if (tags.nist?.length)
        md += `## NIST AI RMF\n${tags.nist.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.csa?.length)
        md += `## CSA AICM\n${tags.csa.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.iso?.length)
        md += `## ISO Standards\n${tags.iso.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.atlas?.length)
        md += `## MITRE ATLAS\n${tags.atlas.map((t) => `- ${t}`).join("\n")}\n\n`;
      if (tags.owasp?.length)
        md += `## OWASP LLM Top 10\n${tags.owasp.map((t) => `- ${t}:2025`).join("\n")}\n\n`;
    }
  } else if (type === "full-inventory") {
    md = `# AI Control Inventory\n**Generated:** ${ts}  |  **Coverage:** ${pct}%\n\n`;
    ["nist", "csa", "iso", "atlas", "owasp"].forEach((fw) => {
      md += `## ${FW_META[fw].name}\n\n| Control | Status | Priority |\n|---|---|---|\n`;
      allItems
        .filter((i) => i.dataset.fw === fw)
        .forEach((item) => {
          const id = item.dataset.id,
            st = assessState[id] || "none",
            pri = PRIORITY_MAP[id] || "P3";
          const label = item.querySelector(".fw-item-name")?.textContent || id;
          const stLabel =
            st === "done"
              ? "✅ Done"
              : st === "wip"
                ? "⚡ WIP"
                : "❌ Not Started";
          md += `| ${label} | ${stLabel} | ${pri} |\n`;
        });
      md += "\n";
    });
  }

  document.getElementById("export-preview-content").textContent = md;
}

function copyExport() {
  const content = document.getElementById("export-preview-content").textContent;
  navigator.clipboard.writeText(content).then(() => {
    const btn = document.getElementById("copy-btn");
    btn.textContent = "✓ Copied";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 2000);
  });
}

function downloadExport() {
  const content = document.getElementById("export-preview-content").textContent;
  const ts = new Date().toISOString().split("T")[0];
  const names = {
    "gap-report": "gap-report",
    selection: "selection-mapping",
    "full-inventory": "full-inventory",
  };
  const filename = `ai-governance-${names[exportType] || "export"}-${ts}.md`;
  const blob = new Blob([content], { type: "text/markdown" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

// ══════════════════════════════════════════════
// DOC MODAL
// ══════════════════════════════════════════════
function openDoc(id) {
  const data = DOC_LIBRARY[id];
  if (!data) return;
  document.getElementById("doc-eyebrow").textContent = data.framework;
  document.getElementById("doc-title").innerHTML =
    `<span style="color:${data.color}">${data.title}</span>`;
  document.getElementById("doc-ref").textContent = data.ref;
  document.getElementById("doc-summary").textContent = data.summary;
  document.getElementById("doc-cats").innerHTML = data.categories
    .map(
      (c) => `
    <div class="doc-cat">
      <div class="doc-cat-id" style="color:${data.color}">${c.id}</div>
      <div class="doc-cat-name">${c.name}</div>
      <div class="doc-cat-detail">${c.detail}</div>
    </div>`,
    )
    .join("");
  const link = document.getElementById("doc-link");
  link.href = data.docLink;
  link.style.color = data.color;
  document.getElementById("doc-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDoc() {
  document.getElementById("doc-modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ══════════════════════════════════════════════
// THEME TOGGLE
// ══════════════════════════════════════════════
const html = document.documentElement;
if (localStorage.getItem("theme") === "light") html.classList.add("light");
document.getElementById("theme-toggle").addEventListener("click", () => {
  html.classList.toggle("light");
  localStorage.setItem(
    "theme",
    html.classList.contains("light") ? "light" : "dark",
  );
});

// ══════════════════════════════════════════════
// WIRE UP EVENTS ON DOM READY
// ══════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  // Item clicks
  document.querySelectorAll(".fw-item").forEach((item) => {
    item.addEventListener("click", (e) => handleItemClick(item, e));
    item.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      if (DOC_LIBRARY[item.dataset.id]) openDoc(item.dataset.id);
    });
  });

  // Domain card clicks
  document.querySelectorAll(".domain-card").forEach((card) => {
    card.addEventListener("click", (e) => handleCardClick(card, e));
  });

  // Mode buttons
  document.querySelectorAll(".nav-mode").forEach((btn) => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
  });

  // Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => doSearch(e.target.value), 180);
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        doSearch("");
        searchInput.blur();
      }
    });
  }

  // Connector panel clear
  document
    .getElementById("conn-clear")
    ?.addEventListener("click", clearHighlight);

  // Doc modal close
  document.getElementById("doc-close")?.addEventListener("click", closeDoc);
  document.getElementById("doc-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "doc-modal") closeDoc();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (document.getElementById("doc-modal")?.classList.contains("open"))
        closeDoc();
      else clearHighlight();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      document.getElementById("search-input")?.focus();
    }
  });

  // Assess filter buttons
  document.querySelectorAll(".assess-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setAssessFilter(btn.dataset.filter));
  });

  // Export option cards
  document.querySelectorAll(".export-opt-card").forEach((card) => {
    card.addEventListener("click", () => setExportType(card.dataset.type));
  });

  // Export action buttons
  document.getElementById("copy-btn")?.addEventListener("click", copyExport);
  document
    .getElementById("download-btn")
    ?.addEventListener("click", downloadExport);

  // Reset assessment
  document.getElementById("reset-assess")?.addEventListener("click", () => {
    if (confirm("Clear all assessment data? This cannot be undone.")) {
      assessState = {};
      localStorage.removeItem("ai_assess_state");
      renderAssessBadges();
      renderAssessMode();
    }
  });

  // Init chips and audit mode
  initChips();
  // Set default date
  const dateEl = document.getElementById("p-date");
  if (dateEl) dateEl.value = new Date().toISOString().split("T")[0];
  // Init chips (audit mode) and set default date
  initChips();
  const pDateEl = document.getElementById("p-date");
  if (pDateEl) pDateEl.value = new Date().toISOString().split("T")[0];
  // Init badges from saved state
  renderAssessBadges();
  updateStatusBar(null, null, null);

  // Initial export preview
  generateExportPreview(exportType);
});

// ══════════════════════════════════════════════
// AUDIT MODE — fully generic, no org hardcoded
// ══════════════════════════════════════════════

const RISK_SCENARIOS = [
  {
    id: "bias-automated-decision",
    title: "Algorithmic bias in automated decisions",
    category: "Fairness & Bias",
    description:
      "AI makes automated decisions affecting individuals (hiring, credit, access, pricing) with potential for discriminatory outcomes based on protected characteristics.",
    applicableTiers: [3, 4],
    applicableData: ["pii", "employment", "financial"],
    precedent:
      "EEOC v. iTutorGroup (2023): AI hiring tool automatically rejected female applicants over 55 and male applicants over 60. HUD v. Facebook (2019): ad targeting algorithm discriminated by race in housing ads.",
    nist: ["nist-meas"],
    csa: ["GRC", "TVM", "MDS"],
    owasp: ["owasp-llm09"],
    atlas: [],
    frameworks: [
      "NIST MEASURE 2.11",
      "CSA AICM GRC-10",
      "ISO/IEC 42001 Annex A",
      "EU AI Act Art. 10",
    ],
    controls: [
      {
        desc: "Pre-deployment bias testing across protected characteristic groups",
        type: "Preventive",
        ref: "NIST MEASURE 2.11 / AICM TVM-03",
      },
      {
        desc: "Ongoing fairness monitoring with statistical parity checks",
        type: "Detective",
        ref: "NIST MEASURE 3.1 / AICM LOG-05",
      },
      {
        desc: "Human review process for adverse AI decisions affecting individuals",
        type: "Corrective",
        ref: "NIST GOVERN 4 / EU AI Act Art. 14",
      },
      {
        desc: "AI impact assessment documenting potential discriminatory harm",
        type: "Preventive",
        ref: "ISO/IEC 42001 / AICM GRC-10",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 5,
  },
  {
    id: "third-party-opacity",
    title: "Third-party AI model with no visibility or control",
    category: "Accountability & Third-Party Risk",
    description:
      "Organization uses a third-party AI model with no access to model internals, no control over updates, and no contractual protections for AI-specific risks.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["internal", "pii", "phi", "financial", "employment"],
    precedent:
      "Mobley v. Workday (2023): bias claims against AI screening vendor — employer held partially liable despite not owning the model. Multiple GDPR enforcement actions citing inadequate vendor due diligence.",
    nist: ["nist-gov"],
    csa: ["STA", "GRC"],
    owasp: ["owasp-llm03"],
    atlas: ["atlas-ta0003"],
    frameworks: [
      "NIST GOVERN 6.1-6.2",
      "CSA AICM STA-01",
      "ISO/IEC 42001",
      "GDPR Art. 28",
    ],
    controls: [
      {
        desc: "AI-specific vendor due diligence questionnaire before procurement",
        type: "Preventive",
        ref: "NIST GOVERN 6.1 / AICM STA-03",
      },
      {
        desc: "Contractual AI risk provisions: audit rights, incident notification, model update disclosure",
        type: "Preventive",
        ref: "NIST GOVERN 6.2 / AICM STA-09",
      },
      {
        desc: "AIBOM generation and verification for all third-party model components",
        type: "Detective",
        ref: "AICM STA-01 / OWASP AIBOM",
      },
      {
        desc: "Vendor performance monitoring including fairness and accuracy metrics",
        type: "Detective",
        ref: "NIST MANAGE 3.1 / AICM LOG",
      },
    ],
    defaultLikelihood: 5,
    defaultImpact: 4,
  },
  {
    id: "no-explainability",
    title: "Inability to explain AI decisions to affected individuals",
    category: "Explainability & Transparency",
    description:
      "AI makes consequential decisions that cannot be explained to affected individuals, auditors, or regulators. No audit trail of decision rationale exists.",
    applicableTiers: [2, 3, 4],
    applicableData: ["pii", "employment", "financial", "phi"],
    precedent:
      "CFPB guidance (2022): adverse action notices must explain AI credit decisions. GDPR Article 22: individuals have right to explanation for automated decisions. Illinois AEIA: explainability required for AI in employment decisions.",
    nist: ["nist-meas"],
    csa: ["GRC", "LOG"],
    owasp: ["owasp-llm09"],
    atlas: [],
    frameworks: [
      "NIST MEASURE 2.9",
      "ISO/IEC TS 5723:2022",
      "GDPR Art. 22",
      "CFPB Adverse Action Guidance",
    ],
    controls: [
      {
        desc: "Implement explainability layer providing human-readable decision rationale",
        type: "Preventive",
        ref: "NIST MEASURE 2.9 / ISO TS 5723",
      },
      {
        desc: "Audit log capturing inputs, outputs, and model version for each decision",
        type: "Detective",
        ref: "AICM LOG-01 / GDPR Art. 22",
      },
      {
        desc: "Human review pathway for decisions that cannot be explained",
        type: "Corrective",
        ref: "NIST GOVERN 4 / EU AI Act Art. 14",
      },
      {
        desc: "Documentation review confirming explanation quality meets regulatory standards",
        type: "Detective",
        ref: "AICM A&A-02",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 4,
  },
  {
    id: "training-data-quality",
    title: "Biased or unrepresentative training data",
    category: "Data Quality",
    description:
      "Model trained on historical data encoding past biases, demographic imbalances, or outdated patterns. Model perpetuates and amplifies historical discrimination.",
    applicableTiers: [2, 3, 4],
    applicableData: ["pii", "employment", "financial", "phi"],
    precedent:
      "Amazon scrapped internal AI recruiting tool (2018): trained on 10 years of male-dominated resumes, systematically downgraded women. ProPublica COMPAS analysis (2016): recidivism AI showed racial disparity rooted in historical criminal justice data.",
    nist: ["nist-map", "nist-meas"],
    csa: ["MDS", "DSP"],
    owasp: ["owasp-llm04"],
    atlas: ["atlas-ta0012"],
    frameworks: [
      "NIST MAP 2.3",
      "NIST MEASURE 2.5",
      "CSA AICM MDS-02",
      "ISO/IEC 5338:2023",
    ],
    controls: [
      {
        desc: "Training data audit: demographic representation analysis and gap assessment",
        type: "Preventive",
        ref: "NIST MAP 2.3 / AICM MDS-02",
      },
      {
        desc: "Data lineage documentation for all training datasets including provenance and collection period",
        type: "Preventive",
        ref: "AICM STA-04 / ISO/IEC 5338",
      },
      {
        desc: "Periodic retraining assessment to detect concept drift and distributional shift",
        type: "Detective",
        ref: "NIST MANAGE 3.2 / AICM MDS",
      },
      {
        desc: "Model performance disaggregation by demographic group",
        type: "Detective",
        ref: "NIST MEASURE 2.11 / AICM TVM-03",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 4,
  },
  {
    id: "no-risk-assessment",
    title: "AI system deployed without formal risk assessment",
    category: "Accountability & Third-Party Risk",
    description:
      "AI system is operational in a consequential use case with no documented risk assessment, no bias testing, and no governance approval prior to deployment.",
    applicableTiers: [2, 3, 4],
    applicableData: ["internal", "pii", "phi", "financial", "employment"],
    precedent:
      "FTC AI guidance (2023): deployment without testing constitutes unfair or deceptive practice. ICO enforcement notices citing failure to conduct DPIAs for AI systems processing personal data at scale.",
    nist: ["nist-gov", "nist-map"],
    csa: ["GRC", "A&A"],
    owasp: [],
    atlas: [],
    frameworks: [
      "NIST GOVERN 1.3",
      "NIST MAP 1.1",
      "CSA AICM GRC-10",
      "EU AI Act Art. 9",
      "GDPR Art. 35",
    ],
    controls: [
      {
        desc: "Conduct retrospective AI risk assessment using NIST AI RMF MAP function",
        type: "Corrective",
        ref: "NIST MAP 1.1 / AICM GRC-10",
      },
      {
        desc: "Implement mandatory pre-deployment AI risk review gate for all future AI systems",
        type: "Preventive",
        ref: "NIST GOVERN 1.3 / AICM GRC-01",
      },
      {
        desc: "Complete Data Protection Impact Assessment (DPIA) where personal data is processed",
        type: "Corrective",
        ref: "GDPR Art. 35 / NIST MAP 5",
      },
      {
        desc: "Executive sign-off requirement for high-risk AI system deployment",
        type: "Preventive",
        ref: "NIST GOVERN 2.3",
      },
    ],
    defaultLikelihood: 5,
    defaultImpact: 4,
  },
  {
    id: "prompt-injection",
    title: "Prompt injection vulnerability in LLM-powered system",
    category: "Security",
    description:
      "System uses an LLM that can be manipulated by malicious inputs to override instructions, leak sensitive data, or take unauthorized actions.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["internal", "pii", "financial", "classified"],
    precedent:
      "EchoLeak (CVE-2025-32711): zero-click data exfiltration via Microsoft Copilot through indirect prompt injection. CurXecute (CVE-2025-54135): remote code execution via prompt injection in Cursor IDE.",
    nist: ["nist-meas"],
    csa: ["AIS", "TVM"],
    owasp: ["owasp-llm01"],
    atlas: ["atlas-ta0003", "atlas-ta0008"],
    frameworks: [
      "OWASP LLM01:2025",
      "CSA AICM AIS-05",
      "NIST MEASURE 2.7",
      "MITRE ATLAS T0051",
    ],
    controls: [
      {
        desc: "Input validation and sanitization at all LLM entry points",
        type: "Preventive",
        ref: "OWASP LLM01 / AICM AIS-02",
      },
      {
        desc: "Instruction hierarchy enforcement: system prompt authority over user input",
        type: "Preventive",
        ref: "OWASP LLM01 / AICM AIS-05",
      },
      {
        desc: "Output filtering and content classification before rendering to users",
        type: "Detective",
        ref: "OWASP LLM05 / AICM AIS",
      },
      {
        desc: "Red-team adversarial testing for prompt injection resistance",
        type: "Detective",
        ref: "AICM TVM-03 / MITRE Arsenal",
      },
    ],
    defaultLikelihood: 3,
    defaultImpact: 4,
  },
  {
    id: "sensitive-data-disclosure",
    title: "Sensitive data disclosure via AI outputs",
    category: "Privacy & Data Protection",
    description:
      "AI system outputs expose PII, credentials, proprietary information, or training data through responses, inference probing, or RAG retrieval.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["pii", "phi", "financial", "internal", "classified"],
    precedent:
      "Samsung engineers leaked proprietary source code via ChatGPT (2023). OpenAI confirmed training data memorization allowing PII extraction via repeated querying.",
    nist: ["nist-meas"],
    csa: ["DSP", "LOG"],
    owasp: ["owasp-llm02", "owasp-llm07"],
    atlas: ["atlas-ta0011", "atlas-ta0013"],
    frameworks: [
      "OWASP LLM02:2025",
      "NIST MEASURE 2.10",
      "CSA AICM DSP",
      "GDPR Art. 5",
      "HIPAA §164.312",
    ],
    controls: [
      {
        desc: "Data classification policy: prohibit regulated data input into AI without controls",
        type: "Preventive",
        ref: "AICM DSP-01 / GDPR Art. 5",
      },
      {
        desc: "Output filtering for PII patterns: names, account numbers, health identifiers",
        type: "Detective",
        ref: "OWASP LLM02 / AICM DSP-07",
      },
      {
        desc: "Document-level access controls on RAG knowledge bases",
        type: "Preventive",
        ref: "AICM IAM-06 / OWASP LLM08",
      },
      {
        desc: "DLP monitoring on AI system inputs and outputs",
        type: "Detective",
        ref: "AICM LOG-05 / NIST MEASURE 2.10",
      },
    ],
    defaultLikelihood: 3,
    defaultImpact: 4,
  },
  {
    id: "no-human-oversight",
    title: "Insufficient human oversight of consequential AI decisions",
    category: "Accountability & Third-Party Risk",
    description:
      "AI system makes high-stakes decisions affecting individuals with minimal or no human review. Humans only see a fraction of outputs, making systematic errors invisible.",
    applicableTiers: [3, 4],
    applicableData: ["pii", "employment", "financial", "phi"],
    precedent:
      "UK Post Office Horizon scandal: over-reliance on automated system outputs without meaningful human verification led to hundreds of wrongful prosecutions. NIST AI RMF GOVERN 3 emphasizes human-AI configuration controls.",
    nist: ["nist-gov", "nist-meas"],
    csa: ["GRC", "BCR"],
    owasp: ["owasp-llm06"],
    atlas: [],
    frameworks: [
      "NIST GOVERN 3.2",
      "NIST MEASURE 2.6",
      "EU AI Act Art. 14",
      "CSA AICM BCR-03",
    ],
    controls: [
      {
        desc: "Define and enforce minimum human review rate for consequential AI decisions",
        type: "Preventive",
        ref: "NIST GOVERN 3.2 / EU AI Act Art. 14",
      },
      {
        desc: "Appeal and override mechanism for individuals affected by AI decisions",
        type: "Corrective",
        ref: "NIST MANAGE 4.1 / GDPR Art. 22",
      },
      {
        desc: "Anomaly detection flagging unusual patterns in AI decision distributions",
        type: "Detective",
        ref: "AICM LOG-05 / NIST MEASURE 3.1",
      },
      {
        desc: "Periodic human audit of random sample of AI decisions for quality assurance",
        type: "Detective",
        ref: "AICM A&A-02 / NIST MEASURE 4.2",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 5,
  },
  {
    id: "supply-chain-compromise",
    title: "AI supply chain compromise or poisoned components",
    category: "Security",
    description:
      "Pre-trained models, ML libraries, or datasets sourced from third parties may contain backdoors, poisoned weights, or malicious code that persists into production.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["internal", "pii", "phi", "financial"],
    precedent:
      "ShadowRay attack (2024): exploited Ray AI framework, compromising AI workloads with estimated financial impact over $1B. Multiple malicious models discovered on Hugging Face containing embedded backdoors.",
    nist: ["nist-gov", "nist-mgmt"],
    csa: ["STA", "MDS", "CCC"],
    owasp: ["owasp-llm03"],
    atlas: ["atlas-ta0003", "atlas-ta0012"],
    frameworks: [
      "NIST GOVERN 6",
      "CSA AICM STA-01",
      "OWASP LLM03:2025",
      "MITRE ATLAS TA0003",
      "ISO/IEC 5338:2023",
    ],
    controls: [
      {
        desc: "Generate and verify AIBOM for all model components before deployment",
        type: "Preventive",
        ref: "AICM STA-01 / OWASP AIBOM Generator",
      },
      {
        desc: "Cryptographic hash verification of model artifacts before deployment",
        type: "Preventive",
        ref: "AICM MDS-03 / NIST GOVERN 6.2",
      },
      {
        desc: "Isolated environment testing of new model versions before production promotion",
        type: "Detective",
        ref: "AICM CCC-07 / ISO/IEC 5338",
      },
      {
        desc: "Continuous monitoring of model behavior for unexpected output patterns",
        type: "Detective",
        ref: "AICM LOG-05 / NIST MANAGE 3.2",
      },
    ],
    defaultLikelihood: 2,
    defaultImpact: 5,
  },
  {
    id: "excessive-agency",
    title: "AI agent with excessive permissions or autonomy",
    category: "Security",
    description:
      "AI agent has been granted permissions, tool access, or decision authority beyond what the task requires, amplifying the impact of any compromise or error.",
    applicableTiers: [3, 4],
    applicableData: ["internal", "pii", "financial", "classified"],
    precedent:
      "Air Canada chatbot autonomously offered unauthorized refund policy (2024) — company held liable. Multiple documented cases of AI agents taking unintended destructive actions when granted broad file system or API access.",
    nist: ["nist-gov", "nist-meas"],
    csa: ["IAM", "LOG", "CCC"],
    owasp: ["owasp-llm06"],
    atlas: ["atlas-ta0006", "atlas-ta0013"],
    frameworks: [
      "OWASP LLM06:2025",
      "NIST GOVERN 1",
      "CSA AICM IAM-09",
      "MITRE ATLAS TA0006",
    ],
    controls: [
      {
        desc: "Least-privilege: restrict agent tool permissions to minimum required for task",
        type: "Preventive",
        ref: "AICM IAM-09 / OWASP LLM06",
      },
      {
        desc: "Human-in-the-loop confirmation required for irreversible or high-impact actions",
        type: "Preventive",
        ref: "NIST GOVERN 3.2 / EU AI Act Art. 14",
      },
      {
        desc: "Comprehensive audit log of all agent actions, tool calls, and decisions",
        type: "Detective",
        ref: "AICM LOG-01 / NIST MEASURE 2.4",
      },
      {
        desc: "Circuit breaker: automatic agent suspension if anomalous action patterns detected",
        type: "Corrective",
        ref: "AICM BCR-05 / NIST MANAGE 2.4",
      },
    ],
    defaultLikelihood: 3,
    defaultImpact: 4,
  },
  {
    id: "regulatory-non-compliance",
    title: "Non-compliance with applicable AI regulations",
    category: "Accountability & Third-Party Risk",
    description:
      "AI system operates in a regulated context without compliance with applicable AI-specific or data protection regulations.",
    applicableTiers: [2, 3, 4],
    applicableData: ["pii", "phi", "employment", "financial"],
    precedent:
      "EU AI Act in force August 2025: high-risk AI systems require conformity assessment and human oversight. EEOC Technical Assistance (2023): AI tools in hiring subject to employment discrimination law. CFPB: AI in credit decisions requires adverse action explanation.",
    nist: ["nist-gov"],
    csa: ["GRC"],
    owasp: [],
    atlas: [],
    frameworks: [
      "NIST GOVERN 1.1",
      "CSA AICM GRC-03",
      "EU AI Act",
      "GDPR Art. 22",
      "EEOC Guidelines",
      "FCRA",
    ],
    controls: [
      {
        desc: "Regulatory mapping: identify all applicable regulations for this system and jurisdiction",
        type: "Preventive",
        ref: "NIST GOVERN 1.1 / AICM GRC-03",
      },
      {
        desc: "Legal review of AI system use case against employment, credit, and data protection law",
        type: "Preventive",
        ref: "AICM GRC-03",
      },
      {
        desc: "Compliance calendar tracking regulatory deadlines including EU AI Act milestones",
        type: "Detective",
        ref: "AICM GRC-01",
      },
      {
        desc: "External counsel or DPO review of AI deployment prior to production launch",
        type: "Preventive",
        ref: "NIST GOVERN 1.1",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 5,
  },
  {
    id: "model-drift",
    title: "Model performance degradation and concept drift",
    category: "Robustness & Reliability",
    description:
      "AI model performance degrades over time as real-world data distribution shifts away from training distribution, leading to increasingly poor decisions without detection.",
    applicableTiers: [2, 3, 4],
    applicableData: ["internal", "pii", "financial", "employment"],
    precedent:
      "Multiple fraud detection models degraded after COVID-19 changed consumer behavior. Credit scoring models retrained on pre-pandemic data showed significant performance drops in 2020-2021.",
    nist: ["nist-meas", "nist-mgmt"],
    csa: ["MDS", "LOG"],
    owasp: ["owasp-llm04"],
    atlas: [],
    frameworks: [
      "NIST MEASURE 2.5",
      "NIST MANAGE 3.2",
      "CSA AICM MDS",
      "ISO/IEC 5338:2023",
    ],
    controls: [
      {
        desc: "Establish performance baselines and alert thresholds at deployment",
        type: "Preventive",
        ref: "NIST MEASURE 2.3 / AICM MDS",
      },
      {
        desc: "Continuous monitoring of model output distributions for concept drift",
        type: "Detective",
        ref: "NIST MANAGE 3.2 / AICM LOG-05",
      },
      {
        desc: "Scheduled model retraining and validation cadence with documented review",
        type: "Corrective",
        ref: "NIST MANAGE 3.2 / ISO/IEC 5338",
      },
      {
        desc: "A/B testing framework to validate updated model versions before full rollout",
        type: "Preventive",
        ref: "AICM CCC-07",
      },
    ],
    defaultLikelihood: 3,
    defaultImpact: 3,
  },
  {
    id: "no-incident-response",
    title: "No AI-specific incident response plan",
    category: "Accountability & Third-Party Risk",
    description:
      "Organization has no documented process for detecting, responding to, and recovering from AI system failures, adversarial attacks, or harmful output incidents.",
    applicableTiers: [2, 3, 4],
    applicableData: ["pii", "phi", "financial", "employment"],
    precedent:
      "FTC investigation patterns: organizations failing to respond quickly to known AI harms face higher penalties. GDPR: AI-related data breaches require 72-hour notification — organizations without AI IR plans consistently miss this window.",
    nist: ["nist-mgmt"],
    csa: ["SEF", "BCR"],
    owasp: [],
    atlas: ["atlas-ta0014"],
    frameworks: [
      "NIST MANAGE 4.3",
      "CSA AICM SEF-01",
      "GDPR Art. 33",
      "ISO/IEC 42001",
    ],
    controls: [
      {
        desc: "Develop AI-specific incident response playbook covering adversarial attacks, bias incidents, data breaches, and model failures",
        type: "Preventive",
        ref: "AICM SEF-01 / NIST MANAGE 4.3",
      },
      {
        desc: "Define AI incident classification taxonomy and severity tiers",
        type: "Preventive",
        ref: "AICM SEF-05",
      },
      {
        desc: "Conduct tabletop exercise simulating AI incident scenarios at least annually",
        type: "Detective",
        ref: "AICM A&A-03",
      },
      {
        desc: "Establish model rollback procedure and tested recovery time objective",
        type: "Corrective",
        ref: "AICM BCR-01 / NIST MANAGE 4.1",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 3,
  },
  {
    id: "hallucination-reliance",
    title: "Operational reliance on AI outputs without verification",
    category: "Robustness & Reliability",
    description:
      "Employees or automated processes treat LLM outputs as factual without verification, leading to decisions based on hallucinated or fabricated information.",
    applicableTiers: [1, 2, 3],
    applicableData: ["internal", "financial", "pii"],
    precedent:
      "Multiple lawyers submitted AI-generated briefs with fabricated citations (2023-2024). Healthcare providers documented AI-generated clinical notes containing fabricated patient history.",
    nist: ["nist-meas"],
    csa: ["GRC", "LOG"],
    owasp: ["owasp-llm09"],
    atlas: [],
    frameworks: [
      "NIST MEASURE 2.9",
      "ISO/IEC TS 5723:2022",
      "CSA AICM GRC",
      "OWASP LLM09:2025",
    ],
    controls: [
      {
        desc: "User training: AI outputs are not authoritative without source verification",
        type: "Preventive",
        ref: "NIST GOVERN 2.2 / AICM HRS",
      },
      {
        desc: "AI tools must provide verifiable source references for factual claims",
        type: "Preventive",
        ref: "NIST MEASURE 2.9 / OWASP LLM09",
      },
      {
        desc: "Policy prohibiting AI-generated content in regulated filings without human expert review",
        type: "Preventive",
        ref: "NIST GOVERN 1 / AICM GRC-01",
      },
      {
        desc: "RAG over verified knowledge bases for factual queries where accuracy is critical",
        type: "Preventive",
        ref: "NIST MEASURE 2.9",
      },
    ],
    defaultLikelihood: 4,
    defaultImpact: 3,
  },
  {
    id: "no-aibom",
    title: "No AI Bill of Materials — invisible component inventory",
    category: "Accountability & Third-Party Risk",
    description:
      "Organization cannot enumerate the AI models, datasets, frameworks, and libraries in use. Unknown components cannot be monitored, patched, or verified for integrity.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["internal", "pii", "phi", "financial"],
    precedent:
      "Log4Shell (2021) analogy: organizations without software bills of materials could not determine exposure. ShadowRay and poisoned HuggingFace models require AIBOM to detect promptly.",
    nist: ["nist-gov"],
    csa: ["STA", "MDS", "CCC"],
    owasp: ["owasp-llm03"],
    atlas: ["atlas-ta0003"],
    frameworks: [
      "NIST GOVERN 6",
      "CSA AICM STA-01",
      "OWASP AIBOM Initiative",
      "ISO/IEC 5338:2023",
    ],
    controls: [
      {
        desc: "Generate AIBOMs for all AI systems using OWASP AIBOM Generator",
        type: "Preventive",
        ref: "AICM STA-01 / OWASP AIBOM",
      },
      {
        desc: "Maintain AI asset inventory: model name, version, vendor, data provenance, license",
        type: "Preventive",
        ref: "NIST GOVERN 1.6 / AICM STA",
      },
      {
        desc: "Subscribe to vulnerability feeds for AI frameworks and libraries in inventory",
        type: "Detective",
        ref: "AICM TVM-07 / NIST MANAGE 3.1",
      },
      {
        desc: "AIBOM completeness scoring review at least quarterly",
        type: "Detective",
        ref: "AICM A&A-03",
      },
    ],
    defaultLikelihood: 5,
    defaultImpact: 3,
  },
  {
    id: "data-poisoning",
    title: "Training data poisoning or model backdoor",
    category: "Security",
    description:
      "Training data has been manipulated to introduce backdoors or bias. Particularly relevant when training on user-contributed, scraped, or historical organizational data.",
    applicableTiers: [2, 3, 4],
    applicableData: ["internal", "pii", "financial"],
    precedent:
      "Researchers demonstrated clean-label poisoning attacks against commercial image classifiers with only 0.1% dataset manipulation. Microsoft Tay (2016): user-submitted data poisoned chatbot within 24 hours.",
    nist: ["nist-map", "nist-meas"],
    csa: ["MDS", "DSP", "TVM"],
    owasp: ["owasp-llm04"],
    atlas: ["atlas-ta0012"],
    frameworks: [
      "NIST MEASURE 2.5",
      "CSA AICM MDS-02",
      "OWASP LLM04:2025",
      "MITRE ATLAS TA0012 / T0020",
    ],
    controls: [
      {
        desc: "Training data integrity verification: hash-based provenance tracking for all datasets",
        type: "Preventive",
        ref: "AICM DSP-04 / NIST MAP 2.3",
      },
      {
        desc: "Anomaly detection on training data distributions before model training",
        type: "Preventive",
        ref: "AICM MDS-02 / NIST MEASURE 2.5",
      },
      {
        desc: "Adversarial testing for backdoor triggers post-training",
        type: "Detective",
        ref: "AICM TVM-03 / MITRE ATLAS",
      },
      {
        desc: "Sanitize and validate all user-contributed or scraped training data before use",
        type: "Preventive",
        ref: "AICM DSP / OWASP LLM04",
      },
    ],
    defaultLikelihood: 2,
    defaultImpact: 5,
  },
  {
    id: "vendor-lock-continuity",
    title: "Operational dependency on single AI vendor",
    category: "Robustness & Reliability",
    description:
      "Critical business processes depend on a single third-party AI vendor with no documented continuity plan for outages, model deprecation, or service termination.",
    applicableTiers: [2, 3, 4],
    applicableData: ["internal", "pii", "financial"],
    precedent:
      "Multiple organizations impacted by AI API outages disrupting production features. Vendors have deprecated model versions with minimal notice, forcing emergency migrations.",
    nist: ["nist-mgmt"],
    csa: ["BCR", "STA"],
    owasp: [],
    atlas: [],
    frameworks: [
      "NIST MANAGE 2.1",
      "CSA AICM BCR-01",
      "ISO/IEC 42001",
      "NIST GOVERN 6.2",
    ],
    controls: [
      {
        desc: "Business continuity plan documenting AI system recovery procedures and RTO/RPO",
        type: "Preventive",
        ref: "AICM BCR-01 / NIST MANAGE 4.1",
      },
      {
        desc: "Vendor contract provisions: minimum notice for model deprecation, SLA guarantees",
        type: "Preventive",
        ref: "NIST GOVERN 6.2 / AICM STA-09",
      },
      {
        desc: "Fallback procedure: manual or alternative process for critical AI-dependent workflows",
        type: "Corrective",
        ref: "AICM BCR-03 / NIST MANAGE 2.1",
      },
      {
        desc: "Evaluate and test at least one alternative vendor or open-source fallback annually",
        type: "Detective",
        ref: "AICM BCR / NIST GOVERN 6",
      },
    ],
    defaultLikelihood: 3,
    defaultImpact: 3,
  },
  {
    id: "unbounded-consumption",
    title: "Uncontrolled AI resource consumption",
    category: "Robustness & Reliability",
    description:
      "AI system has no rate limiting, token caps, or cost controls, exposing the organization to denial-of-service attacks, runaway costs, or service degradation.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["internal", "pii"],
    precedent:
      "Organizations have reported AI API costs exceeding $100K/month after automated processes entered retry loops. Sponge example attacks exhaust GPU resources in minutes without rate limiting.",
    nist: ["nist-meas", "nist-mgmt"],
    csa: ["BCR", "LOG"],
    owasp: ["owasp-llm10"],
    atlas: ["atlas-ta0014"],
    frameworks: [
      "OWASP LLM10:2025",
      "NIST MEASURE 2.6",
      "CSA AICM BCR-05",
      "MITRE ATLAS TA0014",
    ],
    controls: [
      {
        desc: "Per-user and per-application rate limiting on all AI API endpoints",
        type: "Preventive",
        ref: "AICM BCR-05 / OWASP LLM10",
      },
      {
        desc: "Maximum token limits per request and per session",
        type: "Preventive",
        ref: "OWASP LLM10",
      },
      {
        desc: "Cost anomaly alerting: notifications when AI spend exceeds defined thresholds",
        type: "Detective",
        ref: "AICM LOG-05 / NIST MEASURE 2.6",
      },
      {
        desc: "Circuit breaker: automatic suspension when usage anomalies detected",
        type: "Corrective",
        ref: "AICM BCR-05 / NIST MANAGE 2.4",
      },
    ],
    defaultLikelihood: 3,
    defaultImpact: 2,
  },
  {
    id: "employee-awareness",
    title: "Insufficient employee AI literacy and acceptable use governance",
    category: "Accountability & Third-Party Risk",
    description:
      "Employees use AI tools without adequate training on risks, limitations, and acceptable use policies, leading to data exposure, regulatory violations, and over-reliance.",
    applicableTiers: [1, 2, 3, 4],
    applicableData: ["internal", "pii", "phi", "financial"],
    precedent:
      "Numerous employees have uploaded customer PII, source code, financial data, and legal documents to public AI tools. JPMorgan, Samsung, and others implemented restrictions after data exposure incidents.",
    nist: ["nist-gov"],
    csa: ["GRC", "HRS"],
    owasp: [],
    atlas: [],
    frameworks: [
      "NIST GOVERN 2.2",
      "CSA AICM HRS-01",
      "ISO/IEC 42001 Clause 7.2",
    ],
    controls: [
      {
        desc: "Mandatory AI acceptable use policy: approved tools, prohibited data types, personal use guidelines",
        type: "Preventive",
        ref: "NIST GOVERN 1 / AICM GRC-01",
      },
      {
        desc: "AI literacy training for all staff covering risks, limitations, and responsible use",
        type: "Preventive",
        ref: "NIST GOVERN 2.2 / AICM HRS",
      },
      {
        desc: "DLP monitoring on AI tool uploads, domain blocking for unapproved tools",
        type: "Detective",
        ref: "AICM DSP-01 / LOG",
      },
      {
        desc: "Approved AI tool register with security review process for new tool requests",
        type: "Preventive",
        ref: "NIST GOVERN 1.6 / AICM GRC",
      },
    ],
    defaultLikelihood: 5,
    defaultImpact: 3,
  },
];

// ── AUDIT STATE ──
let auditProfile = {};
let auditSelectedScenarios = [];
let auditRisks = [];
let auditFindings = [];

// ── STEP NAVIGATION ──
function goAuditStep(step) {
  document.querySelectorAll(".audit-step-panel").forEach((p, i) => {
    p.style.display = i === step ? "block" : "none";
  });
  document.querySelectorAll(".audit-step").forEach((s, i) => {
    s.classList.toggle("active", i === step);
    s.classList.toggle("done", i < step);
  });
  if (step === 1) renderScenarios();
  if (step === 4) renderAuditReport();
}

// ── CHIP TOGGLE ──
function initChips() {
  document.querySelectorAll(".chip-group").forEach((group) => {
    group.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => chip.classList.toggle("selected"));
    });
  });
}

function selectTier(n) {
  document
    .querySelectorAll(".tier-card")
    .forEach((c) => c.classList.remove("selected"));
  const tc = document.querySelector(`.tier-card[data-tier="${n}"]`);
  if (tc) tc.classList.add("selected");
}

function getProfileValues() {
  const v = (id) => (document.getElementById(id) || {}).value || "";
  const chips = (gid) =>
    Array.from(document.querySelectorAll(`#${gid} .chip.selected`)).map(
      (c) => c.dataset.val,
    );
  const tierEl = document.querySelector(".tier-card.selected");
  auditProfile = {
    title: v("p-title"),
    date: v("p-date") || new Date().toISOString().split("T")[0],
    org: v("p-org"),
    assessor: v("p-assessor"),
    system: v("p-system"),
    desc: v("p-desc"),
    sector: v("p-sector"),
    maturity: v("p-maturity"),
    context: v("p-context"),
    roles: chips("chips-role"),
    tier: tierEl ? parseInt(tierEl.dataset.tier) : 1,
    data: chips("chips-data"),
    deploy: chips("chips-deploy"),
  };
  return auditProfile;
}

// ── SCENARIO RENDERING ──
function renderScenarios() {
  getProfileValues();
  const grid = document.getElementById("scenario-grid");
  if (!grid) return;

  // Auto-suggest based on profile — pre-select matching scenarios if none chosen yet
  if (auditSelectedScenarios.length === 0) {
    RISK_SCENARIOS.forEach((s) => {
      const tierMatch =
        !s.applicableTiers || s.applicableTiers.includes(auditProfile.tier);
      const dataMatch =
        !s.applicableData ||
        s.applicableData.some((d) => (auditProfile.data || []).includes(d));
      if (tierMatch && dataMatch) auditSelectedScenarios.push(s.id);
    });
  }

  grid.innerHTML = RISK_SCENARIOS.map((s) => {
    const tierOk =
      !s.applicableTiers || s.applicableTiers.includes(auditProfile.tier);
    const dataOk =
      !s.applicableData ||
      s.applicableData.some((d) => (auditProfile.data || []).includes(d));
    const suggested = tierOk && dataOk;
    const selected = auditSelectedScenarios.includes(s.id);

    const tags = [
      ...s.nist.map(
        (n) =>
          `<span class="scenario-tag conn-tag-nist">${n.replace("nist-", "").toUpperCase()}</span>`,
      ),
      ...s.csa.map(
        (c) => `<span class="scenario-tag conn-tag-csa">${c}</span>`,
      ),
      ...(s.owasp || [])
        .slice(0, 2)
        .map(
          (o) =>
            `<span class="scenario-tag conn-tag-owasp">${o.replace("owasp-", "").toUpperCase()}</span>`,
        ),
      ...(s.atlas || [])
        .slice(0, 1)
        .map(
          (a) =>
            `<span class="scenario-tag conn-tag-atlas">${a.replace("atlas-ta", "TA").toUpperCase()}</span>`,
        ),
    ].join("");

    return `<div class="scenario-card ${selected ? "selected" : ""}" onclick="toggleScenario('${s.id}',this)">
      <div class="scenario-check">${selected ? "✓" : ""}</div>
      <div class="scenario-body">
        <div class="scenario-title">${s.title}</div>
        <div class="scenario-cat">${s.category}${suggested ? ' &nbsp;·&nbsp; <span style="color:var(--nist);font-size:8px;">suggested</span>' : ""}</div>
        <div class="scenario-tags">${tags}</div>
      </div>
    </div>`;
  }).join("");
}

function toggleScenario(id, el) {
  const idx = auditSelectedScenarios.indexOf(id);
  if (idx >= 0) {
    auditSelectedScenarios.splice(idx, 1);
    el.classList.remove("selected");
    el.querySelector(".scenario-check").textContent = "";
  } else {
    auditSelectedScenarios.push(id);
    el.classList.add("selected");
    el.querySelector(".scenario-check").textContent = "✓";
  }
}

// ── RISK REGISTER ──
function buildRiskRegister() {
  getProfileValues();
  auditRisks = auditSelectedScenarios.map((id, i) => {
    const s = RISK_SCENARIOS.find((r) => r.id === id);
    return {
      id,
      num: i + 1,
      scenario: s,
      title: s.title,
      category: s.category,
      description: s.description,
      precedent: s.precedent,
      likelihood: s.defaultLikelihood,
      impact: s.defaultImpact,
      controls: s.controls.map((c) => ({ ...c })),
    };
  });
  renderRiskRegister();
  goAuditStep(2);
}

function getRating(score) {
  if (score >= 20)
    return { label: "CRITICAL", cls: "rating-critical", color: "#f87171" };
  if (score >= 12)
    return { label: "HIGH", cls: "rating-high", color: "#fcd34d" };
  if (score >= 6)
    return { label: "MEDIUM", cls: "rating-medium", color: "#7dd3fc" };
  return { label: "LOW", cls: "rating-low", color: "#6ee7b7" };
}

function renderRiskRegister() {
  const el = document.getElementById("risk-register");
  if (!el) return;
  el.innerHTML = auditRisks
    .map((r, i) => {
      const score = r.likelihood * r.impact;
      const rat = getRating(score);
      const ctrlRows = r.controls
        .map(
          (c, ci) => `<tr>
      <td style="width:28px;color:var(--dim);font-size:10px;">${ci + 1}</td>
      <td><textarea onchange="auditRisks[${i}].controls[${ci}].desc=this.value">${c.desc}</textarea></td>
      <td style="width:120px;"><select onchange="auditRisks[${i}].controls[${ci}].type=this.value">
        <option ${c.type === "Preventive" ? "selected" : ""}>Preventive</option>
        <option ${c.type === "Detective" ? "selected" : ""}>Detective</option>
        <option ${c.type === "Corrective" ? "selected" : ""}>Corrective</option>
      </select></td>
      <td style="width:200px;"><input value="${c.ref}" onchange="auditRisks[${i}].controls[${ci}].ref=this.value"/></td>
    </tr>`,
        )
        .join("");

      const lBtns = [1, 2, 3, 4, 5]
        .map(
          (v) =>
            `<button class="lxi-btn ${r.likelihood === v ? "active" : ""}" onclick="setLxi(${i},'likelihood',${v})">${v}</button>`,
        )
        .join("");
      const iBtns = [1, 2, 3, 4, 5]
        .map(
          (v) =>
            `<button class="lxi-btn ${r.impact === v ? "active" : ""}"     onclick="setLxi(${i},'impact',${v})">${v}</button>`,
        )
        .join("");

      const CATS = [
        "Fairness & Bias",
        "Explainability & Transparency",
        "Data Quality",
        "Robustness & Reliability",
        "Privacy & Data Protection",
        "Security",
        "Accountability & Third-Party Risk",
      ];

      return `<div class="risk-card" id="rc-${i}">
      <div class="risk-card-header">
        <div class="risk-num">${i + 1}</div>
        <input class="risk-title-input" value="${r.title}" onchange="auditRisks[${i}].title=this.value;updateRiskSummary()"/>
        <span class="risk-rating-badge ${rat.cls}" id="rbadge-${i}">${rat.label} (${score})</span>
      </div>
      <div class="risk-card-body">
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Category</div>
          <select onchange="auditRisks[${i}].category=this.value">${CATS.map((c) => `<option ${c === r.category ? "selected" : ""}>${c}</option>`).join("")}</select>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Risk Description — edit to reflect this specific system and context</div>
          <textarea onchange="auditRisks[${i}].description=this.value">${r.description}</textarea>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Real-World Precedent</div>
          <textarea onchange="auditRisks[${i}].precedent=this.value">${r.precedent}</textarea>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Risk Rating — Likelihood × Impact</div>
          <div class="lxi-grid">
            <div class="lxi-cell">
              <div class="lxi-label">Likelihood</div>
              <div class="lxi-val" style="color:var(--nist)" id="lv-${i}">${r.likelihood}</div>
              <div class="lxi-range" id="lbtns-${i}">${lBtns}</div>
            </div>
            <div class="lxi-cell">
              <div class="lxi-label">Impact</div>
              <div class="lxi-val" style="color:var(--owasp)" id="iv-${i}">${r.impact}</div>
              <div class="lxi-range" id="ibtns-${i}">${iBtns}</div>
            </div>
            <div class="lxi-cell">
              <div class="lxi-label">Score</div>
              <div class="lxi-val" id="sv-${i}" style="color:${rat.color}">${score}</div>
              <div style="margin-top:6px;font-size:9px;color:var(--dim)">L × I</div>
            </div>
          </div>
        </div>
        <div class="risk-field risk-field-full">
          <div class="risk-field-label">Controls — Preventive / Detective / Corrective</div>
          <table class="controls-table">
            <thead><tr><th>#</th><th>Control Description</th><th>Type</th><th>Framework Reference</th></tr></thead>
            <tbody>${ctrlRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
    })
    .join("");
  updateRiskSummary();
}

function setLxi(idx, field, val) {
  auditRisks[idx][field] = val;
  const score = auditRisks[idx].likelihood * auditRisks[idx].impact;
  const rat = getRating(score);
  const lv = document.getElementById(`lv-${idx}`),
    iv = document.getElementById(`iv-${idx}`),
    sv = document.getElementById(`sv-${idx}`);
  if (lv) lv.textContent = auditRisks[idx].likelihood;
  if (iv) iv.textContent = auditRisks[idx].impact;
  if (sv) {
    sv.textContent = score;
    sv.style.color = rat.color;
  }
  const badge = document.getElementById(`rbadge-${idx}`);
  if (badge) {
    badge.textContent = `${rat.label} (${score})`;
    badge.className = `risk-rating-badge ${rat.cls}`;
  }
  // Refresh button active states
  ["l", "i"].forEach((pre, pi) => {
    const f = pi === 0 ? "likelihood" : "impact";
    const container = document.getElementById(`${pre}btns-${idx}`);
    if (container)
      container.querySelectorAll(".lxi-btn").forEach((btn, bi) => {
        btn.classList.toggle("active", bi + 1 === auditRisks[idx][f]);
      });
  });
  updateRiskSummary();
}

function updateRiskSummary() {
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  auditRisks.forEach((r) => counts[getRating(r.likelihood * r.impact).label]++);
  const bar = document.getElementById("risk-summary-bar");
  if (!bar) return;
  bar.innerHTML = `
    <div class="risk-summary-item"><div class="risk-dot" style="background:#f87171"></div><span style="color:#f87171">${counts.CRITICAL}</span>&nbsp;Critical</div>
    <div class="risk-summary-item"><div class="risk-dot" style="background:#fcd34d"></div><span style="color:#fcd34d">${counts.HIGH}</span>&nbsp;High</div>
    <div class="risk-summary-item"><div class="risk-dot" style="background:#7dd3fc"></div><span style="color:#7dd3fc">${counts.MEDIUM}</span>&nbsp;Medium</div>
    <div class="risk-summary-item"><div class="risk-dot" style="background:#6ee7b7"></div><span style="color:#6ee7b7">${counts.LOW}</span>&nbsp;Low</div>
    <div style="margin-left:auto;font-size:9px;color:var(--muted)">${auditRisks.length} risks · click scores to adjust</div>`;
}

// ── FINDING GENERATOR ──
function buildFindings() {
  auditFindings = auditRisks
    .filter((r) => r.likelihood * r.impact >= 12)
    .map((r, i) => {
      const score = r.likelihood * r.impact;
      const rat = getRating(score);
      const p = auditProfile;
      return {
        id: `AI-FIND-${String(i + 1).padStart(3, "0")}`,
        rating: rat.label,
        ratingCls: rat.cls,
        score: score,
        risk: r,
        condition: `${r.title} was identified in ${p.system || "the AI system under review"}. ${r.description}`,
        criteria: `The following standards and frameworks establish requirements that this finding does not satisfy: ${r.scenario.frameworks.join(" · ")}.`,
        cause: `Root cause: ${
          r.id.startsWith("no-") ||
          r.id.includes("third-party") ||
          r.id.includes("opacity")
            ? "absence of formal AI governance processes prior to or at the time of system deployment, including lack of documented risk assessment, vendor due diligence, or control implementation."
            : "insufficient security and risk management controls applied to the AI system, resulting in exploitable gaps in the organization's AI risk posture."
        }`,
        effect: `If not remediated, this finding exposes the organization to regulatory enforcement, reputational damage, potential litigation from affected individuals, and operational disruption. Risk score: ${score} (${rat.label}).`,
        recommendation: r.controls
          .slice(0, 3)
          .map((c, ci) => `${ci + 1}. [${c.type}] ${c.desc} — Ref: ${c.ref}`)
          .join("\n"),
        owner: "",
        deadline: "",
        priority:
          score >= 20 ? "Immediate (0–30 days)" : "Short-term (30–90 days)",
      };
    });
  renderFindings();
  goAuditStep(3);
}

function renderFindings() {
  const el = document.getElementById("findings-container");
  if (!el) return;
  if (!auditFindings.length) {
    el.innerHTML = `<div style="text-align:center;padding:32px;color:var(--dim);font-size:11px;">No Critical or High risks found. Go back and adjust risk scores if needed.</div>`;
    return;
  }
  const ELEMENTS = [
    {
      key: "condition",
      label: "Condition",
      desc: "What was observed — what is wrong?",
    },
    {
      key: "criteria",
      label: "Criteria",
      desc: "What standards, frameworks, or regulations require something different?",
    },
    {
      key: "cause",
      label: "Cause",
      desc: "Why did this happen — what is the root cause?",
    },
    {
      key: "effect",
      label: "Effect",
      desc: "What are the potential business, legal, or operational consequences?",
    },
    {
      key: "recommendation",
      label: "Recommendation",
      desc: "What specific, actionable steps should the organization take?",
    },
  ];
  el.innerHTML = auditFindings
    .map((f, fi) => {
      const ratingColors = {
        CRITICAL: "#f87171",
        HIGH: "#fcd34d",
        MEDIUM: "#7dd3fc",
        LOW: "#6ee7b7",
      };
      const col = ratingColors[f.rating] || "#888";
      const elems = ELEMENTS.map(
        (e) => `<div class="finding-element">
      <div class="finding-element-label" style="color:${col}">${e.label}</div>
      <div class="finding-element-desc">${e.desc}</div>
      <textarea rows="${e.key === "recommendation" ? 5 : 3}" onchange="auditFindings[${fi}].${e.key}=this.value">${f[e.key]}</textarea>
    </div>`,
      ).join("");
      return `<div class="finding-card">
      <div class="finding-header">
        <span class="finding-id-badge">${f.id}</span>
        <span class="risk-rating-badge ${f.ratingCls}">${f.rating} · Score ${f.score}</span>
        <span style="font-size:11px;font-weight:500;color:var(--text);flex:1;margin-left:8px;">${f.risk.title}</span>
      </div>
      <div class="finding-body">
        ${elems}
        <div class="finding-meta">
          <div class="finding-meta-field"><div class="finding-meta-label">Risk Owner</div>
            <input placeholder="Name / Role" value="${f.owner}" onchange="auditFindings[${fi}].owner=this.value"/></div>
          <div class="finding-meta-field"><div class="finding-meta-label">Remediation Deadline</div>
            <input type="date" value="${f.deadline}" onchange="auditFindings[${fi}].deadline=this.value"/></div>
          <div class="finding-meta-field"><div class="finding-meta-label">Priority</div>
            <select onchange="auditFindings[${fi}].priority=this.value">
              <option ${f.priority.includes("0") ? "selected" : ""}>Immediate (0–30 days)</option>
              <option ${f.priority.includes("30") ? "selected" : ""}>Short-term (30–90 days)</option>
              <option ${f.priority.includes("90") ? "selected" : ""}>Medium-term (90–180 days)</option>
              <option ${f.priority.includes("180") ? "selected" : ""}>Long-term (180+ days)</option>
            </select></div>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

// ── AUDIT REPORT GENERATOR ──
function renderAuditReport() {
  const p = auditProfile;
  const ts = new Date().toISOString().split("T")[0];
  const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  auditRisks.forEach((r) => counts[getRating(r.likelihood * r.impact).label]++);

  let md = `# AI Risk Assessment Report\n\n---\n\n`;
  md += `## Assessment Header\n\n| Field | Value |\n|---|---|\n`;
  md += `| Assessment Title | ${p.title || "AI Risk Assessment"} |\n`;
  md += `| Organization | ${p.org || "—"} |\n`;
  md += `| System Assessed | ${p.system || "—"} |\n`;
  md += `| Assessment Date | ${p.date || ts} |\n`;
  md += `| Assessor | ${p.assessor || "—"} |\n`;
  md += `| Sector | ${p.sector || "—"} |\n`;
  md += `| AI Supply Chain Role | ${(p.roles || []).join(", ") || "—"} |\n`;
  md += `| Use Case Tier | Tier ${p.tier || "—"} |\n`;
  md += `| Data Processed | ${(p.data || []).join(", ") || "—"} |\n`;
  md += `| Deployment Model | ${(p.deploy || []).join(", ") || "—"} |\n`;
  md += `| Governance Maturity | ${p.maturity || "—"} |\n`;
  md += `| Methodology | NIST AI RMF 1.0 · CSA AICM v1.0.3 · OWASP LLM Top 10 2025 · MITRE ATLAS · ISO/IEC AI Standards |\n\n`;
  if (p.desc) md += `**System Description:** ${p.desc}\n\n`;
  if (p.context) md += `**Additional Context:** ${p.context}\n\n`;

  md += `---\n\n## Executive Summary\n\n`;
  md += `This assessment identified **${auditRisks.length} risk(s)** across ${auditSelectedScenarios.length} applicable scenario(s).\n\n`;
  md += `| Rating | Count |\n|---|---|\n`;
  md += `| 🔴 Critical | ${counts.CRITICAL} |\n| 🟠 High | ${counts.HIGH} |\n| 🟡 Medium | ${counts.MEDIUM} |\n| 🟢 Low | ${counts.LOW} |\n| **Total** | **${auditRisks.length}** |\n\n`;
  if (counts.CRITICAL + counts.HIGH > 0)
    md += `**Immediate attention required:** ${counts.CRITICAL} Critical and ${counts.HIGH} High risk(s) identified.\n\n`;

  md += `---\n\n## Risk Register\n\n`;
  auditRisks.forEach((r, i) => {
    const score = r.likelihood * r.impact;
    const rat = getRating(score);
    md += `### Risk ${i + 1}: ${r.title}\n\n`;
    md += `**Category:** ${r.category}  \n**Rating:** ${rat.label} (Likelihood: ${r.likelihood} × Impact: ${r.impact} = **${score}**)  \n\n`;
    md += `**Description:**  \n${r.description}\n\n`;
    md += `**Real-World Precedent:**  \n${r.precedent}\n\n`;
    md += `**Controls:**\n\n| # | Control | Type | Framework Reference |\n|---|---|---|---|\n`;
    r.controls.forEach(
      (c, ci) => (md += `| ${ci + 1} | ${c.desc} | ${c.type} | ${c.ref} |\n`),
    );
    md += "\n";
  });

  md += `---\n\n## Formal Findings\n\n`;
  if (!auditFindings.length) {
    md += `*No Critical or High findings. Review risk ratings if needed.*\n\n`;
  } else {
    auditFindings.forEach((f) => {
      md += `### ${f.id}: ${f.risk.title}\n\n`;
      md += `| Field | Value |\n|---|---|\n`;
      md += `| Risk Rating | ${f.rating} (Score: ${f.score}) |\n`;
      md += `| System | ${p.system || "—"} |\n`;
      md += `| Risk Owner | ${f.owner || "TBD"} |\n`;
      md += `| Deadline | ${f.deadline || "TBD"} |\n`;
      md += `| Priority | ${f.priority} |\n\n`;
      md += `**Condition** *(What was observed)*  \n${f.condition}\n\n`;
      md += `**Criteria** *(What should be — standards and frameworks)*  \n${f.criteria}\n\n`;
      md += `**Cause** *(Root cause)*  \n${f.cause}\n\n`;
      md += `**Effect** *(Business and legal consequences)*  \n${f.effect}\n\n`;
      md += `**Recommendation** *(Specific, actionable steps)*  \n${f.recommendation}\n\n---\n\n`;
    });
  }

  md += `## Appendix: Frameworks Applied\n\n`;
  md += `- **NIST AI RMF 1.0** — Govern, Map, Measure, Manage functions\n`;
  md += `- **CSA AICM v1.0.3** — 18 AI control domains\n`;
  md += `- **OWASP LLM Top 10 2025** — Application-layer AI risks\n`;
  md += `- **MITRE ATLAS v5** — Adversarial threat landscape for AI systems\n`;
  md += `- **ISO/IEC 42001:2023** — AI Management Systems\n`;
  md += `- **ISO/IEC 23894:2023** — AI Risk Management\n`;
  md += `- **ISO/IEC TS 5723:2022** — AI Trustworthiness\n\n`;
  md += `*Generated by AI Governance Practitioner Workbench · ${ts}*\n`;

  const prev = document.getElementById("audit-report-preview");
  if (prev) prev.textContent = md;
}

function copyAuditReport() {
  const content =
    (document.getElementById("audit-report-preview") || {}).textContent || "";
  navigator.clipboard.writeText(content).then(() => {
    const btn = document.getElementById("audit-copy-btn");
    if (btn) {
      btn.textContent = "✓ Copied";
      setTimeout(() => (btn.textContent = "Copy Report"), 2000);
    }
  });
}

function downloadAuditReport() {
  const content =
    (document.getElementById("audit-report-preview") || {}).textContent || "";
  const org = (auditProfile.org || "org")
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase();
  const ts = new Date().toISOString().split("T")[0];
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type: "text/markdown" }));
  a.download = `ai-risk-assessment-${org}-${ts}.md`;
  a.click();
}
