 const capitalize = (string) => {
  if (!string || typeof string !== "string") return "";
  const lowerString = string.toLowerCase();
  return lowerString[0].toUpperCase() + lowerString.slice(1);
};

console.log(capitalize("HELLO"));

export default capitalize;