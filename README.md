# 2. 자바스크립트 함수, 추가미션

## 1. default parameter 와 rest parameter는 무엇인가?

### 1) default parameter

default parameter는 함수의 파라미터에 기본 값을 설정하여 함수 호출 시 전달받은 파라미터 값이 없거나 정의되지 않은(undefined) 경우 
설정한 기본값으로 초기화하는데 사용된다.

```javascript
function sumA(a, b) {
  return a + b;
}
function sumB(a, b = 0) {
  return a + b;
}

sumA(1); // 1 + undefined = NaN
sumB(1); // 1 + 0 = 1
```

### 2) rest parameter

rest parameter는 전달된 파라미터의 갯수가 정해지지 않았을 때, 나머지 파라미터를 배열로 받을 때 사용하며, 
나머지 값을 받는 만큼 마지막 파라미터만 rest parameter가 될 수 있다.

```javascript
function sumA(a, b) {
  return a + b;
}
function sumB(...args) {
  return args.reduce((acc, val) => acc += val, 0);
}

sumA(1, 2, 4); // 1 + 2 = 3
sumB(1, 2, 3, 4, 5); // 1 + 2 + 3 + 4 + 5 = 15

// 에러, Uncaught SyntaxError: Rest parameter must be last formal parameter
function sumC(a, ...args, z) {
  return a + args.reduce((acc, val) => acc += val, 0) + z;
}
```

___

## 2. call by value, call by reference의 차이

___

### 1) call by value

함수를 호출했을 때, 인자로 전달하는 변수의 값을 복사하여 전달한다.  
값을 복사하여 호출하므로 함수 내에서 해당 값이 변화와 상관없이 외부 변수의 값은 유지된다.  
원시 타입인 **number, string, boolean, undefined, null, symbol** 이 **call by value** 로 동작한다.

```javascript
function callByValue(a) {
  a = 3;
}

let a = 5;
callByValue(a);
console.log(a); // 5
```

### 2) call by reference

함수를 호출했을 때, 인자로 전달하는 변수의 레퍼런스를 전달한다.  
>  변수의 레퍼런스는 해당 변수를 가르키는 주소라고 할 수 있다.
함수 내에서 해당 값이 변화하면 외부 변수의 값도 함께 변경된다.
원시 타입을 제외한 **모든 타입(배열, 객체, 함수, 정규식 등)**이 __call by reference__ 로 동작한다.

```javascript
// 객체
function callByReference(a) {
  a.value = 3;
}

let a = {value: 1};
callByReference(a);
console.log(a); // {value: 3}

// 배열
function callByReference(a) {
  a[0] = 3;
}

let b = [1];
callByReference(b);
console.log(b); // [3]
```
