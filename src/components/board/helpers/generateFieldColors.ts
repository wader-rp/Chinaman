export const fieldColors = (id: number): string => {
  if ((id >= 1001 && id <= 1008) || id === 1) return "green";
  if ((id >= 2001 && id <= 2008) || id === 11) return "red";
  if ((id >= 3001 && id <= 3008) || id === 31) return "yellow";
  if ((id >= 4001 && id <= 4008) || id === 21) return "blue";

  return "black";
};
