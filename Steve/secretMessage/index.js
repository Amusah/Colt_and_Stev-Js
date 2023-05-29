// handling submit event
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('input');
    if(input.value){
        console.log(input.value);
        const encrypted = btoa(input.value);

        const msgLink = document.querySelector('#link-input')
        msgLink.value = `${window.location}#${encrypted}`;
        msgLink.select();
    } else{
        console.log('empty')
    }
   

    
});