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
    
    const allStats = Array(filenames.length).fill(null);
    for(let filename of filenames){
        const index = filenames.indexOf(filename);

        fs.lstat(filename, (err, stats) => {
            if(err){
                console.log(err)
            }
            allStats[index] = stats;

            const ready = allStats.every(stats => stats);
            if(ready){
                allStats.forEach((stats, index) => {
                    console.log(filenames[index], stats.isFile());
                });
            }
        });
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