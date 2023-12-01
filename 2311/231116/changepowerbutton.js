const imgTag = document.querySelector("img");
const divTag = document.querySelector("#imgWrapper");
imgTag.addEventListener("click",function() {
    // 토글: 클래스가 존재하면 삭제해주고 존재하지 않으면 생성하는 메소드
    imgTag.classList.toggle("on");
    divTag.classList.toggle("on");
}) 