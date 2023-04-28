// Multiple awaits
const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if(elRight + amount > bodyBoundary){
                reject({ bodyBoundary, elRight, amount });
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
};
const btn = document.querySelector('button');
async function moveRight(el){
    await moveX(el, 50, 1000);
    await moveX(el, 50, 1000);
    await moveX(el, 50, 1000);
    await moveX(el, 50, 1000);
    await moveX(el, 50, 1000);
    await moveX(el, 50, 1000);
}
moveRight(btn).catch(err => console.log('can\'t move any further', err));

// moveX(btn, 100, 1000)
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .then(() => moveX(btn, 100, 1000))
// .catch(err => console.log(err));