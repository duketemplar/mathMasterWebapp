var React = require('react');

var InterestHistory = React.createClass({

	render: function() {
		return (
			<tr>
        <td>{ this.props.history.changedate }</td>
        <td>{ this.props.history.dimidname }</td>
        <td>{ this.props.history.interestRate } %</td>
       </tr>
		);
	}
});

module.exports = InterestHistory;