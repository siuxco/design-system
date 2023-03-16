import React, { FC, ComponentProps, useState, useRef } from 'react';
import { useOutsideListener } from '../../hooks/useOutsideListener';
import { classNames } from '../../utils/utils';

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
      <div className="padding-bottom-xs">{space}</div>
      {dropdown && (
        <div
          role="presentation"
          onClick={() => setDropdown(!dropdown)}
          className={classNames(
            'position-absolute border-width-1 border-style-solid border-neutral-2 animation-fade-in animation-faster border-radius-xs overflow-hidden z-index-5 background-white border-width-1 border-neutral-2 box-shadow-m',
            className,
          )}>
          {children}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
