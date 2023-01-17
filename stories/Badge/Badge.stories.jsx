import React from "react";
import { Badge } from "./Badge";

export default {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    type: {control: { type: "select"}},
  },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  children: "Badge",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Badge",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Badge",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "tertiary",
  children: "Badge",
};
