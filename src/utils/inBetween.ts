export const inBetween = (actual: number, min: number, max: number): number => {
  if (actual < min) {
    return min;
  }

  if (actual > max) {
    return max;
  }

  return actual;
};
