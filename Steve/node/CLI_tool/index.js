#!/usr/bin/env node
// the statement above make our file(index.js) executable 

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    // Either
    // err === error object
    // OR
    // err === null, which means everything was successful
    
    if (err) {
        // Handle error
        console.log(err);
    }


    console.log(filenames);
    console.log(`current directory is ${process.cwd()}`);
});

/*
    we noticed that the process object was not required
    in this file.... const process = requ

/*
    we noticed that the process object was not required
    in this file.... const process = require('process')ire('process')
    well... it turns out that process is one of the node's 
    global modules.
*/