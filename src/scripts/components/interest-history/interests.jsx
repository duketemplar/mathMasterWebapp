'use strict';
var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var actions = require('../../actions/actions');
var InterestHistoryStore = require('./interest-history.store');
// Components
var InterestHistory = require('./interest-history.jsx');


var Interests = React.createClass({

    mixins: [Reflux.connect(InterestHistoryStore, 'interestHistoryData') ], //trigger setState

    componentDidMount: function() {
    	actions.getInterestHistory({ offset: 0 });
    },

    loadMore: function() {
      actions.getInterestHistory({ offset: this.state.interestHistoryData.length });
    },

    renderHeader: function() {
      return (
        <thead>
          <tr><td>Date</td><td>Name</td><td>Rate</td></tr>
        </thead>
      );
    },

    renderInteretsHistories: function() {
      return _.sortBy(this.state.interestHistoryData, 'changedate').map(this.renderInteretsHistory);
    },

    // 'Key' to help react keep track
    renderInteretsHistory: function(history, index) {
      return (
        <InterestHistory 
          key={ 'history-' + index } 
          history={ history } />
      );
    },

    render: function () {
    	if(!this.state.interestHistoryData) {
    		return (
    			<div>Some fancy spinner</div>
    		);
    	}

			return (
       	<div>
          <button onClick={ this.loadMore } >GET MORE</button>
          <table>
            { this.renderHeader() }
            <tbody>
              { this.renderInteretsHistories() }       
            </tbody>
          </table>
        </div>
      );
    }
});

module.exports = Interests;