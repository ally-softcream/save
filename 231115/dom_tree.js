const ul = document.getElementById("list-1");
const li = document.getElementById("list-2");
console.log(ul);

// 노드란? 자식보다 더 많이 잘게 쪼갠 요소를 부르는 말
// 노드는 띄어쓰기를 포함한다.
// 요소와 노드는 다른 말이다. 
//요소가 우리가 알고있는 태그들이고
// 노드는 그것보다 더 많은 것을 감싸는 개념
// 노드가 더 폭넓은 개념이기 때문에, 노드를 찾지 말고 요소를 찾아 써야 한다

// 자식 요소
// console.log(ul.children[0]);
ul.children[4].style.backgroundColor = "tomato"; // == <li>포도</li> <-이게 토마토색이 됨
console.log(ul.firstChild);
console.log(ul.firstElementChild.innerHTML); // 노드 아니고 요소만 찾는 코드(첫번째 자식)
console.log(ul.lastElementChild.innerHTML); // 노드 아니고 요소만 찾는 코드(마지막 자식)

// 부모 요소
console.log(ul.parentElement);
ul.parentElement.style.border = "2px solid tomato";

//부모 요소 & 조상 요소
console.log(ul.closest("div#content")); // 어떤 선택자를 써야됨. id나 class나.. 요소이름이나.. 그런 선택자들
// == ul.parentElement.parentElement 쓴 거랑 같고, 더 간단하게 접근할 수 있는 방법이다.

// 형제 요소
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
console.log(ul.nextElementSibling.nextElementSibling);
// 또는 ul.nextElementSibling.nextElementSibling.lastElementChild.style.backgroundColor = "색";


li.lastElementChild.style.backgroundColor = "teal";
console.log(li.lastElementChild);