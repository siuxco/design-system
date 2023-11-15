import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Color',
  component: Siux,
  argTypes: {
    background: {
      options: [
        'background-error-1',
        'background-error-2',
        'background-error-3',
        'background-error-4',
        'background-error-5',
        'background-error-6',
        'background-error-7',
        'background-error-8',
        'background-error-9',
        'background-error-10',
        'background-grey-1',
        'background-grey-2',
        'background-grey-3',
        'background-grey-4',
        'background-grey-5',
        'background-grey-6',
        'background-grey-7',
        'background-grey-8',
        'background-grey-9',
        'background-grey-10',
        'background-info-1',
        'background-info-2',
        'background-info-3',
        'background-info-4',
        'background-info-5',
        'background-info-6',
        'background-info-7',
        'background-info-8',
        'background-info-9',
        'background-info-10',
        'background-neutral-1',
        'background-neutral-2',
        'background-neutral-3',
        'background-neutral-4',
        'background-neutral-5',
        'background-neutral-6',
        'background-neutral-7',
        'background-neutral-8',
        'background-neutral-9',
        'background-neutral-10',
        'background-success-1',
        'background-success-2',
        'background-success-3',
        'background-success-4',
        'background-success-5',
        'background-success-6',
        'background-success-7',
        'background-success-8',
        'background-success-9',
        'background-success-10',
        'background-warning-1',
        'background-warning-2',
        'background-warning-3',
        'background-warning-4',
        'background-warning-5',
        'background-warning-6',
        'background-warning-7',
        'background-warning-8',
        'background-warning-9',
        'background-warning-10',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = ({ ...arguments_ }) => {
  return (
    <div
      className={`${arguments_['background']} transition-all box-shadow-xs padding-xxl border-radius-m width-m height-m`}
    />
  );
};

export const General = {
  parameters: {
    docs: {
      source: {
        code: `
        <>
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
    <div className="display-flex flex-wrap margin-l justify-content-center align-items-center">
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
        `,
      },
    },
  },
  render: () => (
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
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-error-10
          </div>
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
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-1
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-2
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-3
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-4
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-5
          </div>
        </div>
      </div>
      <div
        className="display-flex flex-wrap margin-l justify-content-center align-items-center"
        style={{ flexBasis: '20%' }}>
        <div className="margin-xxs">
          <div className="background-neutral-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-6
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-7
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-8
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-neutral-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-neutral-9
          </div>
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
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-1
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-2
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-3
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-4
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-5
          </div>
        </div>
      </div>
      <div
        className="display-flex flex-wrap margin-l justify-content-center align-items-center"
        style={{ flexBasis: '20%' }}>
        <div className="margin-xxs">
          <div className="background-success-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-6
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-7
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-8
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-success-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-success-9
          </div>
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
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-1
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-2 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-2
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-3 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-3
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-4 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-4
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-5 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-5
          </div>
        </div>
      </div>
      <div
        className="display-flex flex-wrap margin-l justify-content-center align-items-center"
        style={{ flexBasis: '20%' }}>
        <div className="margin-xxs">
          <div className="background-warning-6 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-6
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-7 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-7
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-8 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-8
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-9 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-9
          </div>
        </div>
        <div className="margin-xxs">
          <div className="background-warning-10 box-shadow-xs padding-xxl border-radius-m margin-l width-m height-m" />
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
            background-warning-10
          </div>
        </div>
      </div>
    </>
  ),
};

export const Error1 = {
  render: Template,

  args: {
    background: 'background-error-1',
  },
};

export const Error2 = {
  render: Template,

  args: {
    background: 'background-error-2',
  },
};

export const Error3 = {
  render: Template,

  args: {
    background: 'background-error-3',
  },
};

export const Error4 = {
  render: Template,

  args: {
    background: 'background-error-4',
  },
};

export const Error5 = {
  render: Template,

  args: {
    background: 'background-error-5',
  },
};

export const Error6 = {
  render: Template,

  args: {
    background: 'background-error-6',
  },
};

export const Error7 = {
  render: Template,

  args: {
    background: 'background-error-7',
  },
};

export const Error8 = {
  render: Template,

  args: {
    background: 'background-error-8',
  },
};

export const Error9 = {
  render: Template,

  args: {
    background: 'background-error-9',
  },
};

export const Error10 = {
  render: Template,

  args: {
    background: 'background-error-10',
  },
};

export const Grey1 = {
  render: Template,

  args: {
    background: 'background-grey-1',
  },
};

export const Grey2 = {
  render: Template,

  args: {
    background: 'background-grey-2',
  },
};

export const Grey3 = {
  render: Template,

  args: {
    background: 'background-grey-3',
  },
};

export const Grey4 = {
  render: Template,

  args: {
    background: 'background-grey-4',
  },
};

export const Grey5 = {
  render: Template,

  args: {
    background: 'background-grey-5',
  },
};

export const Grey6 = {
  render: Template,

  args: {
    background: 'background-grey-6',
  },
};

export const Grey7 = {
  render: Template,

  args: {
    background: 'background-grey-7',
  },
};

export const Grey8 = {
  render: Template,

  args: {
    background: 'background-grey-8',
  },
};

export const Grey9 = {
  render: Template,

  args: {
    background: 'background-grey-9',
  },
};

export const Grey10 = {
  render: Template,

  args: {
    background: 'background-grey-10',
  },
};

export const Info1 = {
  render: Template,

  args: {
    background: 'background-info-1',
  },
};

export const Info2 = {
  render: Template,

  args: {
    background: 'background-info-2',
  },
};

export const Info3 = {
  render: Template,

  args: {
    background: 'background-info-3',
  },
};

export const Info4 = {
  render: Template,

  args: {
    background: 'background-info-4',
  },
};

export const Info5 = {
  render: Template,

  args: {
    background: 'background-info-5',
  },
};

export const Info6 = {
  render: Template,

  args: {
    background: 'background-info-6',
  },
};

export const Info7 = {
  render: Template,

  args: {
    background: 'background-info-7',
  },
};

export const Info8 = {
  render: Template,

  args: {
    background: 'background-info-8',
  },
};

export const Info9 = {
  render: Template,

  args: {
    background: 'background-info-9',
  },
};

export const Info10 = {
  render: Template,

  args: {
    background: 'background-info-10',
  },
};

export const Neutral1 = {
  render: Template,

  args: {
    background: 'background-neutral-1',
  },
};

export const Neutral2 = {
  render: Template,

  args: {
    background: 'background-neutral-2',
  },
};

export const Neutral3 = {
  render: Template,

  args: {
    background: 'background-neutral-3',
  },
};

export const Neutral4 = {
  render: Template,

  args: {
    background: 'background-neutral-4',
  },
};

export const Neutral5 = {
  render: Template,

  args: {
    background: 'background-neutral-5',
  },
};

export const Neutral6 = {
  render: Template,

  args: {
    background: 'background-neutral-6',
  },
};

export const Neutral7 = {
  render: Template,

  args: {
    background: 'background-neutral-7',
  },
};

export const Neutral8 = {
  render: Template,

  args: {
    background: 'background-neutral-8',
  },
};

export const Neutral9 = {
  render: Template,

  args: {
    background: 'background-neutral-9',
  },
};

export const Neutral10 = {
  render: Template,

  args: {
    background: 'background-neutral-10',
  },
};

export const Success1 = {
  render: Template,

  args: {
    background: 'background-success-1',
  },
};

export const Success2 = {
  render: Template,

  args: {
    background: 'background-success-2',
  },
};

export const Success3 = {
  render: Template,

  args: {
    background: 'background-success-3',
  },
};

export const Success4 = {
  render: Template,

  args: {
    background: 'background-success-4',
  },
};

export const Success5 = {
  render: Template,

  args: {
    background: 'background-success-5',
  },
};

export const Success6 = {
  render: Template,

  args: {
    background: 'background-success-6',
  },
};

export const Success7 = {
  render: Template,

  args: {
    background: 'background-success-7',
  },
};

export const Success8 = {
  render: Template,

  args: {
    background: 'background-success-8',
  },
};

export const Success9 = {
  render: Template,

  args: {
    background: 'background-success-9',
  },
};

export const Success10 = {
  render: Template,

  args: {
    background: 'background-success-10',
  },
};

export const Warning1 = {
  render: Template,

  args: {
    background: 'background-warning-1',
  },
};

export const Warning2 = {
  render: Template,

  args: {
    background: 'background-warning-2',
  },
};

export const Warning3 = {
  render: Template,

  args: {
    background: 'background-warning-3',
  },
};

export const Warning4 = {
  render: Template,

  args: {
    background: 'background-warning-4',
  },
};

export const Warning5 = {
  render: Template,

  args: {
    background: 'background-warning-5',
  },
};

export const Warning6 = {
  render: Template,

  args: {
    background: 'background-warning-6',
  },
};

export const Warning7 = {
  render: Template,

  args: {
    background: 'background-warning-7',
  },
};

export const Warning8 = {
  render: Template,

  args: {
    background: 'background-warning-8',
  },
};

export const Warning9 = {
  render: Template,

  args: {
    background: 'background-warning-9',
  },
};

export const Warning10 = {
  render: Template,

  args: {
    background: 'background-warning-10',
  },
};
