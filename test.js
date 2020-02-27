const pavePath = require('.'),
    { existsSync, rmdirSync } = require('fs');

const path = './test/foo/bar';

if (existsSync(path)) {
    rmdirSync(path);
}

pavePath(path).then(() => {
    console.assert(existsSync(path));
}, err => {
    console.error(err);
    process.exit(1);
});
