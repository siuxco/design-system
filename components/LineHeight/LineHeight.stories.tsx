import React, { Children } from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return (
    <div
      className={`${arguments_['lineHeight']} display-flex transition-all font-size-xs align-items-center position-relative padding-left-xs margin-top-xs`}>
      {arguments_.children}
    </div>
  );
};

export default {
  title: 'Design Tokens/Line Height',
  component: Template,
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

export const General = {
  parameters: {
    docs: {
      source: {
        code: `
        <>
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
        `,
      },
    },
  },
  render: () => (
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
  ),
};

export const XXL = {
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
