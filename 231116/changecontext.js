function get() {
    const val = document.getElementById("ex").innerHTML;
    alert(val);
}
function set() {
    const userInput = prompt("문장을 입력하세요.","예시: 나는 집에 가고 싶다.");
    document.getElementById("ex").innerHTML = userInput;
    // document.write(`내일 점심메뉴: ${input}`);
}