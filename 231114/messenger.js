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
  // 메세지 아무것도 입력 안 하면 엔터 안 쳐지게 만드는 코드
  // 길이가 0이라면 함수가 종료하게 만드는 코드
  if (newMessage.length == 0) {
    return;
  }
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
    // 넘겨주는 정보 중에 key랑 shiftkey 라는 것이 있다
    console.log(e.key, e.shiftKey);
    // enter 를 입력했을 때
    // !는 부정연산자. 예: !true==false
    if(e.key == "Enter" && !e.shiftKey) {
        // 엔터키를 누르면 메세지를 보낸다
        // 쉬프트키를 같이 누르면 메세지를 보내지 않는다
        sendMyText();
        // ↑ 메세지 보내는 함수 호출하기(또 다 적지 않아도 됨!)
        e.preventDefault(); // ← 라는 새로운 함수 등장..
        // 이 함수의 기능: 기본 이벤트를 취소한다
    }
}
// 글자가 입력됐을 때 발생하는 이벤트 이름: keypress
input.addEventListener("keypress", sendMyTextByEnter);