'use strict';
var React = require('react');
var Interests = require('./components/interest-history/interests.jsx');

var Overview = React.createClass({

	render:function(){
		return (
			<div>
				<Interests />
			</div>
		);
	}
});

React.render(<Overview/>, document.getElementById('app'));

