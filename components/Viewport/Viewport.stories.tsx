import React, { FC, ReactNode } from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';
import { classNames } from '../../utils/utils';

interface IVariantProperties {
  className?: string;
  children?: Array<ReactNode>;
  variant: 'DESKTOP' | 'TABLET' | 'MOBILE';
}

const Viewport: FC<IVariantProperties> = ({ children, className }) => {
  return <div className={classNames(className)}>{children}</div>;
};

export default {
  title: 'Design Tokens/Viewport',
  component: Siux,
  argTypes: {
    viewPort: {
      options: ['viewport-desktop', 'viewport-tablet', 'viewport-mobile'],
    },
    control: { type: 'select' },
  },
} as Meta<typeof Viewport>;

const Template: StoryFn<typeof Viewport> = (arguments_) => {
  const paddingSize = {
    DESKTOP: '400',
    TABLET: '300',
    MOBILE: '150',
  };
  return (
    <div>
      <div
        {...arguments_}
        className={`${arguments_['viewPort']} transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l`}
        style={{ padding: `0 ${paddingSize[arguments_.variant] || '300'}px` }}
      />
    </div>
  );
};
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Viewport</div>
    <div className="display-flex flex-direction-column align-items-center">
      <div style={{ width: '900px' }}>
        <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center ">
          desktop
        </div>
        <div className="viewport-desktop">
          <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
            1440px
          </div>
        </div>
      </div>
      <div style={{ width: '800px' }}>
        <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center ">
          tablet
        </div>
        <div className="viewport-desktop">
          <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
            1280px
          </div>
        </div>
      </div>
      <div className="aling-items-center justify-content-center" style={{ width: '480px' }}>
        <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center ">
          mobile
        </div>
        <div className="viewport-desktop">
          <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
            768px
          </div>
        </div>
      </div>
    </div>
  </>
);

export const General = {
  render: TemplateGeneral,
  args: {
    className: 'width-full',
  },
};

export const Desktop = {
  render: Template,
  args: {
    viewPort: 'viewport-desktop',
    children: 'DESKTOP',
    variant: 'DESKTOP',
  },
};

export const Tablet = {
  render: Template,

  args: {
    viewPort: 'viewport-tablet',
    children: 'TABLET',
    variant: 'TABLET',
  },
};

export const Mobile = {
  render: Template,

  args: {
    viewPort: 'viewport-mobile ',
    children: 'MOBILE',
    variant: 'MOBILE',
  },
};
