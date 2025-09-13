export const elevationToBoxShadow = (elevation = 1) => {
  const y = elevation * 0.5;
  const blur = elevation * 2;
  const alpha = 0.12 + elevation * 0.02;
  return `0px ${y}px ${blur}px rgba(0,0,0,${Math.min(alpha, 0.5)})`;
};
