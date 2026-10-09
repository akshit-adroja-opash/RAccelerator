export interface NavLink {
  label: string;
  href: string;
}

export interface StandardItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  citation: string;
}

export interface HowItWorksStep {
  step: number;
  id: string;
  title: string;
  headline: string;
  description: string;
  details: string[];
  mockupType: "upload" | "classify" | "assess" | "remediate" | "report" | "trace";
  badge: string;
}

export interface PersonaContent {
  id: "ra" | "rd" | "csuite";
  tabLabel: string;
  roleTitle: string;
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  bulletOutcomes: { title: string; desc: string }[];
  dashboardPreview: {
    title: string;
    badge: string;
    items: { label: string; status: string; value: string }[];
  };
}

export interface ComparisonFeature {
  dimension: string;
  genericAI: {
    text: string;
    flaw: string;
    risk: "high" | "critical" | "medium";
  };
  raccelerator: {
    text: string;
    advantage: string;
    guarantee: string;
  };
}

export interface TraceabilityNode {
  id: string;
  step: number;
  label: string;
  title: string;
  type: "document" | "anchor" | "rule" | "clause" | "conclusion";
  code: string;
  excerpt: string;
  metadata: {
    source: string;
    timestamp: string;
    hash?: string;
    confidence?: string;
  };
}

export interface BentoItem {
  type: "case-study" | "testimonial-1" | "testimonial-2" | "segments" | "stat-callout";
  title?: string;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  metric?: string;
  subtext?: string;
}

