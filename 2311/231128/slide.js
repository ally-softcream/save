// slide 함수

$("#flip").on("click",function(){
    // 단어나 단위-숫자를 통해 속도 조절 가능
    // $("#panel").slideDown(5000);
    // $("#panel").slideUp(500);
    // 눌렀다가 내려왔을 때 누르면 다시 올라간다
    $("#panel").slideToggle(500);
});

$("#stop").on("click",function(){
    $("panel").stop();
})