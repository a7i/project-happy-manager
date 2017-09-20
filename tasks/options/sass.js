/**
 * Configure cleanup tasks
 */
var importOnce = require('node-sass-import-once');
module.exports = {
	options: {
        importer: importOnce,
        importOnce: {
          index: true,
          bower: true
        }
    },
    dist: {
        files: {
            'public/css/base.css': 'sass/base.scss',
            'public/css/px.css': 'sass/px.scss',
            'public/css/manage.css': 'sass/manage.scss',
        }
    }
};
