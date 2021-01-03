const myReduce = (arr, callback, initialValue) => {
  //여기에 구현
  const acc = initialValue;
  for(let i = 0; i < arr.length; i++) {
    initialValue = callback(initialValue, arr[i]);
  }
  return initialValue;
}

const arr = [1, 2, 3, 10, 29, 4, 7, 16, 9, 8, 6, 5];

const result = myReduce(arr, (acc, val) => acc + val, 0);
const resultB = myReduce(arr, (acc, val) => {
  if(val < 10) {
    acc.push(val);
  }
  return acc;
}, []);

console.log(result); // 100
console.log(resultB); // [1, 2, 3, 4, 7, 9, 8, 6, 5]