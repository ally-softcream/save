// 원본 배열을 변형시키지 않고 참조만 하는 함수
document.write(`<h3>1. Join() 함수</h3>`);
// 원본 배열을 변형시키는 함수
// 1. Join() 함수
// 배열의 모든 요소를 하나의 문자열로 반환한다.
// 파라미터는 optional이며 배열 요소 사이를 구분짓는 구분자로 사용된다.
const arr = [1, true, "Javascript", false, "C언어"];
document.write(`<h5> / 로 구분 : ${arr.join("/")}</h5>`);
document.write(`<h5> + 로 구분 : ${arr.join("+")}</h5>`);
document.write(`<h5> 공백으로 구분 : ${arr.join(" ")}</h5>`);
document.write(`<h5> 파라미터 없이 join 사용 : ${arr.join()}</h5>`);
// 이 경우 콤마가 찍힌다

document.write(`<hr>`);
document.write(`<h3>1. slice() 함수</h3>`);
// 1. slice() 함수
// 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의
// 모든 배열 요소를 추출하여 새로운 배열을 반환한다.
// 파라미터로 종료 인덱스가 전달되지 않으면 마지막 배열 요소까지 모두 추출한다.
document.write(`<h5>slice 로 반환된 배열 : [${arr.slice(1, 3)}]</h5>`);
document.write(`<h5>slice 에 종료 인덱스가 없을 때 : [${arr.slice(3)}]</h5>`);
document.write(`<h5>원본 배열 : [${arr}]</h5>`);