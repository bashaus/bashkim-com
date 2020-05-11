import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import schema from "./schema";

export default {
  title: "Prismic/Content Types/Case Study",
};

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
