import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Line Height',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
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

export const LineHeightXXL = {
  render: Template,

  args: {
    className:
      'line-height-xxl display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">XXL</div>
      </>
    ),
  },
};

export const LineHeightXL = {
  render: Template,

  args: {
    className:
      'line-height-xl display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">XL</div>
      </>
    ),
  },
};

export const LineHeightL = {
  render: Template,

  args: {
    className:
      'line-height-l display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">L</div>
      </>
    ),
  },
};

export const LineHeightM = {
  render: Template,

  args: {
    className:
      'line-height-m display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">M</div>
      </>
    ),
  },
};

export const LineHeightS = {
  render: Template,

  args: {
    className:
      'line-height-s display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">S</div>
      </>
    ),
  },
};

export const LineHeightXS = {
  render: Template,

  args: {
    className:
      'line-height-xs display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">XS</div>
      </>
    ),
  },
};

export const LineHeightXXS = {
  render: Template,

  args: {
    className:
      'line-height-xxs display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs',
    children: (
      <>
        <div className="background-primary-7 border-radius-xxs width-xxs position-absolute position-left"></div>
        <div className="margin-left-xxs">XXS</div>
      </>
    ),
  },
};
