//you need to "export" the function so that
//other files can "import" it

exports.inputsAreValid = (...input) => {
  return input.every(num => typeof num === "number" && !isNaN(num));
};