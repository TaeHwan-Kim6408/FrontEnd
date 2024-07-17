/*
 * 3항 연산자
 */

let dice = Math.ceil(Math.random() * 6);           // 1 ~ 6 사이의 값
let result = '';
if (dice % 2 == 0)
    result = '짝수';
else
    result = '홀수';
console.log(`${dice} 은/는 ${result}입니다.`);

let even0dd = dice % 2 == 0 ? '짝수' : '홀수';
console.log(`${dice} 은/는 $ {even0dd}입니다.`);

let smallBig = dice <= 3 ? '작은 수' : '큰 수';
console.log(`${dice} 은/는 ${smallBig}`);