import React from 'react';
import { Siux } from '../Siux/Siux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Utilities/Shadow',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Siux>;

const Template: ComponentStory<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateAll: ComponentStory<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Shadow</div>
    <div className="display-flex flex-wrap">
      <div className="margin-xxs">
        <div className="box-shadow-xs padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-xs</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-s padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-s</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-m padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-m</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-l padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-l</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-xl padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">box-shadow-xl</div>
      </div>
    </div>
    <div className="margin-s margin-top-xxl font-size-s font-weight-600 text-align-left">Shadow hover</div>
    <div className="display-flex flex-wrap">
      <div className="margin-xxs">
        <div className="hover:box-shadow-xs transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-xs</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-xs hover:box-shadow-s transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-s</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-s hover:box-shadow-m transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-m</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-m hover:box-shadow-l transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-l</div>
      </div>
      <div className="margin-xxs">
        <div className="box-shadow-l hover:box-shadow-xl transition-shadow transition-duration-400 padding-xxl border-radius-m margin-l" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">hover:box-shadow-xl</div>
      </div>
    </div>
  </>
);

// Stories
export const General = TemplateAll.bind({});

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  className: 'box-shadow-xs padding-xxl border-radius-m',
};

export const Small = Template.bind({});
Small.args = {
  className: 'box-shadow-s padding-xxl border-radius-m',
};

export const Medium = Template.bind({});
Medium.args = {
  className: 'box-shadow-m padding-xxl border-radius-m',
};

export const Large = Template.bind({});
Large.args = {
  className: 'box-shadow-l padding-xxl border-radius-m',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  className: 'box-shadow-xl padding-xxl border-radius-m',
};

export const HoverShadow = Template.bind({});
HoverShadow.args = {
  className: 'box-shadow-m hover:box-shadow-xl padding-xxl border-radius-m',
};
