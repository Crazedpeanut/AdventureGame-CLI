const path = require('path');

module.exports = {
    entry: './main_web.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};