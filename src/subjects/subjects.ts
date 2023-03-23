import { DomainSlug } from "../domains.js";

export interface AbstractSubject {
  name: string;
  domain: DomainSlug
  slug: string;
};

