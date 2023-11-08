// 1~100사이의 랜덤한 숫자를 생성한다.
let randNum = parseInt(Math.random() * 100 + 1);
let count = 0;
const MAX_COUNT = 7;
const inputTag = document.querySelector("#Number"); // input 태그 가져옴, 대소문자 구별하므로 주의할 것
const ptag = document.querySelector("#message");    // p 태그 가져옴

function guess() {
    // 1. 사용자가 입력한 숫자를 가져온다.
    const userNum = inputTag.value;
    inputTag.value = "";
    count++;
    // 2. 가져온 숫자를 랜덤숫자와 비교한다.
    if (userNum == randNum) {
      // 3. 두개가 같으면 '게임에서 승리하셨습니다' 라는 문구를 화면에 출력한다.
      alert(`게임에서 이겼습니다. 컴퓨터의 숫자 : ${randNum}`);
      return;
    } else {
      // 4. 두개가 다르면 대소비교를 하고 화면에 힌트를 제공한다.
      if (userNum > randNum) {
        // 4.1.1 span 태그를 생성
        const spanTag = document.createElement("span");
        // 4.1.2 span 태그에 화면에 표시할 내용을 innerHTML 로 넣어주고
        spanTag.innerHTML = `
                     입력하신 숫자보다 작습니다. 입력한 숫자 : ${userNum}
                     , 남은 횟수 : ${MAX_COUNT - count}`;
        // 4.1.3 p 태그에 span 태그를 append로 추가한다.
        ptag.append(spanTag);
        ptag.append(document.createElement("br"));
      } else {
        const spanTag = document.createElement("span");
        // 4.1.2 span 태그에 화면에 표시할 내용을 innerHTML 로 넣어주고
        spanTag.innerHTML = `
                     입력하신 숫자보다 큽니다. 입력한 숫자 : ${userNum}
                     , 남은 횟수 : ${MAX_COUNT - count}`;
        // 4.1.3 p 태그에 span 태그를 append로 추가한다.
        ptag.append(spanTag);
        ptag.append(document.createElement("br"));
      }
    }

    // 4.2 사용자 입력 횟수와 기회 횟수를 비교하여 같으면 게임 종료
    if (count == MAX_COUNT) {
      alert(`게임에서 패배하셨습니다. 멍청아!! 컴퓨터의 숫자 : ${randNum}`);
    }
  }

// function restart() {
//     count = 0;
//     randNum = parseInt(Math.random() * 100 + 1);
//     ptag.innerHTML = ""; // 값 비워주기
// }

// function guess() {
//     // 함수 연결햇으면 잘 작성됐는지 이걸로 확인해보기
//     // alert("x")
//     // 1. 사용자가 입력한 숫자를 가져온다.
//     const userNum = inputTag.value;
//     // 2. 가져온 숫자를 랜덤숫자와 비교한다.
//     if (userNum == randNum) {
//         // 3. 두개가 같으면 '게임에서 승리하였습니다' 문구를 화면에 출력한다.
//         alert(`게임에서 승리했습니다. 컴퓨터의 숫자: ${randNum}`);
//     } else {
//         // // 4. 두개가 다르면 대소비교를 하고 화면에 힌트를 제공한다.
//         // if (userNum > randNum) {    // 랜덤숫자보다 작은 경우
//         //     // 4.1 p태그에 메세지 출력
//         //     ptag.innerHTML = `입력하신 숫자보다 작습니다. 입력한 숫자: ${userNum}, 
//         //     남은 횟수: ${MAX_COUNT - count}`;
//         // }
//         // else {  // 랜덤숫자보다 큰 경우
//         //     ptag.innerHTML = `입력하신 숫자보다 큽니다. 입력한 숫자: ${userNum}, 
//         //     남은 횟수: ${MAX_COUNT - count}`;
//         // }
//         // // 4.2 사용자 입력 횟수와 기회 횟수를 비교하여 같으면 게임 종료
//         // count++; // 전체 결과에 1을 더한다
//         // if (count == MAX_COUNT) {
//         //     alert(`게임에서 졌습니다. 컴퓨터의 숫자: ${randNum}`);
//         // }
//         // 4. 두개가 다르면 대소비교를 하고 화면에 힌트를 제공한다.

//         // 4.1.1 span 태그를 생성
//         const spantag = document.createElement("span");
//         // 4.1.2 span 태그에 화면에 표시할 내용을 innerHTML 로 넣어주고
//         // 4.1.3 p 태그에 span 태그를 append로 추가한다.
//         if (userNum > randNum) {
//             // 4.1.1 span 태그를 생성
//             const spanTag = document.createElement("span");
//             // 4.1.2 span 태그에 화면에 표시할 내용을 innerHTML 로 넣어주고
//             spantag.innerHTML = `
//                          입력하신 숫자보다 작습니다. 입력한 숫자 : ${userNum}
//                          , 남은 횟수 : ${MAX_COUNT - count}`;
//             // 4.1.3 p 태그에 span 태그를 append로 추가한다.
//             ptag.append(spanTag);
//           } else {
//             const spanTag = document.createElement("span");
//             // 4.1.2 span 태그에 화면에 표시할 내용을 innerHTML 로 넣어주고
//             spanTag.innerHTML = `
//                          입력하신 숫자보다 큽니다. 입력한 숫자 : ${userNum}
//                          , 남은 횟수 : ${MAX_COUNT - count}`;
//             // 4.1.3 p 태그에 span 태그를 append로 추가한다.
//             ptag.append(spanTag);
//           }
//         }
// }  