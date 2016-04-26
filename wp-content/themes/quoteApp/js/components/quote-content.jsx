import React from 'react';

var QuoteContent = React.createClass({

  getInitialState: function() {
    return {
      postObject: [],
      artist: '',
      lyric: ''
    };
  },

  componentDidMount: function() {
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

        <div id="quote-content" dangerouslySetInnerHTML={{ __html: this.state.lyric}}></div>
        <h2>&mdash; <span id="quote-title">{this.state.artist}</span></h2>
      </div>
    )
  },


});

// QuoteContent.propTypes = {
//   _handleGetRequest: React.PropTypes.func.isRequired
// };

module.exports = QuoteContent;
