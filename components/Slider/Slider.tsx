import React, { FC, ComponentProps, useState } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    default: 'background-neutral-2 border-neutral-3 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    checked: 'border-primary-7 background-primary-7 box-shadow-xs',
    error: 'background-error-2 border-error-6',
    disable: 'border-neutral-2 cursor-not-allowed background-neutral-1',
  },
  label: {
    default: '',
    checked: '',
    disable: 'color-neutral-3',
  },
};

export interface ISliderProperties extends Omit<ComponentProps<'input'>, 'size'> {
  label?: string;
  name: string;
  id: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  state: 'default' | 'error' | 'disabled';
}

export const Slider: FC<ISliderProperties> = ({
  id,
  className,
  state = 'default',
  label,
  min = 1,
  step = 1,
  max = 10,
  defaultValue = 1,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);
  const getStateClasses = (object) => {
    return object[state] || object.default;
  };

  return (
    <div className={classNames('position-relative', className)}>
      {/* Inject once and verify */}
      <style>
        {`input[type='range'] {
            -webkit-appearance: none;
            height: 6px;
            background: var(--color-neutral-2);
            border-radius: 5px;
            background-image: linear-gradient(var(--color-primary-7), var(--color-primary-7));
            background-repeat: no-repeat;
          }

          input[type='range']::-webkit-slider-runnable-track {
            box-shadow: none;
            background-color: transparent;
            height: 6px;
            border-radius: 3px;
            /* border: 1px solid transparent; */
          }

          input[type='range'][disabled]::-webkit-slider-runnable-track {
            border: 1px solid var(--color-neutral-2);
            background-color: transparent;
            opacity: 0.4;
          }

          input[type='range']::-moz-range-track {
            background-color: var(--color-neutral-2);
            height: 6px;
            border-radius: 3px;
            border: none;
          }

          input[type='range']::-moz-range-thumb {
            border-radius: 20px;
            height: 18px;
            width: 18px;
            border: none;
            background: none;
            background-color: var(--color-neutral-2) !important;
          }

          input[type='range']:active::-moz-range-thumb {
            outline: none;
          }

          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            border-radius: 100%;
            background-color: var(--color-primary-7) !important;
            height: 18px;
            width: 18px;
            margin-top: -7px;
          }

          input[type='range'][disabled]::-webkit-slider-thumb {
            background-color: transparent;
            border: 1px solid var(--color-neutral-2) !important;
          }

          input[type='range']:active::-webkit-slider-thumb {
            outline: none;
        }`}
      </style>
      <label htmlFor={id} className="cursor-pointer">
        {label && (
          <div
            className={classNames(
              'margin-bottom-xxs margin-left-xxs color-neutral-7 font-weight-500 user-select-none',
              getStateClasses(states.label),
            )}>
            {label}
          </div>
        )}
        <input
          id={id}
          onChange={(event_) => {
            setValue(Number(event_.target.value));
          }}
          min={min}
          max={max}
          step={step}
          defaultValue={value}
          value={value}
          type="range"
          checked={Boolean(value)}
          style={{ backgroundColor: 'var(--color-neutral-2)', backgroundSize: `${(value * 100) / max}% 100%` }}
          className="width-full cursor-pointer"
          {...rest}
        />
      </label>
    </div>
  );
};
