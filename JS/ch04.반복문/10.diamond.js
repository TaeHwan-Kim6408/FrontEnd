<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diamond 그리기</title>
    <style>
        input, button { padding: 5px; }
        div { font-family: monospace; font-size: 1.3rem; }
    </style>
    <script>
        function drawDiamond() {
            let num = Number(document.getElementById('num').value);
            let N = parseInt(num / 2);
            let diamond = '';
            for (let i = 0; i <= N; i++) {
                let line = '';
                for (let k = 0; k < N - i; k++) 
                    line += '&nbsp;';
                for (let k = 0; k < 2 * i + 1; k++)
                    line += '*';
                diamond += line + '<br>';
            }
            for (let i = N - 1; i >= 0; i--) {
                let line = '';
                for (let k = 0; k < N - i; k++) 
                    line += '&nbsp;';
                for (let k = 0; k < 2 * i + 1; k++)
                    line += '*';
                diamond += line + '<br>';
            }
            let resultTag = document.getElementById('result');
            resultTag.innerHTML = diamond;
        }
    </script>
</head>
<body style="margin: 40px;">
    <h3>다이아몬드 그리기</h3>
    <hr>
    <input type="text" id="num" placeholder="양의 홀수를 입력하세요.">
    <button onclick="drawDiamond()">확인</button>
    <hr>
    <div id="result"></div>
</body>
</html>