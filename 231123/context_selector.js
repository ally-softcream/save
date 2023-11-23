// jQuery가 포함된 span태그의 테두리를 파란색으로
// 아래와 같은 문법으로 쓴다
$("span:contains(jQuery)").css("border","2px solid blue");
// jQuery가 포함되지 않은 span태그의 테두리를 주황색으로
// 순서 거꾸로 읽으면 말이 된다!
$("span").not("span:contains(jQuery)").css("border","3px solid orange");
// span 태그를 갖는 div요소 태그의 테두리를 분홍색으로
$("div:has(span)").css("border","5px solid pink");
// 아무것도 없는 빈 div 태그의 테두리
$("div:empty").css("border","2px solid teal");
// div 후손 span 태그의 글자색을 회색, 크기 키우고 볼드체로
$("div span:parent").css({
    color: "red",
    "font-weight": 900,
    "font-size": "20px",
});