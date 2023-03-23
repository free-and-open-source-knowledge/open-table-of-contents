
import { DomainSlug } from "../domains.js";
import { AbstractSubject } from "./subjects.js";

export enum MathsSubjectEnum {
  PRECALCULUS = "PRECALCULUS",
  CALCULUS = "CALCULUS",
}


export interface MathsSubject extends AbstractSubject {
  name: string;
  domain: DomainSlug.MATHS;
  slug: MathsSubjectEnum;
}

export type SubjectMap = Record<MathsSubjectEnum, MathsSubject>;

export const SUBJECTS: SubjectMap = {
  [MathsSubjectEnum.PRECALCULUS]: {
    name: "Precalculus",
    domain: DomainSlug.MATHS,
    slug: MathsSubjectEnum.PRECALCULUS,
  },
  [MathsSubjectEnum.CALCULUS]: {
    name: "Calculus",
    domain: DomainSlug.MATHS,
    slug: MathsSubjectEnum.CALCULUS,
  },
};
