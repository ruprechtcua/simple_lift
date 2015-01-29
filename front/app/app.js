'use strict';

define(['jquery', 'knockout'], function($, $ko) {
    return function() {
        this.status = $ko.observable('a');
    };
});