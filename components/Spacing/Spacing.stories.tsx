import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Spacing',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Padding</div>
    <div className="display-flex flex-wrap">
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
        <div className="padding-xxl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
          <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xxl</div>
      </div>
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
        <div className="padding-xl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
          <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xl</div>
      </div>
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
        <div className="padding-l width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
          <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-l</div>
      </div>
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
        <div className="padding-m width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
          <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-m</div>
      </div>
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
        <div className="padding-s width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
          <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-s</div>
      </div>
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
        <div className="padding-xs width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
          <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xs</div>
      </div>
      <div className="margin-m align-items-center justify-content-center display-flex flex-direction-columncl  ">
        <div>
          <div className="padding-xs width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xxs</div>
        </div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Margin</div>
    <div className="display-flex flex-wrap">
      <div className="margin-m">
        <div
          className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-xxl background-secondary-7 border-radius-xxs height-s width-s"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xxl</div>
      </div>
      <div className="margin-m">
        <div
          className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-xl background-secondary-7 border-radius-xxs  height-s width-s"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xl</div>
      </div>
      <div className="margin-m">
        <div
          className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-l background-secondary-7 border-radius-xxs height-s width-s"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-l</div>
      </div>
      <div className="margin-m">
        <div
          className="padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-m background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-m</div>
      </div>
      <div className="margin-m">
        <div
          className="padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-s background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-s</div>
      </div>
      <div className="margin-m">
        <div
          className="padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-xs background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xs</div>
      </div>
      <div className="margin-m">
        <div
          className="padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
          style={{
            backgroundColor: 'rgb(246, 242, 255)',
            opacity: 0.8,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
            backgroundSize: '15px 15px',
            backgroundPosition: '0px 0px, 7.5px 7.5px',
          }}>
          <div className="margin-xxs background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
        </div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xxs</div>
      </div>
    </div>
  </>
);

export const General = {
  render: TemplateGeneral,
};

export const PaddingExtraExtraSmall = {
  render: Template,

  args: {
    className:
      'padding-xs width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const PaddingExtraSmall = {
  render: Template,

  args: {
    className:
      'padding-xs width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const PaddingSmall = {
  render: Template,

  args: {
    className:
      'padding-s width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const PaddingMedium = {
  render: Template,

  args: {
    className:
      'padding-m width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const PaddingLarge = {
  render: Template,

  args: {
    className:
      'padding-l width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const PaddingExtraLarge = {
  render: Template,

  args: {
    className:
      'padding-xl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const PaddingExtraExtraLarge = {
  render: Template,

  args: {
    className:
      'padding-xxl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-dashed display-flex align-items-center justify-content-center',
    children: (
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    ),
  },
};

export const MarginExtraExtraSmall = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-xxs background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};

export const MarginExtraSmall = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-xs background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};

export const MarginSmall = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-s background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};

export const MarginMedium = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-m background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};

export const MarginLarge = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-l background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};

export const MarginExtraLarge = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-xl background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};

export const MarginExtraExtraLarge = {
  render: Template,

  args: {
    className:
      'padding-xxl transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative',
    children: (
      <div className="margin-xxl background-secondary-7 border-radius-xxs height-s width-s position-absolute position-center"></div>
    ),
  },
};
