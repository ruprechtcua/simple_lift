'use strict';

define(['jquery', 'knockout'], function($, $ko) {
    return function(id) {
        var self = this,
        	cssMove = 'move',
        	maxLoad = 20;

        this.id = id;
        this.status = $ko.observable('-');
        this.load = $ko.observable(0);
        this.floor = $ko.observable(1);

        this.isBusy = $ko.computed(function() {
            if (self.status() !== '-')
                return true;
            return false;
        }, this);

        this.move = $ko.computed(function() {
            return cssMove + self.floor();
        }, this);

        this.newJob = function(fetchFrom, goTo, withLoad) {
            console.log('fetching from: floor-' + fetchFrom + ' | ' + 'going to : floor-' + goTo + ' | ' + 'with ' + withLoad + ' people');

            fetch(fetchFrom);

            //delay for animation purposes
            setTimeout(function() {
                load(withLoad);

                setTimeout(function() {
                    bring(goTo);

                    setTimeout(function() {
                        unload();
                    }, 1000); //unload
                }, 1000); //bring to destination
            }, 1000); //load people
        };

        function fetch(fetchFrom) {
            if (self.floor() > fetchFrom) {
                self.status('down');
            } else {
                self.status('up');
            }

            self.floor(fetchFrom);

            //send status to server
        };

        function load(withLoad) {
            self.load(withLoad);
            self.status('load');

            //send status to server
        };

        function bring(goTo) {
            if (self.floor() > goTo) {
                self.status('down');
            } else {
                self.status('up');
            }

            self.floor(goTo);

            //send status to server
        };

        function unload() {
            self.status('-');
            self.load(0);

            //send status to server
        };
    };
});