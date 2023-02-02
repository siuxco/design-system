import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "I'm a cute modal title",
  show: true,
  children:
    'Aut, quae. Asperiores sed earum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo tnam accusamus, facilis possimus voluptatem aspernatur in, vero animi. Aut, quae. Asperiores sed tearum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo nam accusamus, facilis possimus voluptatem aspernatur in, vero animi.',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: "I'm a cute modal title",
  show: true,
  children:
    'Aut, quae. Asperiores sed earum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo tnam accusamus, facilis possimus voluptatem aspernatur in, vero animi. Aut, quae. Asperiores sed tearum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo nam accusamus, facilis possimus voluptatem aspernatur in, vero animi.',
  actions: (
    <>
      <Button type="delete-light" style={{ marginRight: '10px' }}>
        Action secondary
      </Button>
      <Button>Action primary</Button>
    </>
  ),
};
