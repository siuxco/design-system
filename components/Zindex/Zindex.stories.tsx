import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Z Index',
  component: Siux,
  argTypes: {
    zIndex: {
      options: [
        'z-index-1',
        'z-index-2',
        'z-index-3',
        'z-index-4',
        'z-index-5',
        'z-index-6',
        'z-index-7',
        'z-index-8',
        'z-index-9',
        'z-index-10',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return (
    <div
      className={`${arguments_['zIndex']} box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 `}
    />
  );
};
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Z Index</div>
    <div className="display-flex ">
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-1 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div
            className="text-align-center color-neutral-10 font-family-secondary font-size-xs margin-left-xxs line-height-m"
            style={{ marginLeft: '-6px' }}>
            1
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-2 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-10 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            2
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-3 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-10 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            3
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-4 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-10 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            4
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-5 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-10 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            5
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-6 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-1 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            6
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-7 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-1 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            7
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-8 display-flex align-items-center justify-content-center "
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-1 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            8
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-9 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-1 font-family-secondary font-size-xs margin-l line-height-m margin-left-m">
            9
          </div>
        </div>
      </div>
      <div className="display-flex aligin-items-center justify-content-center">
        <div
          className="box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-10 display-flex align-items-center justify-content-center"
          style={{ marginRight: '-20px' }}>
          <div className="text-align-center color-neutral-1 font-family-secondary font-size-xs margin-l line-height-m">
            10
          </div>
        </div>
      </div>
    </div>
  </>
);

export const General = {
  render: TemplateGeneral,
};

export const z1 = {
  render: Template,

  args: {
    zIndex: 'z-index-1 background-neutral-1 ',
  },
};

export const z2 = {
  render: Template,

  args: {
    zIndex: 'z-index-2 background-neutral-2 ',
  },
};

export const z3 = {
  render: Template,

  args: {
    zIndex: 'z-index-3  background-neutral-3 ',
  },
};

export const z4 = {
  render: Template,

  args: {
    zIndex: 'z-index-4 background-neutral-4 ',
  },
};
export const z5 = {
  render: Template,

  args: {
    zIndex: 'z-index-5 background-neutral-5',
  },
};
export const z6 = {
  render: Template,

  args: {
    zIndex: 'z-index-6 background-neutral-6',
  },
};

export const z7 = {
  render: Template,

  args: {
    zIndex: 'z-index-7 background-neutral-7',
  },
};

export const z8 = {
  render: Template,

  args: {
    zIndex: 'z-index-8 background-neutral-8',
  },
};

export const z9 = {
  render: Template,

  args: {
    zIndex: 'z-index-9 background-neutral-9 ',
  },
};

export const z10 = {
  render: Template,

  args: {
    zIndex: 'z-index-10 background-neutral-10 ',
  },
};
