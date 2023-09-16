const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) =>  {
    const backpack = data.split('\n');
    const groupsOfThree = [];
    let groupOfThree = [];
    backpack.forEach((e) => {
        if (groupOfThree.length === 3) {
            groupsOfThree.push(groupOfThree);
            groupOfThree = [];
        }
        groupOfThree.push(e);
    });
    groupsOfThree.push(groupOfThree);

    let score = 0;
    const alphas = 'abcdefghijklmnopqrstuvwxyz';
    groupsOfThree.forEach((e) => {
        let commonItem;
        for (let i = 0; i < e[0].length; i++) {
            if (e[1].includes(e[0][i]) && e[2].includes(e[0][i])) {
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