// 배열로 단어 추가
const words = ["떡볶이","Javascript", "튀김", "Montblanc", "Figma", "Powerpoint", "UI", "UX", "Design", "집"];
const container = document.querySelector("#container");
console.log(container.offsetWidth, container.offsetHeight);

// 빼서 적당히 사이즈 맞춰주기
const maxPositionX = container.offsetWidth - 90;
const maxPositionY = container.offsetHeight - 100;

function init() {
    // 반복문 써서 배열 가져오기
    words.forEach(function(el) {
        // span 태그 만들기
        const span = document.createElement("span");
        // span에다가 word라는 클래스를 추가하기
        span.classList.add("word");
        // span에 들어갈 내용 추가하기
        span.innerHTML = el;
        container.append(span);
    });
}
init();