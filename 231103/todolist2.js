function clickFunc() {
    // 1. input 요소를 가져온다.
    const input = document.querySelector("#input");
    // 2. 가져온 input 요소의 value를 꺼낸다.
    // 2.1 가져온 value가 공백("")이면
    // 내용을 입력해주세요. 라는 alert 띄우고 함수 종료
    const inputVal = input.value;
    if (inputVal == "") {
        alert("내용을 입력해주세요.");
        return;
        // return은 결과값을 보내주는 역할도 하지만 함수를 종료시키는 역할도 한다.
    } 
    // 3. p태그를 만든다. <p></p> 까지 만드는거임
    const p = document.createElement("p");
    // createElement 함수 사용하면 만들 수 있다!
    // 4. 만든 p태그에 가져온 input value를 넣는다.
    p.innerHTML = inputVal; // 하면 <p>값</p> 이런 상태가 된다
    // 4.1 0~255 까지의 랜덤한 숫자 3개를 추출한다.
    // const min = 0;
    // const max = 255;
    // const thrNumbers = 3;
    let randomColors = [];
    for (let i = 0; i < 3; i++) {
        randomColors[i] = parseInt(Math.random() * 256);
        // 
        console.log(randomColors);
    }
    // 4.2 추출한 랜덤숫자로 p태그의 backgroundcolor를 바꿔준다.
    p.style.backgroundColor = 
    `rgb(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]})`;
    // 4.3 글씨색도 바꿔준다.
    const luma =
    0.2126 * randomColors[0] + 0.7152 
    * randomColors[1] + 0.0722 
    * randomColors[2];
    console.log(luma);
    // 삼항 연산자 사용. 앞이 조건, 참:거짓. 참일경우 앞이고 거짓일경우 뒤 값이 나온다
    p.style.color = parseInt(luma) <= 155 ? "white" : "black";
    // 5. div 요소를 가져온다.
    const div = document.querySelector("div");
    // 6. 가져온 h4 요소에 만든 p태그를 추가한다.
    div.append(p);
    // 7. input value를 공백으로 바꿔준다.
    input.value = "";
}