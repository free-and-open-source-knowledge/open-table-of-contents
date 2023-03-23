
import { DomainSlug } from "../domains.js";
import { AbstractSubject } from "./subjects.js";


export enum PhilosophySubjectEnum {
  HISTORY_ANCIENT = "HISTORY_ANCIENT",
  HISTORY_MEDIEVAL = "HISTORY_MEDIEVAL",
  HISTORY_MODERN = "HISTORY_MODERN",
  HISTORY_CONTEMPORARY = "HISTORY_CONTEMPORARY",
  AESTHETICS = "AESTHERICS",
  EPISTEMOLOGY = "EPISTEMOLOGY",
  ETICS = "ETICS",
  POLITICS = "POLITICS",
}


export interface PhilosophySubject extends AbstractSubject {
  name: string;
  domain: DomainSlug.PHI;
  slug: PhilosophySubjectEnum;
}

export type SubjectMap = Record<PhilosophySubjectEnum, PhilosophySubject>;

export const SUBJECTS: SubjectMap = {
  [PhilosophySubjectEnum.HISTORY_ANCIENT]: {
    name: "History of Ancient Philosophy",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.HISTORY_ANCIENT,
  },
  [PhilosophySubjectEnum.HISTORY_MEDIEVAL]: {
    name: "History of Medieval Philosophy",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.HISTORY_MEDIEVAL,
  },
  [PhilosophySubjectEnum.HISTORY_MODERN]: {
    name: "History of Modern Philosophy",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.HISTORY_MODERN,
  },
  [PhilosophySubjectEnum.HISTORY_CONTEMPORARY]: {
    name: "History of Contemporary Philosophy",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.HISTORY_ANCIENT,
  },
  [PhilosophySubjectEnum.AESTHETICS]: {
    name: "Aesthetics",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.AESTHETICS,
  },
  [PhilosophySubjectEnum.EPISTEMOLOGY]: {
    name: "Epistemology",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.EPISTEMOLOGY,
  },
  [PhilosophySubjectEnum.ETICS]: {
    name: "Etics",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.ETICS,
  },
  [PhilosophySubjectEnum.POLITICS]: {
    name: "Politics",
    domain: DomainSlug.PHI,
    slug: PhilosophySubjectEnum.POLITICS,
  },
};
