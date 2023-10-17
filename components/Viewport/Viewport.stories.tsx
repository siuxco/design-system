import React from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Design Tokens/Viewport',
  component: Siux,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

const Template: StoryFn<typeof Siux> = (arguments_) => <div {...arguments_} />;
const TemplateGeneral: StoryFn<typeof Siux> = () => (
  <>
    <div className="margin-s font-size-s font-weight-600 text-align-left">Viewport</div>
    <div className="display-flex flex-direction-column">
      <div className="justify-content-center align-items-center">
        <div className="margin-xl">
          <div className="aling-items-center justify-content-center" style={{ width: '900px' }}>
            <div className="margin-xl">
              <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center border-radius-s ">
                desktop
              </div>
              <div className="viewport-desktop">
                <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
                  1440px
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-xl">
          <div className="aling-items-center justify-content-center" style={{ width: '800px' }}>
            <div className="margin-xl">
              <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center border-radius-s ">
                tablet
              </div>
              <div className="viewport-desktop">
                <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
                  1280px
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-xl">
          <div className="aling-items-center justify-content-center" style={{ width: '480px' }}>
            <div className="margin-xl">
              <div className="text-transform-uppercase color-neutral-3 display-flex align-items-center justify-content-center border-radius-s ">
                mobile
              </div>
              <div className="viewport-desktop">
                <div className="viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l">
                  768px
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

// Stories
export const General = TemplateGeneral.bind({});
General.args = {
  className: 'width-full',
};

export const ViewportDesktop = Template.bind({});
ViewportDesktop.args = {
  className:
    'viewport-desktop transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l',
  children: 'DESKTOP',
};

export const ViewportTablet = Template.bind({});
ViewportTablet.args = {
  className:
    'viewport-tablet transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l',
  children: 'TABLET',
};

export const ViewportMobile = Template.bind({});
ViewportMobile.args = {
  className:
    'viewport-mobile transition-all color-white height-xl width-full border-radius-xs font-size-xs display-flex align-items-center justify-content-center background-primary-7 margin-top-xs text-align-center width-full margin-left-auto margin-right-auto margin-bottom-l',
  children: 'MOBILE',
};
