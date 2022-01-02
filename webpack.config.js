const path = require('path');

module.exports = {
    entry: './base.js',
    target: 'node',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'app'),
    },
    experiments: {
        topLevelAwait: true,
    }
}