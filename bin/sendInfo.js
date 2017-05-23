#!/usr/bin/env node

const http = require('http');
const format = require('./format.js');

module.exports = (query) => {
    const option = {
        host: 'fanyi.youdao.com',
        path: `/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q=${query}`
    };
    const callback = response => {
        response.on('data', data => {
            format(data);
        })

        response.on('end', () => {
            console.log("\n");
        })
    }
    const req = http.request(option, callback);
    req.end();
}