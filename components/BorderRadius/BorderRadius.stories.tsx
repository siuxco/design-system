import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Border Radius',
  component: Siux,
  argTypes: {
    'border-radius': {
      options: [
        'border-radius-xxs',
        'border-radius-xs',
        'border-radius-s',
        'border-radius-m',
        'border-radius-l',
        'border-radius-xl',
        'border-radius-xxl',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  console.log(arguments_);
  return (
    <div
      className={`${arguments_['border-radius']} border-width-3 padding-m margin-m transition-all width-xxl height-xxl border-style-solid border-primary-7`}
    />
  );
};

const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-xl font-size-s font-weight-600 text-align-left">Border Radius</div>
    <div className="display-flex flex-wrap justify-content-center items-align-center">
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 28 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-xxl
        </div>
      </div>
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 24 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-xl
        </div>
      </div>
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 20 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-l
        </div>
      </div>
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 16 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-m
        </div>
      </div>
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 12 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-s
        </div>
      </div>
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 8 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-xs
        </div>
      </div>
      <div className="margin-xxs display-flex flex-direction-column justify-content-center align-items-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 4 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-xxs
        </div>
      </div>
    </div>
  </>
);

export const General = {
  render: TemplateGeneral,
};

export const XXS = {
  render: Template,
  args: {
    'border-radius': 'border-radius-xxs',
  },
};

export const XS = {
  render: Template,

  args: {
    'border-radius': 'border-radius-xs',
  },
};

export const S = {
  render: Template,

  args: {
    'border-radius': 'border-radius-s',
  },
};

export const M = {
  render: Template,

  args: {
    'border-radius': 'border-radius-m',
  },
};

export const L = {
  render: Template,

  args: {
    'border-radius': 'border-radius-l',
  },
};

export const XL = {
  render: Template,

  args: {
    'border-radius': 'border-radius-xl',
  },
};

export const XXL = {
  render: Template,

  args: {
    'border-radius': 'border-radius-xxl',
  },
};
