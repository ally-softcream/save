// alert($("p").html()); // = js에서 innerHTML 과 같다
// forEach 는 js에서만 쓰임
// alert($("p").text());
// el = element의 약자(요소를 가져올 때 쓰임)
$("p").each(function(i, v) {
    console.log($(v).html());
    alert($(v).html());
});

// $("p").each(function(index, value){

// })

// forEach(function(value, index, array){

// })