$("#container").on("click", function(){
    // 요소를 넣어주려면 `를 양쪽에 붙이기
    $("#container").append(`
    <span>새로 생성된 span 태그입니다.</span>
    <table>
        <tr>
            <th>필드1</th>
            <th>필드2</th>
        </tr>
        <tr>
            <td>항목1</td>
            <td>항목2</td>
        </tr>
    </table>
    `);
});

// 배열에 이미지 담는 방법
const imgPlus = ["감자튀김.jpg","용문산.jpg","티셔츠.jpg","bills.jpg"];
$(function() {
    $(`p`).on("click", (function(){
        const idx = $(this).index();
        // const clickEvent = $(this).attr("id");
        // switch(clickEvent) {
        //     case "#image1":
        //         $(`#image1`).append(`<img src="../resources/image/감자튀김.jpg"><br>`);
        //         break;
        //     case "#image2":
        //         $(`#image2`).append(`<img src="../resources/image/용문산.jpg"><br>`);
        //         break;
        //     case "#image3":
        //         $(`#image3`).append(`<img src="../resources/image/티셔츠.jpg"><br>`);
        //         break;
        //     case "#image4":
        //         $(`#image4`).append(`<img src="../resources/image/bills.jpg"><br>`);
        //         break;
        //     default:
        // }
        // 젠장 안되잖아 개자식아~!~!

        // 원래 했던거
        // $(`#image1`).append(`<img src="../resources/image/감자튀김.jpg"><br>`);
        // $(`#image2`).append(`<img src="../resources/image/용문산.jpg">`);
        // $(`#image3`).append(`<img src="../resources/image/티셔츠.jpg">`);
        // $(`#image4`).append(`<img src="../resources/image/bills.jpg">`);


    })
    );
});