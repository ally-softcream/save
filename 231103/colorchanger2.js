function clickFunc() {
    // 1. input 요소를 가져온다.
    const input = document.querySelector("#input");
    // querySelector를 사용할 때는 앞에 #를 붙여주기!!
    // 2. 가져온 input의 값(value)을 가져온다.
    // 이때 문법은 넣어줄 <<변수명=가져온거.값>> 이런 식으로 쓴다
    const inputVal = input.value;
    // 3. p 요소를 가져온다.
    const p = document.querySelector("p");
    // 4. 가져온 value를 p요소에 넣어준다.
    p.innerHTML = inputVal;
    // 5. 입력되어있는 input의 value를 공백으로 바꿔준다.
    input.value = "";
    // 이렇게 하면 입력하고 클릭했을 때 창이 비워진다.
}