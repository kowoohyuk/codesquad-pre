const rs = require('readline-sync');

const { log } = console;
const history = [];

const getArea = (type, ...value) => {
  switch(type) {
    case 'circle': getCircleArea(...value); break;
    case 'rect': getRectArea(...value); break;
    case 'trapezoid': getTrapezoidArea(...value); break;
    case 'cylinder': getCylinderArea(...value); break;
    default: break;
  }
  if(type) {
    history.push(type);
  }
}

const getCircleArea = halfDiameter => {
  return log(checkHandler(1, halfDiameter) || Math.pow(halfDiameter, 2) * Math.PI);
};
const getRectArea = (shortBase, longBase) => {
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
  getArea('circle', 2);
  getArea('rect', 2, 3);
  getArea('trapezoid', 2, 4, 3);
  getArea('cylinder', 3, 2);
  printExecutionSequence();
}

const printExecutionSequence = () => {
  log(history.join(' '));
}

const start = () => {
  eval(rs.prompt());
  return start();
}

start();