/** 객체를 복제하고 싶다면 방법은 있는데 자바스크립트는 객체 복제 내장 메서드를 지원하지 않기 
때문에 조금 어렵습니다. 사실 객체를 복제해야 할 일은 거의 없습니다. 참조에 의한 복사로 해결 
가능한 일이 대다수이죠. 정말 복제가 필요한 상황이라면 새로운 객체를 만든 다음 기존 객체의 
프로퍼티들을 순회해 원시 수준까지 프로퍼티를 복사해 객체를 복제하면 됩니다. */

let user = { name: "Johm", age:30 };

let clone = {} /** 빈 객체를 하나 만든다. */
for (let key in user) {
    clone[key] = user[key] /** 새로운 객체의 이름에 기존 객체의 이름을 대입  */
;}

clone.name = 'Pete'; /** 이제 새로운 객체의 키에 새로운 값을 대입 */

console.log(user.name, clone.name);

/** Object.assign을 사용하면 객체를 간단하게 복사할 수도 있습니다. */
let myUser = {bane: "John", age:30};
let myClone = Object.assign({}, myUser);

console.log(myClone);