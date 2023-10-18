import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Border',
  component: Siux,
  argTypes: {
    'border-width': {
      options: ['border-width-1', 'border-width-2', 'border-width-3', 'border-width-4', 'border-width-5'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return (
    <div
      className={`${arguments_['border-width']} padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none`}
    />
  );
};
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Border</div>
    <div className="display-flex flex-wrap">
      <div className="margin-s display-flex flex-direction-column align-items-center justify-content-center">
        <div className="border-width-1 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-1</div>
      </div>
      <div className="margin-s display-flex flex-direction-column align-items-center justify-content-center">
        <div className="border-width-2 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-2</div>
      </div>
      <div className="margin-s display-flex flex-direction-column align-items-center justify-content-center">
        <div className="border-width-3 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-3</div>
      </div>
      <div className="margin-s display-flex flex-direction-column align-items-center justify-content-center">
        <div className="border-width-4 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-4</div>
      </div>
      <div className="margin-s display-flex flex-direction-column align-items-center justify-content-center">
        <div className="border-width-5 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-5</div>
      </div>
    </div>
  </div>
);

export const General = {
  render: TemplateGeneral,
};

export const Width1 = {
  render: Template,
  args: {
    'border-width': 'border-width-1',
  },
};

export const Width2 = {
  render: Template,
  args: {
    'border-width': 'border-width-2',
  },
};

export const Width3 = {
  render: Template,
  args: {
    'border-width': 'border-width-3',
  },
};

export const Width4 = {
  render: Template,
  args: {
    'border-width': 'border-width-4',
  },
};

export const Width5 = {
  render: Template,
  args: {
    'border-width': 'border-width-5',
  },
};