function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const leftSide = mergeSort(arr.slice(0, midIndex));
  const rightSide = mergeSort(arr.slice(midIndex, arr.length));
  return merge(leftSide, rightSide);
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  while (leftArr.length > 0) {
    sortedArr.push(leftArr.shift());
  }
  while (rightArr.length > 0) {
    sortedArr.push(rightArr.shift());
  }
  return sortedArr;
}

console.log(mergeSort([2, 6, 1, 8, 5, 4, 3, 9, 0]));
console.log(mergeSort([]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([3]));

/*
[2, 6, 1, 8, 5, 4, 3, 9]
    [2, 6, 1, 8]
        [2, 6]
            [2]
*/
