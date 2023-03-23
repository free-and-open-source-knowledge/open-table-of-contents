
import { Domain } from "domain";
import { DomainSlug } from "../domains.js";
import { AbstractSubject } from "./subjects.js";

export enum MathsSubjectEnum {
  PRECALCULUS = "PRECALCULUS",
  CALCULUS = "CALCULUS",
  LINEAR_ALGEBRA = "LINEAR_ALGEBRA",
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
  [MathsSubjectEnum.LINEAR_ALGEBRA]: {
    name: "Linear Algebra",
    domain: DomainSlug.MATHS,
    slug: MathsSubjectEnum.LINEAR_ALGEBRA,
  },
};
