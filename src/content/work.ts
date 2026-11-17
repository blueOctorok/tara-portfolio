/**
 * The record of the work: current roles, the numbers, the four stories,
 * and the path of jobs. Every figure here is on the resume.
 */

export type CurrentRole = {
  title: string;
  org: string;
  place: string;
  since: string;
  summary: string;
};

export const currentRoles: CurrentRole[] = [
  {
    title: "Risk Manager",
    org: "One Constructive Services",
    place: "Lakewood, Ohio",
    since: "June 2026",
    summary:
      "Flags schedule, scope, and cost risk on active construction projects, and keeps contracts, change orders, permits, submittals, and closeout files complete.",
  },
  {
    title: "General Manager",
    org: "ICON Cowork",
    place: "St. James School campus, Lakewood",
    since: "June 2026",
    summary:
      "Runs the day to day of a coworking community on a historic campus, from tours and renewals to vendors, billing, and member events.",
  },
];

export type Stat = {
  label: string;
  detail: string;
  /** What a screen reader and a no-JavaScript visit should land on. */
  value: string;
  count?: { from: number; to: number; suffix: string };
};

export const stats: Stat[] = [
  {
    label: "Bedford Place",
    detail: "Occupancy in the first year, up from 74%.",
    value: "100%",
    count: { from: 74, to: 100, suffix: "%" },
  },
  {
    label: "Sale",
    detail: "Bedford Place, 50% above a $5M valuation.",
    value: "$7.5M",
  },
  {
    label: "Properties",
    detail: "Five commercial and one 156-unit community.",
    value: "6",
  },
  {
    label: "Staff led",
    detail: "Including three property managers.",
    value: "10–15",
  },
];

export type Study = {
  sheet: string;
  title: string;
  context: string;
  years: string;
  summary: string;
  notes: string[];
};

export const studies: Study[] = [
  {
    sheet: "A-101",
    title: "Churchill Towers",
    context: "The King Group",
    years: "2022 – 2026",
    summary:
      "Led the renovation from kickoff through delivery. Coordinated contractors, timelines, and tenant communication so new interiors, amenities, and a property website landed on schedule, with as little disruption as a lived-in building allows.",
    notes: ["Renovation", "Tenant communication", "On schedule"],
  },
  {
    sheet: "A-102",
    title: "Bedford Place",
    context: "118 apartments · The King Group",
    years: "2020 – 2022",
    summary:
      "Raised occupancy from 74% to 100% in the first year. That turnaround helped position the property for a $7.5 million sale, 50% above its $5 million valuation. Work-order and preventive-maintenance systems came in at the same time, so the gain was not a one-time push.",
    notes: ["74% to 100%", "$7.5M sale", "Maintenance systems"],
  },
  {
    sheet: "A-103",
    title: "Six properties",
    context: "Regional property manager · The King Group",
    years: "2022 – 2026",
    summary:
      "Directed operations for five commercial buildings and one 156-unit residential community. Led 10 to 15 people, including three property managers, and kept work orders, bidding, inventory, and turnover inside the budget.",
    notes: ["5 commercial", "156 units", "10–15 staff"],
  },
  {
    sheet: "A-104",
    title: "The 9 and the County Headquarters",
    context: "Assistant to the project manager · Geis Construction",
    years: "2013 – 2014",
    summary:
      "Supported the project manager through demolition and build-out of two landmark downtown Cleveland projects. The day-to-day was permits, scheduling, contractor coordination, and the paperwork that keeps a job auditable.",
    notes: ["Permits", "Scheduling", "Downtown Cleveland"],
  },
];

export type Role = {
  years: string;
  title: string;
  org: string;
  place: string;
  summary: string;
};

/** Present first, then backward. The plumbline on the page follows this order. */
export const roles: Role[] = [
  {
    years: "June 2026 – Present",
    title: "Risk Manager",
    org: "One Constructive Services",
    place: "Lakewood, Ohio",
    summary:
      "Watches milestones on active builds and escalates a delay before it becomes the client's problem.",
  },
  {
    years: "June 2026 – Present",
    title: "General Manager",
    org: "ICON Cowork",
    place: "Lakewood, Ohio",
    summary:
      "Owns the member journey on the St. James School campus, plus billing in OfficeRnD and QuickBooks.",
  },
  {
    years: "Aug 2022 – May 2026",
    title: "Regional Property Manager",
    org: "The King Group",
    place: "Beachwood, Ohio",
    summary:
      "Also director of executive operations. Led Churchill Towers and the six-property portfolio, and prepared the reports ownership actually used.",
  },
  {
    years: "June 2020 – Aug 2022",
    title: "Property Manager",
    org: "The King Group",
    place: "Beachwood, Ohio",
    summary:
      "Took Bedford Place from 74% to 100% occupancy and installed the maintenance systems that kept costs in line.",
  },
  {
    years: "April 2015 – May 2020",
    title: "Property Administrator",
    org: "The King Group",
    place: "Beachwood, Ohio",
    summary:
      "Main tenant contact across five commercial properties, holding occupancy between 80% and 90%, and the person who kept rent rolls, renewals, and owner reports current.",
  },
  {
    years: "2014 – 2015",
    title: "Estimator",
    org: "Omni Construction",
    place: "Cleveland, Ohio",
    summary:
      "Built estimates and bid packages from plans and specifications, with subcontractors and suppliers on the pricing.",
  },
  {
    years: "2013 – 2014",
    title: "Assistant to the Project Manager",
    org: "Geis Construction",
    place: "Cleveland, Ohio",
    summary:
      "Permits, scheduling, and contractor coordination on The 9 and the Cuyahoga County Headquarters.",
  },
];

export const earlier =
  "Before the job sites: executive assistant to the owner at Multi-Care Management in Oakwood Village (2009–2011), office administrative assistant at CBF in Medina (2011–2013), and administrative assistant at eBlueprint in Cleveland (2007–2009).";
