import { Factory } from "fishery";

import { stackOverflowPostFactory } from "../../models/post/factory";
import { GetStackOverflowPosts } from "./schema";

export const getStackOverflowPostsFactory =
  Factory.define<GetStackOverflowPosts>(({ associations }) => {
    return {
      has_more: false,
      quota_max: 300,
      quota_remaining: 299,
      items: associations.items ?? stackOverflowPostFactory.buildList(10),
    };
  });
