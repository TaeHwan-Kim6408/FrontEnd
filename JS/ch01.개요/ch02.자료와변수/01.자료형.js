/*
 * 자바스크립트의 자료형
 */

// 1. 문자열(string)
console.log("He Said 'I love you.'");
console.log('He Said "I love you."');
console.log("I ll be back.");

// 특수문자 - 백슬래시(\) + 문자
console.log("\tabc\tdef\"ghi\njkl\\") ;

// 문자열 연산자(+)
console.log('가나다' + ' ' + ' 라마바');

// 문자열 선택
let hello = '안녕하세요?';
console.log(hello, hello[0], hello[3]);      // 안녕하세요? 안 세

//문자열 길이
//문자열: 속성(attribute), method
console.log(hello.length, hello.charAt(0), hello.charAt(3));

// template literal
console.log(hello + '문자열의 길이는' + hello.length + '입니다.');
console.log(`${hello} 문자열의 길이는 ${hello.length} 입니다.`);