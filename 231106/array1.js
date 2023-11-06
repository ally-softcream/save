const arr = [2, 4, 6, 8, 10, "candy", true];
    // 1. 원본 배열을 변형시키는 함수
    // 2. 원본 배열을 변형시키지 않고 참조만 하는 함수
    // 3. 원본 배열을 변형시키지 않고 여러번 반복해서 참조하는 함수

document.write(`<h3>1. push() 함수</h3>`);
    // 원본 배열을 변형시키는 함수
    // 1. push() 함수: 하나 이상의 요소를 배열의 가장 마지막에 추가한다.
    // 배열에 요소가 성공적으로 추가되면 추가된 이후 배열의 길이를 반환한다.
    // (return 등으로 내보낸다는 말)
arr.push(11, false); // 한꺼번에 두개 이상을 쓰면 그게 한번에 다 추가된다!
const arrLength = arr.push(12, false);
    // 하나 이상이여도 추가가 가능하다.
document.write(`<h5>push 이후의 배열: [${arr}]</h5>`);
document.write(`<h5>push 이후의 배열 길이: [${arrLength}]</h5>`);
console.log(arr);


document.write(`<hr>`);
document.write(`<h3>2. pop() 함수</h3>`);
    // 2. pop() 함수 - 배열의 가장 마지막 요소를 제거하고, 그 제거된 요소를 반환한다.
document.write(`<h5>pop 으로 제거한 요소 : ${arr.pop()}</h5>`);
document.write(`<h5>pop 이후의 배열 : [${arr}]</h5>`);

document.write(`<hr>`);
document.write(`<h3>3. unshift() 함수</h3>`);
    // 3. unshift() 함수 - 하나 이상의 요소를 배열의 가장 앞에 추가한다.
    // 배열에 요소가 성공적으로 추가가 되면 추가된 이후 배열의 길이를 반환한다.
    // push랑 비슷한데 위치가 다르다는 것에 주의
document.write(`<h5>unshift 이후의 배열 길이 : ${arr.unshift(-1, -3)}</h5>`);
document.write(`<h5>unshift 이후의 배열 : [${arr}]</h5>`);

document.write(`<hr>`);
document.write(`<h3>4. shift() 함수</h3>`);
    // 4. shift 함수
    // 배열의 첫번째 요소를 제거하고, 그 제거된 요소를 반환한다.
document.write(`<h5>unshift 이후의 배열 길이 : ${arr.shift()}</h5>`);
document.write(`<h5>unshift 이후의 배열 : [${arr}]</h5>`);

document.write(`<hr>`);
document.write(`<h3>5. reverse() 함수</h3>`);
    // 5. reverse 함수
    // 배열 요소의 순서를 전부 반대로 바꾼다.
    arr.reverse();
    document.write(`<h5>reverse 이후의 배열: [${arr}]</h5>`)

document.write(`<hr>`);
document.write(`<h3>6. sort() 함수</h3>`);
    // 5. sort 함수
    // 배열의 요소들을 알파벳 순서에 따라 정렬한다.
    // 단, 요소들을 문자열 취급하여 정렬한다. (문자열 외의 요소는 적용 불가)
const strArr = ["소다", "솜사탕", "마시멜로", "뽕따", "캔디바"];
const numArr = [1, 324, 4312, 2, 54];
document.write(`<h5>sort 이후의 strArr: [${strArr}]</h5>`);
document.write(`<h5>sort 이후의 numArr: [${numArr}]</h5>`);

document.write(`<hr>`);
document.write(`<h3>7. splice() 함수</h3>`);
    // 5. sort 함수
    // 기존의 배열 요소를 제거하거나 새로운 배열요소를 추가한다.
    // 첫번재 파라미터는 새로운 요소가 삽입될 위치의 인덱스이며,
    // 두번째 파라미터는 제거할 요소의 개수이다. 
    // 제거된 요소를 배열의 형태로 반환하고, 아무 요소도 제거되지 않았으면 빈 배열을 반환
const arr2 = [1, true, "honeybee", "자바스크립트"];
document.write(`<h5>splice 이전의 배열: [${arr2}]</h5>`);
document.write(`<h5>splice 제거된 요소들: [${arr2.splice(1, 2, false, "bee")}]</h5>`);
document.write(`<h5>splice 이후의 배열: [${arr2}]</h5>`);