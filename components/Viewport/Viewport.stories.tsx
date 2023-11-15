import React, { FC, ReactNode } from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';
import { classNames } from '../../utils/utils';

interface IVariantProperties {
  className?: string;
  children?: Array<ReactNode>;
  viewport: 'desktop' | 'tablet' | 'mobile';
}

const viewport: FC<IVariantProperties> = ({ children, className }) => {
  return <div className={classNames(className)}>{children}</div>;
};

const Template: StoryFn<typeof viewport> = (arguments_) => {
  const paddingSize = {
    desktop: '400',
    tablet: '300',
    mobile: '150',
  };
  return (
    <div>
      <div
        {...arguments_}
        className={`${arguments_['viewport']} transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l`}
        style={{ padding: `0 ${paddingSize[arguments_.viewport] || '300'}px` }}>
        {arguments_['viewport'].toUpperCase()}
      </div>
    </div>
  );
};

export default {
  title: 'Design Tokens/Viewport',
  component: Template,
  argTypes: {
    viewport: {
      options: ['desktop', 'tablet', 'mobile'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof viewport>;

export const General = {
  parameters: {
    docs: {
      source: {
        code: `
        <>
        <div className="display-flex flex-direction-column align-items-center">
       
            <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center ">
              desktop
            </div>
            <div className="viewport-desktop">
              <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
                1440px
              </div>
            </div>
          </div>
          
            <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center ">
              tablet
            </div>
            <div className="viewport-desktop">
              <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
                1280px
              </div>
            </div>
          </div>
          <div className="aling-items-center justify-content-center" >
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
      </>`,
      },
    },
  },
  render: () => (
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
  ),
};

export const Desktop = {
  args: {
    viewport: 'desktop',
  },
};

export const Tablet = {
  args: {
    viewport: 'tablet',
  },
};

export const Mobile = {
  args: {
    viewport: 'mobile',
  },
};
