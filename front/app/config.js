require.config({
  // make bower_components more sensible
  // expose jquery 
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

// Use the debug version of knockout it development only
// When compiling with grunt require js will only look at the first 
// require.config({}) found in this file
require.config({
  map: {
    "*": {
      "knockout": "../bower_components/knockout.js/knockout-2.3.0.debug",
      "ko": "../bower_components/knockout.js/knockout-2.3.0.debug"
    }
  }
});

require(['app', 'jquery', 'knockout'], function($App, $, $ko){
  window.app = new $App(); 
  $ko.applyBindings(window.app);
});


