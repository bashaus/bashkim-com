import { FormattedLifespan, FormattedLifespanProps } from ".";

export default {
  component: FormattedLifespan,
  title: "Formatters/FormattedLifespan",
  argTypes: {
    startDate: {
      control: "date",
      defaultValue: new Date().toDateString(),
    },
    endDate: {
      control: "date",
      defaultValue: new Date().toDateString(),
    },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ startDate, endDate, ...args }: FormattedLifespanProps) => (
  <FormattedLifespan
    startDate={new Date(startDate)}
    endDate={endDate ? new Date(endDate) : undefined}
    {...args}
  />
);

export const Render = Template.bind({});
