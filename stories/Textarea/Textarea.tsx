import React, { HTMLProps, FC } from 'react';

const statuses = {
  parent: {
    default: 'border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'border-error-6 hover:border-error-6 focus:border-error-6 background-opacity-error-2 box-shadow-xs',
    disable: 'border-neutral-1 color-neutral-3 background-neutral-1',
  },
};

const Textarea: FC<ITextareaProperties> = ({ placeholder, label, status, className, id, disabled, ...rest }) => {
  const getStatusClasses = (object) => {
    if (disabled) {
      return object.disable;
    }
    return object[status] || object.default;
  };
  return (
    <label className={`transition-fast ${className} ${disabled && 'cursor-not-allowed'}`}>
      {label && <div className="color-neutral-7 font-weight-500 margin-bottom-xs">{label}</div>}
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        className={`transition-fast resize-vertical padding-s background-white border-radius-xs border-width-1 border-style-solid
				${disabled && 'color-neutral-3 cursor-not-allowed'}
				${getStatusClasses(statuses.parent)}
				`}
        id={id}
        {...rest}
      />
    </label>
  );
};

export interface ITextareaProperties extends HTMLProps<HTMLTextAreaElement> {
  id: string;
  placeholder?: string;
  label?: string;
  status: 'default' | 'error';
  disabled?: boolean;
  className?: string;
}

export { Textarea };
