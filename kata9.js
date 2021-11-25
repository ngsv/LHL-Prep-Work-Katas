//Case Maker

const camelCase = function(input) {
  let camel = input;
  for (let i = 0; i < input.length; i++) {
    if (camel[i] === " ") {
      camel = camel.substring(0, i) + camel.substring(i+1, i+2).toUpperCase() + camel.substring(i+2);
    }
  }
  return camel;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
