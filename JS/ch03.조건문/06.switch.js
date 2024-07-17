// 여러개 값중에 하나를 선택
let score = Math.ceil(Math.random() * 50) + 50;               // 51 ~ 100 사이의 정수
let grade = '';

switch(parseInt(score / 10)) {                              // score 값은 5, 6, 7, 8, 9, 10으로 변환됨             
    case 10:
    case 9:
        grade = 'A'; break;
    case 8:
        garde = 'B'; break;
    case 7:
        garde = 'C'; break;
    case 6:
        garde = 'D'; break;
    default:
        grade = 'f';
}
console.log(`점수: ${score}, 학점: ${score}`);


// +, 0, - 성적 시스템
let sign = '';

if (score % 10 >= 7)
    sign = '+';
else if (score % 10 >= 3)
    sign = '0';
else 
    sign = '-';

    switch(parseInt(score / 10)) {                              // score 값은 5, 6, 7, 8, 9, 10으로 변환됨             
        case 10:
            grade = 'A+'; break;
        case 9:
            grade = 'A'; + sign; break;
        case 8:
            garde = 'B'; + sign; break;
        case 7:
            garde = 'C'; + sign; break;
        case 6:
            garde = 'D'; + sign; break;
        default:
            grade = 'f';
}
