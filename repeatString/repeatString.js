const repeatString = function (word, number) {
  let newWord = "";
  if (number < 0) {
    return "ERROR";
  }

  for (let index = 0; index < number; index++) {
    newWord += word;
  }
  return newWord;
};

module.exports = repeatString;
