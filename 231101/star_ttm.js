let x = 1;

for (let i = 0; i < 5; i++){
    for (let j = 4; j > i; j--){
        document.write(`&nbsp`);
    }
    for (let k = 0; k < x; k++){
        document.write(`*`);
    }
    x += 2;
    document.write(`<br>`);
}

document.write(`<hr>`);

let y = 9;

for (let i = 0; i < 5; i++){
    for (let j = 0; j < i; j++){
        document.write(`&nbsp`);
    }
    for (let k = y; k > 0; k--){
        document.write(`*`);
    }
    y -= 2;
    document.write(`<br>`);
}