'use strict';
var React = require('react');
var Interests = require('./components/interest-history/interests.jsx');
var Login = require('./components/login/login.jsx');

var Overview = React.createClass({

	render:function(){
		return (
			<div>
				<Interests />
				<Login />
			</div>
		);
	}
});

React.render(<Overview/>, document.getElementById('app'));

