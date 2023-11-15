import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Font',
  component: Siux,
  argTypes: {
    font: {
      options: ['font-family-primary', 'font-family-secondary'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const fontVariations = [
  { name: 'Inter', value: 'font-family-primary' },
  { name: 'Overpass Mono', value: 'font-family-secondary' },
];

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return <div className={`${arguments_['font']}`}>Text example</div>;
};

const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <div>
    {fontVariations.map((font, index) => {
      return (
        <div key={font.name} className="margin-bottom-m">
          <div className={font.value}>{font.name}</div>
          <div className="color-neutral-7 font-family-primary font-size-xs">{font.value}</div>
        </div>
      );
    })}
  </div>
);

export const General = {
  parameters: {
    docs: {
      source: {
        code: ` <div>
        {fontVariations.map((font, index) => {
          return (
            <div key={font.name} className="margin-bottom-m">
              <div className={font.value}>{font.name}</div>
              <div className="color-neutral-7 font-family-primary font-size-xs">{font.value}</div>
            </div>
          );
        })}
      </div>`,
      },
    },
  },
  render: () => (
    <>
      <div>
        {fontVariations.map((font, index) => {
          return (
            <div key={font.name} className="margin-bottom-m">
              <div className={font.value}>{font.name}</div>
              <div className="color-neutral-7 font-family-primary font-size-xs">{font.value}</div>
            </div>
          );
        })}
      </div>
    </>
  ),
};

export const VariationPrimary = {
  render: Template,
  args: {
    font: 'font-family-primary',
  },
};

export const VariationSecondary = {
  render: Template,
  args: {
    font: 'font-family-secondary',
  },
};
