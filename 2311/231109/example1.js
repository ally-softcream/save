// 1. 변수 두개를 선언하고 각각 초기값을 3, 4 로 할당하세요.
const a = 3;
const b = 4;

// 2. 위의 두 변수의 합, 차, 곱, 나누기한 값을 콘솔창에 출력해보세요.
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// 3. 위 문제에서 콘솔창에 출력 할 때 결과가 어떤 연산을 했는지
// (합의 결과인지, 차의 결과인지)
//    를 알 수 있도록 결과값 왼쪽에 연산 내용을 표시해보세요.
//    ex) 3 ==> a + b = 3
//    ex) 15 ==> a * b = 15
// console.log(`a + b = ${a + b}`); // "a + b = " + a + b
// console.log(`a - b = ${a - b}`);
// console.log(`a * b = ${a * b}`);
// console.log(`a / b = ${a / b}`);

// 4. 1번에서 선언한 변수 두개의 대소 비교를 하여 어떤 변수가 큰지를
//    alert 창으로 출력할 수 있게 작성해보세요.(조건문 사용)
//    ex) a가 b 보다 크면 a가 b보다 큽니다.
//    ex) b가 a 보다 크면 b가 a보다 큽니다.
if (a > b) {
  alert("a가 b보다 큽니다.");
} else {
  alert("b가 a보다 큽니다.");
}

// 5. 비어있는 객체 하나를 생성해보세요.
const obj = {};

// 6. 위에서 만든 객체에 num1과 num2 라는 속성을 추가하고
//    각각에 1번 문제에서 만든 a, b 를 할당해보세요.
// obj.num1 = a;
// obj.num2 = b;
obj["num1"] = a;
obj["num2"] = b;

// 7. 위에서 만든 객체의 속성을 콘솔창에 각각 출력해보세요.
// console.log(obj.num1);
// console.log(obj.num2);
console.log(obj["num1"]);
console.log(obj["num2"]);

// 8. 비어있는 배열을 선언하고 그 배열에 1부터 10까지 숫자를 추가해보세요.
//    (선언 이후에 값을 넣는 방법 사용)
// const arr2 = new Array();
const arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = 8;
// arr[8] = 9;
// arr[9] = 10;

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

// 9. 비어있는 배열을 선언하고 1 ~ 100 까지의 숫자를 추가해보세요.
// (반복문 사용)
const arr2 = [];
for (let i = 1; i <= 100; i++) {
  // arr2[i - 1] = i;
  arr2.push(i);
}
console.log(arr2);

// 10. 비어있는 배열을 선언하고 1 ~ 100 까지의 숫자중 짝수만 추가해보세요.(반복문 사용)
const arr3 = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    arr3.push(i);
  }
}

// 11. 비어있는 배열을 선언하고 1 ~ 100 까지의 숫자중 홀수만 추가해보세요.(반복문 사용)
const arr4 = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    arr4.push(i);
  }
}

// 12. 함수를 생성하고 함수를 호출하면 '안녕하세요!' 라는 
// alert 창이 출력되도록 작성해보세요.
function showAlert() {
  alert("안녕하세요!");
}
showAlert();

// 13. 파라미터를 두개 받는 함수를 생성하고 함수 호출시 두개 파라미터의
//     합이 콘솔창에 출력되도록 작성해보세요.
// function sum(x, y) {
//   console.log(x + y);
// }
// sum(3, 20); // sum 함수 호출

// 14. 위 함수를 호출시 결과가 body 태그에 있는 p 태그에 추가되어 
// 화면에 나타나도록 작성해보세요.
function sum(x, y) {
  // 1. p태그를 가져온다.
  // document.getElementById("aa");
  const pTag = document.querySelector("#aa");

  // 2. 가져온 p태그에 x + y 의 값을 추가한다.
  // <p id="aa">x + y</p> ==> innerHTML
  pTag.innerHTML = x + y;
}
sum(3, 20);