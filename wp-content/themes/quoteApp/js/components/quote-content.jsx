import React from 'react';

var QuoteContent = React.createClass({

  getInitialState: function() {
    return {
      postObject: [],
      artist: '',
      lyric: '',
      indexNum: 0
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var wpObject = result;
      console.log(result);
      this.setState({
        postObject: wpObject,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  _handleClick() {
    if (this.state.postObject.length === this.state.indexNum) {
      this.setState({
        indexNum: 0
      });
    }
    else {
    this.setState({
      artist: this.state.postObject[this.state.indexNum].title.rendered,
      lyric: this.state.postObject[this.state.indexNum].content.rendered,
      indexNum: this.state.indexNum + 1,
    });
  }
  },


  render(){
    return (
      <div>
        <div className="headphones">
          <a id="get-another-quote-button" className="button" onClick={this._handleClick}>get a lyric</a>
        </div>
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
