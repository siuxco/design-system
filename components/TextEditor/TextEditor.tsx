import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

export interface ITextEditorProperties {
  className?: string;
  variant?: 'default' | 'custom';
  children?: Array<ReactNode>;
}

const editors = {
  variants: {
    default:
      'background-white box-shadow-m border-width-1 border-style-solid border-neutral-2 border-radius-s padding-m',
    custom: '',
  },
};

export const TextEditor: FC<ITextEditorProperties> = ({ variant = 'default', children, className }) => {
  return (
    <div className={classNames(editors.variants[variant], className)}>
      <div className="color-neutral-4">Font size</div>
      <div className="margin-top-xs margin-bottom-xs">
        <Select state="default" icon="icon-system-font-size">
          <Select.Option value="1">Inter</Select.Option>
          <Select.Option value="2">Roboto</Select.Option>
          <Select.Option value="3">Open Sans</Select.Option>
        </Select>
        <div className="display-flex margin-top-xs">
          <Select state="default" className="margin-right-xs width-full">
            <Select.Option value="1">Heading 1</Select.Option>
            <Select.Option value="2">Heading 2</Select.Option>
            <Select.Option value="3">Heading 3</Select.Option>
          </Select>

          <Select state="default" className="width-full">
            <Select.Option value="1">Light</Select.Option>
            <Select.Option value="2">Medium</Select.Option>
            <Select.Option value="3" selected>
              Bold
            </Select.Option>
          </Select>
        </div>
      </div>
      <div className="color-neutral-4">Text align</div>
      <div className="margin-top-xs margin-bottom-xs display-flex background-neutral-1 border-radius-xs">
        <Button
          variant="cancel-link"
          size="small"
          className="margin-right-xs width-full display-flex justify-content-center">
          <i className="icon-system-align-left font-size-m" />
        </Button>
        <Button
          variant="cancel-link"
          size="small"
          className="margin-right-xs width-full display-flex justify-content-center">
          <i className="icon-system-align-center font-size-m" />
        </Button>
        <Button
          variant="cancel-link"
          size="small"
          className="margin-right-xs width-full display-flex justify-content-center">
          <i className="icon-system-align-center font-size-m" />
        </Button>
        <Button variant="cancel-link" size="small" className="width-full display-flex justify-content-center">
          <i className="icon-system-list-check font-size-m" />
        </Button>
      </div>
      <div className="color-neutral-4">Text color</div>
      <div className="margin-top-xs display-flex border-radius-xs overflow-hidden">
        <div className="width-l height-l background-primary-1 cursor-pointer" />
        <div className="width-l height-l background-primary-2 cursor-pointer" />
        <div className="width-l height-l background-primary-3 cursor-pointer" />
        <div className="width-l height-l background-primary-4 cursor-pointer" />
        <div className="width-l height-l background-primary-5 cursor-pointer" />
        <div className="width-l height-l background-primary-6 cursor-pointer" />
        <div className="width-l height-l background-primary-7 cursor-pointer" />
        <div className="width-l height-l background-primary-8 cursor-pointer" />
        <div className="width-l height-l background-primary-9 cursor-pointer" />
        <div className="width-l height-l background-primary-10 cursor-pointer" />
      </div>

      <div className="margin-top-xs display-flex border-radius-xs overflow-hidden">
        <div className="width-l height-l background-secondary-1 cursor-pointer" />
        <div className="width-l height-l background-secondary-2 cursor-pointer" />
        <div className="width-l height-l background-secondary-3 cursor-pointer" />
        <div className="width-l height-l background-secondary-4 cursor-pointer" />
        <div className="width-l height-l background-secondary-5 cursor-pointer" />
        <div className="width-l height-l background-secondary-6 cursor-pointer" />
        <div className="width-l height-l background-secondary-7 cursor-pointer" />
        <div className="width-l height-l background-secondary-8 cursor-pointer" />
        <div className="width-l height-l background-secondary-9 cursor-pointer" />
        <div className="width-l height-l background-secondary-10 cursor-pointer" />
      </div>

      <div className="margin-top-xs display-flex border-radius-xs overflow-hidden">
        <div className="width-l height-l background-tertiary-1 cursor-pointer" />
        <div className="width-l height-l background-tertiary-2 cursor-pointer" />
        <div className="width-l height-l background-tertiary-3 cursor-pointer" />
        <div className="width-l height-l background-tertiary-4 cursor-pointer" />
        <div className="width-l height-l background-tertiary-5 cursor-pointer" />
        <div className="width-l height-l background-tertiary-6 cursor-pointer" />
        <div className="width-l height-l background-tertiary-7 cursor-pointer" />
        <div className="width-l height-l background-tertiary-8 cursor-pointer" />
        <div className="width-l height-l background-tertiary-9 cursor-pointer" />
        <div className="width-l height-l background-tertiary-10 cursor-pointer" />
      </div>
      {/* {children} */}
    </div>
  );
};
