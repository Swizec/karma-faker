var path = require('path');

var pattern = function (file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var framework = function (files) {
    files.unshift(pattern(path.resolve(require.resolve('Faker'), '../../Faker/Faker.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:js-factories': ['factory', framework]};
