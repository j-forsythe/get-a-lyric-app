import React from 'react';
import QuoteContent from './quote-content.jsx';


var QuoteApp = React.createClass({

  render: function() {
    return (
      <div>
        <QuoteContent
          source= 'wp-json/wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1' />
      </div>
    );
  }

});

module.exports = QuoteApp;
