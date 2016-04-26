import React from 'react';
import QuoteContent from './quote-content.jsx';
import { browserHistory } from 'react-router';


var QuoteApp = React.createClass({

 //  _handleClick() {
 //   browserHistory.push('/');
 // },


  render: function() {
    return (

      <div>
        <div className="headphones">
          <a id="get-another-quote-button" className="button" >get a lyric</a>
        </div>
        <QuoteContent
          source= 'wp-json/wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1'
        />
      </div>
    );
  }

});

module.exports = QuoteApp;
