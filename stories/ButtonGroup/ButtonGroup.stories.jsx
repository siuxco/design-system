import React from "react";

import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    state: {control: { type: "select"}},
  },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Info = Template.bind({});
Info.args = {
  state: "info",
  children: "Alert",
};
