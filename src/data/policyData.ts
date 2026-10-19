export interface EntityDetails {
  legalName: string;
  dbaName: string;
  businessFunction: string;
  targetMarkets: string[];
  primaryPhone: string;
  secondaryPhone: string;
  contactEmail: string;
  effectiveDate: string;
  governingLaw: string;
  responseTime: string;
}

export const ENTITY_DETAILS: EntityDetails = {
  legalName: "ABODE-MODE LLC",
  dbaName: "Abode Mode",
  businessFunction: "Direct acquisitions of residential homes and vacant land across the United States.",
  targetMarkets: ["Colorado (Primary Acquisition Corridor)", "Texas (Primary Acquisition Corridor)", "Nationwide Selective Acquisitions"],
  primaryPhone: "(719) 502-7119",
  secondaryPhone: "(817) 756-9550",
  contactEmail: "WDowis@Abode-Mode.com",
  effectiveDate: "October 2026",
  governingLaw: "State of Colorado and State of Texas, United States",
  responseTime: "Within 24 business hours"
};

export interface ComplianceCheckItem {
  id: string;
  requirement: string;
  standard: string;
  status: "COMPLIANT" | "MANDATORY";
  sectionTarget: string;
  carrierNotice: string;
}

export const COMPLIANCE_CHECKLIST: ComplianceCheckItem[] = [
  {
    id: "check-1",
    requirement: "Zero Third-Party Mobile Data Sharing",
    standard: "TCR & CTIA Messaging Principles § 5.1",
    status: "COMPLIANT",
    sectionTarget: "mobile-sms-privacy",
    carrierNotice: "Explicitly guarantees that consumer mobile information is never shared or sold to third parties or affiliates for promotional/marketing purposes."
  },
  {
    id: "check-2",
    requirement: "SMS Opt-In & Consent Data Carve-Out",
    standard: "AT&T / T-Mobile / Verizon 10DLC Code of Conduct",
    status: "COMPLIANT",
    sectionTarget: "mobile-sms-privacy",
    carrierNotice: "Strict non-transferability clause confirms text messaging originator opt-in data and consent are strictly excluded from all sharing."
  },
  {
    id: "check-3",
    requirement: "Universal STOP Opt-Out Workflow",
    standard: "CTIA Short Code & 10DLC Guidelines",
    status: "COMPLIANT",
    sectionTarget: "consumer-rights-opt-out",
    carrierNotice: "Immediate reply-STOP revocation protocol documented with automated cessation of outbound SMS."
  },
  {
    id: "check-4",
    requirement: "Universal HELP Customer Care Protocol",
    standard: "CTIA Best Practices",
    status: "COMPLIANT",
    sectionTarget: "consumer-rights-opt-out",
    carrierNotice: "Instructions to reply HELP for acquisition desk support, paired with direct phone and email channels."
  },
  {
    id: "check-5",
    requirement: "Message & Data Rates Disclosure",
    standard: "Carrier Mandate",
    status: "COMPLIANT",
    sectionTarget: "consumer-rights-opt-out",
    carrierNotice: "Standard carrier message and data rates notice explicitly surfaced in both policy and callout."
  },
  {
    id: "check-6",
    requirement: "Message Frequency Disclosure",
    standard: "TCR Registration Standard",
    status: "COMPLIANT",
    sectionTarget: "consumer-rights-opt-out",
    carrierNotice: "Defines frequency as transactional, based strictly on seller inquiry progress and milestone coordination."
  },
  {
    id: "check-7",
    requirement: "Explicit Purpose of Use (Direct Acquisitions)",
    standard: "A2P Campaign Type Alignment",
    status: "COMPLIANT",
    sectionTarget: "purpose-of-use",
    carrierNotice: "Limits use exclusively to property valuation reviews, on-site walkthrough scheduling, and closing milestones."
  },
  {
    id: "check-8",
    requirement: "Entity Identification & Direct Contact Desk",
    standard: "Legal Transparency Standard",
    status: "COMPLIANT",
    sectionTarget: "direct-contact",
    carrierNotice: "Direct lines (719) 502-7119 & (817) 756-9550 with verified acquisition email WDowis@Abode-Mode.com."
  }
];

