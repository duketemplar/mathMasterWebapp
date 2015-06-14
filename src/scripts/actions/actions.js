'use strict';
var Reflux = require('reflux');

var actions = Reflux.createActions({
	'getInterestHistory': { asyncResult: true },
  
});

//actions.getInterestHistory.listenAndPromise(get('interestHistory')); 
actions.getInterestHistory.listenAndPromise(function (param) {
	console.log(param);
 	return Promise.resolve(require('../api/' + 'interestHistory' + param.offset + '.json'));
}); 


function get(path, offset) {
	console.log(offset);
  return function() {

  	return Promise.resolve(require('../api/' + path + '05.json'));
  };
}

module.exports = actions;