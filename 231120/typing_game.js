// 배열로 단어 추가
const words = ["떡볶이","Javascript", "튀김", "Montblanc", "Figma", "Powerpoint", "UI", "UX", "Design", "집"];
const container = document.querySelector("#container");
// console.log(container.offsetWidth, container.offsetHeight);

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
        span.setAttribute("id", el);
        // span에 들어갈 내용 추가하기
        span.innerHTML = el;
        // css 바꾸려면 .style 붙이고 속성 써주면 됨
        // 단 두개이상의 단어로 연결되면 뒤의 단어 첫글자를 대문자로 쓴다(예: innerHtml)
        // 단위를 입력할 때는 문자열("" 사이에), 단위까지 붙여주기(예: 100px);
        span.style.top = `${
            Math.floor(Math.random() * (maxPositionY - 20)) + 20
        }px`;
        // Math.random() * (maxPositionX - 20) + 20; // (최대값 - 최소값)
        span.style.left = `${
            Math.floor(Math.random() * (maxPositionX - 20)) + 20
        }px`;
        container.append(span);
    });
}

const input = document.querySelector("#input");
// 안의 값이 변화했을 때는 change를 사용한다
input.addEventListener("change", function(){
    const word = document.querySelector(`span[id=${input.value}]`);
    // span 태그의 속성중에 어떠한 속성값
    console.log(word);
    if(word != null) {
        alert("해냈다!");
        word.remove();
        // 지웠을 때 재도전할건지 물어보기
        // 배열의 길이(length)가 0이 됐을 때 다시 할건지 물어보는 것이다
        const leftwords = document.querySelectorAll(".word");
        console.log(leftwords);
        if(leftwords.length == 0) {
            alert("클리어!");
            // confirm 함수 = 함수 자체에서 예 아니오가 나오는 함수
            if(confirm("재도전 하시겠습니까?")) {
                window.location.reload();
            }
        }
    }
    // 공백으로 초기화
    input.value = "";
});
init();