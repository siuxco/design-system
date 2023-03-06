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
    <div className="margin-s font-size-s font-weight-600 text-align-center">Shadow</div>
    <div className="display-flex">
      <div>
        <div className="box-shadow-xs padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">xs</div>
      </div>
      <div>
        <div className="box-shadow-s padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">s</div>
      </div>
      <div>
        <div className="box-shadow-m padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">m</div>
      </div>
      <div>
        <div className="box-shadow-l padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">l</div>
      </div>
      <div>
        <div className="box-shadow-xl padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">xl</div>
      </div>
    </div>
    <div className="margin-s margin-top-xxl font-size-s font-weight-600 text-align-center">Shadow hover</div>
    <div className="display-flex">
      <div>
        <div className="hover:box-shadow-xs padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">xs</div>
      </div>
      <div>
        <div className="box-shadow-xs hover:box-shadow-s padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">s</div>
      </div>
      <div>
        <div className="box-shadow-s hover:box-shadow-m padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">m</div>
      </div>
      <div>
        <div className="box-shadow-m hover:box-shadow-l padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">l</div>
      </div>
      <div>
        <div className="box-shadow-l hover:box-shadow-xl padding-xxl border-radius-m margin-s" />
        <div className="text-align-center color-neutral-7">xl</div>
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
