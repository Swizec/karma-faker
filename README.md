#karma-faker

Karma plugin for Faker.js https://github.com/marak/Faker.js/


##Install
add karma-faker to package `dependencies` ( or better to `devDependencies` ) using
```sh
npm install karma-faker --save-dev
```

then edit `karma.conf.js` to include `faker`

```js
// ... config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', '...some other things', 'faker'],
// ...
```
