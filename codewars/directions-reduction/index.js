function dirReduc(arr) {
    let finished;
    const scores = {
        "NORTH": 1,
        "SOUTH": -1,
        "EAST": 2,
        "WEST": -2,
    };

    while (!finished) {
        finished = true;
        for (i = 1; i < arr.length; i++) {
            if (scores[arr[i - 1]] + scores[arr[i]] === 0) {
                arr.splice(i - 1, 2);
                finished = false;
            }
        }
    }
    return arr;
}
