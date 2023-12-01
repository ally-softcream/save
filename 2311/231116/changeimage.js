// 해야할거
// 1) 경로에서 이미지 불러오기
// 2) 변경할 이미지 경로 설정하기

// function changeImage() {
//     document.getElementById("image").src = "../resources/image/ebook.jpeg";
// }

// 또는

// function changeImg() {
//     const img = document.getElementById("image");
//     img.src = "../resources/image/ebook.jpeg";
// }

// 또는

function changeImage() {
    const img = document.getElementById("image");
    img.setAttribute("src", "../resources/image/ebook.jpeg");
    console.log(img.getAttribute("src"));
    console.log(img.getAttribute("id"));
    console.log(img.getAttribute("class"));
}
//      attribute 자체가 속성같은 거고 값을 변경해줄 때는 setAttribute 라는 함수를 사용가능.
//      안에는 파라미터가 들어간다. 태그.setAttribute("파라미터1","파라미터2"); 이런 문법이다.