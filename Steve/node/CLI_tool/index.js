const fs = require('fs');

fs.readdir('.', (err, filenames) => {
    // Either
    // err === error object
    // OR
    // err === null, which means everything was successful
    
    if (err) {
        // Handle error
        console.log(err);
    }


    console.log(filenames)
});