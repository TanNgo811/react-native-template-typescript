#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extract_1 = require("./helpers/extract");
const merge_1 = require("./helpers/merge");
const { Command } = require('commander');
const { description, version } = require('../package.json');
const program = new Command();
program.version(version).description(description);
function handleTranslateAction(action) {
    switch (action) {
        case 'extract':
            (0, extract_1.extract)(program);
            break;
        case 'merge':
            (0, merge_1.merge)(program);
            break;
        default:
            console.log('Command must be "extract" or "merge"');
            break;
    }
}
program
    .option('-i, --input <inputPath>', 'Input path', 'src/')
    .option('-o, --output <outputPath>', 'Output path', 'src/i18n/')
    .option('-p, --partials <partialPath>', 'Partial path', 'src/i18n/')
    .option('-ic, --include <include>', 'Include pattern', '\\.(js|jsx|ts|tsx)$')
    .option('-ex, --exclude <exclude>', 'Exclude pattern', '\\.(spec|test)\\.(js|jsx|ts|tsx)$')
    .option('-ks, --key-separator <keySeparator>', 'Key separator', '.')
    .option('-is, --indent-size <indent>', 'Indent size', '2')
    .option('-l, --languages <languages...>', 'Supported languages')
    .option('-m, --marker <marker>', 'Translate marker', 'translate')
    .command('translate <action>')
    .description('action: extract | merge')
    .action(handleTranslateAction);
program.parse(process.argv);
//# sourceMappingURL=index.js.map