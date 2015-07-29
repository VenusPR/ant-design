import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {prefixCls: 'ant-alert'};
  },
  getInitialState () {
    return {display: 'block'};
  },
  handleClose () {
    if (this.props.callback) {
      this.props.callback();
    }
    this.setState({
      display: 'none'
    });
  },
  render () {
    var iconClass = this.props.message ? 'ant-alert-with-message-icon anticon-' : 'ant-alert-icon anticon-';
    switch (this.props.type) {
      case 'success':
        iconClass += 'check-circle';
        break;
      case 'info':
        iconClass += 'question-circle';
        break;
      case 'error':
      case 'warn':
        iconClass += 'info-circle';
        break;
      default:
        iconClass += 'default';
    }
    if (this.props.message) {
      return (
        <div style={{display: this.state.display}} className={'ant-alert-with-message ant-alert-with-message-' + this.props.type}>
          <i className={'anticon ' + iconClass}></i>
          <p className={'ant-alert-with-message-message'}>{this.props.message}</p>
          <span className={'ant-alert-with-message-description'}>{this.props.description}</span>
          <i onClick={this.handleClose} className={'anticon anticon-cross ant-alert-with-message-close-icon'}></i>
        </div>
      );
    } else {
      if (this.props.closeText) {
        return (
          <div style={{display: this.state.display}} className={'ant-alert ant-alert-' + this.props.type}>
            <i className={'anticon ' + iconClass}></i>
            <span className={'ant-alert-description'}>{this.props.description}</span>
            <a onClick={this.handleClose} className={'ant-alert-close-text'}>{this.props.closeText}</a>
          </div>
        );
      } else {
        return (
          <div style={{display: this.state.display}} className={'ant-alert ant-alert-' + this.props.type}>
            <i className={'anticon ' + iconClass}></i>
            <span className={'ant-alert-description'}>{this.props.description}</span>
            <i onClick={this.handleClose} className={'anticon anticon-cross ant-alert-close-icon'}></i>
          </div>
        );
      }
    }
  }
});
