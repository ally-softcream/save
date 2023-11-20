// const pTags = document.querySelectorAll("p");
//     // console.log(pTags);
//     pTags.forEach(function (el) {
//       el.addEventListener("click", function () {
//         el.classList.toggle("selected");
//       });
//     });

const divs = document.querySelector(".holder1, .holder2");
console.log(divs);

    const holder1 = document.querySelector(".holder1");

    // holder1 의 첫번째 자식요소 가져오기
    const firstDiv = holder1.firstElementChild;

    // holder1 의 마지막 자식요소 가져오기
    const lastDiv = holder1.lastElementChild;

    function leftToRight() {
      const selectedPtags = firstDiv.querySelectorAll("p[class=selected]");
      //   console.log(selectedPtags);
      selectedPtags.forEach(function (el) {
        el.remove();
        el.setAttribute("class", "");
        lastDiv.append(el);
      });
    }

    function leftToRightAll() {
      const selectedPtags = firstDiv.querySelectorAll("p");
      selectedPtags.forEach(function (el) {
        el.remove();
        el.setAttribute("class", "");
        lastDiv.append(el);
      });
    }

    function rightToLeft() {
      const selectedPtags = lastDiv.querySelectorAll("p[class=selected]");
      selectedPtags.forEach(function (el) {
        el.remove();
        el.setAttribute("class", "");
        firstDiv.append(el);
      });
    }

    function rightToLeftAll() {
      const selectedPtags = lastDiv.querySelectorAll("p");
      selectedPtags.forEach(function (el) {
        el.remove();
        el.setAttribute("class", "");
        firstDiv.append(el);
      });
    }

    function addItem() {
      // input[type=number] --> input인데 type가 number인거
      const inputNum =  document.querySelector("input[type=number]").value;
      // p태그 생성
      const pTag = document.createElement("p"); // <p></p> 이렇게 된 상태
      pTag.innerHTML = inputNum
    }

    firstDiv.append(pTag);