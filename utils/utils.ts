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
