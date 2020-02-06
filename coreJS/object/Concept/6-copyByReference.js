/** 객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 
저장되고 복사된다는 것입니다. 원시값(문자열, 숫자, 불린 값)은 ‘값 그대로’ 저장/할당되고 
복사되는 반면에 말이죠. */

/** 두 개의 변수에 독립적으로 "Hello" 가 저장된다. 이런 복사를 deep copy라 한다. 
따라서 한 변수의 값을 수정해도 다른 변수의 값은 변하지 않는다. */
let message = "Hello";
let phrase = message; 

/** copy by reference란 서로 다른 메모리에 독립적으로 저장하는 deep copy가 
아니라 같은 메모리에 저장된 값을 참조하는 방법으로 얕은 복사를 한다. */
let user = { name: "John"};
let admin = user; 
/** 객체는 copy by reference(즉 얕은 복사)를 한다. 이렇게 되면 한 객체의 값을 
수정하면 다른 객체(복사한 객체)의 값도 자동으로 수정되는 효과를 가진다. */
admin.name = "Pete";
console.log(user.name); /** user객체의 값도 Pete로 나온다. 왜냐하면 두 객체가 
동일한 메모리의 값을 참조하고 있기 때문이다. */

/** 객체를 deep copy하는 것을 clone이라고 한다. 이게 생각만큼 간단하지도 않고 성능에도
중요한 영향을 미치므로 이런 경우가 필요할때는 Don't reinvent the wheel - if you're 
already using a library, check if it has an object cloning function. 
더 자세한 내용은 추가로 검색을 해봐야한다. */

let objectA = {};
let objectB = objectA;
console.log(objectA == objectB); /** 같은 객체를 참조하므로 true를 반환 */
console.log(objectA === objectB); /** 같은 객체를 참조하므로 true를 반환 */

let a = {};
let b = {}; // 독립된 두 객체를 만들었으므로 서로 다른 메모리의 값을 유지 
console.log( a == b ); // false 를 반환 즉, 두 객체는 서로 다른 메모리값을 참조

const myUser = { name: "John"};
myUser.age = 30;
console.log(myUser.age); /** 25를 에러 없이 출력한다. 왜냐면 이 경우 객체를 다시 
정의하는 것이 아니라 내부에 접근만 하기 때문이다. 그러나 아래의 경우는 오류를 발생한다. */

myUser = {name:"Pete"}; /** 이 과정은 객체를 다시 정의하므로 위의 const 선언에 위배가 
된다. 즉 const 선언의 정확한 의미는 무조건 불변이 아니라 해당 변수/객체를 재정의 하지 않을 것
이라는 선언이다. */

/** console.log(myUser.name); const를 let으로 바꾸면 선언/정의를 다시 할 수 있게된다. */

