'use strict';
var Reflux = require('reflux');

var actions = require('../../actions/actions');

var InterestHistoryStore = Reflux.createStore({
  
  init: function() {
		this.listenTo(actions.getInterestHistory.completed, this.onCompleted);
		this.listenTo(actions.getInterestHistory.failed, this.onFailed);

    this.interestHistory = [];
  },
  // concat to interestHistory in init
  onCompleted: function(interestHistory) {
    this.interestHistory = this.interestHistory.concat(interestHistory.data);
    this.trigger(this.interestHistory);
  },

  onFailed: function() {
  	this.trigger({});
  }
});

module.exports = InterestHistoryStore;