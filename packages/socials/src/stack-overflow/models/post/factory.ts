import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { stackOverflowOwnerFactory } from "../owner/factory";
import { StackOverflowPostType } from "../post-type/schema";
import { StackOverflowPost } from "./schema";

export const stackOverflowPostFactory = Factory.define<StackOverflowPost>(
  ({ associations, sequence }) => {
    return {
      owner: associations.owner ?? stackOverflowOwnerFactory.build(),
      score: faker.number.int({ min: 1, max: 100 }),
      last_edit_date: faker.date.recent(),
      last_activity_date: faker.date.recent(),
      creation_date: faker.date.past(),
      post_type: faker.helpers.enumValue(StackOverflowPostType),
      post_id: 10_000_000 + sequence,
      content_license: "CC BY-SA 3.0",
      title: faker.lorem.sentence(),
      link: faker.internet.url(),
    };
  },
);
