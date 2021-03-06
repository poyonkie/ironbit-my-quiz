// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Home extends Component {
  static propTypes = {
    isMobile: PropTypes.bool
  }

  render() {
    const { isMobile } = this.props;
    return (
      <div>
      Home today!!!
      <p className="is-device">{isMobile ? 'Mobile Device': 'Desktop Device'}</p>
      </div>
    )
  }
}

export default connect(state => ({
  isMobile: state.device.isMobile
}), null)(Home);
