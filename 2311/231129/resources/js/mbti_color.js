// color input 값 가져오기
const colorInput = document.querySelector(".color-input"); 
console.log(colorInput);
colorInput.addEventListener("change",function(){
    // alert(colorInput.value);
    const colorVal = colorInput.value;
    if(colorVal.length == 7) {
        const colorChip = document.querySelector(".color-input-chip");
        // 가져온 colorchip의 값을 colorval의 값으로 바꿔주기
        colorChip.style.backgroundColor = colorVal;
    }
});

// $(".color-input").on("change",function() {
//     // alert($(this).val());
//     const colorVal = $(this).val();
//     if(colorVal.length == 7){
//         $(".color-input-chip").css("backgroundColor", colorVal);
//     }
// });