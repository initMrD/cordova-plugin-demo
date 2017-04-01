var exec = require('cordova/exec');

var pluginDemo = {
    onlyJs: function() {
        alert('I am a plugin');
    }

};

module.exports = pluginDemo;