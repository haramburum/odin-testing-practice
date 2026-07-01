const caesarCipher = (string, shift) => {
  if (typeof string !== "string" || !string || !Number.isInteger(shift)) return "";

  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  return string
    .split("")
    .map((char) => {
      const lowerChar = char.toLowerCase();

      if (!alphabet.includes(lowerChar)) return char;

      const currentIndex = alphabet.indexOf(lowerChar);
      const shiftedIndex = (currentIndex + (shift % 26) + 26) % 26;
      const shiftedChar = alphabet[shiftedIndex];

      return char === char.toUpperCase()
        ? shiftedChar.toUpperCase()
        : shiftedChar;
    })
    .join("");
};

console.log(caesarCipher("aBc", 1));

export default caesarCipher;
