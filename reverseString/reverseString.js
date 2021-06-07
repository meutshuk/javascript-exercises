const reverseString = function (word) {
  let newWOrd = word.split("");
  let reverseWord = newWOrd.reverse();

  return reverseWord.join("");
};

module.exports = reverseString;
