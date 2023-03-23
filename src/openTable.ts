import { DomainMap } from "./domains.js";

export interface OpenTableOfContents {
  domains: DomainMap
  subjects: any[]
}

export const buildJson = (domains: DomainMap, subjects: any[]) => {
  return {
    domains,
    subjects,
  };
};
