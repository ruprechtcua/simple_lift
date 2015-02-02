'use strict';

define(['jquery'], function($) {
    var url = 'http://localhost:8000',
        getStatusEndPoint = '',
        sendStatusEndPoint = '/status/create';

    return {
        getStatusByLiftId: function(liftId) {
            //not in the requirement to display statuses
            return '';
        },
        sendStatusByLiftId: function(key, action, load) {
            $.get(url + sendStatusEndPoint, {
                key: key,
                action: action,
                load: load
            }, function(data, status) {});
        }
    }
});