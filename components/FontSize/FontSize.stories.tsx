import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Font size',
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

const Template: StoryFn<typeof Siux> = (arguments_) => <Siux {...arguments_} />;
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

export const General = TemplateGeneral.bind({});

export const Heading1 = Template.bind({});
Heading1.args = {
  className: 'font-size-h1',
  children: 'Text example',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  className: 'font-size-h2',
  children: 'Text example',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  className: 'font-size-h3',
  children: 'Text example',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  className: 'font-size-h4',
  children: 'Text example',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  className: 'font-size-h5',
  children: 'Text example',
};

export const SizeXXL = Template.bind({});
SizeXXL.args = {
  className: 'font-size-xxl',
  children: 'Text example',
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  className: 'font-size-xl',
  children: 'Text example',
};

export const SizeL = Template.bind({});
SizeL.args = {
  className: 'font-size-l',
  children: 'Text example',
};

export const SizeM = Template.bind({});
SizeM.args = {
  className: 'font-size-m',
  children: 'Text example',
};

export const SizeS = Template.bind({});
SizeS.args = {
  className: 'font-size-s',
  children: 'Text example',
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  className: 'font-size-xs',
  children: 'Text example',
};

export const SizeXXS = Template.bind({});
SizeXXS.args = {
  className: 'font-size-xxs',
  children: 'Text example',
};
