import React from 'react';
import { Input } from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    status: { control: { type: 'select' } },
    className: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (arguments_) => <Input {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  status: 'default',
};

export const Prefix = Template.bind({});
Prefix.args = {
  prefix: 'https://',
  placeholder: 'app.siux.studio',
};

// Fixear el componente para que levante los iconos agregando el icon-system antes
export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'home-line',
  placeholder: 'I am an input with an icon',
};

export const Copy = Template.bind({});
Copy.args = {
  copy: 'copy',
  placeholder: 'Text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label text',
  placeholder: 'input placeholder',
};
