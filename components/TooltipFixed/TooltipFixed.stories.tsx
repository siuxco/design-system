import React from 'react';

import { TooltipFixed } from './TooltipFixed';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Data Display/Tooltip Fixed',
  component: TooltipFixed,
  argTypes: {
    trigger: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (arguments_) => <TooltipFixed {...arguments_} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Tooltip',
  trigger: (
    <div className="border-radius-full border-primary-3 border-solid border-style-solid border-width-2 width-l height-l display-flex align-items-center justify-center padding-xxs box-sizing-border-box">
      <Icon icon="question-mark" className="color-primary-3" />
    </div>
  ),
};

Default.decorators = [
  (Story) => (
    <div style={{ margin: '20px' }}>
      <Story />
    </div>
  ),
];
