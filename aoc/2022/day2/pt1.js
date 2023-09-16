const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    let score = 0;
    const rounds = data.split('\n');
    rounds.forEach((e) => {
        const oppHand = e[0];
        const ourHand = e[2];
        const table = {
            A: {
                X: 3,
                Y: 6,
                Z: 0,
            },
            B: {
                X: 0,
                Y: 3, 
                Z: 6
            },
            C: {
                X: 6,
                Y: 0,
                Z: 3
            }
        };

        if (ourHand === 'X') {
            score += 1;
        } else if (ourHand === 'Y') {
            score += 2;
        } else if (ourHand === 'Z') {
            score += 3;
        }
        score += table[oppHand][ourHand];
    });
    console.log(score);
});

