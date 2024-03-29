import React, { ComponentProps, FC } from 'react';

const statuses = {
  parent: {
    default: 'border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'border-error-6 hover:border-error-6 focus:border-error-6 background-opacity-error-2 box-shadow-xs',
    disable: 'border-neutral-1 color-neutral-3 background-neutral-1 color-neutral-3 cursor-not-allowed',
  },
};

export interface ITextareaProperties extends ComponentProps<'textarea'> {
  state?: string;
  label?: string;
  error?: boolean;
}

const Textarea: FC<ITextareaProperties> = ({ label, state, disabled, className, ...rest }) => {
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
        disabled={disabled}
        className={`transition-fast resize-vertical padding-s background-white border-radius-xs border-width-1 border-style-solid
        ${getStatusClasses(statuses.parent)}`}
        {...rest}
      />
    </label>
  );
};

export { Textarea };
