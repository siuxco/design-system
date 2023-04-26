import React from 'react';
import { Text } from './Text';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    tag: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (arguments_) => <Text {...arguments_} />;

export const Display1 = Template.bind({});
Display1.args = {
  variant: 'display-1',
  children: 'Display 1',
};

export const Display2 = Template.bind({});
Display2.args = {
  variant: 'display-2',
  children: 'Display 2',
};

export const Display3 = Template.bind({});
Display3.args = {
  variant: 'display-3',
  children: 'Display 3',
};

export const Featured1 = Template.bind({});
Featured1.args = {
  variant: 'featured-1',
  children: 'Featured 1',
};

export const Featured2 = Template.bind({});
Featured2.args = {
  variant: 'featured-2',
  children: 'Featured 2',
};

export const Featured3 = Template.bind({});
Featured3.args = {
  variant: 'featured-3',
  children: 'Featured 3',
};

export const Title1 = Template.bind({});
Title1.args = {
  variant: 'title-1',
  children: 'Title 1',
};

export const Title2 = Template.bind({});
Title2.args = {
  variant: 'title-2',
  children: 'Title 2',
};

export const Title3 = Template.bind({});
Title3.args = {
  variant: 'title-3',
  children: 'Title 3',
};

export const Title4 = Template.bind({});
Title4.args = {
  variant: 'title-4',
  children: 'Title 4',
};

export const Title5 = Template.bind({});
Title5.args = {
  variant: 'title-5',
  children: 'Title 5',
};

export const BodyStrong1 = Template.bind({});
BodyStrong1.args = {
  variant: 'body-strong-1',
  children: 'Body strong 1',
};

export const BodyStrong2 = Template.bind({});
BodyStrong2.args = {
  variant: 'body-strong-2',
  children: 'Body strong 2',
};

export const BodyMedium1 = Template.bind({});
BodyMedium1.args = {
  variant: 'body-medium-1',
  children: 'Body medium 1',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body-1',
  children: 'Body 1',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body-2',
  children: 'Body 2',
};

export const Caption1 = Template.bind({});
Caption1.args = {
  variant: 'caption-1',
  children: 'Caption 1',
};

export const Caption2 = Template.bind({});
Caption2.args = {
  variant: 'caption-2',
  children: 'Caption 2',
};

export const CustomTag = Template.bind({});
CustomTag.args = {
  tag: 'h1',
  variant: 'display-1',
  children: 'Custom tag H1',
};
