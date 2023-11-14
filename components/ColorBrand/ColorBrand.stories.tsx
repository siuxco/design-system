import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Color Brand',
  component: Siux,
  argTypes: {
    background: {
      options: [
        'background-primary-1',
        'background-primary-2',
        'background-primary-3',
        'background-primary-4',
        'background-primary-5',
        'background-primary-6',
        'background-primary-7',
        'background-primary-8',
        'background-primary-9',
        'background-primary-10',
        'background-secondary-1',
        'background-secondary-2',
        'background-secondary-3',
        'background-secondary-4',
        'background-secondary-5',
        'background-secondary-6',
        'background-secondary-7',
        'background-secondary-8',
        'background-secondary-9',
        'background-secondary-10',
        'background-tertiary-1',
        'background-tertiary-2',
        'background-tertiary-3',
        'background-tertiary-4',
        'background-tertiary-5',
        'background-tertiary-6',
        'background-tertiary-7',
        'background-tertiary-8',
        'background-tertiary-9',
        'background-tertiary-10',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return <div className={`${arguments_['background']} box-shadow-xs padding-xxl border-radius-m width-m height-m`} />;
};
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
    background: 'background-primary-1',
  },
};

export const Primary2 = {
  render: Template,

  args: {
    background: 'background-primary-2',
  },
};

export const Primary3 = {
  render: Template,

  args: {
    background: 'background-primary-3',
  },
};

export const Primary4 = {
  render: Template,

  args: {
    background: 'background-primary-4',
  },
};

export const Primary5 = {
  render: Template,

  args: {
    background: 'background-primary-5',
  },
};

export const Primary6 = {
  render: Template,

  args: {
    background: 'background-primary-6',
  },
};

export const Primary7 = {
  render: Template,

  args: {
    background: 'background-primary-7',
  },
};

export const Primary8 = {
  render: Template,

  args: {
    background: 'background-primary-8',
  },
};

export const Primary9 = {
  render: Template,

  args: {
    background: 'background-primary-9',
  },
};

export const Primary10 = {
  render: Template,

  args: {
    background: 'background-primary-10',
  },
};

export const Secondary1 = {
  render: Template,

  args: {
    background: 'background-secondary-1',
  },
};

export const Secondary2 = {
  render: Template,

  args: {
    background: 'background-secondary-2',
  },
};

export const Secondary3 = {
  render: Template,

  args: {
    background: 'background-secondary-3',
  },
};

export const Secondary4 = {
  render: Template,

  args: {
    background: 'background-secondary-4',
  },
};

export const Secondary5 = {
  render: Template,

  args: {
    background: 'background-secondary-5',
  },
};

export const Secondary6 = {
  render: Template,

  args: {
    background: 'background-secondary-6',
  },
};

export const Secondary7 = {
  render: Template,

  args: {
    background: 'background-secondary-7',
  },
};

export const Secondary8 = {
  render: Template,

  args: {
    background: 'background-secondary-8',
  },
};

export const Secondary9 = {
  render: Template,

  args: {
    background: 'background-secondary-9',
  },
};

export const Secondary10 = {
  render: Template,

  args: {
    background: 'background-secondary-10',
  },
};

export const Tertiary1 = {
  render: Template,

  args: {
    background: 'background-tertiary-10',
  },
};

export const Tertiary2 = {
  render: Template,

  args: {
    background: 'background-tertiary-2',
  },
};

export const Tertiary3 = {
  render: Template,

  args: {
    background: 'background-tertiary-3',
  },
};

export const Tertiary4 = {
  render: Template,

  args: {
    background: 'background-tertiary-4',
  },
};

export const Tertiary5 = {
  render: Template,

  args: {
    background: 'background-tertiary-5',
  },
};

export const Tertiary6 = {
  render: Template,

  args: {
    background: 'background-tertiary-7',
  },
};

export const Tertiary7 = {
  render: Template,

  args: {
    background: 'background-tertiary-7',
  },
};

export const Tertiary8 = {
  render: Template,

  args: {
    background: 'background-tertiary-8',
  },
};

export const Tertiary9 = {
  render: Template,

  args: {
    background: 'background-tertiary-9',
  },
};

export const Tertiary10 = {
  render: Template,

  args: {
    background: 'background-tertiary-10',
  },
};
