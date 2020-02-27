const { existsSync, promises: fsPromises } = require('fs'),
    { normalize, sep } = require('path');

/**
 * Pave the path to ensure it exists
 * (the base path must exist if given)
 * @param {string} path
 * @param {string} base
 * @returns {Promise<void>} A promise solved on success
 */
const pavePath = async (path, base = '') => {
    const parts = normalize(path).split(sep);
    let current = normalize(base);
    if (base && !base.endsWith(sep)) {
        current += sep;
    }
    for (let i = 0; i < parts.length; i++) {
        if (i) {
            current += sep;
        }
        current += parts[i];
        if (!existsSync(current)) {
            await fsPromises.mkdir(current);
        }
    }
};

module.exports = pavePath;
