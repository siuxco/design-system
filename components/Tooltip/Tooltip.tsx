import React, { FC, ComponentProps, useState, useRef, useEffect, JSXElementConstructor } from 'react';
import { classNames } from '../../utils/utils';

export interface ITooltipProperties extends Pick<ComponentProps<'div'>, 'className'> {
  variant?: 'black' | 'white';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  children?:
    | [React.ReactElement<ITriggerProperties>, React.ReactElement<IContentProperties>]
    | [React.ReactElement<IContentProperties>, React.ReactElement<ITriggerProperties>];
  delay?: number;
}

export const Tooltip: FC<ITooltipProperties> & { Trigger: typeof Trigger; Content: typeof Content } = ({
  variant = 'black',
  direction = 'top',
  children,
  className,
  delay = 0,
}) => {
  let timeout;
  const refTooltip = useRef<HTMLDivElement>();
  const [active, setActive] = useState(false);
  const [tooltipInfo, setTooltipInfo] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (refTooltip?.current) {
      setTooltipInfo(refTooltip?.current?.getBoundingClientRect());
    }
  }, [active]);

  const tooltip = {
    styleDirection: {
      top: {
        top: `calc(${tooltipInfo?.height + 8}px * -1)`,
      },
      bottom: {
        bottom: `calc(${tooltipInfo?.height + 8}px * -1)`,
      },
      left: {
        left: 'auto',
        right: 'calc(100% + 8px)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',
      },
      right: {
        right: 'auto',
        left: 'calc(100% + 8px)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',
      },
    },
    variant: {
      white: 'background-opacity-white-8 color-black',
      black: 'background-opacity-black-8 color-white',
    },
  };

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const Trigger = React.Children.toArray(children).find((child: React.ReactElement) => {
    return (child.type as JSXElementConstructor<any>).name === 'Trigger';
  });

  const Content = React.Children.toArray(children).find((child: React.ReactElement) => {
    return (child.type as JSXElementConstructor<any>).name === 'Content';
  });

  return (
    <div className="display-inline-block position-relative" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {Trigger}
      {active && (
        <div
          ref={refTooltip}
          className={classNames(
            'backdrop-filter-blur-m position-absolute animation-animated animation-fade-in width-fit-content padding-xs padding-right-s padding-left-s border-radius-m box-shadow-m white-space-no-wrap',
            tooltip.variant[variant],
            className,
          )}
          style={{
            transform: 'translateX(-50%)',
            left: '50%',
            ...tooltip.styleDirection[direction],
          }}>
          {Content}
        </div>
      )}
    </div>
  );
};

export interface ITriggerProperties extends ComponentProps<'div'> {}
export interface IContentProperties extends ComponentProps<'div'> {}

const Trigger: FC<ITriggerProperties> = ({ ...rest }) => {
  return <div {...rest} />;
};

const Content: FC<IContentProperties> = ({ ...rest }) => {
  return <div {...rest} />;
};

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;
