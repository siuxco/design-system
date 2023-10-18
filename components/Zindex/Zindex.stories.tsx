import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Z Index',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
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

export const ZIndex1 = {
  render: Template,

  args: {
    className:
      'z-index-1 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-1',
  },
};

export const ZIndex2 = {
  render: Template,

  args: {
    className:
      'z-index-2 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-2',
  },
};

export const ZIndex3 = {
  render: Template,

  args: {
    className:
      'z-index-3 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-3',
  },
};

export const ZIndex4 = {
  render: Template,

  args: {
    className:
      'z-index-4 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-4',
  },
};

export const Zindex5 = {
  render: Template,

  args: {
    className:
      'z-index-5 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-5',
  },
};

export const Zindex6 = {
  render: Template,

  args: {
    className:
      'z-index-6 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-6',
  },
};

export const Zindex7 = {
  render: Template,

  args: {
    className:
      'z-index-7 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-7',
  },
};

export const Zindex8 = {
  render: Template,

  args: {
    className:
      'z-index-8 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-8',
  },
};

export const Zindex9 = {
  render: Template,

  args: {
    className:
      'z-index-9 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-9',
  },
};

export const Zindex10 = {
  render: Template,

  args: {
    className:
      'z-index-10 box-shadow-xs width-xxl height-xxl border-solid border-width-4 border-radius-xxl border-neutral-9 background-neutral-10',
  },
};
