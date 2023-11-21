// alert($("p").html()); // = js에서 innerHTML 과 같다
// alert($("p").text());
// el = element의 약자(요소를 가져올 때 쓰임)
$("p").each(function(el) {
    console.log(el);
})