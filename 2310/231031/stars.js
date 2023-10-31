for (let j = 1; j <= 5; j++) {
    for (let i = 1; i <= 5; i++) {
        document.write('*');
    }
    document.write(`<br>`);
} document.write(`<hr>`);

// *
// **
// ***
// ****
// *****
// 출력하기

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

for (let j = 1; j <= 5; j++) {
    for (let i = 1; i <= j; i++) {
        document.write('&nbsp;');
    } for (let k = 5; k >= j; k--) {
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

for (let j = 5; j >= 1; j--) { // j가 5부터 시작해서 i보다 크거나 같을 때까지 감소시킨다
    for (let k = 1; k <= j; k++) {
        document.write('*');
    }
    for (let i = 5; i >= j; i--) { // i가 5부터 시작해서 j보다 크거나 같을 때까지
        document.write('&nbsp;');
    } 
    document.write(`<br>`);
} document.write(`<hr>`);