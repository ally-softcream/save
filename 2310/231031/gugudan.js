for (let i = 2; i <= 9; i++) {
    // 곱해질 수
    document.write(`<table>`);
    document.write(`
        <tr>
            <th>
                ${i}단
            </th>
        <tr>
        `);
        for (let j = 1; j <= 9; j++) {
            document.write(`
                <tr>
                    <td>${i} × ${j} = ${i * j}</td>
                </tr>
            `)
        }
    document.write(`</table>`);
    }