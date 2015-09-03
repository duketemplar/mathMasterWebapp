'use strict';
var React = require('react'); // WTF !!!


var QuestionPalette = React.createClass({

  componentDidMount: function() {
    console.log('componentDidMount e');
  },

  handleClick: function(e){
    console.log('handle click e');
    //actions.getInterestHistory();
  },

  render: function () {
    //return (<button onClick={this.props.onButtonClick} >a button</button>);

  }


});

module.exports  = QuestionPalette;