export interface PolicySection {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  highlightSummary?: string;
  subsections: {
    subtitle?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    isStrictCarrierCallout?: boolean;
    calloutText?: string;
  }[];
}

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: "scope-information-collected",
    number: "01",
    title: "Scope and Information Collected",
    shortLabel: "1. Scope & Data Collected",
    highlightSummary: "Factual breakdown of data collected directly from consumers submitting property inquiries or engaging in direct real estate transactions.",
    subsections: [
      {
        subtitle: "1.1 Direct Consumer Data Collection",
        paragraphs: [
          "ABODE-MODE LLC (d/b/a \"Abode Mode\") operates as a disciplined, institutional direct acquisition firm purchasing residential single-family homes, multi-unit properties, and vacant land throughout Colorado, Texas, and select national corridors.",
          "We collect personal and real property information directly from consumers when an owner, authorized agent, or representative requests a cash purchase evaluation, submits a web inquiry, dials our acquisitions desk, or enters into direct real estate discussions with our team."
        ],
        bulletPoints: [
          "Consumer Identification: Full legal name, preferred salutation, and verification of property ownership authority.",
          "Direct Telephony: Mobile phone number(s), landline numbers, and preferred contact time windows.",
          "Electronic Communications: Primary personal or corporate email addresses.",
          "Real Property Specifics: Physical property address, Assessor's Parcel Number (APN), county jurisdiction, lot dimensions, square footage, zoning details, and tax assessment standing.",
          "Structural Condition & History: Roof age, mechanical systems condition, foundation status, occupancy condition (owner-occupied, tenant-occupied, or vacant), and deferral of maintenance.",
          "Transaction Timelines & Notes: Preferred closing horizon, estate/probate context, title clarity considerations, and specific notes necessary to deliver a formal written cash offer."
        ]
      },
      {
        subtitle: "1.2 Absence of Passive Behavioral Tracking",
        paragraphs: [
          "We do not engage in behavioral cross-site ad profiling, covert device fingerprinting, or automated keystroke interception. Any technical data logged automatically during digital visits is restricted strictly to necessary server-side security diagnostics, IP location resolution for state-specific legal routing, and basic session continuity."
        ]
      }
    ]
  },
  {
    id: "mobile-sms-privacy",
    number: "02",
    title: "Mobile Information & SMS Privacy Clause",
    shortLabel: "2. Mobile & SMS Privacy",
    highlightSummary: "Strict non-sharing covenant ensuring mobile originator and opt-in data is never sold, shared, rented, or transferred under any circumstance.",
    subsections: [
      {
        isStrictCarrierCallout: true,
        calloutText: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with or sold to any third parties under any circumstances.",
        paragraphs: [
          "This critical clause represents an absolute institutional covenant maintained by ABODE-MODE LLC. In compliance with the cellular telecommunications industry standards, The Campaign Registry (TCR), and the guidelines established by major wireless carriers (AT&T, Verizon, T-Mobile, and regional telecommunications partners), mobile phone numbers collected for conversational SMS inquiries remain strictly segregated from any affiliate, partner, or commercial distribution systems."
        ]
      },
      {
        subtitle: "2.1 Prohibition on Lead Resale and Data Brokerage",
        paragraphs: [
          "Under no circumstances does ABODE-MODE LLC participate in lead distribution networks, affiliate marketing syndicates, or commercial data brokers. Your mobile number is utilized exclusively by authorized Abode Mode acquisitions coordinators assigned specifically to your real estate transaction review.",
          "Subcontractors, title escrow agents, and closing attorneys engaged during an active transaction are granted contact details solely to effectuate escrow closing procedures, never for downstream promotional exploitation."
        ]
      }
    ]
  },
  {
    id: "purpose-of-use",
    number: "03",
    title: "Purpose of Use & Communication Boundaries",
    shortLabel: "3. Purpose of Use",
    highlightSummary: "Information is utilized solely to evaluate real property assets, deliver written cash offers, and coordinate real estate closings.",
    subsections: [
      {
        subtitle: "3.1 Transactional and Direct Acquisition Functions",
        paragraphs: [
          "ABODE-MODE LLC gathers and processes consumer contact and property information exclusively for legitimate, direct real estate purchase purposes, specifically limited to:"
        ],
        bulletPoints: [
          "Evaluating Property Asset Data: Reviewing comparative market analyses (CMAs), tax assessments, and physical characteristics to construct competitive, as-is cash offers.",
          "Delivering Valuation Reviews & Written Offers: Transmitting formal letters of intent (LOI), formal purchase agreements, and acquisition review summaries via secure electronic transmission or SMS notification.",
          "Scheduling Physical Walkthroughs & Inspections: Coordinating mutual appointment windows for our acquisition principals, licensed home inspectors, or valuation specialists to assess the subject property.",
          "Coordinating Escrow & Closing Milestones: Interfacing with licensed title companies, escrow officers, survey engineers, and sellers to coordinate earnest money delivery, title clearance, and wire disbursements.",
          "Responding to Inbound Inquiries: Directly addressing inquiries submitted through our website forms or direct telephone calls to our Colorado or Texas desks."
        ]
      },
      {
        subtitle: "3.2 Strict Exclusion of Generic Promotional Blasts",
        paragraphs: [
          "We do not send mass, unsolicited marketing campaigns or non-consensual outbound robo-texts. Communications are 1-to-1 or directed conversational sequences directly tied to a specific parcel or consumer transaction request."
        ]
      }
    ]
  },
  {
    id: "consumer-rights-opt-out",
    number: "04",
    title: "Consumer Rights & Opt-Out Workflow (CTIA Standards)",
    shortLabel: "4. CTIA Opt-Out & Rights",
    highlightSummary: "Universal STOP, HELP, and message frequency protocols engineered to CTIA and carrier 10DLC specifications.",
    subsections: [
      {
        subtitle: "4.1 The STOP Opt-Out Protocol",
        paragraphs: [
          "You have the unconditional right to cease all mobile text communications from ABODE-MODE LLC at any time with immediate effect."
        ],
        bulletPoints: [
          "STOP Clause: \"You may opt out of receiving SMS communications at any time. Simply reply STOP to any text message received to immediately terminate future messaging.\"",
          "Revocation Handling: Upon receipt of your STOP message, our telecommunications gateway immediately registers your number on our internal suppression register and transmits a single confirmation text verifying your opt-out status. No further SMS messages will be initiated unless you subsequently re-initiate opt-in consent in writing."
        ]
      },
      {
        subtitle: "4.2 The HELP Customer Assistance Protocol",
        paragraphs: [
          "Immediate assistance regarding message frequency, identity verification, or transaction status is always available directly through SMS."
        ],
        bulletPoints: [
          "HELP Clause: \"Reply HELP to any text message for customer care information, or contact our acquisition desk directly at (719) 502-7119 or WDowis@Abode-Mode.com.\"",
          "Live Human Escalation: Messages containing HELP will trigger an immediate informative reply detailing sender identification and direct telephone escalation paths to our managing acquisitions director."
        ]
      },
      {
        subtitle: "4.3 Message Rates & Cadence Disclosures",
        paragraphs: [
          "To ensure complete billing transparency in accordance with carrier mandates:"
        ],
        bulletPoints: [
          "Message Rates: \"Message and data rates may apply. Message frequency varies based on transaction status and seller engagement.\"",
          "Billing Responsibility: Charges associated with SMS transmission or cellular data consumption depend entirely upon your personal cellular service provider plan (e.g., AT&T, Verizon, T-Mobile, Sprint, Mint Mobile, Cricket, US Cellular). ABODE-MODE LLC assesses no surcharges or platform fees for receiving property text updates."
        ]
      }
    ]
  },
  {
    id: "data-security-storage",
    number: "05",
    title: "Data Security, Integrity & Storage Safeguards",
    shortLabel: "5. Data Security",
    highlightSummary: "Disciplined administrative, physical, and technological protocols enforced to protect seller records.",
    subsections: [
      {
        subtitle: "5.1 Technical Security Controls",
        paragraphs: [
          "ABODE-MODE LLC enforces rigorous, institutional-grade safeguards designed to shield personal and property information against unauthorized interception, alteration, extraction, or destruction.",
          "All digital transmissions containing consumer information utilize TLS 1.3 cryptographic protocols with modern cipher suites. Rest-state records are housed in SOC 2 Type II certified cloud environments protected by role-based access control (RBAC), multi-factor hardware authentication, and regular access log audits."
        ]
      },
      {
        subtitle: "5.2 Administrative & Physical Measures",
        paragraphs: [
          "Only personnel directly charged with evaluating real estate opportunities or completing legal closing transactions are granted access to consumer records. Physical printouts of property records or purchase agreements are secured in controlled-access repositories and shredded via NAID-certified secure destruction protocols upon completion of statutory retention periods."
        ]
      },
      {
        subtitle: "5.3 Data Retention Policies",
        paragraphs: [
          "Real estate transaction documents, escrow correspondence, and statutory purchase disclosures are retained for the statutory duration mandated by applicable state real estate licensing and revenue authorities (typically 5 to 7 years in Colorado and Texas). Inquiries that do not materialize into an active contract are archived and purged in accordance with our routine scheduled data minimization cycles."
        ]
      }
    ]
  },
  {
    id: "direct-contact",
    number: "06",
    title: "Direct Contact, Acquisition Desks & Dispute Notice",
    shortLabel: "6. Contact & Disputes",
    highlightSummary: "Verified corporate coordinates, acquisition desk direct lines, and guaranteed response turnaround times.",
    subsections: [
      {
        subtitle: "6.1 Official Contact Coordinates",
        paragraphs: [
          "For inquiries regarding this Privacy Policy, verification of real estate acquisition credentials, exercise of consumer privacy rights, or formal dispute notifications, please contact ABODE-MODE LLC directly using any of the following verified channels:"
        ],
        bulletPoints: [
          "Legal Business Entity: ABODE-MODE LLC",
          "Public Trade Identity: Abode Mode",
          "Principal Officer & Acquisition Director: W. Dowis",
          "Primary Acquisition Desk Phone: (719) 502-7119",
          "Regional Desk (Texas / South): (817) 756-9550",
          "Official Privacy & Acquisitions Email: WDowis@Abode-Mode.com",
          "Jurisdiction of Incorporation: United States (Operating primarily in CO & TX)",
          "Standard Response Turnaround: Within 24 business hours of inquiry receipt"
        ]
      },
      {
        subtitle: "6.2 Escalation and Dispute Resolution Protocol",
        paragraphs: [
          "Should you believe that a communication received from ABODE-MODE LLC was sent in error or without appropriate consent, you are encouraged to contact our acquisition desk immediately at (719) 502-7119 or email WDowis@Abode-Mode.com with the subject line \"PRIORITY: Privacy Review Request\". We will conduct an immediate investigation and promptly address your record status within one business day."
        ]
      }
    ]
  },
  {
    id: "state-specific-protections",
    number: "07",
    title: "State-Specific Disclosures (Colorado & Texas Focus)",
    shortLabel: "7. State Protections",
    highlightSummary: "Statutory alignment with the Colorado Privacy Act (CPA) and Texas Data Privacy and Security Act (TDPSA).",
    subsections: [
      {
        subtitle: "7.1 Colorado Consumer Disclosures (CPA Alignment)",
        paragraphs: [
          "For residents of Colorado and property owners with parcels in El Paso, Teller, Pueblo, Douglas, Denver, and surrounding Colorado counties: You possess specific rights under Colorado law to confirm whether we process personal data, access such data, correct inaccuracies, or request the deletion of personal data not required for ongoing legal contracts or statutory compliance."
        ]
      },
      {
        subtitle: "7.2 Texas Consumer Disclosures (TDPSA Alignment)",
        paragraphs: [
          "For residents of Texas and property owners with parcels in Tarrant, Dallas, Denton, Collin, Johnson, and adjacent North/Central Texas counties: Under the Texas Data Privacy and Security Act (TDPSA), Texas consumers may request access to, correction of, or deletion of their personal information. Furthermore, ABODE-MODE LLC affirms that it does not sell consumer personal data, does not process personal data for targeted advertising, and does not engage in profiling with legal consequences."
        ]
      }
    ]
  },
  {
    id: "revisions-governing-law",
    number: "08",
    title: "Policy Amendments & Governing Law",
    shortLabel: "8. Amendments & Law",
    highlightSummary: "Effective as of October 2026. Governed under the commercial laws of Colorado and Texas.",
    subsections: [
      {
        subtitle: "8.1 Versioning and Amendments",
        paragraphs: [
          "ABODE-MODE LLC reserves the right to amend this Privacy Policy to reflect modifications in telecommunications regulations (including revisions promulgated by the Federal Communications Commission or cellular carrier consortia) or real estate closing practices. Any revisions will be published immediately to this URL with an updated Effective Date."
        ]
      },
      {
        subtitle: "8.2 Severability and Entirety",
        paragraphs: [
          "If any provision of this Privacy Policy is adjudicated to be contrary to law or unenforceable by a tribunal of competent jurisdiction, the remaining clauses shall continue in full legal effect and force."
        ]
      }
    ]
  }
];
