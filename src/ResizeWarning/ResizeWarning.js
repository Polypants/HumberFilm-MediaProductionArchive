import React, { Component } from 'react';
import './ResizeWarning.css';
import classNames from 'classnames';

class ResizeWarning extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isResized: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize.bind(this));
  }

  onResize = () => {
    this.setState({ "isResized": true });
  }

  render() {
    var resizeWarningStyles = classNames(
      'resizeWarning',
      {'resizeWarning--isResized': this.state.isResized}
    );

    return (
      <div className={resizeWarningStyles}>
        <h1 className="resizeWarning_text">Please reload the page...</h1>
      </div>
    );
  }

}

export default ResizeWarning;
