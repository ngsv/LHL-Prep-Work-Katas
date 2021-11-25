//Square Code

const squareCode = function(message) {

  let newMessage = message;
  let encodedMessage = "";

  //Remove all spaces
  for (let i = 0; i < message.length; i++) {
    if (newMessage[i] === " ") {
      newMessage = newMessage.substring(0, i) + newMessage.substring(i+1);
    }
  }

  //Calculate the number of rows and columns
  let newMessageLength = newMessage.length;
  let rows = Math.floor(Math.sqrt(newMessageLength));
  let columns = Math.ceil(Math.sqrt(newMessageLength));

  for (let i = 0; i < columns; i++) {
    for (let j = i; j < newMessageLength; j += columns) {
      encodedMessage = encodedMessage + newMessage[j];
    }
    encodedMessage = encodedMessage + " ";
  }
  return encodedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
