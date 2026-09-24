export const siteContent = {
  organizationName: "Panchayat Resolution Centre",
  mission: "Strengthening Grassroot Dispute Resolution Ecosystem in Panchayats.",
  vision: "Recognition of India's Panchayat Model of Dispute Resolution.",
  about: {
    panchayat: {
      title: "Panchayat",
      description:
        "A grassroots deliberative assembly - a local institution for collective dialogue, the resolution of community problems and disputes, and the advancement of participatory, responsive, and inclusive village governance.",
    },
    cause: {
      title: "Strong Panchayats. Empowered communities.",
      description:
        "The absence of adequate grassroots grievance-redressal mechanisms creates greater scope for corruption, places additional burdens on the local judiciary, and perpetuates inequalities in the distribution of resources.",
      response:
        "PRC envisions empowering Panchayats with accessible information, institutional capacity, legal and administrative support, effective grievance-resolution mechanisms, and community participation.",
    },
  },
  approach: [
    {
      name: "Access",
      description: "Communities access information and identify appropriate avenues for assistance.",
    },
    {
      name: "Aid",
      description: "Free assistance to register an eligible claim and referral of legal aid cases to local authority.",
    },
    {
      name: "Resolve",
      description: "Resolution of community problems and disputes.",
    },
    {
      name: "Reward",
      description: "Gift coupons over registering PRC services and financial support to resolve eligible disputes at PRC.",
    },
  ],
  contactEmail: "panchayatresolutioncentre@gmail.com",
  team: [
    {
      name: "Shefali Roy",
      role: "Mentor",
      description: "Advocate & Mediator",
      image: "/images/team-shefali-roy.png",
    },
    {
      name: "Sourav Karmakar",
      role: "Founder & Director",
      image: "/images/team-sourav-karmakar.png",
    },
    {
      name: "Daisy Pallawi",
      role: "Advocate & Founding Member",
      image: "/images/team-daisy-pallawi.png",
    },
    {
      name: "Ritwik Upadhyay",
      role: "Founding Member",
      image: "/images/team-ritwik-upadhyay.png",
    },
  ],
  workAreas: [
    {
      name: "Legal Awareness",
      description: "Help communities understand rights, processes and available avenues.",
    },
    {
      name: "Legal Aid & Assistance",
      description: "Connect eligible people with legal assistance and guidance.",
    },
    {
      name: "Community Mediation",
      description: "Promote community-level resolution and mediation awareness.",
    },
    {
      name: "Panchayat Capacity",
      description: "Strengthen information, mediation and conflict-resolution capacity.",
    },
    {
      name: "Welfare Access",
      description: "Help communities navigate entitlements and welfare schemes.",
    },
    {
      name: "Community Participation",
      description: "Dialogue, awareness and community participation in governance.",
    },
  ],
  workThemes: ["Dialogue", "Bootcamp", "Awareness", "Campaigns"],
  impact: {
    dimensions: [
      "Accessible information",
      "Institutional capacity",
      "Legal and administrative support",
      "Grievance-resolution mechanisms",
      "Community participation",
      "Welfare delivery and local issue resolution",
    ],
    ecosystemCategories: [
      "SLSA",
      "DLSA",
      "Experts",
      "CSR Partners",
      "Local Establishment",
      "Neutrals",
      "Volunteers",
      "Administration",
      "Students",
      "Academic Chapter",
    ],
  },
  statedMilestones: [
    { value: "10,000", label: "Primary Legal Status" },
    { value: "1,000", label: "Village Panchayat Drives" },
    { value: "100", label: "Legal Practitioners" },
    { value: "1,000", label: "Professional Mediators" },
    { value: "500", label: "Community Mediators" },
    { value: "₹1,000,000", label: "Resolution Reward" },
  ],
  getInvolved: {
    engagementAreas: [
      "Community outreach",
      "Welfare assistance",
      "Legal aid",
      "Mediation awareness",
      "Awareness drives",
      "Help Desk sessions",
      "Resolution sessions for referred cases",
    ],
    studentEngagement: [
      "Community outreach",
      "Welfare assistance",
      "Legal aid",
      "Mediation awareness",
    ],
  },
  statedCommitments: [
    {
      target: "1000",
      unit: "Village Panchayats",
      label: "Target drives",
    },
    {
      target: "1000000",
      unit: "Resolution reward",
      label: "Raising funds of",
    },
    {
      target: "100",
      unit: "Legal practitioners",
      label: "Empanelment of",
    },
    {
      target: "500",
      unit: "Community mediators",
      label: "Training of",
    },
    {
      target: "10000",
      unit: "Primary legal status",
      label: "Total target",
    },
    {
      target: "1000",
      unit: "Professional mediators",
      label: "Empanelment of",
    },
  ],
} as const;

export type SiteContent = typeof siteContent;
