'use strict';
var React = require('react');
//var InterestHistory = require('../interest-history/interest-history.jsx');

var MoreButton = React.createClass({


	componentDidMount: function() {
  	console.log('morebutton');
  },

  handleClick: function(e){
  	console.log('morebutton');
  	//actions.getInterestHistory();
  },

	render: function () {
		return (<button onClick={this.props.onButtonClick} >get more</button>);

	}


});

module.exports  = MoreButton;