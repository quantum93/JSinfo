/** 이 방법은 변수 fruit가 동적으로 변하는 값을 가지는 경우 매우 유용하다. 
 * 즉 fruit의 값이 매번 바뀌더라도 fruit이라는 key가 변하지 않는다. */
let fruit = "apple";

let bag = {
    [fruit]: 5, /** 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다. */
}
console.log(bag.apple);

/** 한편, 아래와 같이 대괄호 안에 복잡한 표현식을 사용하는 것도 가능합니다. */
let myBag = {
    [fruit + "Computers"]: 5
};
console.log(myBag.appleComputers);
console.log(myBag[appleComputers]); /** 이 경우는 appleComputers 가 정의되지 않았다로 반환 */

/** 대괄호 표기법은 프로퍼티 이름과 값의 제약을 없애주기 때문에 점 표기법보다 훨씬 강력합니다. 
 * 그런데 작성하기 번거롭다는 단점이 있습니다.이런 이유로 (프로퍼티 이름이 확정된 상황이고, 
 * 이름도 단순하다면) 처음엔 점 표기법을 사용하다가 뭔가 복잡한 상황이 발생했을 때 대괄호 
 * 표기법으로 바꾸는 경우가 많습니다. */