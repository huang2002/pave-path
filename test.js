const pavePath = require('.'),
    { existsSync, rmdirSync } = require('fs');

if (existsSync('test')) {
    rmdirSync('test', { recursive: true });
}

(async () => {

    await pavePath('./test');

    await pavePath('test\\foo\\bar');
    console.assert(existsSync('./test/foo/bar'));

    await pavePath('test/baz');
    console.assert(existsSync('./test/baz'));

})().catch(err => {
    console.error(err);
    process.exit(1);
});
