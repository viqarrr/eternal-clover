import { type SchemaTypeDefinition } from "sanity";
import { sectionType } from "./sectionType";
import { pageType } from "./pageType";
import { gameType } from "./gameType";
import { blogType } from "./blogType";
import { teamType } from "./teamType";
import { contactType } from "./contactType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sectionType, pageType, gameType, blogType, teamType, contactType],
};
