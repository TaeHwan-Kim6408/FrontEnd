// 중첩(nested) for 반복문

// 1. 별 다섯개를 다섯줄 그리기
for (let i = 1; i < 6; i++) {
    let Line = ' ';
    for (let k = 0; k < 5; k++){
        Line += '* ';
    }
    console.log(Line);
}

// 2. 디지털 시계를 매 10분마다 표시하기
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        if (minute % 10 == 0)
            console.log(`${hour}:${minute}`);
    }
}

// 3. 별을 대각선 모양으로 그리기 (다이아몬드 1사분면)
for (let i = 0; i < 4; i++) {
    let Line = ' ';
    for (let k = 0; k < i + 1; k++)
        Line += '* '
    console.log(Line);
}


// 4. 다이아몬드 4사분면
for (let i = 5; i > 0; i--) {
    let Line = '';
    for (let k = 0; k < i; k++)
        Line += '* ';
    console.log(Line);
}

// 5. 주사위 눈으로 6 x 6 배열 만들기
let diceArray = [];
for (let i = 0; i < 6; i++) {
    let Line = [];
    for (let k = 0; k < 6; k++) {
        Line.push(Math.random() * 6);
    }
    diceArray.push(Line);
}
console.log(diceArray);
