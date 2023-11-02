import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Size',
  component: Siux,
  argTypes: {
    size: {
      options: [
        'width-xxl height-xxl',
        'width-xl height-xl',
        'width-l height-l',
        'width-m height-m',
        'width-s height-s',
        'width-xs height-xs',
        'width-xxs height-xxs',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  console.log(arguments_);
  return (
    <div
      className={`${arguments_['size']}  margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3`}
    />
  );
};
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Size</div>
    <div className="display-flex flex-wrap">
      <div className="margin-xl">
        <div className="width-xxl height-xxl margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xxl</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xxl</div>
      </div>
      <div className="margin-xl">
        <div className="width-xl height-xl margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xl</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xl</div>
      </div>
      <div className="margin-xl">
        <div className="width-l height-l margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-l</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-l</div>
      </div>
      <div className="margin-xl">
        <div className="width-m height-m margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-m</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-m</div>
      </div>
      <div className="margin-xl">
        <div className="width-s height-s margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-s</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-s</div>
      </div>
      <div className="margin-xl">
        <div className="width-xs height-xs margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xs</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xs</div>
      </div>
      <div className="margin-xl">
        <div className="width-xxs height-xxs margin-l border-radius-xxs transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xxs</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xxs</div>
      </div>
    </div>
  </>
);

export const General = {
  render: TemplateGeneral,
};

export const XXL = {
  render: Template,
  args: {
    size: 'width-xxl height-xxl',
  },
};

export const XL = {
  render: Template,

  args: {
    size: 'width-xl height-xl',
  },
};

export const L = {
  render: Template,

  args: {
    size: 'width-l height-l',
  },
};

export const M = {
  render: Template,

  args: {
    size: 'width-m height-m',
  },
};

export const S = {
  render: Template,

  args: {
    size: 'width-s height-s',
  },
};

export const XS = {
  render: Template,

  args: {
    size: 'width-xs height-xs',
  },
};

export const XXS = {
  render: Template,

  args: {
    className: 'width-xxs height-xxs',
  },
};
