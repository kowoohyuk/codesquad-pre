const { log } = console;

const getCircleArea = halfDiameter => {
  return log(checkHandler(1, halfDiameter) || Math.pow(halfDiameter, 2) * Math.PI);
};
const getSquareArea = (shortBase, longBase) => {
  return log(checkHandler(2, shortBase, longBase) || shortBase * longBase);
};
const getTrapezoidArea = (shortBase, longBase, height) => {
  return log(checkHandler(3, shortBase, longBase, height) || (shortBase + longBase) * height / 2);
};
const getCylinderArea = (halfDiameter, height) => {
  return log(checkHandler(2, halfDiameter, height) || Math.pow(halfDiameter, 2) * Math.PI * height);
};

const checkHandler = (length, ...nums) => {
  const lengthTest = lengthCheck(length, nums);
  if(typeof lengthTest === 'string') {
    return lengthTest;
  }
  const numTest = numCheck(nums);
  if(typeof numTest === 'string') {
    return numTest;
  }
  return false;
}

const lengthCheck = (length, nums) => {
  return length === nums.length && nums.every(value => value !== undefined) || '인자의 갯수가 부족합니다.';
}

const numCheck = nums => {
  return nums.every(value => typeof value === 'number' && /\d/g.test(value)) || '숫자가 아닌 값이 포함되어 있습니다.';
}

// test
const test = () => {
  getCircleArea(2);
  getSquareArea(3, 'z');
  getTrapezoidArea(5, 5, '5');
  getCylinderArea(3, NaN);
}

test();