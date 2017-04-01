var exec = require('cordova/exec');

var pluginDemo = {
    onlyJs: function() {
        alert('I am a plugin');
    },
    nativeOnly:function(success,error){
    	exec(success,error,"PluginDemo","nativeOnly", []);
    }

};

module.exports = pluginDemo;