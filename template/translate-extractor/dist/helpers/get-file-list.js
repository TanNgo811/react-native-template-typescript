"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileList = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const match_1 = require("./match");
function getFileList(path, include, exclude) {
    let files = [];
    (0, fs_1.readdirSync)(path).forEach((entry) => {
        const entryPath = (0, path_1.resolve)(path, entry);
        if ((0, fs_1.lstatSync)(entryPath).isDirectory()) {
            files = [...files, ...getFileList(entryPath, include, exclude)];
        }
        else {
            if ((0, match_1.match)(entryPath, include, exclude)) {
                files = [...files, entryPath];
            }
        }
    });
    return files;
}
exports.getFileList = getFileList;
//# sourceMappingURL=get-file-list.js.map