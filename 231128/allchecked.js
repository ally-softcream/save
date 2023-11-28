$("#chkController").on("click",function(){
    // 1. 전체 선택에 매핑된 input 박스(체크박스)를 가져온다.
    // ↓ 변수에 담기
    const allCheck = $("#chkController");
    // 2. 가져온 체크박스가 체크가 됐는지를 확인한다.
    // attr 또는 prop를 쓰기
    const check = allCheck.prop("checked");
    // console.log(check);
    // 3. 체크가 되었다면 아래 다섯개의 체크박스에 체크,
    if (check) {
        // 나머지 전체 형제-그중 input만을 선택
        allCheck.siblings("input").prop("checked",true);
    }
    // 아니라면 다섯개 체크박스의 체크를 해제한다.
    else {
        allCheck.siblings("input").prop("checked",false);
    }
    $("#chkController").siblings("input").on("click",function(){
        // 1. 전체 체크박스를 가져온다
        const allCheckbox = $("#chkController").siblings("input");
        console.log(allCheckbox);
        // 2. 체크된 체크박스만 가져온다.
        // 이 경우 input을 써준다
        const checkedBox = $("#chkController > input:checked");
        console.log(checkedBox);
        // 3. 전체 체크박스의 갯수와 체크된 체크박스의 개수를 비교해서
        // 전체 선택에 매핑되어 있는 체크박스를 checked로 만든다.
        if(allCheckbox.length == checkedBox.length) {
            $("#chkController").prop("checked",true);
        } else {
            $("#chkController").prop("checked",false);
        }
    });
});