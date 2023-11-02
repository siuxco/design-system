import { useEffect, RefObject } from 'react';
type ClassNamesArgument = { [x: string]: boolean | undefined } | string | (string | object)[] | undefined;

export const classNames = (...classes: ClassNamesArgument[]) => {
  const handleString = (stringClass: string) => stringClass;
  const handleObject = (objectClasses: { [x: string]: boolean | undefined }) =>
    Object.entries(objectClasses).reduce(
      (acum, [applicableClass, condition]) => `${acum}${condition ? ` ${applicableClass}` : ''}`,
      '',
    );

  return [
    ...new Set(
      classes.map((togglableClass) => {
        if (typeof togglableClass === 'string') {
          return handleString(togglableClass);
        }
        if (Array.isArray(togglableClass)) {
          return classNames(...(togglableClass as string[]));
        }
        if (typeof togglableClass === 'object') {
          return handleObject(togglableClass);
        }
        return '';
      }),
    ),
  ].join(' ');
};

export const getStatusClasses = (
  object: { [x: string]: any; default: any; error?: string; disable: any },
  state,
  disabled,
) => {
  if (disabled) {
    return object.disable;
  }
  return object[state] || object.default;
};

export function useOutsideListener(ref: RefObject<HTMLElement>, callback: (event: MouseEvent) => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
