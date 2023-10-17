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

// Stories
export const General = TemplateGeneral.bind({});

export const Error1 = Template.bind({});
Error1.args = {
  className: 'background-error-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error2 = Template.bind({});
Error2.args = {
  className: 'background-error-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error3 = Template.bind({});
Error3.args = {
  className: 'background-error-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error4 = Template.bind({});
Error4.args = {
  className: 'background-error-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error5 = Template.bind({});
Error5.args = {
  className: 'background-error-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error6 = Template.bind({});
Error6.args = {
  className: 'background-error-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error7 = Template.bind({});
Error7.args = {
  className: 'background-error-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error8 = Template.bind({});
Error8.args = {
  className: 'background-error-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error9 = Template.bind({});
Error9.args = {
  className: 'background-error-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Error10 = Template.bind({});
Error10.args = {
  className: 'background-error-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey1 = Template.bind({});
Grey1.args = {
  className: 'background-grey-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey2 = Template.bind({});
Grey2.args = {
  className: 'background-grey-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey3 = Template.bind({});
Grey3.args = {
  className: 'background-grey-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey4 = Template.bind({});
Grey4.args = {
  className: 'background-grey-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey5 = Template.bind({});
Grey5.args = {
  className: 'background-grey-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey6 = Template.bind({});
Grey6.args = {
  className: 'background-grey-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey7 = Template.bind({});
Grey7.args = {
  className: 'background-grey-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey8 = Template.bind({});
Grey8.args = {
  className: 'background-grey-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey9 = Template.bind({});
Grey9.args = {
  className: 'background-grey-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Grey10 = Template.bind({});
Grey10.args = {
  className: 'background-grey-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info1 = Template.bind({});
Info1.args = {
  className: 'background-info-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info2 = Template.bind({});
Info2.args = {
  className: 'background-info-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info3 = Template.bind({});
Info3.args = {
  className: 'background-info-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info4 = Template.bind({});
Info4.args = {
  className: 'background-info-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info5 = Template.bind({});
Info5.args = {
  className: 'background-info-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info6 = Template.bind({});
Info6.args = {
  className: 'background-info-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info7 = Template.bind({});
Info7.args = {
  className: 'background-info-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info8 = Template.bind({});
Info8.args = {
  className: 'background-info-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info9 = Template.bind({});
Info9.args = {
  className: 'background-info-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Info10 = Template.bind({});
Info10.args = {
  className: 'background-info-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral1 = Template.bind({});
Neutral1.args = {
  className: 'background-neutral-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral2 = Template.bind({});
Neutral2.args = {
  className: 'background-neutral-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral3 = Template.bind({});
Neutral3.args = {
  className: 'background-neutral-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral4 = Template.bind({});
Neutral4.args = {
  className: 'background-neutral-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral5 = Template.bind({});
Neutral5.args = {
  className: 'background-neutral-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral6 = Template.bind({});
Neutral6.args = {
  className: 'background-neutral-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral7 = Template.bind({});
Neutral7.args = {
  className: 'background-neutral-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral8 = Template.bind({});
Neutral8.args = {
  className: 'background-neutral-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral9 = Template.bind({});
Neutral9.args = {
  className: 'background-neutral-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Neutral10 = Template.bind({});
Neutral10.args = {
  className: 'background-neutral-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success1 = Template.bind({});
Success1.args = {
  className: 'background-success-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success2 = Template.bind({});
Success2.args = {
  className: 'background-success-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success3 = Template.bind({});
Success3.args = {
  className: 'background-success-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success4 = Template.bind({});
Success4.args = {
  className: 'background-success-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success5 = Template.bind({});
Success5.args = {
  className: 'background-success-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success6 = Template.bind({});
Success6.args = {
  className: 'background-success-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success7 = Template.bind({});
Success7.args = {
  className: 'background-success-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success8 = Template.bind({});
Success8.args = {
  className: 'background-success-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success9 = Template.bind({});
Success9.args = {
  className: 'background-success-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Success10 = Template.bind({});
Success10.args = {
  className: 'background-success-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning1 = Template.bind({});
Warning1.args = {
  className: 'background-warning-1 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning2 = Template.bind({});
Warning2.args = {
  className: 'background-warning-2 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning3 = Template.bind({});
Warning3.args = {
  className: 'background-warning-3 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning4 = Template.bind({});
Warning4.args = {
  className: 'background-warning-4 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning5 = Template.bind({});
Warning5.args = {
  className: 'background-warning-5 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning6 = Template.bind({});
Warning6.args = {
  className: 'background-warning-6 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning7 = Template.bind({});
Warning7.args = {
  className: 'background-warning-7 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning8 = Template.bind({});
Warning8.args = {
  className: 'background-warning-8 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning9 = Template.bind({});
Warning9.args = {
  className: 'background-warning-9 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};

export const Warning10 = Template.bind({});
Warning10.args = {
  className: 'background-warning-10 box-shadow-xs padding-xxl border-radius-m width-m height-m',
};
