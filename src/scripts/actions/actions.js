'use strict';
var Reflux = require('reflux');

var actions = Reflux.createActions({
	'getInterestHistory': { asyncResult: true },
	'login1': { asyncResult: true }

});

//actions.getInterestHistory.listenAndPromise(get('interestHistory')); 
actions.getInterestHistory.listenAndPromise(function (param) {
	console.log(param);
 	return Promise.resolve(require('../api/' + 'interestHistory' + param.offset + '.json'));
});


actions.login1.listenAndPromise(function (param) {
	console.log('login action: ', param);

	return Promise.resolve(
		$.get( "http://localhost:8080/service-mathmaster/rest/v1/users/3", function( data ) {

		console.log( "Load was performed." , data);
	}));
	//return Promise.resolve(require('../api/' + 'interestHistory' + 3 + '.json'));
});




module.exports = actions;