const bodyTag = document.querySelector("body");
bodyTag.children[2].previousElementSibling.children[0].style.backgroundColor = "lavender";

// bodyTag.firstElementChild ==> 를 사용해서 글씨색을 red 로 색 바꿔보고
bodyTag.firstElementChild.nextElementSibling.children[0].style.color = "tomato";
// bodyTag.children[1] ==> font 사이즈를 32px로 바꿔보기
bodyTag.children[1].firstElementChild.style.fontSize = "32px";

const doingList = document.querySelector("#doing_list");
const doneList = document.querySelector("#done_list");
doingList.children[2].nextElementSibling.style.backgroundColor = "cyan";

// 1번째 리스트 맨 마지막 요소 배경색 변경, 글씨색 blue
// doneList.parentElement 태그 사용
doneList.parentElement.children[1].lastElementChild.style.color = "blue";
// 코드 설명: donelist 의 부모요소(body)의 1번째 자식의(ul) 맨마지막 자식(jquery)의 색을 바꾸기

// 2번째 리스트 맨 첫번째거 폰트사이즈 32px로 변경
// doneList.parentElement 태그 사용
doingList.parentElement.children[1].children[3].style.fontSize = "32px";
// 코드 설명: doinglist 의 부모요소(body)의 1번째 자식의(ul)의 3번째 자식(jquery)의 font 사이즈를
// 32px로 변경 