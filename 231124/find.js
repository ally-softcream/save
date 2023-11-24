// $("li.start").next().css({
//     color: "orange",
//     border: "2px solid orange",
// });
// $("li.start").nextAll().css({
//     color: "orange",
//     border: "2px solid orange",
// });
// $("li.start").nextUntil("li.stop",".my").css({
//     color: "orange",
//     border: "2px solid orange",
// });

// prev 3종 세트
// 한개만 선택하는 거라서 두개 이상은 선택이 안됨
// $("li.stop").prev().css({
//     color: "mediumturquoise",
//     border: "2px solid mediumturquoise",
// });
// $("li.my").prevAll().css({
//     color: "mediumturquoise",
//     border: "2px solid mediumturquoise",
// });
// $("li.stop").prevUntil("li.start",".my").css({
//     color: "orange",
//     border: "2px solid orange",
// });

// siblings(형제 전체)
// $("li.stop").siblings().css({
//     color: "orange",
//     border: "2px solid orange",
// });
// $("li.stop").siblings("li.my").css({
//     color: "orange",
//     border: "2px solid orange",
// });

// 위랑 아래 같은 거
// $("li.start, li.stop").css({
//     color: "orange",
//     border: "2px solid orange",
// });
$("li.start").add("li.stop").css({
    color: "Mediumorchid",
    border: "2px solid magenta",
});
