export const isImg = (element: any): element is HTMLImageElement => {
  if (!element || typeof element !== 'object') {
    return;
  }

  return element.tagName === 'IMG';
};
