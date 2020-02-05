/** 객체의 중요한 특징 중 하나는 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 
 * undefined를 반환한다는 것입니다. 이런 특징을 응용하면 프로퍼티 존재 여부를 확인할 수 
 * 있습니다. */

let user = {};
console.log(user.noSuchProperty === undefined);

/** 연산자 in을 사용해 프로퍼티 존재 여부를 확인할 수도 있습니다. */

let newUser = {
    name: "John",
    age: 30
};

console.log("age" in newUser, "blabla" in newUser); /** 이때 key는 ""로 감싸야한다 */

/** 값이 undefined인 프로퍼티에 ‘in’ 사용하기 
 * 일치 연산자를 사용해서 프로퍼티 존재 여부를 알아내는 방법("=== undefined")은 꽤 잘 동작합니다. 
 * 이 방법이 실패할 때도 가끔 있는데, 그럴 때는 in을 사용하면 프로퍼티 존재 여부를 제대로 판별할 
 * 수 있습니다. 프로퍼티는 존재하는데, 값에 undefined를 할당한 예시를 살펴봅시다. */

let myObj = {
    test: null,
    strange: undefined,
};

console.log(myObj.test, "test" in myObj, myObj.strange, "strange" in myObj);

/** 위 예시같이 프로퍼티 값이 undefined인 경우는 흔치 않습니다.undefined는 변수는 정의되어 
 * 있으나 값이 할당되지 않은 경우에 쓰이죠. 값을 ‘알 수 없거나(unknown)’ 값이 ‘비어 있다는(empty)’
 * 것을 나타낼 때는 주로 null을 사용합니다. */