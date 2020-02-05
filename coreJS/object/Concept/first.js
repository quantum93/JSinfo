'use strict'; /* 항상 스크립트의 맨 상단 또는 해당하는 함수 안에서 최상단에 놔야 한다. */

/** 자료형 챕터에서 배웠듯이 자바스크립트엔 일곱 가지 자료형이 있습니다. 
 * 이 중 여섯 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있어 '원시형(primitive type)'
 * 이라 부릅니다. 그런데 객체형은 원시형과 달리 다양한 데이터를 담을 수 있습니다. 키로 구분된 데이터 
 * 집합이나 복잡한 개체(entity)를 저장할 수 있죠. 객체는 자바스크립트 거의 모든 면에 녹아있는 
 * 개념이므로 자바스크립트를 잘 다루려면 객체를 잘 이해하고 있어야 합니다. 객체는 키:값 쌍으로 
 * 구성된 여러가지 프로퍼티를 넣을 수 있는 컨테이너이다. 심지어 함수까지도 프로퍼티로 저장할 수 있는데 
 * 이를 method라고 한다. */

const person = {
    firstName : "John", /** 키:값을 표현하는데 "="를 쓰지 말고 ":" 써야한다. */
    lastName : "Doe",
    id : 5566,
    /** fullName이라는 키와 값에는 함수를 정의해서 프로퍼티를 만들었다. 이때 이 함수가 
    객체의 메쏘드가 된다. */
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

person.isAdmin = true; /** person 객체에 isAdmin이라는 키와 true 값을 추가한다. */
delete person.id; /** person객체에서 id 키를 삭제한다. */
const name = person.fullName(); /** person 객체의 fullName 메쏘드 결과를 name으로 정의 */

console.log(person.firstName, person.lastName, 
            person.fullName(), name, person.isAdmin, person.id);

/** 아래 두 가지 방법으로 비어있는 객체를 만들 수 있다. 
 * 하나는 객체 생성자 다른 하나는 object literal */
let user1 = new Object();
let user2 = {}