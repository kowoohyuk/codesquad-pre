const getFactorial = (end = 0, i = 0, value = 1) => {
  if(end === i) {
    return value;
  }
  return getFactorial(end, ++i, value * i);
};