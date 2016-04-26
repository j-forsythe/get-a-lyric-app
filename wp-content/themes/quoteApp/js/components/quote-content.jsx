import React from 'react';

var QuoteContent = React.createClass({

  getInitialState: function() {
    return {
      postObject: this.props.result,
       artist: this.props.title,
       lyric: this.props.content
    };
  },

  componentDidMount: function() {
    // $.ajax( {
    //   method: 'GET',
    //   dataType: 'json',
    //   url: 'wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    //
    //   success: function ( data ) {
    //     console.log(data);
    //     this.setState({postObject:data});
    //   }.bind(this),
    // } );
    this._handleGetRequest();
  },

  _handleGetRequest() {
    this.serverRequest = $.get(this.props.source, function (result) {
    var postObject = result[0];
    console.log(result);
    this.setState({
      artist: postObject.title.rendered,
      lyric: postObject.content.rendered
    });
  }.bind(this));
    },

  componentWillUnmount: function() {
  this.serverRequest.abort();
},

  render(){
    return (
      <div>
        <div className="headphones">
          <a id="get-another-quote-button" className="button" onClick={this._handleGetRequest}>get a lyric</a>
        </div>
        <div id="quote-content" dangerouslySetInnerHTML={{ __html: this.state.lyric}}></div>
          <h2>&mdash; <span id="quote-title">{this.state.artist}</span></h2>
      </div>
    )
  }
});
//
// QuoteContent.propTypes = {
//   result: React.PropTypes.shape({
//     title: React.PropTypes.string,
//     content: React.PropTypes.string
//   })
// };

module.exports = QuoteContent;
