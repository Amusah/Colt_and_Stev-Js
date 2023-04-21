const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Henry' },
                    { id: 5, username: 'Topaz'}
                ],
                '/users/1' : {
                    id: 1,
                    username: 'Henry',
                    upvotes: 360,
                    city: 'Takoradi',
                    topPostId: 28495897
                },
                '/users/5': {
                    id: 5,
                    username: 'Topaz',
                    upvotes: 571,
                    city: 'Ethiopia'
                },
                '/posts/28495897': {
                    id: 28495897,
                    title: 'Ladies & Gentlemen, may i introduce my first Uav'
                },
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if(data){
                resolve({ status: 200, data }); // resolve with a value!
            }
            else{
                reject({ status: 404 }); // reject with a value!
            }
        }, 1000);
    });
};
/*

fakeRequest('/users').then((res) => {
    const id = res.data[0].id;
    fakeRequest(`/users/${id}`).then((res) => {
        //console.log(res);
        const postId = res.data.topPostId;
        fakeRequest(`/posts/${postId}`).then((res) => {
            console.log(res);
        })
    })
}).catch((err) => {
    console.log('OH NO', err);
})
*/

// Cleaner approach (Promise chaining)
fakeRequest('/users').then((res) => {
    console.log(res)
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
}).then((res) => {
    console.log(res)
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log('OH NO', err);
})