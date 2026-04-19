import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { StackOverflowOwner } from "./schema";

export const stackOverflowOwnerFactory = Factory.define<StackOverflowOwner>(
  ({ sequence }) => {
    return {
      account_id: 100_000 + sequence,
      reputation: faker.number.int({ min: 100, max: 9_999 }),
      user_id: 100_000 + sequence,
      user_type: "registered",
      accept_rate: faker.number.int({ min: 50, max: 100 }),
      profile_image:
        "https://www.gravatar.com/avatar/a0de29fed6cb278c6650cf0698253586?s=256&d=identicon&r=PG",
      display_name: faker.internet.username(),
      link: faker.internet.url(),
    };
  },
);
