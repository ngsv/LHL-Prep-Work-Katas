//Sum the Largest Numbers

const sumLargestNumbers = function(data) {

  let largest = data[0];
  let secLargest = data[1];

  if (data[1] > data[0]) {
    largest = data[1];
    secLargest = data[0];
  }

  for (let i = 2; i < data.length; i++) {
    if (data[i] > secLargest) {
      if (data[i] > largest) {
        secLargest = largest;
        largest = data[i];
      } else {
        secLargest = data[i];
      }
    }
  }
  return largest + secLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
