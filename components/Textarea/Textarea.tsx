import React, { HTMLProps, FC, ChangeEventHandler } from 'react';

const statuses = {
  parent: {
    default: 'border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'border-error-6 hover:border-error-6 focus:border-error-6 background-opacity-error-2 box-shadow-xs',
    disable: 'border-neutral-1 color-neutral-3 background-neutral-1 color-neutral-3 cursor-not-allowed',
  },
};

const Textarea: FC<ITextareaProperties> = ({ placeholder, label, state, disabled, className, onChange, ...rest }) => {
  const getStatusClasses = (object: { [x: string]: any; default: any; error?: string; disable: any }) => {
    if (disabled) {
      return object.disable;
    }
    return object[state] || object.default;
  };
  return (
    <label className={`transition-fast ${className} ${disabled && 'cursor-not-allowed'}`}>
      {label && <div className="color-neutral-7 font-weight-500 margin-bottom-xs">{label}</div>}
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`transition-fast resize-vertical padding-s background-white border-radius-xs border-width-1 border-style-solid
        ${getStatusClasses(statuses.parent)}`}
        {...rest}
      />
    </label>
  );
};

export interface ITextareaProperties extends HTMLProps<HTMLTextAreaElement> {
  placeholder?: string;
  state?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
}

export { Textarea };
