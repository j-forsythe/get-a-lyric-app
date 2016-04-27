import React from 'react';
import QuoteContent from './quote-content.jsx';
import { browserHistory } from 'react-router';


var QuoteApp = React.createClass({
  getInitialState: function() {
    return {
      postObject: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('wp-json/wp/v2/posts/?filter[orderby]=rand', function (result) {
      var wpObject = result;
      console.log(wpObject);
      this.setState({
        postObject: wpObject,
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <QuoteContent
          source={this.state.postObject}
        />
      </div>
    );
  }

});



module.exports = QuoteApp;
