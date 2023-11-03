function clickFunc() {
    // 1. input 요소를 가져온다.
    const input = document.querySelector("#input");
    // 2. 가져온 input 요소의 value를 꺼낸다.
    const inputVal = input.value;
    // 3. p태그를 만든다. <p></p> 까지 만드는거임
    const p = document.createElement("p");
    // createElement 함수 사용하면 만들 수 있다!
    // 4. 만든 p태그에 가져온 input value를 넣는다.
    p.innerHTML = inputVal; // 하면 <p>값</p> 이런 상태가 된다
    // 5. h4 요소를 가져온다.
    const h4 = document.querySelector("h4");
    // 6. 가져온 h4 요소에 만든 p태그를 추가한다.
    h4.append(p);
    // 7. input value를 공백으로 바꿔준다.
    input.value = "";
}