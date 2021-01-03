const handleBinarySearch = (arr, target) => {
  binarySearch(arr.sort((a, b) => a - b), target);
}

const binarySearch = (arr, target, cnt = 0, start = 0, end = arr.length - 1) => {
  const mid = Math.ceil((start + end) / 2);
  if(arr[mid] === target) {
    return;
  }
  if(arr[mid] > target) {
    end = mid;
  } else if(arr[mid] < target) {
    start = mid;
  }
  return binarySearch(arr, target, ++cnt, start, end);
}

const test = () => {
  const arr = [1, 2, 3, 4, 21, 24, 31, 50, 5, 6, 7, 8, 9];
  handleBinarySearch(arr, 5);
}

test();