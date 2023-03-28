/*
    A promise is an object that represents the success or 
    failure of an asynchronous operation
*/

const hireMe = new Promise((resolve, reject) => {
    const rand = Math.random();
    rand > 0.5 ? resolve() : reject();
})
hireMe.then(() => {
    console.log('Congratulations you\'ve been hired!')
});
hireMe.catch(() => {
    console.log(':( Sorry your expectise is beyound our required labour')
});
