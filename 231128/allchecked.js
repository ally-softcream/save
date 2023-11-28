$("#chkController").on("click",function(){
    // 1. 전체 선택에 매핑된 input 박스(체크박스)를 가져온다.
    // ↓ 변수에 담기
    const allCheck = $("#chkController");
    // 2. 가져온 체크박스가 체크가 됐는지를 확인한다.
    // attr 또는 prop를 쓰기
    const check = allCheck.prop("checked");
    console.log(check);
    // 3. 체크가 되었다면 아래 다섯개의 체크박스에 체크,
    if (check) {
        // 나머지 전체 형제-그중 input만을 선택
        allCheck.siblings("input").prop("checked",true);
    }
    // 아니라면 다섯개 체크박스의 체크를 해제한다.
    else {
        allCheck.siblings("input").prop("checked",false);
    }
});