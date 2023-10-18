import React from 'react';
import { Tooltip } from './Tooltip';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    variant: { control: { type: 'select' } },
    direction: { control: { type: 'select' } },
  },
} as Meta<typeof Tooltip>;

const TriggerTemplate = (
  <span className="display-flex align-content-center">
    <i className="icon-system-information-line color-primary-7 font-size-m margin-right-xxs" />
    <span className="color-neutral-7">Tooltip</span>
  </span>
);

export const Top = {
  args: {
    direction: 'top',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">Message</div>
      </Tooltip.Content>,
    ],
  },
};

export const Bottom = {
  args: {
    direction: 'bottom',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">Message</div>
      </Tooltip.Content>,
    ],
  },
};

export const Left = {
  args: {
    direction: 'left',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">Message</div>
      </Tooltip.Content>,
    ],
  },
};

export const Right = {
  args: {
    direction: 'right',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">Message</div>
      </Tooltip.Content>,
    ],
  },
};

export const LigthVariant = {
  args: {
    direction: 'top',
    variant: 'white',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">Message</div>
      </Tooltip.Content>,
    ],
  },
};

export const CustomStyle = {
  args: {
    direction: 'top',
    variant: 'white',
    className: 'border-width-1 border-neutral-2 border-style-solid',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">
          <div className="font-size-s color-primary-7 font-weight-600">Message</div>
        </div>
      </Tooltip.Content>,
    ],
  },
};

export const CustomContent = {
  args: {
    direction: 'top',
    variant: 'white',
    className: '',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha" className="padding-bottom-xxs" style={{ width: '160px' }}>
          <div className="display-flex align-items-center">
            <i className="icon-system-lightbulb-line margin-right-xxs font-size-m color-primary-7" />
            <div className="font-size-s line-height-m font-weight-600">Custom title</div>
          </div>
          <div className="line-height-s color-neutral-7 margin-top-xxs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic odit saepe aliquid deserunt.
          </div>
        </div>
      </Tooltip.Content>,
    ],
  },
};

export const Emoji = {
  args: {
    direction: 'top',
    variant: 'black',
    children: [
      <Tooltip.Trigger key="trigger">{TriggerTemplate}</Tooltip.Trigger>,
      <Tooltip.Content key="content">
        <div key="alpha">🔥</div>
      </Tooltip.Content>,
    ],
  },
};
