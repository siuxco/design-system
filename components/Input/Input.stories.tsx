import React from 'react';
import { Input } from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    state: { control: { type: 'select' } },
    // id: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (arguments_) => <Input {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: 'Label',
  placeholder: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  label: 'Label',
  placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: true,
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Label',
  prefix: 'https://',
  placeholder: 'app.siux.studio',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  label: 'Label',
  icon: 'icon-system-link',
  placeholder: 'Placeholder',
};

export const WithCopy = Template.bind({});
WithCopy.args = {
  label: 'Label',
  copy: 'copy',
  placeholder: 'Placeholder',
};
