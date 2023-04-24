const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log('IT WORK');
    const data = JSON.parse(this.responseText);
    for(let planets of data.results){
        console.log(planets.name);
    }
});
firstReq.addEventListener('error', () => {
    console.log('ERROR');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();

console.log('Request Sent');