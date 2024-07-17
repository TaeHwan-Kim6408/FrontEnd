 // 배열(Array)

let summerFruits = ['수박', '참외', '복숭아', '포도'];
console.log(summerFruits);
console.log(typeof summerFruits);                                     // objectm, array는 object의 한 형태

// 인덱싱
console.log(summerFruits[0], summerFruits[2]);
console.log(summerFruits.length);
console.log(summerFruits[summerFruits.length - 1]);                  // 맨 마지막 요소


// 배열에 임의의 타입의 원소를 사용할 수 있음
let person = ['james', 27, '남자', '프로그래머', 175.3, ['수박', '포도']];
console.log(person);
// 여러가지 타입을 섞어쓰는 것은 바람직하지 않음
let person0bj = {
    name: "James", age: 27, gender: '남자', job: '프로그래머',
    height: 175.3, favoriteFruits: ['수박', '포도']
}

// 배열 요소에 추가
