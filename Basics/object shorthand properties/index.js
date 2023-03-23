const getStats = arr => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((sum, cVal) => sum + cVal);
    let avg = sum / arr.length;

    return { max, min, sum, avg };
}

const ratings = [4.5, 5.0, 3.44, 4.0, 3.5, 2.8, 3.5];

const stats = getStats(ratings);
console.log(stats);