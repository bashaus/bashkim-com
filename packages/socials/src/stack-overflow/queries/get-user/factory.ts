import { Factory } from "fishery";

import { stackOverflowUserFactory } from "../../models/user/factory";
import { GetStackOverflowUser } from "./schema";

export const getStackOverflowUserFactory = Factory.define<GetStackOverflowUser>(
  ({ associations }) => {
    return {
      has_more: false,
      quota_max: 300,
      quota_remaining: 299,
      items: associations.items ?? stackOverflowUserFactory.buildList(1),
    };
  },
);
