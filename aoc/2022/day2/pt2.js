const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    let score = 0;
    const rounds = data.split('\n');
    rounds.forEach((e) => {
        const oppHand = e[0];
        const matchResult = e[2];
        const table = {
            A: {
                X: 3,
                Y: 1,
                Z: 2,
            },
            B: {
                X: 1,
                Y: 2, 
                Z: 3
            },
            C: {
                X: 2,
                Y: 3,
                Z: 1
            }
        };

        if (matchResult === 'X') {
            score += 0;
        } else if (matchResult === 'Y') {
            score += 3;
        } else if (matchResult === 'Z') {
            score += 6;
        }
        score += table[oppHand][matchResult];
    });
    console.log(score);
});

