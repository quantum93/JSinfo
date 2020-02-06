/** for..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있습니다. 
 * for..in은 앞서 학습했던 for(;;) 반복문과는 완전히 다릅니다. */

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    console.log(key, user[key]); /** property의 key와 value를 각각 출력 */
    /** console.log(key, user.key); user.key는 undefined를 반환 */
    /** 굳이 key 라는 변수명을 고집할 필요는 없다. */
}

/** 객체 프로퍼티를 다루다 보면 "프로퍼티엔 순서가 있을까?" 답은 간단합니다. 객체는 정수 
프로퍼티(integer property)는 자동으로 정렬되고, 그 외의 프로퍼티는 객체에 추가한 순서 
그대로 정렬됩니다. 반면, 키가 정수가 아닌 경우엔 작성된 순서대로 프로퍼티가 나열됩니다. */

/** 49(독일 국제전화 나라 번호)를 가장 위에 출력되도록 하려면 나라 번호가 정수로 취급되지 
않도록 속임수를 쓰면 됩니다. 각 나라 번호 앞에 "+"를 붙여봅시다. 아래 같이 말이죠. */

let codes = {
    "+49": "Germany",
    "+41": "Japan",
    "+4": "Korea",
    "+1": "US",
};

for (let code in codes) {
    console.log(+code); /** 숫자값만 출력하려면 code앞에 +가 필요하다. 왜? */
}