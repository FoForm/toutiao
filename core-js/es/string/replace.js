require('../../modules/es.regexp.exec');
require('../../modules/es.string.replace');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('String', 'replace');
