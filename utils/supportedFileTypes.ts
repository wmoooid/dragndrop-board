export const supportedFileTypes = (type: string) => {
  const supportedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  return supportedTypes.includes(type);
};
