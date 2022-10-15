export const isMouseEvent = (event: Event): event is MouseEvent => {
  return event.type === 'mousedown';
};

export const isElementAffected = (
  element: HTMLElement,
  e: MouseEvent | TouchEvent
): boolean => {
  const rect = element.getBoundingClientRect();
  let eventX: number, eventY: number;
  if (isMouseEvent(e)) {
    eventX = e.clientX;
    eventY = e.clientY;
  } else {
    eventX = e.touches[0].clientX;
    eventY = e.touches[0].clientY;
  }

  return (
    eventX >= rect.x &&
    eventX <= rect.x + rect.width &&
    eventY >= rect.y &&
    eventY <= rect.y + rect.height
  );
};
