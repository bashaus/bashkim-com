import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { StackOverflowUser } from "./schema";

export const stackOverflowUserFactory = Factory.define<StackOverflowUser>(
  ({ sequence }) => {
    return {
      badge_counts: {
        bronze: 35,
        silver: 18,
        gold: 2,
      },
      account_id: 100_000 + sequence,
      is_employee: false,
      last_modified_date: faker.date.recent(),
      last_access_date: faker.date.recent(),
      reputation_change_year: 0,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 1723,
      creation_date: faker.date.recent(),
      user_type: "registered",
      user_id: 600240,
      accept_rate: 92,
      location: `${faker.location.city()}, ${faker.location.country()}`,
      website_url: faker.internet.url(),
      link: faker.internet.url(),
      profile_image:
        "https://www.gravatar.com/avatar/a0de29fed6cb278c6650cf0698253586?s=256&d=identicon&r=PG",
      display_name: faker.internet.username(),
    };
  },
);
