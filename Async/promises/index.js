/*
    A promise is an object that represents the success or 
    failure of an asynchronous operation
*/
const hireMe = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            rand > 0.5 ? resolve() : reject();
        }, 1000);
    });
}
hireMe().then(() => {
    console.log('Congratulations you\'ve been hired!');
}).catch(() => {
    console.log(':( Sorry your expectise is beyond our required labour we recommend working with NASA')
});




// MAKING A FAKE REQUEST
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const pages = {
                    '/users': [
                        { id: 1, username: 'Henry' },
                        { id: 5, username: 'Emerald' }
                    ],
                    '/about': 'This is the about page'
                };
                const data = pages[url];
                if(data) {
                    resolve({ status: 200, data });
                }else {
                    reject({ status: 404 });
                }
        }, 3000);
    });
}
fakeRequest('/about')
.then((res) => {
    console.log(`Status Code: ${res.status}`);
    console.log(`Data: ${res.data}`);
    console.log('Request Successful');
})
.catch((res) => console.log(`${res.status} Request Failed`));


fakeRequest('/users')
.then((res) => {
    console.log(`Status Code: ${res.status}`);
    //console.log(`Data: ${res.data}`);
    for(d of res.data){
        console.log(d);
    }
    console.log('Request Successful');
})
.catch((res) => console.log(`${res.status} Request Failed`));