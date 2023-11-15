import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;

export default {
  title: 'Design Tokens/Logo',
  component: Siux,
  argTypes: {
    logo: {
      options: ['logo-main-logo'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

export const General = {
  parameters: {
    docs: {
      source: {
        code: `
        <>
   
      <div className="margin-xxs">
        <div
          className="logo-main-logo box-shadow-xxs padding-xxl border-radius-m margin-l overflow-y-hidden background-position-center background-size-cover"
        />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">logo-main-logo</div>
 
  </>`,
      },
    },
  },
  render: () => (
    <>
      <div className="margin-s font-size-s font-weight-600 text-align-left">Logo</div>
      <div className="display-flex flex-wrap">
        <div className="margin-xxs">
          <div
            className="logo-main-logo box-shadow-xxs padding-xxl border-radius-m margin-l overflow-y-hidden background-position-center background-size-cover"
            style={{ backgroundImage: "url('https://siux.studio/images/siux-studio.svg')" }}
          />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">logo-main-logo</div>
        </div>
      </div>
    </>
  ),
};

export const MainLogo = {
  render: Template,

  args: {
    logo: 'logo-main-logo z-index-1 box-shadow-xxs padding-xxl border-radius-m',
    children: (
      <>
        <div
          className="logo-main-logo box-shadow-xxs padding-xxl border-radius-m margin-l overflow-y-hidden background-position-center background-size-cover"
          style={{ backgroundImage: "url('https://siux.studio/images/siux-studio.svg')" }}
        />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">logo-main-logo</div>
      </>
    ),
  },
};
