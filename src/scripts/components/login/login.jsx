'use strict';
var React = require('react');
var actions = require('../../actions/actions');
var Reflux = require('reflux');
var LoginStore = require('./login.store');
var _ = require('lodash');


var Login = React.createClass({

    mixins: [Reflux.connect(LoginStore, 'loginData1') ], //trigger setState

    componentDidMount: function() {
        console.log('componentDidMount login');
    },

    handleClick: function(e){
        actions.login1();
    },

    someRenderFunction: function(e){
        console.log('some render function');
        console.log(this.prop);
        console.log(this.state);
        return(<p>ff</p>);
    },


    render: function () {
        if(this.state.loginData1){
           return(<p>got data back</p>);

        }else {
            return (
                <div>
                    <button onClick={this.handleClick} >Login</button>
                    {this.someRenderFunction() }
                </div>
            );
        }

    }


});

module.exports  = Login;