cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.javray.Mikrotik.Mikrotik",
        "file": "plugins/com.javray.Mikrotik/www/Mikrotik.js",
        "pluginId": "com.javray.Mikrotik",
        "clobbers": [
            "cordova.plugins.Mikrotik"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "id": "pushbots-cordova-plugin.PushbotsPlugin",
        "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
        "pluginId": "pushbots-cordova-plugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.javray.Mikrotik": "0.0.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-sqlite-storage": "2.0.2",
    "pushbots-cordova-plugin": "1.4.3"
};
// BOTTOM OF METADATA
});