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

export const General = {
  render: TemplateGeneral,
};

export const Primary1 = {
  render: Template,

  args: {
    className: 'background-primary-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary2 = {
  render: Template,

  args: {
    className: 'background-primary-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary3 = {
  render: Template,

  args: {
    className: 'background-primary-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary4 = {
  render: Template,

  args: {
    className: 'background-primary-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary5 = {
  render: Template,

  args: {
    className: 'background-primary-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary6 = {
  render: Template,

  args: {
    className: 'background-primary-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary7 = {
  render: Template,

  args: {
    className: 'background-primary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary8 = {
  render: Template,

  args: {
    className: 'background-primary-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary9 = {
  render: Template,

  args: {
    className: 'background-primary-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Primary10 = {
  render: Template,

  args: {
    className: 'background-primary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary1 = {
  render: Template,

  args: {
    className: 'background-secondary-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary2 = {
  render: Template,

  args: {
    className: 'background-secondary-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary3 = {
  render: Template,

  args: {
    className: 'background-secondary-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary4 = {
  render: Template,

  args: {
    className: 'background-secondary-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary5 = {
  render: Template,

  args: {
    className: 'background-secondary-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary6 = {
  render: Template,

  args: {
    className: 'background-secondary-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary7 = {
  render: Template,

  args: {
    className: 'background-secondary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary8 = {
  render: Template,

  args: {
    className: 'background-secondary-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary9 = {
  render: Template,

  args: {
    className: 'background-secondary-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Secondary10 = {
  render: Template,

  args: {
    className: 'background-secondary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary1 = {
  render: Template,

  args: {
    className: 'background-tertiary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary2 = {
  render: Template,

  args: {
    className: 'background-tertiary-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary3 = {
  render: Template,

  args: {
    className: 'background-tertiary-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary4 = {
  render: Template,

  args: {
    className: 'background-tertiary-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary5 = {
  render: Template,

  args: {
    className: 'background-tertiary-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary6 = {
  render: Template,

  args: {
    className: 'background-tertiary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary7 = {
  render: Template,

  args: {
    className: 'background-tertiary-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary8 = {
  render: Template,

  args: {
    className: 'background-tertiary-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary9 = {
  render: Template,

  args: {
    className: 'background-tertiary-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Tertiary10 = {
  render: Template,

  args: {
    className: 'background-tertiary-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};
