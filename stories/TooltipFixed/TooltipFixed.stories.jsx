import React from "react";

import { Tooltip } from "./TooltipFixed";

export default {
  title: "Atoms/Tooltip Fixed",
  component: Tooltip,
  argTypes: {
    trigger: {
      control: {
        type: null
      }
    }
  },
};

const Template = (args) => <Tooltip {...args} />

export const Default = Template.bind({});

Default.args = {
  children: "Tooltip",
};

Default.decorators = [
  (Story) => (
    <div style={{ margin: '20px' }}>
      <Story />
    </div>
  )
];