// 원본 배열을 변형시키지 않고 참조만 하는 함수
document.write(`<h3>1. Join() 함수</h3>`);
// 원본 배열을 변형시키는 함수
// 1. Join() 함수
// 배열의 모든 요소를 하나의 문자열로 반환한다.
// 파라미터는 optional이며 배열 요소 사이를 구분짓는 구분자로 사용된다.
const arr = [1, true, "Javascript", false, "C언어"];
document.write(`<h4> / 로 구분 : ${arr.join("/")}</h4>`);
document.write(`<h4> + 로 구분 : ${arr.join("+")}</h4>`);
document.write(`<h4> 공백으로 구분 : ${arr.join(" ")}</h4>`);
document.write(`<h4> 파라미터 없이 join 사용 : ${arr.join()}</h4>`);
// 이 경우 콤마가 찍힌다