// span 태그의 배경색 변경 - yellow
$("span").css("backgroundColor", "chiffon");
// div의 모든 후손중 span 태그의 테두리 - red
$("div span").css("border", "2px solid chartreuse");
// div의 바로 다음 자식 span태그의 테두리 - blue
$("div > span").css("border", "2px solid blue");