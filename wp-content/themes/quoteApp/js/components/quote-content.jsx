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

  componentWillReceiveProps: function(nextProps) {
      this.setState({
        artist: nextProps.source[this.state.indexNum].title.rendered,
        lyric: nextProps.source[this.state.indexNum].content.rendered,
        indexNum: this.state.indexNum + 1,
      });
  },

  render(){
    return (
      <div  className="quote-container">
        <div className="headphones">
          <a id="get-another-quote-button" className="button" onClick={this._handleClick}>get a lyric</a>
        </div>
        <div id="quote-content" dangerouslySetInnerHTML={{ __html: this.state.lyric}}></div>
        <h2>&mdash; <span id="quote-title">{this.state.artist}</span></h2>
      </div>
    )
  },

  _handleClick(event) {
    event.preventDefault();
    if (this.props.source.length === this.state.indexNum) {
      this.setState({
        indexNum: 0,
      });
    }
    else {
      this.setState({
        artist: this.props.source[this.state.indexNum].title.rendered,
        lyric: this.props.source[this.state.indexNum].content.rendered,
        indexNum: this.state.indexNum + 1
      });
    }
  }

});

module.exports = QuoteContent;
