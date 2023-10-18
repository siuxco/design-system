import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Font',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Siux>;

// const fontStyles = ['font-style-normal', 'font-style-italic'];

// const fontWeights = [
//   'font-weight-bold',
//   'font-weight-100',
//   'font-weight-200',
//   'font-weight-300',
//   'font-weight-400',
//   'font-weight-500',
//   'font-weight-600',
//   'font-weight-700',
//   'font-weight-800',
//   'font-weight-900',
// ];

const fontVariations = [
  { name: 'Inter', value: 'font-family-primary' },
  { name: 'Overpass Mono', value: 'font-family-secondary' },
];

const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <div>
    {/* {fontStyles.map((font, i) => {
      return (
        <div key={i} className="margin-bottom-m">
          <div className={font}>Font Styles</div>
          <div className="color-neutral-7 font-family-secondary font-size-xs">{font}</div>
        </div>
      );
    })}s
    {fontWeights.map((font, i) => {
      return (
        <div key={i} className="margin-bottom-m">
          <div className={font}>Font weight</div>
          <div className="color-neutral-7 font-family-secondary font-size-xs">{font}</div>
        </div>
      );
    })} */}
    {fontVariations.map((font, index) => {
      return (
        // poner nombre fonts
        (<div key={font.name} className="margin-bottom-m">
          <div className={font.value}>{font.name}</div>
          <div className="color-neutral-7 font-family-primary font-size-xs">{font.value}</div>
        </div>)
      );
    })}
  </div>
);

export const General = {
  render: TemplateGeneral,
};

export const VariationPrimary = {
  args: {
    className: 'font-family-primary',
    children: 'Text example',
  },
};

export const VariationSecondary = {
  args: {
    className: 'font-family-secondary',
    children: 'Text example',
  },
};
