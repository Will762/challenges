 function waterbombs(fire, w) {
    let sum = 0;
    const fireArr = fire.split('Y');
    fireArr.forEach(e => sum += Math.ceil(e.length / w));
    return sum;
}
