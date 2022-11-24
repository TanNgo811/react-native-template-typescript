"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkedPattern = void 0;
function getMarkedPattern(marker) {
    return new RegExp(`${marker}\\(['"]([a-zA-Z0-9]+((\\.[a-zA-Z0-9]+)*))['"](, ?([^)]*))?\\)`, 'gm');
}
exports.getMarkedPattern = getMarkedPattern;
//# sourceMappingURL=get-marker-pattern.js.map