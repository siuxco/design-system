import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Border',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Border</div>
    <div className="display-flex flex-wrap">
      <div className="margin-s">
        <div className="border-width-1 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-1</div>
      </div>

      <div className="margin-s">
        <div className="border-width-2 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-2</div>
      </div>
      <div className="margin-s">
        <div className="border-width-3 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-3</div>
      </div>
      <div className="margin-s">
        <div className="border-width-4 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-4</div>
      </div>
      <div className="margin-s">
        <div className="border-width-5 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">border-width-5</div>
      </div>
    </div>
  </>
);

// Stories
export const General = TemplateGeneral.bind({});

export const Width1 = Template.bind({});
Width1.args = {
  className:
    'border-width-1 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none',
};

export const Width2 = Template.bind({});
Width2.args = {
  className:
    'border-width-2 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none',
};

export const Width3 = Template.bind({});
Width3.args = {
  className:
    'border-width-3 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none',
};

export const Width4 = Template.bind({});
Width4.args = {
  className:
    'border-width-4 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none',
};

export const Width5 = Template.bind({});
Width5.args = {
  className:
    'border-width-5 padding-m margin-m transition-all width-xxl border-style-solid border-primary-7 border-right-none border-top-none border-left-none',
};
