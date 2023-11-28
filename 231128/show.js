// $("#side").on("click",function(){
//     $("#side").Toggle(100);
// })

// $("#show").on("click",function(){
//     $("p").css("display", "");
// })

// // 태그를 선택할 때는 <> 없이 태그명만 쓰기
// $("#hide").on("click",function(){
//     $("p").css("display", "none");
// })

// 또는

$("#trap").on("click",function(){
    $("#trap").hide(100);
})

// 투명했다가 다시 보임 opacity가 적용된 상태다
$("#hide").on("click",function(){
    $("p").hide(100);
})

$("#show").on("click",function(){
    $("p").show(100);
})

$("#toggle").on("click",function(){
    $("p").toggle(100);
})