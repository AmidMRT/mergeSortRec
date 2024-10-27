function mergeSort(arr) {
  if (arr.length == 1) { //base
    return arr;
  }

  let midpoint = Math.ceil(arr.length / 2); // Calculate the midpoint
  let firstPart = mergeSort(arr.slice(0, midpoint)); // First half of the array
  let secondPart = mergeSort(arr.slice(midpoint)); // Second half of the array
  let fl = firstPart.length;
  let sl = secondPart.length;

  for (let i = 0; i < fl + sl; i++) {     //merge parts recursively
    if (firstPart[0] < secondPart[0] || secondPart.length == 0) {
      arr[i] = firstPart[0];
      firstPart.shift();
    } else {
      arr[i] = secondPart[0];
      secondPart.shift();
    }
  }
  return arr;
}
