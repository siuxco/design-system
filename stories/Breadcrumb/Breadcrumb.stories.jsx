import React from "react";
import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Molecules/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    separator: {control: { type: "select"}},
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const Arrow = Template.bind({});
Arrow.args = {
  separator: "arrow",
};

export const Slash = Template.bind({});
Slash.args = {
  separator: "slash",
};

export const Dash = Template.bind({});
Dash.args = {
  separator: "dash",
};
