"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = void 0;
const fs_1 = require("fs");
const kebabCase_1 = __importDefault(require("lodash/kebabCase"));
const path_1 = require("path");
const consts_1 = require("../config/consts");
const get_marker_pattern_1 = require("./get-marker-pattern");
const get_file_list_1 = require("./get-file-list");
function extract(program) {
    const { input, marker, languages = consts_1.defaultLanguages, partials, keySeparator, indentSize, } = program.opts();
    const include = new RegExp(program.opts().include);
    const exclude = new RegExp(program.opts().exclude);
    let keys = {};
    let namespaces = {};
    input &&
        (0, get_file_list_1.getFileList)(input, include, exclude).forEach((file) => {
            const content = (0, fs_1.readFileSync)(file, consts_1.ENCODING);
            const pattern = (0, get_marker_pattern_1.getMarkedPattern)(marker);
            const matches = content.match(pattern);
            if (matches !== null) {
                matches.forEach((match) => {
                    const key = match.replace((0, get_marker_pattern_1.getMarkedPattern)(marker), '$1');
                    const namespace = key.split(keySeparator)[0];
                    if (!Object.prototype.hasOwnProperty.call(keys, key)) {
                        keys = Object.assign(Object.assign({}, keys), { [key]: '' });
                    }
                    if (!Object.prototype.hasOwnProperty.call(namespaces, namespace)) {
                        namespaces = Object.assign(Object.assign({}, namespaces), { [namespace]: (0, kebabCase_1.default)(namespace) });
                    }
                });
            }
        });
    languages.forEach((language) => {
        try {
            (0, fs_1.mkdirSync)((0, path_1.join)(partials, language));
        }
        catch (error) {
            console.info('Directory existed, no need to create new');
        }
        Object.entries(namespaces).forEach(([namespace, kebabizedNamespace]) => {
            const filePath = (0, path_1.resolve)(partials, language, `${kebabizedNamespace}.json`);
            if ((0, fs_1.existsSync)(filePath)) {
                try {
                    const existedKeys = JSON.parse((0, fs_1.readFileSync)(filePath, 'utf-8'));
                    Object.entries(existedKeys).forEach(([key, value]) => {
                        if (Object.prototype.hasOwnProperty.call(keys, key)) {
                            keys = Object.assign(Object.assign({}, keys), { [key]: value });
                        }
                    });
                }
                catch (error) {
                    console.error('Can not read file %s', filePath);
                }
            }
            let updatedKeys = {};
            Object.keys(keys).forEach((key) => {
                if (key.startsWith(`${namespace}.`)) {
                    updatedKeys = Object.assign(Object.assign({}, updatedKeys), { [key]: keys[key] });
                }
            });
            (0, fs_1.writeFileSync)(filePath, JSON.stringify(updatedKeys, null, Number(indentSize)));
            console.info('Write %d keys to file %s', Object.keys(updatedKeys).length, filePath);
        });
    });
}
exports.extract = extract;
//# sourceMappingURL=extract.js.map