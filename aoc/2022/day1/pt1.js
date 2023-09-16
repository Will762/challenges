const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    const groups = data.split('\n\n');
    const groupItems = groups.map((e) => e.split('\n'));
    const sums = groupItems.map((e) => e.reduce((acc, curr) => acc + parseInt(curr), 0));
    console.log(Math.max(...sums));
});
