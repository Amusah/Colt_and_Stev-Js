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


/**************COMPUTED PROPERTIES**************/
const role = 'Lead Engineer';
const person = 'Henry Amusah';
const duty = 'Autonomous Flight Software Design';

const team = {
    [person]: role,
    duty
};
console.log(team);

// adding a new property to obj
// manual
const addProp = (obj, k, v) => {
    const copy = {...obj};
    copy[k] = v;
    return copy;
}
console.log(addProp(team, 'happy', ':)'));

// computed property
const addNewProp = (obj, k, v) => {
    return {...obj, [k]: v}
}
console.log(addNewProp(team, 'hardwork', 'pays'));