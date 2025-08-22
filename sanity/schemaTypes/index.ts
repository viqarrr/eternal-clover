import { type SchemaTypeDefinition } from "sanity";
import { sectionType } from "./sectionType";
import { pageType } from "./pageType";
import { serviceType } from "./serviceType";
import { partnerType } from "./partnerType";
import { gameType } from "./gameType";
import { blogType } from "./blogType";
import { teamType } from "./teamType";
import { contactType } from "./contactType";
import { privacyPolicyType } from "./privacyPolicyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sectionType, pageType, serviceType, partnerType, gameType, blogType, teamType, contactType, privacyPolicyType],
};
