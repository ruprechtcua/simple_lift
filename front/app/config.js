require.config({
    paths: {
        "bower_components": "../bower_components",
        "jquery": "../bower_components/jquery/dist/jquery"
    },
    map: {
        "*": {
            "knockout": "../bower_components/knockout.js/knockout",
            "ko": "../bower_components/knockout.js/knockout"
        }
    }
});

require(['controllers/app', 'jquery', 'knockout'], function($App, $, $ko) {
    window.app = new $App(4, 10);
    $ko.applyBindings(window.app);
});
