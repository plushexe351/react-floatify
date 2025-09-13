export const elevationToBoxShadow = (elevation = 1) => {
  const y = elevation * 0.6;
  const blur = elevation * 2.5;
  const alpha = 0.2 + elevation * 0.05;
  return `0px ${y}px ${blur}px rgba(0,0,0,${Math.min(alpha, 0.6)})`;
};
