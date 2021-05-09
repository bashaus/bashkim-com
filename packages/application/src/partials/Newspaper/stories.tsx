import faker from "faker";
import { withKnobs } from "@storybook/addon-knobs";

import { PartialNewspaper } from ".";

export default {
  title: "Partials/Newspaper",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialNewspaper>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
    <div>{faker.lorem.paragraph()}</div>
  </PartialNewspaper>
);
