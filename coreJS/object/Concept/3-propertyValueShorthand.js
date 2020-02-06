/** 실무에선 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 종종 있습니다. */

function makeUser(name, age) {
    return {
        name, /** name: name, 과 동일한 표현 */
        age /** age: age와 동일한 표현 */
    }
}

let user = makeUser("John", 30);
console.log(user.name);