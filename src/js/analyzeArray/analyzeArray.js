const analyzeArray = (numArr) => {
  if (!Array.isArray(numArr) || numArr.length === 0) return {};
  for (const num of numArr) {
    if (typeof num !== "number") return {};
  }
  
  const average = numArr.reduce((a, b) => a + b, 0) / numArr.length;
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  const length = numArr.length;

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
