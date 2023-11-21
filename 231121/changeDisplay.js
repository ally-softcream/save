// 클릭했을 때 display= none; 이 되게 만들기

// 제이쿼리 문법으로 h3 태그 선택은 이렇게 쓰면 된다!
// $("h3").on("click", function(){
//     $(this).css("display","none");
//     // this = 실제 h3 태그들중에서 실제 클릭이 발생한 것만 지칭함
// });

// 순수 자바스크립트로는 이렇게
const h3 = document.getElementsByTagName("h3");
h3.forEach(function(el) {
    // 하나씩 가져와서 이벤트를 달아줘야 한다는점이 제이쿼리와의 차이
    el.addEventListner("click", function(e) {
        e.target.style.display = "none";
    });
});