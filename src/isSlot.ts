export const isSlot = (element: any): element is HTMLSlotElement => {
  if (!element || typeof element !== 'object') {
    return;
  }

  return element.tagName === 'SLOT';
};
