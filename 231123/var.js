// // [aa=bb] ← 속성 선택자는 이런 문법으로 쓴다!
// console.log($("label[for=user]").html());
// console.log($("label[for=user]").text());

// // 순수 자바스크립트
// const userLabel = document.querySelector("label[for=user]");
// // 이렇게 하면 화면에 있는 user(이름으로 표시)가 name으로 바뀐다!
// userLabel.innerHTML = "Name";

$("label[for=user]").html("Name");
$("#user").val("이름");

$("#btnChange").on("click", function () {
    const newName = prompt("새로운 이름을 입력해주세요.");
    $("#user").val(newName).alert({
        
    });
  });