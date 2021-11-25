//JS Object From URL Encoded String

const urlDecode = function(text) {

  let object = {};
  let key = "";
  let value = "";
  let tracker = 0;
  let textSpace = text;

  //Replace all %20 with spaces
  let containsSpace = true;
  while (containsSpace) {
    let spacePosition = textSpace.indexOf("%20");
    if (spacePosition != -1) {
      textSpace = textSpace.substring(0, spacePosition) + " " + textSpace.substring(spacePosition + 3);
    } else if (spacePosition === -1) {
      containsSpace = false;
    }
  }

  for (let i = 0; i < textSpace.length; i++) {
    if (textSpace[i] === "=") {
      key = textSpace.substring(tracker, i);
      tracker = i + 1;
    } else if (textSpace[i] === "&") {
      value = textSpace.substring(tracker, i);
      object[key] = value;
      tracker = i + 1;
    } else if (i === textSpace.length-1) {
      value = textSpace.substring(tracker, i + 1);
      object[key] = value;
    }
  }
  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

//Three conditions
// =, & and %20
