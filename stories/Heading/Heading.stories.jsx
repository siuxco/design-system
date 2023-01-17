import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
  argTypes: {
    size: {control: { type: "select"}},
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "h3",
  children: "Heading title"
};
