const { existsSync, promises: fsPromises } = require('fs'),
    { normalize, sep } = require('path');

/**
 * Pave the path to ensure it exists
 * @param {string} path
 * @returns {Promise<void>} A promise solved on success
 */
const pavePath = async path => {
    const parts = normalize(path).split(sep);
    let current = '';
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
