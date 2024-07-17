// 생년월일에 따른 나이 계산

const bYear = 1987, bMonth = 9, bDay = 8;
const today = new Date();
let tYear = today.getFullYear(2024);
let tMonth = today.getMonth(7) + 1;
let tDay = today.getDate(16);

let age = tYear - bYear;

if (tMonth < bMonth) {
    age = bYear - 1;
} else if (tMonth > BMonth) {
    age = tYear - bYear;
} else {
// 현재월이 생월보다 작은 경우
// 현재월이 생월보다 큰 경우
// 현재월이 생월보다 같은 경우 - 현재일과 생일을 비교

console.log(`${bYear}-${bMonth}-${bDay}, 나이: ${age}`);

