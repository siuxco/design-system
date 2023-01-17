import React from "react";
import { Alert } from "./Alert";

export default {
  title: "Molecules/Alert",
  component: Alert,
  argTypes: {
    state: {control: { type: "select"}},
  },
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  state: "info",
  children: "Alert",
};

export const Success = Template.bind({});
Success.args = {
  state: "success",
  children: "Alert",
};

export const Warning = Template.bind({});
Warning.args = {
  state: "warning",
  children: "Alert",
};

export const Error = Template.bind({});
Error.args = {
  state: "error",
  children: "Alert",
};
