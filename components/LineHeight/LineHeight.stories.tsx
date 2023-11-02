import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Line Height',
  component: Siux,
  argTypes: {
    lineHeight: {
      options: [
        'line-height-xxl',
        'line-height-xl',
        'line-height-l',
        'line-height-m',
        'line-height-s',
        'line-height-xs',
        'line-height-xxs',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return (
    <div
      className={`${arguments_['lineHeight']} display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs`}>
      {arguments_['children']}
    </div>
  );
};
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Line Height</div>
    <div className="display-flex flex-wrap">
      <div className="margin-xxl">
        <div className="line-height-xxl display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">XXL</div>
        </div>
      </div>
      <div className="margin-xxl">
        <div className="line-height-xl display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">XL</div>
        </div>
      </div>
      <div className="margin-xxl">
        <div className="line-height-l display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">L</div>
        </div>
      </div>
      <div className="margin-xxl">
        <div className="line-height-m display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">M</div>
        </div>
      </div>
      <div className="margin-xxl">
        <div className="line-height-s display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">S</div>
        </div>
      </div>
      <div className="margin-xxl">
        <div className="line-height-xs display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">XS</div>
        </div>
      </div>
      <div className="margin-xxl">
        <div className="line-height-xxs display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs">
          <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
          <div className="margin-left-xxs">XXS</div>
        </div>
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
    lineHeight: 'line-height-xxl',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};

export const XL = {
  render: Template,

  args: {
    lineHeight: 'line-height-xl',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};

export const L = {
  render: Template,

  args: {
    lineHeight: 'line-height-l',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};

export const M = {
  render: Template,

  args: {
    lineHeight: 'line-height-m',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};

export const S = {
  render: Template,

  args: {
    lineHeight: 'line-height-s',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};

export const XS = {
  render: Template,

  args: {
    lineHeight: 'line-height-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};

export const XXS = {
  render: Template,

  args: {
    lineHeight: 'line-height-xxs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">Line Height</div>
      </>
    ),
  },
};
