// for (let j = 1; j <= 5; j++) {
//     for (let i = 1; i <= 5; i++) {
//         document.write('*');
//     }
//     document.write(`<br>`);
// } document.write(`<hr>`);

// *
// **
// ***
// ****
// *****
// 출력하기
document.write(`<h5>별찍기 직각삼각형</h5>`);
for (let j = 1; j <= 5; j++) { // j가 1부터 시작해서 5보다 작거나 같을 때까지 1씩 증가시킨다
    for (let i = 1; i <= j; i++) {
        document.write('*');
    }
    document.write(`<br>`);
} document.write(`<hr>`);

//     *
//    **
//   ***
//  ****
// *****
// 출력하기
document.write(`<h5>별찍기 아래직각삼각형</h5>`);
for (let j = 1; j <= 5; j++) {
    // 공백 ==> 4 3 2 1개씩 찍힘
    for (let i = 5; i >= j; i--) { // 4 3 2 1 이렇게 줄어든다
        document.write('&nbsp;');
    } for (let k = 1; k <= j; k++) {
        document.write('*');
    }
    document.write(`<br>`);
} document.write(`<hr>`);

// *****
//  ****
//   ***
//    **
//     *
// 출력하기
document.write(`<h5>별찍기 직각삼각형</h5>`);
for (let j = 1; j <= 5; j++) {  // 1 2 3 4 5개 출력이 반복
    for (let i = 1; i <= j; i++) { // 0 1 2 3 4개 출력이 반복
        document.write('&nbsp;');
    } for (let k = 5; k >= j; k--) { // 5 4 3 2 1개 출력이 반복
        document.write('*');
    }
    document.write(`<br>`);
} document.write(`<hr>`);

// *****
// ****
// ***
// **
// *
// 출력하기
document.write(`<h5>별찍기 역직각삼각형</h5>`);
for (let j = 5; j >= 1; j--) { // j가 5부터 시작해서 i보다 크거나 같을 때까지 감소시킨다
    for (let k = 1; k <= j; k++) {
        document.write('*');
    }
    for (let i = 5; i >= j; i--) { // i가 5부터 시작해서 j보다 크거나 같을 때까지 반복한다
        document.write('&nbsp;');
    } 
    document.write(`<br>`);
} document.write(`<hr>`);

    // *****
    // ****
    // ***
    // **
    // *
    document.write(`<h5>별찍기 역직각삼각형</h5>`);
    for (let j = 1; j <= 5; j++) {
      // j ==> 1 2 3 4 5
      for (let i = 5; i >= j; i--) {
        document.write(`*`); // 5 4 3 2 1
      }
      document.write(`<br>`);
    } // 선생님 코드
    document.write(`<hr>`);

for (let i = 1; i <= 7; i++) {
    // for (let j = 1; j >= i; j--) {
        if (i <= 3) {
            document.write('&nbsp;');
            document.write('*');
            document.write(`<br>`);
        } else if (i >= 7) {
            document.write('*****');
            document.write(`<br>`);
        } else {
            document.write('&nbsp;****');
            document.write(`<br>`);
        }
    // }
}   document.write(`<hr>`);

document.write(`<h5>별찍기 트리</h5>`);
for (let j = 1; j <= 5; j++) {
    // 공백 ==> 4 3 2 1개씩 찍힘
    for (let i = 5; i >= j; i--) { // 4 3 2 1 이렇게 줄어든다
        document.write('&nbsp;');
    } for (let k = 1; k + 1 <= j; k++) {
        document.write('*');
    }
    for (let m = 1; m <= j; m++) {
        document.write('*');
    }
    document.write(`<br>`);
} document.write(`<hr>`);

document.write(`<h5>별찍기 트리2</h5>`);
for (let i = 0; i < 5; i++) { // i가 0부터 시작해서 5보다 작은 값이 될때까지 i를 1씩 증가시킨다
  for (let j = 4; j > i; j--) { // j가 4부터 시작해서 i보다 커질 때까지 j를 1씩 감소시킨다
    // 4 3 2 1 0
    document.write(`&nbsp;`);
    console.log(`i : ${i}, j : ${j}`);
  }
  for (let k = 1; k < 2 * i + 2; k++) { // k가 1일때 i를 곱하고 2를 더한 값에 1씩 증가시킨다
    // 1 3 5 7 9
    document.write(`*`);
  }
  document.write(`<br>`);
}