    // 1. id 가 p1인 p 태그를 변수에 할당하세요.
    // const p1 = document.getElementById("p1");
    // <p id="p1">안녕하세요. 아이디가 p1인 p 태그입니다.</p>
    // console.log(p1);

    // 1.1 1번에서 생성한 변수를 활용하여 해당 요소의 텍스트를 콘솔창에 출력하세요.
    //     (콘솔창에 '안녕하세요. 아이디가 p1인 p 태그입니다.' 가 출력되야함)
    // console.log(p1.innerHTML);

    // 1.2 1번에서 생성한 변수를 활용하여 해당 요소의 텍스트를 다른 내용으로 바꿔보세요.
    // p1.innerHTML = "변경된 다른값";
    // console.log(p1.innerHTML);

    // 1.3 1번에서 생성한 변수를 활용하여 해당 요소의 배경색상과 폰트색상을 변경해보세요.
    // p1.style.backgroundColor = "#f3f3f3";
    // p1.style.color = "blue";

    // 2. 클래스가 p1이고 id가 p4인 p 태그를 변수에 할당하세요.
    // const p4 = document.getElementById("p4");

    // 2.1 2번에서 생성한 변수를 활용하여 해당 요소의 텍스트, 배경색, 폰트색상을 변경해보세요.
    // p4.innerHTML = "또 변경된 텍스트";
    // p4.style.backgroundColor = "yellow";
    // p4.style.color = "red";

    // 3. 위 1, 2번 문제에서 작성한 코드를 주석처리하고 4개의 버튼을 각각 눌렀을 때
    //    버튼에 쓰여진 내용대로 동작할 수 있도록 함수를 작성해보세요.
    //    (각 버튼에 onclick 속성 부여하여 함수 연결)
    function changeP1() {
        const p1 = document.getElementById("p1");
        p1.innerHTML = "변경된 텍스트입니다.";
      }
  
      function changeP2() {
        const p2 = document.getElementById("p2");
        p2.style.color = "blue";
      }
  
      function changeP3() {
        const p3 = document.getElementById("p3");
        p3.style.backgroundColor = "yellow";
      }
  
      function changeP4() {
        const p4 = document.getElementById("p4");
        p4.style.fontSize = "20px";
        p4.style.border = "3px dashed red";
        p4.style.display = none;
      }

      function getInput1() {
        const input1 = document.getElementById("input1");
        alert(input1.value);
      }
  
      function getInput2() {
        const input1 = document.getElementById("input1");
        input1.value = "변경된 텍스트입니다.";
      }
  
      function getInput3() {
        const input1 = document.getElementById("input1");
        const p1 = document.getElementById("p1");
        // input.value ==> string
        p1.style.backgroundColor = input1.value;
      }