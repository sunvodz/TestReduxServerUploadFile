import React, { Component } from 'react';
export default class Progress extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {

  };

  render() {
    return (
      <div className="ProgressBar">
        <div
          className="Progress"
          style={{ width: this.props.progress + '%' }}
        />
      </div>
    );
  }
}
