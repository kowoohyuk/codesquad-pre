const getFibonacci = (i, a = 0, b = a + 1) => {
  if(i < 2) {
    return a;
  }
  return getFibonacci(--i, b, a + b);
}

getFibonacci(10);