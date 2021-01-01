# 미션. debugging 기술문서 정리하기

## 1. breakpoints란

디버깅 과정에서 의도대로 프로그램의 기능이 작동하는지, 작동하지 않는다면 문제점은 무엇인지 확인할 때 사용한다.

위키백과의 breakpoints에 대한 설명은 아래와 같다.

> 브레이크포인트(breakpoint), 중단점, 중지점은 소프트웨어 개발에서 프로그램을 의도적으로 잠시 또는 아예 멈추게 하는 장소를 가리키며 디버깅 목적으로 넣는 것이다. - [위키백과](https://ko.wikipedia.org/wiki/%EB%B8%8C%EB%A0%88%EC%9D%B4%ED%81%AC%ED%8F%AC%EC%9D%B8%ED%8A%B8)

___

## 2. watch사용법

vs code에서 디버깅 중 watch(이하 탭) 기능을 사용할 수 있다.

경로는 아래 이미지와 같다.

![첫 번째 이미지](/images/01.png)

탭에서 식을 추가하여 확인하고 싶은 변수를 관찰할 수 있다.

예를 들어 아래와 같은 코드가 있다고 하자.

```javascript
const testFunction = num => {
  if(num < 100) {
    return testFunction(++num);
  }
  // breakpoint
  return false;
}

const num = 0;
testFunction(num);
```

num의 값을 관찰하기 위해 watch 탭에 아래와 같은 식을 추가한다.

```
num > 50
num < 50
```

이후 디버깅을 진행하면 추가한 식에 따른 결과를 확인할 수 있다.

![두 번째 이미지](/images/02.png)

___

## 3. call stack의 의미

디버깅에서의 콜 스택은 함수의 호출 과정 및 순서를 추적할 때 사용한다.

콜 스택도 스택이므로 LIFO이며, vs code에서는 디버깅 섹션의 콜 스택 탭에서 확인할 수 있다.

![세 번째 이미지](/images/03.png)

___

## 4. Step over / Step into/ Step out

1. Step over
   다음 라인으로 이동한다. 함수가 있어도 무시하고 이동한다.

2. Step into

   다음 라인으로 이동한다. 함수가 존재할 경우 함수의 내부 코드로 이동한다.

3. Step out
   함수의 호출을 종료한 후 호출시킨 라인으로 이동한다.

```javascript
// Step over와 Step into의 차이

const test = () => {
  return false;
}
const init = () => {
  const result = test(); // breakpoint
}
init();
console.log('end');

/*
  init 함수의 변수 result를 선언하는 라인을 중단점으로 지정했을 때,
  Step into는 test 함수의 내부로 접근하게 되며,
  Step over는 test 함수를 거치지 않고 다음 라인인 init의 종료 지점으로 이동한다.
*/

```

