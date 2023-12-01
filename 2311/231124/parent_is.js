$("p").on("click", function()
{
    // 1. 선택된 p태그를 가져온다. ($(this))
    const pTag = $(this);
    // 2. 선택된 p태그의 부모요소를 가져온다.
    const parentEl = pTag.parent();
    // 3. 부모요소가 div태그인지 확인한다.
    const parentTagName = parentEl.prop("tagName").toLowerCase();
    // prop("tagName") <- 이 함수 쓰고 결과를 확인하기
    console.log(parentTagName);
    // 4.1 부모요소가 div 태그라면 선택된 p태그의 텍스트를 가져오고
    // 색상을 변경하여 부모요소에 append 한다.
    if (parentTagName == "div") {
        const txt = pTag.text();
        // 첫번째 방법
        // parentEl.append(`<p style="color: orange;">${txt}</p>`)
        // 두번째 방법
        parentEl.append(
            $("<p>").prop({
            innerHTML: txt,
            style: "color: orange",
        })
        );
        // 세번째 방법
        parentEl.append(pTag.clone(true).css("color: orange"));
        
    } // 4.2 부모요소가 div가 아니라면 alert 창을 띄운다.
    else {
        alert("작업대상이 아닙니다.");
    }
})