import React from "react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    state: {control: { type: "select"}},
    size: {control: { type: "select"}},
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: "default",
  label: "label"
};

export const Checked = Template.bind({});
Checked.args = {
  state: "checked",
  label: "label"
};
