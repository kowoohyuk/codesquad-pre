# 4. 배열과 객체 연습, 추가미션

## 1. JavaScript set & map

 1. **어떻게 사용하는것인가?**

    **Set**

    ```javascript
    // 선언
    const mySet = new Set();
    // 추가
    mySet.add(value);
    // value가 있는지 검사
    mySet.has(value); // boolean 값 반환
    // 삭제
    mySet.delete(value); // 성공 시 true 반환
    // 초기화
    mySet.clear();
    // 길이
    mySet.size;
    ```

    **Map**

    ```javascript
    // 선언
    const myMap = new Map();
    // 추가
    myMap.set(key, name);
    // 키에 해당하는 값이 있는지 검사
    myMap.has(key); // boolean 값 반환
    // 키에 해당하는 값 반환
    myMap.get(key); // 없으면 undefined 반환
    // 삭제
    myMap.delete(key); // 성공 시 true 반환
    // 초기화
    myMap.clear();
    // 길이
    myMap.size;
    ```
    ___
    
 2. **object/array와는 어떤 점이 다르지?**

    Object와 Map의 차이는  [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)에 자세히 서술되어 있으나 요약해보면 아래와 같다.

    * Object는 프로토타입을 고려하여 사용해야한다.
    * Object의 키는 String, Symbol만 허용한다.
    * Object의 키는 정렬되어 있지 않다.
      단, ECMA6부터는 Map처럼 정렬된다.
    * Object의 size는 직접 확인해야한다.
    * Object는 즉시 순회가 불가능하다.
    * Object는 값의 잦은 추가, 제거 시 최적화 된 성능을 보장하지 않는다.

    Set과 Array의 가장 큰 차이는 Set은 중복을 허용하지 않는다는 것이다.  
    Set이나 Array 모두 상대 타입으로의 변환을 쉽게 지원한다.

    ```javascript
    // Set을 Array로 변환
    const mySet = new Set();
    mySet.add(1);
    const convertArr = Array.from(mySet);
    console.log(convertArr); // [1]
    
    // Array를 Set으로 변환
    const myArr = [1, 2, 2];
    const convertSet = Set.from(myArr);
    console.log(convertSet); // Set(2) {1, 2}, 중복된 값은 제거된다.
    ```

    ___
    

 3. **언제 유용하게 쓰일 수 있을까?**

    * Map
      Object의 프로토타입에 사용자 정의된 프로퍼티가 많거나 키 값을 여러 타입으로 가지고 싶을 때, 잦은 변경이 필요한 데이터를 처리 시
      성능을 향상시킬 때 사용할 수 있다.
    * Set
      중복되지 않는 값을 집계해야하는 경우에 주로 사용할 수 있다.
      예를 들면 숙박 시설을 운영하고 있고, 예약이 있는 날을 조회한다면 같은 날의 중복된 예약은 집계할 필요가 없다.
      이 때, Set을 사용하면 별다른 로직의 추가 없이 중복 제외 처리가 가능하다.

    ___
