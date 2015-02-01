'use strict';

define(['jquery', 'knockout', '../models/lift', '../models/floor'], function($, $ko, $lift, $floor) {

    return function(liftCount, floorCount) {
    	this.floors = [];
        for (var i = floorCount; i > 0; i--) {
            this.floors.push(new $floor(i));
        }

        this.lifts = [];
        for (var i = 0; i < liftCount; i++) {
            this.lifts.push(new $lift(floorCount));
        }

        


    };
});