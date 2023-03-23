export enum DomainSlug {
  PHI = "PHI",
  MATHS = "MATHS",
  PHYS = "PHYS",
  CHEM = "CHEM",
  BIO = "BIO",
  PSY = "PSY",
  SOCIO = "SOCIO",
  LANG = "LANG",
  HIST = "HIST",
  ANTHRO = "ANTHRO",
  ECON = "ECON",
}

export interface Domain {
  name: string;
  slug: DomainSlug;
}

export type DomainMap = {
  [key in DomainSlug]: Domain
}


export const DOMAINS: DomainMap = {
  [DomainSlug.PHI]: {
    name: "Philosophy",
    slug: DomainSlug.PHI,
  },
  [DomainSlug.MATHS]: {
    name: "Mathematics",
    slug: DomainSlug.MATHS,
  },
  [DomainSlug.PHYS]: {
    name: "Physics",
    slug: DomainSlug.PHYS,
  },
  [DomainSlug.CHEM]: {
    name: "Chemestry",
    slug: DomainSlug.CHEM,
  },
  [DomainSlug.BIO]: {
    name: "Biology",
    slug: DomainSlug.BIO,
  },
  [DomainSlug.PSY]: {
    name: "Psychology",
    slug: DomainSlug.PSY,
  },
  [DomainSlug.SOCIO]: {
    name: "Sociology",
    slug: DomainSlug.SOCIO,
  },
  [DomainSlug.LANG]: {
    name: "Linguistics",
    slug: DomainSlug.LANG,
  },
  [DomainSlug.HIST]: {
    name: "History",
    slug: DomainSlug.HIST,
  },
  [DomainSlug.ANTHRO]: {
    name: "Anthropology",
    slug: DomainSlug.ANTHRO,
  },
  [DomainSlug.ECON]: {
    name: "Economics",
    slug: DomainSlug.ECON,
  },
}
