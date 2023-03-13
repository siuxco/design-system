import React from 'react';
import { Tooltip } from './Tooltip';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    variant: { control: { type: 'select' } },
    direction: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (arguments_) => (
  <>
    <Tooltip {...arguments_}>
      <span className="display-flex align-content-center">
        <i className="icon-system-information-line color-primary-7 font-size-m margin-right-xxs" />
        <span className="color-neutral-7">Tooltip</span>
      </span>
    </Tooltip>
  </>
);

export const Top = Template.bind({});
Top.args = {
  direction: 'top',
  tooltipContent: [<div key="alpha">Message</div>],
};

export const Bottom = Template.bind({});
Bottom.args = {
  direction: 'bottom',
  tooltipContent: [<div key="alpha">Message</div>],
};

export const Left = Template.bind({});
Left.args = {
  direction: 'left',
  tooltipContent: [<div key="alpha">Message</div>],
};

export const Right = Template.bind({});
Right.args = {
  direction: 'right',
  tooltipContent: [<div key="alpha">Message</div>],
};

export const LigthVariant = Template.bind({});
LigthVariant.args = {
  direction: 'top',
  variant: 'white',
  tooltipContent: [<div key="alpha">Message</div>],
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  direction: 'top',
  variant: 'white',
  className: 'border-width-1 border-neutral-2 border-style-solid',
  tooltipContent: [
    <div key="alpha">
      <div className="font-size-s color-primary-7 font-weight-600">Message</div>
    </div>,
  ],
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  direction: 'top',
  variant: 'white',
  className: '',
  tooltipContent: [
    <div key="alpha" className="padding-bottom-xxs" style={{ width: '160px' }}>
      <div className="display-flex align-items-center">
        <i className="icon-system-lightbulb-line margin-right-xxs font-size-m color-primary-7" />
        <div className="font-size-s line-height-m font-weight-600">Custom title</div>
      </div>
      <div className="line-height-s color-neutral-7 margin-top-xxs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic odit saepe aliquid deserunt.
      </div>
    </div>,
  ],
};

export const Emoji = Template.bind({});
Emoji.args = {
  direction: 'top',
  variant: 'black',
  tooltipContent: [<div key="alpha">🔥</div>],
};
