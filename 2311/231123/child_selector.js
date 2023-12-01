// :first, first-child, last, last-child 사용
// 첫번째 리스트의 첫번째 항목 배경색상 바꾸고 보더 주기
// 두번째 리스트의 첫번재 항목 보더 주기

// $("li:first").css({
//     backgroundColor: "lavender",
//     border: "1px solid black",
// });

$("li:first-child").css({
    backgroundColor: "lavender",
    border: "1px solid black",
});
$("li:first").css({
    backgroundColor: "orange",
    border: "1px solid blue",
});
$("li:last-child").css({
    border: "1px solid orange",
});
$("li:last").css({
    border: "1px solid salmon",
});
// only-child는 외동(혼자)만 있을 때 사용 가능
$("li:only-child").css({
    backgroundColor: "yellowgreen",
});
$("li:nth-child(2)").not("li:first").not("li:last").css({
    backgroundColor: "yellowgreen",
});
