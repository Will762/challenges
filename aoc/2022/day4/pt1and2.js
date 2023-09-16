const { count } = require('console');
const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) =>  {
    const lines = data.split('\n');
    const numberRange = lines.map((e) => e.split(',')).map((rangePairs) => rangePairs.map((numberRange) => numberRange.split('-').map(Number)));
    let count = 0;
    numberRange.forEach((e) => {
        const r1 = e[0];
        const r2 = e[1];

        // fully contained
        if (r1[0] <= r2[0] && r1[1] >= r2[1]) {
            count++;
        }
        else if (r2[0] <= r1[0] && r2[1] >= r1[1]) {
            count++
        }
        // partially contained
        else if (r1[0] <= r2[1] && r1[0] >= r2[0]) {
            count++;
        }
        else if (r1[1] <= r2[1] && r1[1] >= r2[0]) {
            count++;
        }
    });
    console.log(count);
});