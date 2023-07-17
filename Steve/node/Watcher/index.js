#!/usr/bin/env node

/*
    Big Issues of this project
    -Need to detect file changes or when a file is updated ...use(chokidar package)
    
    -be able to provide some help to other users (user guide) ...use(caporal package)
    
    -Need to figure out how to execute some JS code from within ...use(STDlib module 'child_process')
    a JS program
*/

const chokidar = require('chokidar');

chokidar.watch('.')
.on('add', () => console.log('FILE ADDED'))
.on('change', () => console.log('FILE CHANGED'))
.on('unlink', () => console.log('FILE UNLINKED'));