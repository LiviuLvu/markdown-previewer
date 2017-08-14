import React from 'react';
import { parse } from 'marked';

export class Markdown extends React.Component {
  componentDidUpdate() {
    let content = parse(this.props.textContent);
    document.getElementById('md-preview').innerHTML = content;
  }
  componentDidMount() {
    let content = parse(this.props.textContent);
    document.getElementById('md-preview').innerHTML = content;
  }
  render() {
    return (
      <div id="md-preview">{parse(this.props.textContent)}</div> 
    );
  }
}
