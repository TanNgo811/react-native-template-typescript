"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const consts_1 = require("../config/consts");
const get_file_list_1 = require("./get-file-list");
function merge(program) {
    let results = {};
    const { languages = consts_1.defaultLanguages, partials, output, indentSize, } = program.opts();
    languages.forEach((language) => {
        (0, get_file_list_1.getFileList)((0, path_1.join)(partials, language)).forEach((file) => {
            if (!Object.prototype.hasOwnProperty.call(results, language)) {
                results = Object.assign(Object.assign({}, results), { [language]: {} });
            }
            const loadedKeys = JSON.parse((0, fs_1.readFileSync)(file, {
                encoding: consts_1.ENCODING,
            }));
            results[language] = Object.assign(Object.assign({}, results[language]), loadedKeys);
            console.info('Loaded file %s', file);
        });
    });
    Object.entries(results).forEach(([language, translations]) => {
        const outputFile = (0, path_1.resolve)(output, `${language}.json`);
        (0, fs_1.writeFileSync)(outputFile, JSON.stringify(translations, null, Number(indentSize)));
        console.info('Language file %s updated', outputFile);
    });
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map