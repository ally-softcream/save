// 1.사용자에게 이름을 입력받는다.
const userName = prompt("이름을 입력하세요.");
// 입력 함수: prompt
// 2. 사용자에게 색상명을 입력받는다.
const color =  prompt("색상명을 입력하세요.");
// 이렇게 받는것들은 대체로 const로 둔다.
// 3. 이름을 DIV에 넣어주고 입력받은 이름의 color를 변경한다.
const func = function (name, color) { 
    // 괄호 안의 것들은 함수 안에서 쓰는 변수
    // (중괄호 안에서 name과 color라는 변수를 사용 가능)
    // 밖에서 선언한 color는 전역변수, 안에서 선언한 color는 지역변수
    // div 요소를 가져온다.
    const divEl = document.getElementById("name");
    // 태그명, 아이디, 클래스 등을 다 가지고 올 수 있음
    // const divE1 = document.querySelector("#name"); 도 같다
    // 이름을 div태그 안에 넣는다. innerHTML 이용
    divEl.innerHTML = name;
    // 이름의 색을 입력받은 색상명으로 바꾼다.
    divEl.style.color = color;
    // 이렇게 선언하면 함수가 선언되어서 글자가 진해진다!
 }
 func(userName, color);
 // 받아야할 것들을 func 괄호 안에 넣어준다!
