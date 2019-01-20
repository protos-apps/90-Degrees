cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-fullscreen.AndroidFullScreen",
    "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
    "pluginId": "cordova-plugin-fullscreen",
    "clobbers": [
      "AndroidFullScreen"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.CDVOrientationProxy",
    "file": "plugins/cordova-plugin-screen-orientation/src/windows/CDVOrientationProxy.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "merges": [
      ""
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-fullscreen": "1.1.0",
  "cordova-plugin-screen-orientation": "3.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "es6-promise-plugin": "4.2.2"
};
// BOTTOM OF METADATA
});