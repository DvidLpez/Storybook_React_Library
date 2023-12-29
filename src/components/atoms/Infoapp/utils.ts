export const getTypeInfo = (value: string | undefined) => {
  switch (value) {
    case 'info':
      return 'blue';
    default:
      return 'red';
  }
};