export interface SecurityBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface DeviceClass {
  id: string;
  name: string;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  examples: string[];
  gsprRequirements: string;
  typicalReviewTime: string;
  ruleCoverage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const siteContent = {
  meta: {
    title: "RAccelerator | AI-Enabled Regulatory Acceleration for MedTech",
    description:
      "Deterministic AI regulatory platform for EU MDR 2017/745 and IVDR 2017/746 ongoing compliance. Traceable, reproducible technical documentation with zero hallucination.",
    url: "https://www.raccelerator.ai",
  },

  nav: {
    logoText: "RAccelerator",
    badge: "Deterministic AI",
    links: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#how-it-works" },
      { label: "Why RAccelerator", href: "#deterministic" },
      { label: "Security", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ] as NavLink[],
    signInText: "Sign In",
    demoText: "Book a Demo",
    gapText: "Start Gap Assessment",
  },

  hero: {
    eyebrow: "AI-Enabled Regulatory Acceleration for MedTech",
    h1Line1: "EU MDR and IVDR",
    h1Line2: "ongoing compliance.",
    subtext:
      "RAccelerator turns regulatory requirements into device-specific workflows and remediation plans, accelerating compliance, creating traceable and reproducible technical documentation without sacrificing quality, control and auditability.",
    primaryCta: "Start Gap Assessment",
    secondaryCta: "Book a Demo",
    guarantee: "100% Rule-Based Determinism · 21 CFR Part 11 Compliant · Zero Hallucination",
    reportMockup: {
      title: "Device Classification Report",
      deviceRef: "CAR-DEV-0881 | Pulsatile Ventricular Assistant",
      classResult: "Class IIb",
      classificationBadge: "MDR Annex VIII Rule-Match",
      confidence: 97.3,
      rulesHitCount: "9 / 10 / 11",
      rules: [
        {
          rule: "Rule 9",
          category: "Active Therapeutic",
          type: "Primary Determination",
          description: "Administers energy to or exchanges energy with the human body in a potentially hazardous way.",
          clause: "MDR Annex VIII §5.1 (Rule 9)",
          status: "Applied",
        },
        {
          rule: "Rule 10",
          category: "Active Diagnostic",
          type: "Primary Determination",
          description: "Intended for direct diagnosis or monitoring of vital physiological processes in urgent care.",
          clause: "MDR Annex VIII §5.2 (Rule 10)",
          status: "Applied",
        },
        {
          rule: "Rule 11",
          category: "Software (SaMD)",
          type: "Contributing Rule",
          description: "Software intended to provide information which is used to take decisions with therapeutic purposes.",
          clause: "MDR Annex VIII §6.1 (Rule 11)",
          status: "Validated",
        },
      ],
      annexCoverage: "Complete",
      auditHash: "SHA256: 7f8a9e22...c09d",
    },
  },

  standards: [
    { id: "mdr", name: "EU MDR 2017/745", badge: "Annex I GSPR", category: "Medical Device Regulation", description: "General Safety & Performance Requirements" },
    { id: "ivdr", name: "EU IVDR 2017/746", badge: "Annex I IVDR", category: "In Vitro Diagnostics", description: "Analytical & Clinical Performance" },
    { id: "iso14971", name: "ISO 14971:2019", badge: "Risk Management", category: "Harmonized Standard", description: "Application of risk management to medical devices" },
    { id: "iso13485", name: "ISO 13485:2016", badge: "QMS Medical", category: "Quality System", description: "Quality management systems for regulatory purposes" },
    { id: "iso9001", name: "ISO 9001:2015", badge: "Quality Standards", category: "Core QMS", description: "Quality management assurance criteria" },
    { id: "iec62304", name: "IEC 62304:2006/AMD1", badge: "SaMD Lifecycle", category: "Software Safety", description: "Medical device software lifecycle processes" },
    { id: "cfr11", name: "21 CFR Part 11", badge: "Audit Trails", category: "FDA Electronic Records", description: "Electronic records, signatures, and immutable logs" },
    { id: "iso27001", name: "ISO/IEC 27001", badge: "InfoSec Certified", category: "Data Protection", description: "Information security management systems" },
  ] as StandardItem[],

  statsBand: [
    {
      value: 23,
      suffix: "",
      label: "GSPRs per device",
      sublabel: "EU MDR 2017/745 Annex I",
      citation: "Full standard coverage",
    },
    {
      value: 20,
      suffix: "",
      label: "GSPRs per device",
      sublabel: "EU IVDR 2017/746 Annex I",
      citation: "IVD analytical & clinical",
    },
    {
      value: 22,
      suffix: "",
      label: "Annex VIII rules",
      sublabel: "Automated classification matrix",
      citation: "Deterministic decision tree",
    },
    {
      value: 100,
      suffix: "%",
      label: "21 CFR Part 11 trail",
      sublabel: "Immutable evidence anchors",
      citation: "Audit-ready verification",
    },
  ] as StatItem[],

  problem: {
    eyebrow: "The MedTech Regulatory Bottleneck",
    title: "Regulatory technical documentation is slow, manual, inconsistent, and highly vulnerable at Notified Body audits.",
    description:
      "Medical device teams waste quarters reconciling thousands of pages of design dossiers, clinical data, and risk matrices across evolving MDCG guidances. When Notified Bodies find misaligned clauses, submission cycles derail by 6–12 months.",
    timeline: {
      before: {
        weeks: "12 Weeks",
        title: "Traditional Manual GSPR Audit Prep",
        steps: [
          { phase: "Week 1–4", task: "Manual folder parsing across 80+ PDFs, DOCXs, and disparate spreadsheets." },
          { phase: "Week 5–8", task: "Subjective classification debate without verifiable rule citation trees." },
          { phase: "Week 9–11", task: "Ad-hoc GSPR gap mapping prone to missed Annex I clauses." },
          { phase: "Week 12", task: "Fragile submission pack with unlinked evidence anchors exposed to NB non-conformity." },
        ],
        badge: "High Risk · 84 Person-Hours/Device",
      },
      after: {
        weeks: "3 Weeks",
        title: "With RAccelerator Deterministic AI",
        steps: [
          { phase: "Day 1–3", task: "Automated parsing & structural indexing of technical documentation." },
          { phase: "Day 4–7", task: "Deterministic Annex VIII classification with rule-exact justification reports." },
          { phase: "Week 2", task: "GSPR automated health check, ISO standard alignment & remediation backlog." },
          { phase: "Week 3", task: "1-Click NB-ready Technical Dossier with cryptographic 21 CFR Part 11 anchors." },
        ],
        badge: "Verified · 75% Time Reduction",
      },
    },
  },

  howItWorks: [
    {
      step: 1,
      id: "upload",
      title: "Step 1: Upload",
      headline: "Document Review & Automated GSPR Parsing",
      description:
        "Ingest complex device dossiers across PDF, DOCX, and XLSX formats. RAccelerator extracts technical tables, risk matrices, and test protocols, organizing them under applicable GSPR Annex I requirements.",
      details: [
        "Multi-format ingestion: Design History Files, Clinical Evaluation Reports (CER), and Risk Files (ISO 14971)",
        "Zero-loss table and vector extraction with semantic document chunking",
        "Automatic structural mapping to all 23 EU MDR / 20 IVDR GSPR requirements",
      ],
      mockupType: "upload",
      badge: "Document Parsing Engine",
    },
    {
      step: 2,
      id: "classify",
      title: "Step 2: Classify",
      headline: "Deterministic Device Classification with RAxy Chatbot",
      description:
        "RAxy guides regulatory leads through an interactive qualification tree using EU MDR Annex VIII. Every question is tied to explicit rules, yielding an auditable classification determination report.",
      details: [
        "Rule-based classification engine evaluating Rules 1 through 22 with exact legal citations",
        "Transparent confidence scoring (e.g. 97.3%) backed by primary & contributing rule matches",
        "Generates formal Notified Body Classification Rationale Dossier with single-click export",
      ],
      mockupType: "classify",
      badge: "Annex VIII Decision Engine",
    },
    {
      step: 3,
      id: "assess",
      title: "Step 3: Assess",
      headline: "GSPR Health Check & Standard-Clause Gap Overview",
      description:
        "Instant benchmark against harmonized standards (ISO 14971, ISO 13485, IEC 62304). Spot unaddressed GSPRs, missing test certificates, and clinical evaluation gaps before your auditor does.",
      details: [
        "Line-by-line clause cross-examination between manufacturer evidence and GSPR checklists",
        "Color-coded gap severity indices (Compliant, Partial Evidence, Critical Omission)",
        "Automated MDCG guidance cross-checks (MDCG 2020-6, MDCG 2021-24)",
      ],
      mockupType: "assess",
      badge: "Gap Verification Matrix",
    },
    {
      step: 4,
      id: "remediate",
      title: "Step 4: Remediate",
      headline: "Actionable Remediation Plan with Timelines & Budgets",
      description:
        "Converts uncovered gaps into prioritised engineering tasks, technical writing mandates, and external testing requirements with estimated resource costs and timelines.",
      details: [
        "Generated remediation backlog mapped to specific device sub-assemblies and software modules",
        "Parametric cost estimation based on standard lab testing and CER updates",
        "Jira, Azure DevOps, and internal QMS task integration via bi-directional webhook",
      ],
      mockupType: "remediate",
      badge: "Remediation Engine",
    },
    {
      step: 5,
      id: "report",
      title: "Step 5: Report",
      headline: "Audience-Specific Transparent Reporting",
      description:
        "Provide executives with executive summary dashboards, R&D leads with engineering action cards, and RA specialists with clause-by-clause submission checklists.",
      details: [
        "Tailored views: RA Expert (clause & standard level), R&D (spec deltas), C-Suite (budget & risk trajectory)",
        "Export to PDF, DOCX, and validated QMS packages ready for Notified Body upload",
        "Version comparison diffs highlighting GSPR status improvements across design iterations",
      ],
      mockupType: "report",
      badge: "Multi-Role Dashboards",
    },
    {
      step: 6,
      id: "trace",
      title: "Step 6: Trace",
      headline: "21 CFR Part 11 Immutable Evidence Trail",
      description:
        "Every classification, gap determination, and approved remediation is cryptographically bound to the raw source file paragraph, providing an impenetrable defense during audits.",
      details: [
        "Cryptographic SHA-256 evidence anchoring linking claims to source document coordinates",
        "Part 11 compliant audit logging: user ID, timestamp, machine state, and decision justification",
        "Single-click auditor drilldown: view the exact sentences that justified every GSPR conformity claim",
      ],
      mockupType: "trace",
      badge: "Audit Verification Vault",
    },
  ] as HowItWorksStep[],

  personas: [
    {
      id: "ra",
      tabLabel: "RA Professional",
      roleTitle: "Regulatory Affairs Specialists & Directors",
      headline: "Cut technical dossier assembly from quarters to weeks with clause-exact certainty.",
      summary:
        "Stop drowning in manual GSPR checklists and disparate test reports. RAccelerator acts as your deterministic compliance copilot, providing instant Annex VIII logic checks, gap tracking, and ready-to-file technical file structures.",
      metrics: [
        { value: "75%", label: "Faster GSPR Gap Audit" },
        { value: "100%", label: "Clause-Level Traceability" },
        { value: "0", label: "Uncited Subjective Claims" },
      ],
      bulletOutcomes: [
        {
          title: "Standard-Clause Precision",
          desc: "Every assessment binds directly to EU MDR Annex I clauses and relevant harmonized standard paragraphs.",
        },
        {
          title: "Notified Body Ready Documentation",
          desc: "Generate comprehensive Classification Rationales and GSPR matrices formatted for BSI, TÜV SÜD, and DEKRA.",
        },
        {
          title: "Automated MDCG Cross-Reference",
          desc: "Stay ahead of newly published MDCG guidance documents without needing manual cross-comparison spreadsheets.",
        },
      ],
      dashboardPreview: {
        title: "RA Specialist Compliance Console",
        badge: "MDR Annex I + Annex VIII Live Sync",
        items: [
          { label: "GSPR 1: Chemical/Physical/Biological", status: "Verified", value: "100% (4/4 Anchors)" },
          { label: "GSPR 10: Infection & Microbial Contamination", status: "Verified", value: "100% (6/6 Anchors)" },
          { label: "GSPR 17.2: Programmable Electronic Systems", status: "Attention", value: "Missing IEC 62304 §5.5" },
          { label: "GSPR 21: Usability Engineering", status: "Verified", value: "IEC 62366-1 Linked" },
        ],
      },
    },
    {
      id: "rd",
      tabLabel: "R&D Engineer",
      roleTitle: "Medical Device Engineers & SaMD Architects",
      headline: "Turn abstract regulatory directives into concrete engineering requirements.",
      summary:
        "No more ambiguous regulatory requests weeks before verification and validation freezes. Get direct technical guidance on IEC 62304 software safety classes, biocompatibility test standards, and device risk mitigation mandates.",
      metrics: [
        { value: "3x", label: "Faster Requirement Mapping" },
        { value: "100%", label: "SaMD Rule 11 Clarity" },
        { value: "-45%", label: "Design Rework Cycles" },
      ],
      bulletOutcomes: [
        {
          title: "Actionable Engineering Backlog",
          desc: "Regulatory gaps automatically convert into engineering tickets with technical acceptance criteria.",
        },
        {
          title: "SaMD Software Safety Classification",
          desc: "Deterministic Rule 11 mapping guarantees clear software lifecycle requirements under IEC 62304.",
        },
        {
          title: "Design Dossier Coherence",
          desc: "Ensure test reports, CAD specs, and user manuals stay aligned with risk management files (ISO 14971).",
        },
      ],
      dashboardPreview: {
        title: "R&D Engineering Compliance Bridge",
        badge: "IEC 62304 & ISO 14971 Integration",
        items: [
          { label: "Firmware Safety Classification", status: "Class B", value: "IEC 62304 Clause 4.3" },
          { label: "V&V Test Protocol Coverage", status: "88% Pass", value: "42/48 Unit Tests Mapped" },
          { label: "Cybersecurity MDR Annex I §17.4", status: "Pending", value: "SBOM Upload Needed" },
          { label: "Risk Mitigation Verification", status: "Resolved", value: "Hazard #14 Closed" },
        ],
      },
    },
    {
      id: "csuite",
      tabLabel: "C-Suite",
      roleTitle: "Chief Executive Officers, COOs & VPs of Quality",
      headline: "De-risk commercial launches and eliminate $500k+ audit delay write-downs.",
      summary:
        "Regulatory friction is the #1 delay factor for MedTech product launches. RAccelerator gives corporate leaders real-time visibility into portfolio compliance, audit readiness schedules, and capital requirements.",
      metrics: [
        { value: "60%", label: "Shorter Time-to-Submission" },
        { value: "$320k", label: "Avg. Consultant Cost Saved" },
        { value: "Zero", label: "Surprise NB Audit Findings" },
      ],
      bulletOutcomes: [
        {
          title: "Portfolio Audit Readiness",
          desc: "Bird's eye view across Class I through Class III devices with projected Notified Body submission dates.",
        },
        {
          title: "Capital & Timeline Forecasting",
          desc: "Predictive remediation budgeting identifies required test house expenditures before regulatory deadlines.",
        },
        {
          title: "Enterprise IP & Risk Defense",
          desc: "Deterministic evidence trail protects market authorizations and insulates the enterprise during audits.",
        },
      ],
      dashboardPreview: {
        title: "Executive Portfolio Risk Dashboard",
        badge: "Enterprise MedTech View",
        items: [
          { label: "CardioPulse V3 (Class IIb)", status: "On Track", value: "Submission Q3 2026" },
          { label: "NeuroSens IVD Platform", status: "Remediation", value: "Estimated: 18 Days" },
          { label: "Orthofit Implant (Class III)", status: "Audit Ready", value: "Technical Pack 100%" },
          { label: "Projected Cost Reduction", status: "Calculated", value: "$340,000 Saved" },
        ],
      },
    },
  ] as PersonaContent[],

  deterministicAI: {
    eyebrow: "Why RAccelerator",
    h2: "Compliance You Can Trust",
    subheading: "Not All AI Is Created Equal",
    leadText:
      "Generic Large Language Models are probabilistic: they predict the next plausible word. In MedTech, plausible is fatal. RAccelerator pairs structured legal decision logic with audited semantic anchors to guarantee 100% deterministic, repeatable outcomes.",
    sliderComparison: [
      {
        dimension: "Output Consistency",
        genericAI: {
          text: "Probabilistic outputs. May vary between runs and produce contradictory classifications.",
          flaw: "Varies between runs",
          risk: "high",
        },
        raccelerator: {
          text: "Rule-based determinism. Identical inputs yield identical outputs every single run.",
          advantage: "100% reproducible",
          guarantee: "100% reproducible",
        },
      },
      {
        dimension: "Hallucination Risk",
        genericAI: {
          text: "May hallucinate requirements, invent clauses, or cite repealed directives.",
          flaw: "May hallucinate requirements",
          risk: "critical",
        },
        raccelerator: {
          text: "Evidence-anchored findings. Every claim is bound to explicit MDR rules and dossier paragraphs.",
          advantage: "Evidence-anchored findings",
          guarantee: "Evidence-anchored findings",
        },
      },
      {
        dimension: "Audit Trail",
        genericAI: {
          text: "No audit trail. Black-box sessions with zero tamper-evident logging or user attribution.",
          flaw: "No audit trail",
          risk: "critical",
        },
        raccelerator: {
          text: "Full 21 CFR Part 11 trail. Cryptographic hashing, timestamped operator logs, immutable records.",
          advantage: "Full 21 CFR Part 11 trail",
          guarantee: "Full 21 CFR Part 11 trail",
        },
      },
      {
        dimension: "Reproducibility",
        genericAI: {
          text: "Outputs vary between runs. The same device description can yield different classifications on different days.",
          flaw: "Varies between runs",
          risk: "high",
        },
        raccelerator: {
          text: "100% reproducible. Identical inputs always produce identical outputs — every run, every time.",
          advantage: "100% reproducible",
          guarantee: "100% reproducible",
        },
      },
      {
        dimension: "Reasoning",
        genericAI: {
          text: "Black-box reasoning. No auditor can trace why a conclusion was drawn.",
          flaw: "Black-box reasoning",
          risk: "high",
        },
        raccelerator: {
          text: "Transparent reasoning. Step-by-step logic trees showing which condition triggered which Annex VIII rule.",
          advantage: "Transparent reasoning",
          guarantee: "Transparent reasoning",
        },
      },
    ] as ComparisonFeature[],
    pillars: [
      {
        title: "Reproducible Results",
        desc: "Every GSPR assessment produces identical outputs given identical inputs. No hallucinations, no variation, no surprises at your Notified Body audit.",
        icon: "RefreshCw",
        stat: "100% Consistent",
      },
      {
        title: "Full Traceability",
        desc: "Every AI determination links back to specific evidence anchors, classification rules, and applicable standards. Auditors see exactly how each conclusion was reached.",
        icon: "GitBranch",
        stat: "Direct Anchor Links",
      },
      {
        title: "Regulatory-Grade Validation",
        desc: "Built on EU MDR 2017/745 Annex I and IVDR 2017/746 Annex I requirements, ISO 14971 risk frameworks, and MDCG guidance documents — not general-purpose LLM outputs.",
        icon: "ShieldCheck",
        stat: "Auditor Validated",
      },
    ],
  },

  traceabilityGraph: {
    eyebrow: "Interactive Evidence Graph",
    title: "Cryptographic Chain of Custody",
    subtitle:
      "Hover or select any node in the regulatory verification pipeline to inspect the raw evidence anchor, rule derivation, and statutory clause citation.",
    nodes: [
      {
        id: "node-doc",
        step: 1,
        label: "Evidence Document",
        title: "DHF-CER-2024-008.pdf",
        type: "document",
        code: "DOC-EXTRACT #092",
        excerpt:
          "Section 4.3: Ventricular kinetic transducer delivers active pulsatile electrical modulation through intravascular myocardial catheter.",
        metadata: {
          source: "Technical File / Design Dossier (Rev 4)",
          timestamp: "2026-03-14 09:12:44 CET",
          hash: "SHA256: 9b2d88a1f4...",
        },
      },
      {
        id: "node-anchor",
        step: 2,
        label: "Evidence Anchor",
        title: "Anchor ID: #ANC-4491",
        type: "anchor",
        code: "PARAGRAPH-ANCHOR",
        excerpt:
          "Bounding coordinates: Page 42, Lines 12-19. Entity: 'Active therapeutic device administering electrical energy in hazardous physiological pathway'.",
        metadata: {
          source: "Automated OCR & Geometry Vectorizer",
          timestamp: "2026-03-14 09:12:46 CET",
          confidence: "99.8% Spatial Match",
        },
      },
      {
        id: "node-rule",
        step: 3,
        label: "Classification Rule",
        title: "Annex VIII Rule 9",
        type: "rule",
        code: "MDR 2017/745 RULE 9",
        excerpt:
          "All active therapeutic devices intended to administer or exchange energy are classified as Class IIa, unless their characteristics are such that they may administer energy to or exchange energy with the human body in a potentially hazardous way, in which case they are Class IIb.",
        metadata: {
          source: "Annex VIII Chapter III",
          timestamp: "Verified against MDCG 2021-24",
          confidence: "Deterministic Rule Match",
        },
      },
      {
        id: "node-clause",
        step: 4,
        label: "Standard Clause",
        title: "ISO 14971:2019 §5.4 / IEC 60601-1",
        type: "clause",
        code: "ISO CLAUSE REF",
        excerpt:
          "Harmonized requirement: Risk evaluation of active electrical pulses under single fault condition. Verification of thermal and cardiac pacing limits.",
        metadata: {
          source: "Harmonized Standards Database",
          timestamp: "OJEU C 249/1 Validated",
        },
      },
      {
        id: "node-conclusion",
        step: 5,
        label: "GSPR Conclusion",
        title: "GSPR 17 & 18 Conformance Verified",
        type: "conclusion",
        code: "CLASS IIb DETERMINATION",
        excerpt:
          "Device classified definitively as Class IIb. GSPR 17 (Electronic programmable systems) and GSPR 18 (Active devices) marked COMPLIANT with 14 verified anchors.",
        metadata: {
          source: "RAccelerator Deterministic Engine",
          timestamp: "Signed: 2026-03-14 09:12:51 CET",
          hash: "SHA256: 7f8a9e22...c09d",
        },
      },
    ] as TraceabilityNode[],
  },

  proofBento: {
    eyebrow: "Trusted By",
    title: "Regulatory Teams Trust RAccelerator",
    caseStudy: {
      tag: "Case Study",
      headline: "Case Study: 60% Faster NB Submission",
      manufacturer: "Class IIb Cardiac Device Manufacturer",
      deviceType: "Cardiac Device",
      result: "9 months to under 4",
      description:
        "A Class IIb cardiac device manufacturer reduced their submission timeline from 9 months to under 4 using RAccelerator's automated GSPR assessment and gap remediation workflow.",
      quote:
        "The deterministic AI gave our Notified Body lead immediate confidence. No hand-waving, just rock-solid clause citations.",
      cta: "Read Case Study",
    },
    testimonial1: {
      quote:
        "RAccelerator cut our GSPR assessment time from 12 weeks to 3. The deterministic AI means we trust every output our NB sees.",
      author: "VP Regulatory Affairs",
      role: "VP Regulatory Affairs",
      company: "Class III Manufacturer",
      rating: 5,
    },
    testimonial2: {
      quote:
        "Finally, a tool that understands MDR at the standard-clause level. The gap analysis saved us from two critical findings at our stage 2 audit.",
      author: "Director RA",
      role: "Director RA",
      company: "Cardiac Device Startup",
      rating: 5,
    },
    segments: [
      "Class III Manufacturer",
      "IVD Platform",
      "Cardiac Devices",
      "Orthopedics",
      "Digital Health",
      "Neurostimulation",
    ],
    statTile: {
      stat: "12 to 3",
      unit: "weeks",
      label: "Average GSPR Assessment Cycle",
      subtext: "Across 40+ medical device technical files audited in 2025/2026.",
    },
  },

  security: {
    eyebrow: "Enterprise Security",
    h2: "Built for Regulated Industries",
    statement:
      "All data hosted in EU-based infrastructure. Available for on-premise deployment for enterprise clients.",
    onPremNote:
      "Enterprise clients with proprietary IP can run RAccelerator entirely on-premise or in dedicated private AWS/Azure Frankfurt VPCs.",
    badges: [
      {
        id: "soc2",
        title: "SOC 2 Type II",
        description: "Annual third-party audit of security controls, availability, and confidentiality.",
        icon: "ShieldAlert",
        tag: "Certified",
      },
      {
        id: "gdpr",
        title: "GDPR Compliant",
        description: "EU data residency options. Full data processing agreements. Right to erasure supported.",
        icon: "Lock",
        tag: "EU Sovereign",
      },
      {
        id: "cfr11",
        title: "21 CFR Part 11",
        description: "Electronic signatures, audit trails, and access controls meeting FDA requirements.",
        icon: "FileCheck",
        tag: "FDA Validated",
      },
      {
        id: "encryption",
        title: "AES-256 Encryption",
        description: "Data encrypted at rest and in transit. TLS 1.3 for all communications.",
        icon: "Key",
        tag: "End-to-End",
      },
      {
        id: "iso27001",
        title: "ISO 27001 Aligned",
        description: "Information security management system aligned to international standards.",
        icon: "CheckCircle",
        tag: "ISMS Aligned",
      },
      {
        id: "rbac",
        title: "Role-Based Access",
        description: "Granular permissions, SSO/SAML integration, and MFA enforcement for all users.",
        icon: "Users",
        tag: "Enterprise Ready",
      },
    ] as SecurityBadge[],
  },

  coverageAndOnboarding: {
    eyebrow: "Device Scope & Integrations",
    title: "Universal MDR & IVDR Coverage",
    subtitle:
      "From simple Class I non-invasive instruments to life-sustaining Class III active implants and high-risk IVDR devices.",
    classes: [
      {
        id: "class-i",
        name: "Class I",
        riskLevel: "Low",
        examples: ["Surgical instruments", "Hospital beds", "Non-sterile bandages"],
        gsprRequirements: "Applicable Annex I core GSPRs (GSPR 1-13)",
        typicalReviewTime: "3 - 5 Days with RAccelerator",
        ruleCoverage: "Rules 1 - 4 (Annex VIII)",
      },
      {
        id: "class-iia",
        name: "Class IIa",
        riskLevel: "Medium",
        examples: ["Diagnostic ultrasound", "Infusion pumps (short term)", "Dental materials"],
        gsprRequirements: "Full GSPR checklist + Notified Body quality audit",
        typicalReviewTime: "1 - 2 Weeks with RAccelerator",
        ruleCoverage: "Rules 5 - 8, Rule 11 (Annex VIII)",
      },
      {
        id: "class-iib",
        name: "Class IIb",
        riskLevel: "High",
        examples: ["Ventricular assist pumps", "Surgical lasers", "Radiation therapy systems"],
        gsprRequirements: "Exhaustive GSPR technical file with clinical evaluation",
        typicalReviewTime: "2 - 3 Weeks with RAccelerator",
        ruleCoverage: "Rules 9 - 12, Rule 14 - 18 (Annex VIII)",
      },
      {
        id: "class-iii",
        name: "Class III",
        riskLevel: "Critical",
        examples: ["Cardiac pacemakers", "Coronary stents", "Prosthetic heart valves"],
        gsprRequirements: "Complete Annex I dossier + CER + Expert Panel review",
        typicalReviewTime: "3 - 4 Weeks with RAccelerator",
        ruleCoverage: "Rules 19 - 22 + Special Annex VIII rules",
      },
      {
        id: "ivdr",
        name: "IVDR (Classes A–D)",
        riskLevel: "Critical",
        examples: ["Molecular diagnostics", "Blood grouping reagents", "Self-test glucose"],
        gsprRequirements: "IVDR Annex I (Analytical & Clinical Performance)",
        typicalReviewTime: "2 - 3 Weeks with RAccelerator",
        ruleCoverage: "IVDR Annex VIII Rules 1 - 7",
      },
    ] as DeviceClass[],
    integrations: [
      { name: "QMS Bi-directional API", desc: "Sync technical documentation with Greenlight Guru, MasterControl, Arena, and Veeva Vault." },
      { name: "SSO / SAML 2.0", desc: "Turnkey enterprise identity management via Okta, Microsoft Entra ID, and Google Workspace." },
      { name: "Standard Exports", desc: "Export Notified Body audit-ready ZIP packages, PDF dossiers, and GSPR spreadsheets." },
    ],
    onboardingTimeline: {
      headline: "2–4 Weeks Turnkey Onboarding",
      subline: "Dedicated regulatory solution engineers guide your team from initial configuration to your first validated submission pack.",
      steps: [
        { week: "Week 1", title: "Workspace & Security Setup", desc: "Configure tenant, set up SSO/SAML, establish RBAC roles, sign DPAs." },
        { week: "Week 2", title: "Document & DHF Ingestion", desc: "Upload initial technical files, CERs, and risk management documents." },
        { week: "Week 3", title: "Automated GSPR Assessments", desc: "Run deterministic Annex VIII classifications and initial gap audits." },
        { week: "Week 4", title: "NB Submission Ready", desc: "Review remediation plans, export verified dossiers, dedicated CSM handoff." },
      ],
    },
  },

  faq: [
    {
      category: "AI & Accuracy",
      question: "How does RAccelerator's AI ensure classification accuracy?",
      answer:
        "Unlike generic LLMs that guess probabilistic token sequences, RAccelerator uses a Deterministic Regulatory Decision Engine. It translates the 22 classification rules of EU MDR Annex VIII (and IVDR Annex VIII) into formal, rule-based decision trees. Every single finding is directly anchored to your source documents and statutory legal clauses. If a rule does not trigger mathematically, RAccelerator will never invent an affirmative match.",
    },
    {
      category: "Security & Sovereignty",
      question: "Is my regulatory data secure?",
      answer:
        "Yes, absolutely. All customer data is hosted in EU-based sovereign infrastructure with AES-256 encryption at rest and TLS 1.3 in transit. We maintain full GDPR compliance, sign formal Data Processing Agreements (DPAs), and never train public models on your proprietary DHF or clinical data. On-premise air-gapped deployments are available for enterprise MedTech manufacturers.",
    },
    {
      category: "Device Scope",
      question: "Does this work for Class I, IIa, IIb, and III devices?",
      answer:
        "Yes. RAccelerator covers the complete spectrum of EU MDR 2017/745 (Class I, Class IIa, Class IIb, and Class III devices) as well as EU IVDR 2017/746 (Classes A, B, C, and D). From simple non-invasive instruments to life-sustaining cardiovascular implants and software as a medical device (SaMD), our rule engine handles all relevant Annex VIII decision paths.",
    },
    {
      category: "Audit Acceptance",
      question: "Is RAccelerator accepted by Notified Bodies?",
      answer:
        "RAccelerator does not replace the manufacturer's regulatory accountability; rather, it provides Notified Bodies with the exact structure, standard-clause citations, and cross-references they demand under MDCG guidance. Dossiers generated through RAccelerator feature 21 CFR Part 11 compliant audit trails and direct evidence anchors, making auditor review faster and significantly reducing Stage 1 & Stage 2 non-conformities.",
    },
    {
      category: "Implementation",
      question: "What does onboarding look like?",
      answer:
        "Turnkey onboarding takes 2 to 4 weeks. A dedicated Regulatory Solutions Engineer configures your secure workspace, integrates with your QMS/SSO, ingests your historical technical files, and assists in running your initial GSPR gap assessments. Your team receives hands-on training so RA specialists and R&D engineers are fully productive within days.",
    },
    {
      category: "Integrations",
      question: "Can RAccelerator integrate with our existing QMS?",
      answer:
        "Yes. RAccelerator provides robust REST APIs and pre-built connectors for leading MedTech QMS platforms including Veeva Vault, MasterControl, Greenlight Guru, Arena PLM, Jira, and Azure DevOps. We also support automated ingestion of PDF, DOCX, and XLSX files, along with standard Notified Body export formats.",
    },
  ] as FAQItem[],

  finalCta: {
    headline: "Accelerate your EU MDR & IVDR compliance with zero guesswork.",
    subheadline:
      "Join forward-thinking MedTech manufacturers using deterministic AI to cut audit preparation from 12 weeks to 3 weeks while securing audit-ready technical files.",
    primaryButton: "Start Gap Assessment",
    secondaryButton: "Book a Demo",
    reassurance: [
      "No credit card required",
      "Confidential NDA-protected review",
      "EU Sovereign Cloud",
      "2-4 Week Implementation",
    ],
  },

  footer: {
    tagline:
      "Regulatory intelligence for MedTech. Accelerating device lifecycle management from classification to NB submission.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#how-it-works" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Deterministic AI", href: "#deterministic" },
          { label: "Security & Sovereignty", href: "#security" },
          { label: "QMS Integrations", href: "#coverage" },
          { label: "API Documentation", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "EU MDR 2017/745 Guide", href: "#" },
          { label: "GSPR 23-Point Checklist", href: "#" },
          { label: "MDCG Guidance Library", href: "#" },
          { label: "Notified Body Audit Prep", href: "#" },
          { label: "Webinars & Workshops", href: "#" },
          { label: "Case Studies", href: "#proof" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About RAccelerator", href: "#" },
          { label: "Careers (We're Hiring!)", href: "#" },
          { label: "Contact Regulatory Team", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Security Whitepaper", href: "#security" },
        ],
      },
    ],
    copyright: "© 2026 RAccelerator LLC. All rights reserved.",
    bottomLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Security & Part 11", href: "#security" },
      { label: "Sitemap", href: "#" },
    ],
  },
};
