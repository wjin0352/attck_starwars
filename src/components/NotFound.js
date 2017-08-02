import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {

  render() {
    // const error = this.props.location.state;
    return (
      <div className="not_found">
        <h5>Sorry mysteriously nothing was found.</h5>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;