//Percent Encoded String

const urlEncode = function(text) {
  text = text.trim();

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text = text.substring(0, i) + "%20" + text.substring(i+1);
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
