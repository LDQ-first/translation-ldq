#!/usr/bin/env node

require('commander')
    .version(require('../package').version)
    .usage('<command> [option]')
    .command('translate <word[sentence]> [--color]', '翻译中英文单词或句子(彩色输出)')
    .alias('tlq') 
    .parse(process.argv)