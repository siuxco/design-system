import React, { FC, ComponentProps, useState } from 'react';
import { classNames } from '../../utils/utils';

export interface IDropdownProperties extends ComponentProps<'div'> {
  space: ComponentProps<'div'>['children'];
  trigger: 'hover' | 'click';
  style?: React.CSSProperties;
  className?: string;
}

const Dropdown: FC<IDropdownProperties> = ({ trigger = 'hover', className, space, style, children }) => {
  const [dropdown, setDropdown] = useState(false);

  const triggerProperties =
    trigger === 'hover'
      ? {
          onMouseEnter: () => setDropdown(true),
          onMouseLeave: () => setDropdown(false),
        }
      : {
          onClick: () => setDropdown(!dropdown),
        };

  return (
    <div {...triggerProperties} className="position-relative">
      <div className="padding-bottom-xs">{space}</div>
      {dropdown && (
        <div
          role="presentation"
          onClick={() => setDropdown(!dropdown)}
          className={classNames(
            'position-absolute border-width-1 border-style-solid border-neutral-2 animation-fade-in animation-faster border-radius-xs overflow-hidden z-index-5 background-white border-width-1 border-neutral-2 box-shadow-m',
            className,
          )}
          style={{ ...style }}>
          {children}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
