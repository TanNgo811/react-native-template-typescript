"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
function match(str, include, exclude) {
    if (include) {
        if (include.test(str)) {
            return exclude ? !exclude.test(str) : true;
        }
        return false;
    }
    return true;
}
exports.match = match;
//# sourceMappingURL=match.js.map