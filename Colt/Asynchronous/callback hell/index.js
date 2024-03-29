const btn = document.querySelector('button');
/*
setTimeout(() => {
    btn.style.transform = 'translateX(100px)';
    setTimeout(() => {
        btn.style.transform = 'translateX(200px)';
        setTimeout(() => {
            btn.style.transform = 'translateX(300px)';
            setTimeout(() => {
                btn.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    btn.style.transform = 'translateX(500px)';
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    setTimeout(() => {
        const boundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if(elRight + amount > boundary){
            console.log('Boundary limit exceded');
            onFailure();
        }else {
                element.style.transform = `translateX(${currLeft + amount}px)`;      
                onSuccess();
        }
    }, delay);
};

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//             moveX(btn, 400, 1000, () => {
//                 moveX(btn, 500, 1000);
//             })
//         })
//     });
// });

moveX(btn, 100, 1000, () => {
    // success
    moveX(btn, 200, 1000, () => {
        // success
        moveX(btn, 300, 1000, () => {
            //success
        }, () => {
            //failure
            alert('Cannot move further!')
        })
    }, () => {
        // failure
        alert('Cannot move further!')
    });
}, () => {
    // Fail
    alert('Cannot move further!');
});