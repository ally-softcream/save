// const chatBox = document.querySelector("#chat-box");
// const input = document.querySelector("#input");
// const send = document.querySelector("#send");

// function sendMyText() {
//     // 변수 선언
//     const newMessage = input.value;
//     // 새로운 요소 추가할 때는 createElement를 사용한다
//     const div = document.createElement("div");
//     // div에 클래스 추가하려면 이렇게 쓰면 된다!
//     // 한번에 여러개 추가하려면 콤마 찍고 띄어쓰기 한 후 다시 쓰면 됨
//     div.classList.add("bubble", "my-bubble");

//     // 띄울 내용을 새로 입력한 메세지로 변경하는 코드
//     div.innerHTML = newMessage;

//     // 새로운 요소 추가하기
//     chatBox.append(div);

//     input.value = "";
// }

// // 이벤트 연결하기
// send.addEventListener("click", "sendMyText");

const chatBox = document.querySelector("#chat-box");
const input = document.querySelector("#input");
const send = document.querySelector("#send");

function sendMyText() {
    // 변수 선언
  const newMessage = input.value;
  // 새로운 요소 추가할 때는 createElement를 사용한다
  const div = document.createElement("div");
  // <div></div>
    // div에 클래스 추가하려면 이렇게 쓰면 된다!
    // 한번에 여러개 추가하려면 콤마 찍고 띄어쓰기 한 후 다시 쓰면 됨
  div.classList.add("bubble", "my-bubble");
  // <div class="bubble my-bubble"></div>

  // 띄울 내용을 새로 입력한 메세지로 변경하는 코드
  div.innerHTML = newMessage;
  // <div class="bubble my-bubble">텍스트</div>

  // 새로운 요소 추가하기
  chatBox.append(div);

  input.value = "";
}

send.addEventListener("click", sendMyText);
function sendMyTextByEnter(e) {
    console.log(e.key, e.shiftKey);
}
// 글자가 입력됐을 때 발생하는 이벤트 이름: keypress
input.addEventListener("keypress", sendMyTextByEnter);