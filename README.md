# 3. 다각형의 넓이구하기, 추가미션

## 변수의 hoisting

자바스크립트에서 모든 변수(var, let, const 등)는 키워드와 상관없이 호이스팅(hoisting)이 적용된다.  
호이스팅이란 변수의 위치와 상관없이 선언문이 [스코프](https://developer.mozilla.org/ko/docs/Glossary/%EC%8A%A4%EC%BD%94%ED%94%84)의 선두로 옮겨지는 것처럼 동작하는 방식을 의미한다.  
이로 인해 변수가 선언된 라인의 이전 라인에서도 그 변수를 참조할 수 있다.

```javascript
console.log(varV); // undefined
var varV = 1;
console.log(varV); // 1

console.log(letV); // Uncaught ReferenceError: letV is not defined
let letV = 1; 

console.log(constV); // Uncaught ReferenceError: constV is not defined
const constV = 1; 
```

**var**로 선언한 변수는 이전 라인에서 호출하여도 **에러**가 발생하지 않는다.  
하지만 **let, const**는 **에러**가 발생하는데 이는 **var**와는 다른 생성과정을 따르기 때문이다.

변수의 생성은 선언과 초기화, 할당으로 이루어져 있으며, 할당 단계는 키워드와 상관없이 동일하게 동작한다.

그리고, 선언과 초기화 과정에서 차이가 발생하는데 **var**는 선언과 초기화가 동시에 일어나는 특징을 가지고 있다.  
**var**로 선언된 변수는 호이스팅으로 인해 스코프에 해당 변수가 추가된 후 **undefined**으로 초기화를 진행하며, 이전 라인에서도 참조할 수 있다.  
이로 인해 의도치 않은 코드의 흐름이 발생하며, 예상하지 못한 에러가 발생할 수 있다.

let과 const는 선언과 초기화 단계가 분리되어 일어난다.  
호이스팅으로 인해 선언이 되지만, 해당 변수의 선언문에 도달하기 이전까지는 초기화가 되지 않는다.  
그러므로 선언문 도달 이전에 변수를 호출하면 초기화가 안된 변수를 호출하게 되므로 참조 에러가 발생하게 된다.
