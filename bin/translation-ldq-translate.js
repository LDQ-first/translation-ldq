#!/usr/bin/env node

const argv = require('yargs')
        .usage('Usage: translate <word[sentence]> [--color]')
        .example('translate format')
        .example('translate 天气 --color')
        .example('translate how do you do --color')
        .example('translate 明天天气怎么样')
        .help('h')
        .alias('h', 'help')
        .epilog('copyright 2017 by ldq-first')
        .argv;
const queryStr = encodeURI((argv._));
const sendInfo = require('./sendInfo.js');


if(!queryStr) {
    console.log(`missing operand after "translate".
Try 'translate --help|-h' for more information.`);
}else {
    sendInfo(queryStr);
}


 
 
