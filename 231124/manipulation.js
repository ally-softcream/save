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
        // idx를 선언해서 각각의 태그에 다른 사진이 담기도록 만들기
        const idx = $(this).index();
        // 요소 내부에 추가하는 메소드
        // $(this).append(`<img src="../resources/image/${imgPlus[idx]}">`);
        // 위아래는 각 태그에 사진을 추가한다는 동일한 기능을 가진 메소드다!
        // $(`<img src="../resources/image/${imgPlus[idx]}">`).appendTo(this);
        // $(this).prepend(`<img src="../resources/image/${imgPlus[idx]}">`);
        // $(`<img src="../resources/image/${imgPlus[idx]}">`).prependTo(this);

        // 요소 외부에 추가하는 메소드
        // $(this).after(`<img src="../resources/image/${imgPlus[idx]}">`);
        // $(`<img src="../resources/image/${imgPlus[idx]}">`).insertAfter(this);
        // $(this).before(`<img src="../resources/image/${imgPlus[idx]}">`);
        $(`<img src="../resources/image/${imgPlus[idx]}">`).insertBefore(this);
        // console.log($(this).index());

        // 원래 했던거
        // $(`#image1`).append(`<img src="../resources/image/감자튀김.jpg"><br>`);
        // $(`#image2`).append(`<img src="../resources/image/용문산.jpg">`);
        // $(`#image3`).append(`<img src="../resources/image/티셔츠.jpg">`);
        // $(`#image4`).append(`<img src="../resources/image/bills.jpg">`);


    })
    );
});