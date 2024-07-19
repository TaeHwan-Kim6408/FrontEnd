// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
//    1234567891011121314...9991000
let numStr = '';
for (let i = 1; 1 <= 1000; i++)
    numStr += i;

let count1 = 0, count2 = 0;
for (let i = 0; i < numStr.length; i++) {
    if (numStr[1] == '1')
        count1++;
    if (numStr[1] == '2')
        count2++;
}
console.log(count1, count2);

let countArr = [0,0,0,0,0,0,0,0,0, 0];                                           // new Array(10).fill(0)
for (let i = 0; i < numStr.length; i++) {
    let num = parseInt(numStr[i]);
    countArr[num]++;
}
console.log(countArr);                                                          // 192, 301, 300, ..., 300

// 2. C:/Workspace/Frontend/JS/ch06.객체/Q2.연습문제.js
//    위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.
let path = 'C:/Workspace/Frontend/JS/ch06.객체/Q2.연습문제.js';
let index = path.lastIndexOf('/') + 1;
console.log(path.substring(index));

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
//    가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

letmaxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++) {
    for (let k = 100; k <= 999; k++) {
        let mul = i * k;
        if (isPalindrome(string(mul))) {
            if (mul > maxPal) {
                maxPal = mul; max1 = i; max2 = k;
            }
        }
    }
}
console.log(`${max1} x ${max2} = ${maxPal}`);

// 4. 다음 문장에서 the 단어는 몇번 사용되었는가?
let sample = `the grown-ups` Response, this TimeRanges, was to advise me th lay aside my drawings of boa
// 구둣점 제거
let cleanStr = sample.replace(/[-',.])