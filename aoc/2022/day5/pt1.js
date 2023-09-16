const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    const split = data.split('\n\n');
    const crates = split[0];
    const crateRows = crates.split('\n');
    crateRows.pop();
    const stacks = [];

    crateRows.forEach((row) =>  {
        for (let i = 1; i < row.length; i += 4) {
            if (row[i] !== ' ') {
                const index = parseInt(i / 4);
                stacks[index] ? stacks[index].push(row[i]) : stacks[index] = [row[i]];
            }
        }
    });

    function moveCrate(qty, from, to) {
        for (let i = 0; i < qty; i++) {
            const crateToMove = stacks[from - 1].shift();
            stacks[to - 1].unshift(crateToMove);
        }
    }

    const instructions = split[1];
    const instructionRows = instructions.split('\n').map((row) => row.split(' ').map(Number).filter(Number));
    instructionRows.forEach((e) => moveCrate(...e));
    const result = stacks.map((e) => e.shift());
    console.log(result.join(''));
});
