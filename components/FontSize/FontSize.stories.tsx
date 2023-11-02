import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Font size',
  component: Siux,
  argTypes: {
    fontSize: {
      options: [
        'font-size-h1',
        'font-size-h2',
        'font-size-h3',
        'font-size-h4',
        'font-size-h5',
        'font-size-h6',
        'font-size-xxl',
        'font-size-xl',
        'font-size-l',
        'font-size-m',
        'font-size-s',
        'font-size-xs',
        'font-size-xxs',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const fontSizes = [
  'font-size-h1',
  'font-size-h2',
  'font-size-h3',
  'font-size-h4',
  'font-size-h5',
  'font-size-h6',
  'font-size-xxl',
  'font-size-xl',
  'font-size-l',
  'font-size-m',
  'font-size-s',
  'font-size-xs',
  'font-size-xxs',
];

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return <div className={`${arguments_['fontSize']}`}>Text example</div>;
};

const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <div>
    {fontSizes.map((font, i) => {
      return (
        <div key={font} className="margin-bottom-m">
          <div className={font}>Font size</div>
          <div className="color-neutral-7 font-family-secondary font-size-xs">{font}</div>
        </div>
      );
    })}
  </div>
);

export const General = {
  render: TemplateGeneral,
};

export const Heading1 = {
  render: Template,
  args: {
    fontSize: 'font-size-h1',
  },
};

export const Heading2 = {
  render: Template,
  args: {
    fontSize: 'font-size-h2',
  },
};

export const Heading3 = {
  render: Template,
  args: {
    fontSize: 'font-size-h3',
  },
};

export const Heading4 = {
  render: Template,
  args: {
    fontSize: 'font-size-h4',
  },
};

export const Heading5 = {
  render: Template,
  args: {
    fontSize: 'font-size-h5',
  },
};

export const SizeXXL = {
  render: Template,
  args: {
    fontSize: 'font-size-xxl',
  },
};

export const SizeXL = {
  render: Template,
  args: {
    fontSize: 'font-size-xl',
  },
};

export const SizeL = {
  render: Template,
  args: {
    fontSize: 'font-size-l',
  },
};

export const SizeM = {
  render: Template,
  args: {
    fontSize: 'font-size-m',
  },
};

export const SizeS = {
  render: Template,
  args: {
    fontSize: 'font-size-s',
  },
};

export const SizeXS = {
  render: Template,
  args: {
    fontSize: 'font-size-xs',
  },
};

export const SizeXXS = {
  render: Template,
  args: {
    fontSize: 'font-size-xxs',
  },
};
