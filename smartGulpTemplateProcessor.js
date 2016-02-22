var PluginError = require('gulp-util').PluginError;
var through = require('through2');
var smartTemplateProcessor = require('smart-template-processor');

var PLUGIN_NAME = 'smart-gulp-template-processor';

module.exports = function(obj) {
    return through.obj(function(file, encoding, callback) {
        
        if (file.isNull()) {
            // nothing to do
            return callback(null, file);
        }

        if (file.isStream()) {
            
            // file.contents is a Stream - https://nodejs.org/api/stream.html
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));

            // or, if you can handle Streams:
            //file.contents = file.contents.pipe(...
            //return callback(null, file);
        } else if (file.isBuffer()) {
            
            // file.contents is a Buffer - https://nodejs.org/api/buffer.html
            //this.emit('error', new PluginError(PLUGIN_NAME, 'Buffers not supported!'));

            try {
                
                file.contents = new Buffer(smartTemplateProcessor.processTemplate(file.contents.toString(), obj));
                this.push(file);
                
            } catch (err) {
                this.emit('error', new PluginError(PLUGIN_NAME, 'Some error was occurred! = ' + err));
            }

            return callback(null, file);
        }
    });
};