const { hash } = window.location;
const decrypt = atob(hash.replace('#', ' '));

if(decrypt) {
    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#show-msg').classList.remove('hide');
    document.querySelector('#msg-content').innerHTML = decrypt;
}

// handling submit event
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('input');
    if(input.value){
        console.log(input.value);
        document.querySelector('#msg-form').classList.add('hide');
        document.querySelector('#link-form').classList.remove('hide');

        const encrypted = btoa(input.value);
        const msgLink = document.querySelector('#link-input')
        msgLink.value = `${window.location}#${encrypted}`;
        msgLink.select();
    } else{
        // console.log('empty')
        const label = document.querySelector('#label');
        label.innerText = 'Field can\'t be empty';
        label.classList.add('red-text');
    }
});