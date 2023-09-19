export const getPawnColor = (id: string): string => {
  const idOfPlayer = id.substring(0, 2);
  if (idOfPlayer === "p1") return "green";
  if (idOfPlayer === "p2") return "red";
  if (idOfPlayer === "p3") return "yellow";
  if (idOfPlayer === "p4") return "blue";
  return "ELO";
};
