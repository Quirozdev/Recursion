function fibs(n) {
  const fibonacciArr = [];
  let firstElement = 0;
  let secondElement = 1;
  for (let i = firstElement; i < n; i++) {
    fibonacciArr.push(firstElement);
    const temp = firstElement;
    firstElement += secondElement;
    secondElement = temp;
  }
  return fibonacciArr;
}
console.log('Iterative method');
console.log(fibs(8));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(11));

// for this function, i got help from this article:
// https://medium.com/@apestruy/iterative-and-recursive-solutions-to-the-fibonacci-sequence-interview-question-16e226a27987
// I could get the nth fibonnaci number, but to return an array
// with all the fibonacci numbers to n in a recursive way, it was pretty hard
// until i read the article and i got whats going on
function fibsRec(n) {
  if (n <= 0) {
    return;
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  const fibonacciArr = fibsRec(n - 1);
  fibonacciArr.push(
    fibonacciArr[fibonacciArr.length - 1] +
      fibonacciArr[fibonacciArr.length - 2]
  );
  return fibonacciArr;
}

console.log('Recursive method');
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(11));
