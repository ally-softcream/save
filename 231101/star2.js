document.write(`<h5>별찍기 트리</h5>`);
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) { // 두번째 반복에 네번까지 찍기
        document.write('&nbsp;');
    }
    for (let k = 5; k > i; k--) { // 줄어들고 있으니 후위감소 연산자 
        document.write('*');
    }   // 반쪽짜리 완성!
}