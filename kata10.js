//Multiplication Table

const multiplicationTable = function(maxValue) {

  //Create empty array
  let array = [[]];
  let row = "";
  let math = 0;

  //Store first row into array
  for (let i = 1; i <= maxValue; i++) {
    array[0].push(i);
  }

  for (let i = 1; i < maxValue; i++) {
    array.push([]);
    for (let j = 0; j < maxValue; j++) {
      if (j === 0) {
        array[i].push(i+1);
      } else {
        math = array[0][j] * array[i][0];
        array[i].push(math);
      }
    }
  }

  //return array;

  //Convert array to string

  let string = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      string = string + array[i][j] + " ";
    }
    string = string + "\n";
  }

  return string;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
