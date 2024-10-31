// map takes in an array
// calls the provided callback once for each element
// takes the return value and pushes that into a new array

const ourMap = function(arr, callback) {
  // create a new array to hold our "transformed" values
  const output = [];

  // loop through the provided array
  for (const element of arr) {
    // call the callback for each element AND capture the return value
    const returnVal = callback(element);

    // push the returnVal into the output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const nums = [3,4,5,6];
const transformEachNumber = function(num) {
  return num * 10;
};

const ourMappedArray = ourMap(nums, transformEachNumber);

console.log(nums);
console.log(ourMappedArray);

console.log();

const mappedArray = nums.map(transformEachNumber)
console.log(mappedArray);
