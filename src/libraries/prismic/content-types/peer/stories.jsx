import React from "react";
import { storiesOf } from "@storybook/react";
import JSONDecorator from "%storybook/decorators/json";

import schema from "./schema";

const stories = storiesOf("Prismic Content Types: Peer", module);

stories.add("schema", () => <JSONDecorator schema={schema} />);
