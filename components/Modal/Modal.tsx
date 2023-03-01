import React, { MouseEventHandler, FC } from 'react';

const Components = {
  borders: {
    default: 'border-width-1 border-style-solid border-neutral-2',
    hover: 'hover:border-primary-8 ',
  },
};

const types = {
  parent: {
    line: 'border-grey-1 border-width-1 border-style-solid border-left-none border-right-none border-bottom-none margin-top-m',
  },
};

const sizes = {
  md: 'modal-size-md',
  lg: 'modal-size-lg',
};

const Modal: FC<IModalProperties> = ({
  actions = false,
  show = false,
  dontCloseOnClickOutside = false,
  title = '',
  size = '',
  id,
  toggleModal,
  handleOutsideClick,
  isAnimated = false,
  children,
  type,
}) => {
  return (
    <div
      role="presentation"
      onClick={(event) => !dontCloseOnClickOutside && toggleModal(event)}
      className="display-flex align-items-center justify-content-center overflow-y-scroll">
      <div
        role="presentation"
        onClick={handleOutsideClick}
        id={id}
        className={`modal display-flex opacity-none align-items-center justify-content-center position-fixed position-top width-full height-full backdrop-filter-blur-s background-opacity-white-5 z-index-9 overflow-y-scroll
		  ${show && 'opacity-full'}
		  ${isAnimated && 'transition-opacity'}
		  `}>
        <div
          role="presentation"
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={`container-mobile ${sizes[size]} ${Components.borders.default} animation-faster position-relative padding-l border-radius-s box-shadow-s background-white width-full margin-none height-full tablet:margin-m tablet:width-auto tablet:height-auto`}>
          {/* Modal title */}
          <div>
            <i
              role="presentation"
              onClick={toggleModal}
              className="cursor-pointer background-white border-radius-s z-index-9 icon-system-close-line font-size-xl position-absolute transition-fast color-neutral-6 hover:color-neutral-8 position-top-right padding-right-xs padding-top-xs padding-left-xxs padding-bottom-xxs cursor-pointer"
            />
            {title && <div className="color-black font-size-m font-weight-600 margin-bottom-m">{title}</div>}
          </div>
          <div className="line-height-m color-neutral-7">{children}</div>
          {actions && (
            <div
              className={`${types.parent[type]} padding-m padding-bottom-none display-flex justify-content-flex-end align-items-center`}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Modal };

export interface IModalProperties {
  show?: boolean;
  title: string;
  size?: '' | 'md' | 'lg';
  isAnimated?: boolean;
  type: 'line';
  actions?: boolean | React.ReactNode;
  dontCloseOnClickOutside?: boolean;
  handleOutsideClick: MouseEventHandler;
  style?: React.CSSProperties;
  toggleModal?: MouseEventHandler;
  id?: string;
  className?: string;
  children: any;
}
