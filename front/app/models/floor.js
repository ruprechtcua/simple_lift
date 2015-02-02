'use strict';

define(['jquery', 'knockout'], function($, $ko) {
    return function(floorNumber) {
    	var self = this;
        this.floor = floorNumber;
        
        this.requestLoad = $ko.observable(0);
        this.requestDestination = $ko.observable({});

        this.requestLift = function(){
        	if(!self.requestDestination() || self.requestLoad() === 0){
        		return;
        	}

        	var closestLift, 
        		closestDiff = -1;

        	for(var i = 0, length = app.lifts.length; i < length; i++){
        		if(app.lifts[i].isBusy()){
        			continue;
        		}
        		var lift = app.lifts[i],
        			diff = Math.abs(self.floor - app.lifts[i].floor());

        		if(closestDiff === -1){
        			closestDiff = diff;
        			closestLift = lift;
        		}else{
        			if(closestDiff > diff){
        				closestDiff = diff;
        				closestLift = lift;
        			}
        		}
        	}

        	//trigger lift job
        	if(!closestLift){
        		//all lifts are busy.
        		return;
        	}

        	if(self.requestLoad() > 20){
        		self.requestLoad(self.requestLoad()-20);
        		closestLift.newJob(self.floor, self.requestDestination().floor, 20);
        		if(self.requestLoad() > 0){
        			setTimeout(function(){
        				self.requestLift();
        			},1000);
        		}
        	}else{

        		closestLift.newJob(self.floor, self.requestDestination().floor, self.requestLoad());
        		self.requestLoad(0);
        	}
        	
        };
    };
});