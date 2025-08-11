import { type SchemaTypeDefinition } from "sanity";
import { sectionType } from "./sectionType";
import { pageType } from "./pageType";
import { gameType } from "./gameType";
import { blogType } from "./blogType";
import { contactType } from "./contactType";
import { serviceType } from "./serviceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sectionType, pageType, serviceType, gameType, blogType, contactType],
};
