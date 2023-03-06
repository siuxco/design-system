import React, { FC, HTMLProps, ComponentProps } from 'react';
import { classNames, getStatusClasses } from '../../utils/utils';
import { IIconProperties } from '../Icon/Icon';

export interface IUploadProperties extends HTMLProps<HTMLElement> {
  icon: IIconProperties['icon'];
  className?: string;
  state?: string;
  accept?: string;
  acceptTypes?: string;
  disabled?: boolean;
  onChange?: ComponentProps<'input'>['onChange'];
  style?: React.CSSProperties;
}

const statuses = {
  parent: {
    default: 'border-neutral-2 hover:background-neutral-1 active:background-neutral-2',
    error: 'border-error-6 hover:border-error-6 background-error-1 active:background-error-2',
    disable: 'border-neutral-1 color-neutral-6 background-neutral-1',
  },
  icon: {
    default: 'color-neutral-6',
    error: 'color-error-6',
    disable: 'color-neutral-4',
  },
};

export const Upload: FC<IUploadProperties> = ({
  icon = 'icon-system-upload-line',
  accept = 'image/png, image/jpg',
  acceptTypes = 'PNG, JPG, GIF up to 5MB',
  children,
  onChange,
  className,
  style,
  state,
  disabled,
}) => {
  return (
    <label>
      <div
        className={classNames(
          'padding-m border-radius-s border-style-dashed border-width-1',
          getStatusClasses(statuses.parent, state, disabled),
          {
            'cursor-not-allowed': Boolean(disabled),
            'cursor-pointer': Boolean(!disabled),
          },
          className,
        )}
        style={{ ...style }}>
        <i
          className={classNames(
            'width-full font-size-xl color-primary-7 margin-bottom-s display-flex justify-content-center',
            icon,
          )}
        />
        <input type="file" accept={accept} onChange={onChange} className="display-none" disabled={disabled} />
        <div className="color-black text-align-center font-size-s">{children}</div>
        {acceptTypes && (
          <div className="color-neutral-7 text-align-center font-size-xs margin-top-xxs">{acceptTypes}</div>
        )}
      </div>
    </label>
  );
};
