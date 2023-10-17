import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Border Radius',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
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

// Stories
export const General = TemplateGeneral.bind({});

export const ExtraExtraSmall = Template.bind({});
ExtraExtraSmall.args = {
  className: 'display-flex flex-direction-column',
  children: (
    <>
      <div className="justify-content-center items-align-center">
        <div
          className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
          style={{ borderTopLeftRadius: 4 }}
        />
        <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
          border-radius-xxs
        </div>
      </div>
    </>
  ),
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: (
    <>
      <div
        className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
        style={{ borderTopLeftRadius: 8 }}
      />
      <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
        border-radius-xs
      </div>
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  children: (
    <>
      <div
        className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
        style={{ borderTopLeftRadius: 12 }}
      />
      <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
        border-radius-s
      </div>
    </>
  ),
};

export const Medium = Template.bind({});
Medium.args = {
  children: (
    <>
      <div
        className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
        style={{ borderTopLeftRadius: 16 }}
      />
      <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
        border-radius-m
      </div>
    </>
  ),
};

export const Large = Template.bind({});
Large.args = {
  children: (
    <>
      <div
        className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
        style={{ borderTopLeftRadius: 20 }}
      />
      <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
        border-radius-l
      </div>
    </>
  ),
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: (
    <>
      <div
        className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
        style={{ borderTopLeftRadius: 24 }}
      />
      <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
        border-radius-xl
      </div>
    </>
  ),
};

export const ExtraExtraLarge = Template.bind({});
ExtraExtraLarge.args = {
  children: (
    <>
      <div
        className="transition-all width-xxl height-xxl border-style-solid border-primary-7 border-width-3 border-right-none border-bottom-none"
        style={{ borderTopLeftRadius: 28 }}
      />
      <div className="margin-top-l text-align-center color-neutral-7 font-family-secondary font-size-xs">
        border-radius-xxl
      </div>
    </>
  ),
};
