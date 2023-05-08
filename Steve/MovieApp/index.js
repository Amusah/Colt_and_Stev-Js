const requestData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '7fb5b472',
            s: 'avengers'
        }
    });
    console.log(response.data);
}
requestData().catch(err => console.log(err))
