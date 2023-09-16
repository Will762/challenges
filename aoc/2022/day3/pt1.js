const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) =>  {
    const backpack = data.split('\n');
    const compartments = backpack.map((e) => [e.substring(0, e.length / 2), e.substring(e.length / 2)]);
    let score = 0;
    const alphas = 'abcdefghijklmnopqrstuvwxyz';
    compartments.forEach((e) => {
        let commonItem;
        for (let i = 0; i < e[0].length; i++) {
            if (e[1].includes(e[0][i])) {
                commonItem = e[0][i];
                break;
            }
        }
        const index = alphas.indexOf(commonItem);
        if (index === -1) {
            commonItem = commonItem.toLowerCase();
            score += alphas.indexOf(commonItem) + 27;
        } else {
            score += index + 1;
        }
    });
    console.log(score); 
});