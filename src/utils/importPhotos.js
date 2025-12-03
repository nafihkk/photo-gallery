export const importOriginalPhotos = () => {
  const images = import.meta.glob('../assets/photos/original/*', {
    eager: true
  });

  return Object.values(images).map(img => img.default);
};

export const importHDPhotos = () => {
  const images = import.meta.glob('../assets/photos/hd/*', {
    eager: true
  });

  return Object.values(images).map(img => img.default);
};
