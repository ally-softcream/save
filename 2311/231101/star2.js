//      *
//     ***
//    *****
//   *******
//  *********
// 만들기

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


// *********
//  *******
//   *****
//    ***
//     *
// 이거 만들기

document.write(`<h5>별찍기 트리</h5>`);
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) { // 두번째 반복에 네번까지 찍기
        document.write(`&nbsp;`);
    }
    for (let k = 5; k > i; k--) { // 줄어들고 있으니 후위감소 연산자 
        document.write(`*`);
    }   // 반쪽짜리 완성!
    for (let z = 4; z > i; z--) { // 4 3 2 1까지 줄어야함, 0이 되면 안됨
        document.write(`*`);
    }
    document.write(`<br>`); // 띄어쓰기를 여기에 넣어줘야 함
}

document.write(`<hr>`);

document.write(`<h5>별찍기 마름모형</h5>`);
    // 위에 세모
    for (let i = 0; i < 5; i++) {
      for (let j = 4; j > i; j--) {
        // 4 3 2 1 0 씩 줄어든다
        document.write(`&nbsp;`);
      }
      for (let k = 0; k <= i; k++) {
        // 0 1 2 3 4 씩 늘어난다
        document.write(`*`);
      }
      for (let z = 0; z < i; z++) {
        // 0 1 2 3 4 씩 늘어난다
        document.write(`*`);
      }
      document.write(`<br>`);
    }
    // 아래 역세모
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j <= i; j++) {
        document.write(`&nbsp;`);
      }
      for (let k = 4; k > i; k--) {
        document.write(`*`);
      }
      for (let z = 3; z > i; z--) {
        document.write(`*`);
      }
      document.write(`<br>`);
    }

document.write(`<hr>`);

// 함수 사용 메서드
for (let i = 1; i <= 5; i++) {
  document.write("&nbsp".repeat(5 - i) + "*".repeat(2 * i - 1) + "<br>");
}
for (let j = 4; j >= 1; j--) {
  document.write("&nbsp".repeat(5 - j) + "*".repeat(2 * j - 1) + "<br>");
}

// 함수 사용 메서드 2
function printInvertedTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
            row += ' '; // 왼쪽 공백 추가
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            if (i === height || k === 1 || k === i * 2 - 1) {
                row += '*'; // 가장 왼쪽과 오른쪽, 가장 아랫부분에만 별 추가
            } else {
                row += ' '; // 나머지 부분은 공백
            }
        }
        console.log(row);
    }
}

// 세모의 높이를 설정
const height = 5;
printInvertedTriangle(height);