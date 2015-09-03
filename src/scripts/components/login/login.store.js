'use strict';
var Reflux = require('reflux');

var actions = require('../../actions/actions');

var LoginStore = Reflux.createStore({

    init: function() {
        this.listenTo(actions.login1.completed, this.onCompleted);
        this.listenTo(actions.login1.failed, this.onFailed);

        this.loginData = [];
    },

    onCompleted: function(loginData) {
        console.log('login store:', loginData);
        this.trigger(this.loginData);
    },

    onFailed: function() {
        this.trigger({});
    }
});

module.exports = LoginStore;