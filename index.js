var path = require('path');

var pattern = function (file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var framework = function (files) {
    files.unshift(pattern(path.resolve(require.resolve('faker'), '../../faker/index.js')));
};

if (typeof exports === 'undefined') {
    exports = {};
}

framework.$inject = ['config.files'];
module.exports = exports = {'framework:faker': ['factory', framework]};