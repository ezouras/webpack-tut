exports.parseInputs = (...input) => {
  const toReturn = input.map(str => parseInt(str));
  return toReturn;
};