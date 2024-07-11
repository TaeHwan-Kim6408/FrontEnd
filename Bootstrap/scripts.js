// HTML 요소를 가져옴
const modal = document.getElementById("modal");
const link = document.getElementById("add-anniversary-link");
const span = document.getElementsByClassName("close-btn")[0];

// 링크를 클릭했을 때 모달을 엶
link.onclick = function(event) {
    event.preventDefault(); // 기본 동작(페이지 이동)을 막음
    modal.style.display = "block";
}

// 닫기 버튼을 클릭했을 때 모달을 닫음
span.onclick = function() {
    modal.style.display = "none";
}

// 모달 외부를 클릭했을 때 모달을 닫음
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}