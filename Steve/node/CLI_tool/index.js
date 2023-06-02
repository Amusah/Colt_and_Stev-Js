#!/usr/bin/env node
// the statement above make our file(index.js) executable 

const fs = require('fs');
const util = require('util');
const path = require('path');

// Method 2
//const lstat = util.promisify(fs.lstat);

// Method 3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    // Either
    // err === error object
    // OR
    // err === null, which means everything was successful
    
    if (err) {
        // Handle error
        console.log(err);
    }
    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for(let stats of allStats){
        const index = allStats.indexOf(stats);
        
        if (stats.isFile()){
            console.log(`${filenames[index]} is a file`);
        } else {
            console.log(`${filenames[index]} is a directory`);
        }
    }
});

// Method 1
/*
const lstat = filename => {
    return new Promise((resolve, reject) => {
        fs.lstat(filename, (err, stats) => {
            if(err){
                reject(err)
            }
            resolve(stats)
        });
    });
};
*/

/*
    we noticed that the process object was not required
    in this file.... const process = require('process')ire('process')
    well... it turns out that process is one of the node's 
    global modules.
*/