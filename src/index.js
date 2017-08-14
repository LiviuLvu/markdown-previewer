import React from "react";
import { render } from "react-dom";

import { Rawtext } from './components/Rawtext';
import { Markdown } from './components/Markdown';

import './reset.css';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rawContent: '# Preview'
    }
  }

  onChangeTextContent(newContent) {
    this.setState({
      rawContent: newContent
    });
  }

  render() {
    return (
      <div>
        <div className="col-50 rawtext">
          <Rawtext changeText={this.onChangeTextContent.bind(this)} />
        </div>
        <div className="col-50">
          <Markdown textContent={this.state.rawContent} />
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));