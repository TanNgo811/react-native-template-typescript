/**
 * @format
 */

const BabelTransformer = require('metro-react-native-babel-transformer');
const SvgTransformer = require('react-native-svg-transformer');

module.exports.transform = async function ({src, filename, options}) {

    if (filename.endsWith('svg')) {
        return SvgTransformer.transform({src, filename, options});
    }

    return BabelTransformer.transform({src, filename, options});
};
