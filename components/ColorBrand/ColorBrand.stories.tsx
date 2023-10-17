import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Color Brand',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Primary</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-primary-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-primary-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-primary-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-primary-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-primary-10
        </div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Secondary</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-secondary-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-1
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-2
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-3
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-4
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-5
        </div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-secondary-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-6
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-7
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-8
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-9
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-secondary-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-secondary-10
        </div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Tertiary</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-tertiary-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-1
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-2
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-3
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-4
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-5
        </div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-tertiary-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-6
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-7
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-8
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-9
        </div>
      </div>
      <div className="margin-xxs">
        <div className="background-tertiary-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-tertiary-10
        </div>
      </div>
    </div>
  </>
);

// Stories
export const General = TemplateGeneral.bind({});

export const Primary1 = Template.bind({});
Primary1.args = {
  className: 'background-primary-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary2 = Template.bind({});
Primary2.args = {
  className: 'background-primary-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary3 = Template.bind({});
Primary3.args = {
  className: 'background-primary-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary4 = Template.bind({});
Primary4.args = {
  className: 'background-primary-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary5 = Template.bind({});
Primary5.args = {
  className: 'background-primary-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary6 = Template.bind({});
Primary6.args = {
  className: 'background-primary-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary7 = Template.bind({});
Primary7.args = {
  className: 'background-primary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary8 = Template.bind({});
Primary8.args = {
  className: 'background-primary-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary9 = Template.bind({});
Primary9.args = {
  className: 'background-primary-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Primary10 = Template.bind({});
Primary10.args = {
  className: 'background-primary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary1 = Template.bind({});
Secondary1.args = {
  className: 'background-secondary-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary2 = Template.bind({});
Secondary2.args = {
  className: 'background-secondary-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary3 = Template.bind({});
Secondary3.args = {
  className: 'background-secondary-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary4 = Template.bind({});
Secondary4.args = {
  className: 'background-secondary-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary5 = Template.bind({});
Secondary5.args = {
  className: 'background-secondary-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary6 = Template.bind({});
Secondary6.args = {
  className: 'background-secondary-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary7 = Template.bind({});
Secondary7.args = {
  className: 'background-secondary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary8 = Template.bind({});
Secondary8.args = {
  className: 'background-secondary-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary9 = Template.bind({});
Secondary9.args = {
  className: 'background-secondary-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Secondary10 = Template.bind({});
Secondary10.args = {
  className: 'background-secondary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary1 = Template.bind({});
Tertiary1.args = {
  className: 'background-tertiary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary2 = Template.bind({});
Tertiary2.args = {
  className: 'background-tertiary-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary3 = Template.bind({});
Tertiary3.args = {
  className: 'background-tertiary-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary4 = Template.bind({});
Tertiary4.args = {
  className: 'background-tertiary-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary5 = Template.bind({});
Tertiary5.args = {
  className: 'background-tertiary-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary6 = Template.bind({});
Tertiary6.args = {
  className: 'background-tertiary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary7 = Template.bind({});
Tertiary7.args = {
  className: 'background-tertiary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary8 = Template.bind({});
Tertiary8.args = {
  className: 'background-tertiary-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary9 = Template.bind({});
Tertiary9.args = {
  className: 'background-tertiary-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Tertiary10 = Template.bind({});
Tertiary10.args = {
  className: 'background-tertiary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};
