import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Color',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Error</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-error-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-error-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-error-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-error-10</div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Grey</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-grey-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-grey-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-grey-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-grey-10</div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Info</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-info-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-info-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-info-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-info-10</div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Neutral</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-neutral-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-neutral-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-neutral-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-neutral-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-neutral-10
        </div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Success</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-success-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-success-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-success-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-success-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-success-10
        </div>
      </div>
    </div>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Warning</div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-warning-1 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-1</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-2</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-3</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-4</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-5</div>
      </div>
    </div>
    <div
      className="display-flex flex-wrap margin-l justify-content-center align-items-center"
      style={{ flexBasis: '20%' }}>
      <div className="margin-xxs">
        <div className="background-warning-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-6</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-7</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-8</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">background-warning-9</div>
      </div>
      <div className="margin-xxs">
        <div className="background-warning-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
        <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
          background-warning-10
        </div>
      </div>
    </div>
  </>
);

export const General = {
  render: TemplateGeneral,
};

export const Error1 = {
  render: Template,

  args: {
    className: 'background-error-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error2 = {
  render: Template,

  args: {
    className: 'background-error-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error3 = {
  render: Template,

  args: {
    className: 'background-error-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error4 = {
  render: Template,

  args: {
    className: 'background-error-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error5 = {
  render: Template,

  args: {
    className: 'background-error-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error6 = {
  render: Template,

  args: {
    className: 'background-error-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error7 = {
  render: Template,

  args: {
    className: 'background-error-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error8 = {
  render: Template,

  args: {
    className: 'background-error-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error9 = {
  render: Template,

  args: {
    className: 'background-error-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Error10 = {
  render: Template,

  args: {
    className: 'background-error-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey1 = {
  render: Template,

  args: {
    className: 'background-grey-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey2 = {
  render: Template,

  args: {
    className: 'background-grey-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey3 = {
  render: Template,

  args: {
    className: 'background-grey-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey4 = {
  render: Template,

  args: {
    className: 'background-grey-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey5 = {
  render: Template,

  args: {
    className: 'background-grey-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey6 = {
  render: Template,

  args: {
    className: 'background-grey-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey7 = {
  render: Template,

  args: {
    className: 'background-grey-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey8 = {
  render: Template,

  args: {
    className: 'background-grey-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey9 = {
  render: Template,

  args: {
    className: 'background-grey-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Grey10 = {
  render: Template,

  args: {
    className: 'background-grey-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info1 = {
  render: Template,

  args: {
    className: 'background-info-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info2 = {
  render: Template,

  args: {
    className: 'background-info-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info3 = {
  render: Template,

  args: {
    className: 'background-info-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info4 = {
  render: Template,

  args: {
    className: 'background-info-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info5 = {
  render: Template,

  args: {
    className: 'background-info-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info6 = {
  render: Template,

  args: {
    className: 'background-info-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info7 = {
  render: Template,

  args: {
    className: 'background-info-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info8 = {
  render: Template,

  args: {
    className: 'background-info-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info9 = {
  render: Template,

  args: {
    className: 'background-info-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Info10 = {
  render: Template,

  args: {
    className: 'background-info-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral1 = {
  render: Template,

  args: {
    className: 'background-neutral-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral2 = {
  render: Template,

  args: {
    className: 'background-neutral-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral3 = {
  render: Template,

  args: {
    className: 'background-neutral-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral4 = {
  render: Template,

  args: {
    className: 'background-neutral-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral5 = {
  render: Template,

  args: {
    className: 'background-neutral-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral6 = {
  render: Template,

  args: {
    className: 'background-neutral-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral7 = {
  render: Template,

  args: {
    className: 'background-neutral-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral8 = {
  render: Template,

  args: {
    className: 'background-neutral-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral9 = {
  render: Template,

  args: {
    className: 'background-neutral-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Neutral10 = {
  render: Template,

  args: {
    className: 'background-neutral-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success1 = {
  render: Template,

  args: {
    className: 'background-success-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success2 = {
  render: Template,

  args: {
    className: 'background-success-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success3 = {
  render: Template,

  args: {
    className: 'background-success-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success4 = {
  render: Template,

  args: {
    className: 'background-success-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success5 = {
  render: Template,

  args: {
    className: 'background-success-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success6 = {
  render: Template,

  args: {
    className: 'background-success-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success7 = {
  render: Template,

  args: {
    className: 'background-success-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success8 = {
  render: Template,

  args: {
    className: 'background-success-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success9 = {
  render: Template,

  args: {
    className: 'background-success-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Success10 = {
  render: Template,

  args: {
    className: 'background-success-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning1 = {
  render: Template,

  args: {
    className: 'background-warning-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning2 = {
  render: Template,

  args: {
    className: 'background-warning-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning3 = {
  render: Template,

  args: {
    className: 'background-warning-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning4 = {
  render: Template,

  args: {
    className: 'background-warning-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning5 = {
  render: Template,

  args: {
    className: 'background-warning-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning6 = {
  render: Template,

  args: {
    className: 'background-warning-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning7 = {
  render: Template,

  args: {
    className: 'background-warning-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning8 = {
  render: Template,

  args: {
    className: 'background-warning-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning9 = {
  render: Template,

  args: {
    className: 'background-warning-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};

export const Warning10 = {
  render: Template,

  args: {
    className: 'background-warning-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
  },
};
