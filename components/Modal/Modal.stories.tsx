import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  open: true,
  children:
    'Aut, quae. Asperiores sed earum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo tnam accusamus, facilis possimus voluptatem aspernatur in, vero animi. Aut, quae.',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Title',
  open: true,
  children: [
    'Aut, quae. Asperiores sed earum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo tnam accusamus, facilis possimus voluptatem aspernatur in, vero animi. Aut, quae.',
    <div key="actions" className="margin-top-m display-flex justify-content-flex-end">
      <Button variant="cancel-light" className="margin-right-s">
        Cancel
      </Button>
      <Button variant="primary">Apply changes</Button>
    </div>,
  ],
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  title: 'Title',
  open: true,
  width: 650,
  children: [
    'Aut, quae. Asperiores sed earum pariatur dolores reprehenderit aperiam porro tempora, molestias nemo tnam accusamus, facilis possimus voluptatem aspernatur in, vero animi. Aut, quae.',
  ],
};
