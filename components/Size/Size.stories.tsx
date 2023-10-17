import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Size',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Size</div>
    <div className="display-flex flex-wrap">
      <div className="margin-xl">
        <div className="width-xxl height-xxl margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xxl</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xxl</div>
      </div>
      <div className="margin-xl">
        <div className="width-xl height-xl margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xl</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xl</div>
      </div>
      <div className="margin-xl">
        <div className="width-l height-l margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-l</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-l</div>
      </div>
      <div className="margin-xl">
        <div className="width-m height-m margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-m</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-m</div>
      </div>
      <div className="margin-xl">
        <div className="width-s height-s margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-s</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-s</div>
      </div>
      <div className="margin-xl">
        <div className="width-xs height-xs margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xs</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xs</div>
      </div>
      <div className="margin-xl">
        <div className="width-xxs height-xxs margin-l transition-all border-style-solid border-primary-7 border-width-3"></div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">width-xxs</div>
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">height-xxs</div>
      </div>
    </div>
  </>
);

// Stories
export const General = TemplateGeneral.bind({});

export const SizeXXL = Template.bind({});
SizeXXL.args = {
  className: 'width-xxl height-xxl margin-l transition-all border-style-solid border-primary-7 border-width-3',
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  className: 'width-xl height-xl margin-l transition-all border-style-solid border-primary-7 border-width-3',
};

export const SizeL = Template.bind({});
SizeL.args = {
  className: 'width-l height-l margin-l transition-all border-style-solid border-primary-7 border-width-3',
};

export const SizeM = Template.bind({});
SizeM.args = {
  className: 'width-m height-m margin-l transition-all border-style-solid border-primary-7 border-width-3',
};

export const SizeS = Template.bind({});
SizeS.args = {
  className: 'width-s height-s margin-l transition-all border-style-solid border-primary-7 border-width-3',
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  className: 'width-xs height-xs margin-l transition-all border-style-solid border-primary-7 border-width-3',
};

export const SizeXXS = Template.bind({});
SizeXXS.args = {
  className: 'width-xxs height-xxs margin-l transition-all border-style-solid border-primary-7 border-width-3',
};
