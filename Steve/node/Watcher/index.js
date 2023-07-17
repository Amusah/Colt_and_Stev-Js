#!/usr/bin/env node

/*
    Big Issues of this project
    -Need to detect file changes or when a file is updated ...use(chokidar package)
    
    -be able to provide some help to other users (user guide) ...use(caporal package)
    
    -Need to figure out how to execute some JS code from within ...use(STDlib module 'child_process')
    a JS program
*/

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');

program
.version('0.0.1')
.argument('[filename]', 'Name of a file to execute')
.action((args) => {
    console.log(args);
});

program.parse(process.argv);

// const start = debounce(() => {
//     console.log('STARTING USERS PROGRAM');
// }, 100);

// chokidar.watch('.')
// .on('add', start)
// .on('change', () => console.log('FILE CHANGED'))
// .on('unlink', () => console.log('FILE UNLINKED'));