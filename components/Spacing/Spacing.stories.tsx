import React, { ReactNode } from 'react';
import { Siux } from '../Siux/Siux';
import { StoryFn, Meta } from '@storybook/react';

const variants = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

export interface IPaddingProperties {
  className?: string;
  children?: Array<ReactNode>;
  padding: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}
export interface IMarginProperties {
  className?: string;
  children?: Array<ReactNode>;
  margin: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

const TemplatePadding: StoryFn<IPaddingProperties> = (arguments_) => (
  <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
    <div
      className={`padding-${arguments_.padding} transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center`}>
      <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
    </div>
    <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
      padding-{arguments_.padding}
    </div>
  </div>
);

const TemplateMargin: StoryFn<IMarginProperties> = (arguments_) => (
  <div className="display-flex flex-direction-column align-items-center justify-content-center">
    <div
      className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative"
      style={{
        backgroundColor: 'rgb(246, 242, 255)',
        opacity: 0.8,
        backgroundImage:
          'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
        backgroundSize: '15px 15px',
        backgroundPosition: '0px 0px, 7.5px 7.5px',
      }}>
      <div className={`margin-${arguments_.margin} background-secondary-7 border-radius-xxs height-s width-s`}></div>
    </div>
    <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">
      margin-{arguments_.margin}
    </div>
  </div>
);

export default {
  title: 'Design Tokens/Spacing',
  component: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
} as Meta<typeof Siux>;

export const General = {
  parameters: {
    docs: {
      source: {
        code: `
        <>
        <div className="display-flex flex-wrap">
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
            <div className="padding-xxl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
              <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xxl</div>
          </div>
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
            <div className="padding-xl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
              <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xl</div>
          </div>
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
            <div className="padding-l transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
              <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-l</div>
          </div>
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
            <div className="padding-m transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
              <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-m</div>
          </div>
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
            <div className="padding-s transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
              <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-s</div>
          </div>
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
            <div className="padding-xs transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
              <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xs</div>
          </div>
          <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
              <div className="padding-xxs transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
                <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
              </div>
              <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xxs</div>
          </div>
        </div>
        <div className="margin-s font-size-s font-weight-600 text-align-left">Margin</div>
        <div className="display-flex flex-wrap">
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative">
              <div className="margin-xxl background-secondary-7 border-radius-xxs height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xxl</div>
          </div>
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative">
              <div className="margin-xl background-secondary-7 border-radius-xxs  height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xl</div>
          </div>
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative">
              <div className="margin-l background-secondary-7 border-radius-xxs height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-l</div>
          </div>
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div
              className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative>
              <div className="margin-m background-secondary-7 border-radius-xxs height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-m</div>
          </div>
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div
              className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative">
              <div className="margin-s background-secondary-7 border-radius-xxs height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-s</div>
          </div>
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative">
              <div className="margin-xs background-secondary-7 border-radius-xxs height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xs</div>
          </div>
          <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
            <div className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative">
              <div className="margin-xxs background-secondary-7 border-radius-xxs height-s width-s"></div>
            </div>
            <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xxs</div>
          </div>
        </div>
      </>
        `,
      },
    },
  },
  render: () => (
    <>
      <div className="margin-s font-size-s font-weight-600 text-align-left">Padding</div>
      <div className="display-flex flex-wrap">
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-xxl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xxl</div>
        </div>
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-xl width-xxl height-xxl transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xl</div>
        </div>
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-l transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-l</div>
        </div>
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-m transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-m</div>
        </div>
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-s transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-s</div>
        </div>
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-xs transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xs</div>
        </div>
        <div className="margin-m align-items-center justify-content-center display-flex flex-direction-column">
          <div className="padding-xxs transition-all background-primary-1 border-radius-xs border-width-1 border-primary-2 border-style-solid display-flex align-items-center justify-content-center">
            <div className="background-primary-7 border-radius-xxs width-s height-s position-absolute position-center"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">padding-xxs</div>
        </div>
      </div>
      <div className="margin-s font-size-s font-weight-600 text-align-left">Margin</div>
      <div className="display-flex flex-wrap">
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-xxl background-secondary-7 border-radius-xxs height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xxl</div>
        </div>
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-xl background-secondary-7 border-radius-xxs  height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xl</div>
        </div>
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-l background-secondary-7 border-radius-xxs height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-l</div>
        </div>
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-m background-secondary-7 border-radius-xxs height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-m</div>
        </div>
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-s background-secondary-7 border-radius-xxs height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-s</div>
        </div>
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-xs background-secondary-7 border-radius-xxs height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xs</div>
        </div>
        <div className="margin-m display-flex flex-direction-column justify-content-center align-items-center">
          <div
            className="transition-all background-secondary-1 border-radius-xs border-width-1 border-secondary-2 border-style-dashed display-inline-flex align-items-center justify-content-center position-relative"
            style={{
              backgroundColor: 'rgb(246, 242, 255)',
              opacity: 0.8,
              backgroundImage:
                'repeating-linear-gradient(45deg, rgb(113, 255, 210) 0px, rgb(113, 255, 210) 1px, rgb(246, 242, 255) 0px, rgb(246, 242, 255) 50%)',
              backgroundSize: '15px 15px',
              backgroundPosition: '0px 0px, 7.5px 7.5px',
            }}>
            <div className="margin-xxs background-secondary-7 border-radius-xxs height-s width-s"></div>
          </div>
          <div className="text-align-center color-neutral-7 font-family-secondary font-size-xs">margin-xxs</div>
        </div>
      </div>
    </>
  ),
};

export const PExtraExtraSmall = {
  render: TemplatePadding,

  args: {
    padding: 'xxs',
  },
};

export const PExtraSmall = {
  render: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    padding: 'xs',
  },
};

export const PSmall = {
  render: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    padding: 's',
  },
};

export const PMedium = {
  render: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    padding: 'm',
  },
};

export const PLarge = {
  render: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    padding: 'l',
  },
};

export const PExtraLarge = {
  render: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    padding: 'xl',
  },
};

export const PExtraExtraLarge = {
  render: TemplatePadding,
  argTypes: {
    padding: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    padding: 'xxl',
  },
};

export const MExtraExtraSmall = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 'xxs',
  },
};

export const MExtraSmall = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 'xs',
  },
};

export const MSmall = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 's',
  },
};

export const MMedium = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 'm',
  },
};

export const MLarge = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 'l',
  },
};

export const MExtraLarge = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 'xl',
  },
};

export const MExtraExtraLarge = {
  render: TemplateMargin,
  argTypes: {
    margin: {
      options: variants,
      control: {
        type: 'select',
      },
    },
    hover: { control: { type: 'select' } },
  },
  args: {
    margin: 'xxl',
  },
};
