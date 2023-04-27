const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log('FIRST REQUEST SENT');
    const data = JSON.parse(this.responseText);
    const filmUrl = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();

    filmReq.addEventListener('load', function(){
        console.log('SECOND REQUEST SENT');
        //console.log(this)
        const filmData = JSON.parse(this.responseText)
        console.log(filmData.title);
    });
    filmReq.addEventListener('error', () => {
        console.log('ERROR');
    });
    
    filmReq.open('GET', filmUrl)
    filmReq.send();

    // for(let planets of data.results){
    //     console.log(planets.name);
    // }
});
firstReq.addEventListener('error', () => {
    console.log('ERROR');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();

//console.log('Request Sent');