import React from 'react';
import QuoteContent from './quote-content.jsx';
import { browserHistory } from 'react-router';


var QuoteApp = React.createClass({


  render: function() {
    return (

      <div>
        <QuoteContent
          source= 'wp-json/wp/v2/posts/?filter[orderby]=rand'
        />
      </div>
    );
  }

});

module.exports = QuoteApp;
