import React, { FC, ComponentProps, useState, useRef } from 'react';
import { classNames, useOutsideListener } from '../../utils/utils';

export interface IDropdownProperties extends Pick<ComponentProps<'div'>, 'children' | 'className'> {
  space: ComponentProps<'div'>['children'];
  trigger: 'hover' | 'click';
}

const Dropdown: FC<IDropdownProperties> = ({ trigger = 'hover', className, space, children }) => {
  const [dropdown, setDropdown] = useState(false);
  const wrapper = useRef(null);
  const triggerProperties =
    trigger === 'hover'
      ? {
          onMouseEnter: () => setDropdown(true),
          onMouseLeave: () => setDropdown(false),
        }
      : {
          onClick: () => setDropdown(!dropdown),
        };

  useOutsideListener(wrapper, () => setDropdown(false));

  return (
    <div ref={wrapper} {...triggerProperties} className="position-relative">
      <div>{space}</div>
      {dropdown && (
        <div className="position-absolute padding-top-xs z-index-1">
          <div
            role="presentation"
            onClick={() => setDropdown(!dropdown)}
            className={classNames(
              'border-width-1 border-style-solid border-neutral-2 animation-fade-in animation-faster border-radius-xs overflow-hidden z-index-5 background-white border-width-1 border-neutral-2 box-shadow-m',
              className,
            )}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
