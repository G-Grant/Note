const fs = require('fs');
const findMarkdown = require('./findMarkdown');
const rootDir = './docs';

findMarkdown(rootDir, writeComponents);

function writeComponents(dir) {
    fs.appendFile(dir, `<comment/ >`, err => {
        if (err) throw err;
        console.log(`add components to ${dir}`);
    });
}
