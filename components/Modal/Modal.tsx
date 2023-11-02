import React, { MouseEventHandler, ComponentProps, FC } from 'react';
import { classNames } from '../../utils/utils';

const variants = {
  parent: {
    default: 'border-neutral-2 border-width-1 border-style-solid',
    custom: '',
  },
};

export interface IModalProperties extends Pick<ComponentProps<'div'>, 'className' | 'children'> {
  disableBackdropClose?: boolean;
  onClose?: MouseEventHandler;
  variant?: 'default' | 'custom';
  width?: number;
  open?: boolean;
  title?: string;
  id?: string;
}

const Modal: FC<IModalProperties> = ({
  disableBackdropClose,
  variant = 'default',
  width = 420,
  children,
  onClose,
  title,
  open,
  id,
}) => {
  return (
    <div
      role="presentation"
      onClick={(event) => !disableBackdropClose && onClose(event)}
      className="display-flex align-items-center justify-content-center overflow-y-scroll"
    >
      <div
        role="presentation"
        onClick={onClose}
        id={id}
        className={classNames(
          'display-flex transition-opacity align-items-center justify-content-center position-fixed position-top width-full height-full backdrop-filter-blur-s background-opacity-white-5 z-index-9 overflow-y-scroll',
          {
            'opacity-full': open,
            'opacity-none': !open,
          },
        )}
      >
        <div
          role="presentation"
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={classNames(
            'animation-faster position-relative padding-m tablet:padding-l border-radius-s box-shadow-s background-white width-full margin-none height-full tablet:margin-m tablet:width-auto tablet:height-auto',
            variants.parent[variant],
          )}
          style={{ width: `${width}px` }}
        >
          <div>
            {title && <div className="color-black font-size-m font-weight-600 margin-bottom-m">{title}</div>}
            <i
              role="presentation"
              onClick={onClose}
              className="cursor-pointer background-white border-radius-s z-index-9 icon-system-close-line font-size-xl position-absolute transition-fast color-neutral-6 hover:color-neutral-8 position-top-right padding-m cursor-pointer"
            />
          </div>
          <div className="line-height-m color-neutral-7">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
