import React from "react";
import { FormattedDate, FormattedDateProps } from ".";

export default {
  component: FormattedDate,
  title: "Formatters/FormattedDate",
  argTypes: {
    date: {
      control: "date",
      defaultValue: new Date(),
    },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ date, ...args }: FormattedDateProps) => (
  <FormattedDate date={new Date(date)} {...args} />
);

export const Now = Template.bind({});

export const January = Template.bind({});
January.args = { date: new Date("2020-01-01T00:00:00Z") };

export const February = Template.bind({});
February.args = { date: new Date("2020-02-01T00:00:00Z") };

export const March = Template.bind({});
March.args = { date: new Date("2020-03-01T00:00:00Z") };

export const April = Template.bind({});
April.args = { date: new Date("2020-04-01T00:00:00Z") };

export const May = Template.bind({});
May.args = { date: new Date("2020-05-01T00:00:00Z") };

export const June = Template.bind({});
June.args = { date: new Date("2020-06-01T00:00:00Z") };

export const July = Template.bind({});
July.args = { date: new Date("2020-07-01T00:00:00Z") };

export const August = Template.bind({});
August.args = { date: new Date("2020-08-01T00:00:00Z") };

export const September = Template.bind({});
September.args = { date: new Date("2020-09-01T00:00:00Z") };

export const October = Template.bind({});
October.args = { date: new Date("2020-10-01T00:00:00Z") };

export const November = Template.bind({});
November.args = { date: new Date("2020-11-01T00:00:00Z") };

export const December = Template.bind({});
December.args = { date: new Date("2020-12-01T00:00:00Z") };
