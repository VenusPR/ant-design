import React from 'react';
import Tooltip from 'rc-tooltip';
import Icon from '../icon';
import Button from '../button';
import getPlacements from '../popover/placements';

const placements = getPlacements();
const prefixCls = 'ant-popover';
const noop = function () {};
const transitionNames = {
  top: 'zoom-down',
  bottom: 'zoom-up',
  left: 'zoom-right',
  right: 'zoom-left',
  topLeft: 'zoom-down',
  bottomLeft: 'zoom-up',
  leftTop: 'zoom-right',
  rightTop: 'zoom-left',
  topRight: 'zoom-down',
  bottomRight: 'zoom-up',
  leftBottom: 'zoom-right',
  rightBottom: 'zoom-left',
};

export default React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },
  getDefaultProps() {
    return {
      transitionName: '',
      placement: 'top',
      trigger: 'click',
      overlayStyle: {},
      onConfirm: noop,
      onCancel: noop,
      onVisibleChange() {},
    };
  },
  contextTypes: {
    antLocale: React.PropTypes.object,
  },
  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({ visible: nextProps.visible });
    }
  },
  confirm() {
    this.setVisible(false);
    this.props.onConfirm.call(this);
  },
  cancel() {
    this.setVisible(false);
    this.props.onCancel.call(this);
  },
  onVisibleChange(visible) {
    this.setVisible(visible);
  },
  setVisible(visible) {
    if (!('visible' in this.props)) {
      this.setState({ visible });
    }
    this.props.onVisibleChange(visible);
  },
  render() {
    const { title, placement, overlayStyle, trigger, ...restProps } = this.props;
    let { okText, cancelText } = this.props;
    if (this.context.antLocale && this.context.antLocale.Popconfirm) {
      okText = okText || this.context.antLocale.Popconfirm.okText;
      cancelText = cancelText || this.context.antLocale.Popconfirm.cancelText;
    }
    const overlay = (
      <div>
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-message`}>
            <Icon type="exclamation-circle" />
            <div className={`${prefixCls}-message-title`}>{title}</div>
          </div>
          <div className={`${prefixCls}-buttons`}>
            <Button onClick={this.cancel} type="ghost" size="small">{cancelText || '取消'}</Button>
            <Button onClick={this.confirm} type="primary" size="small">{okText || '确定'}</Button>
          </div>
        </div>
      </div>
    );

    const transitionName = transitionNames[placement];

    return (
      <Tooltip {...restProps}
        placement={placement}
        builtinPlacements={placements}
        overlayStyle={overlayStyle}
        prefixCls={prefixCls}
        onVisibleChange={this.onVisibleChange}
        transitionName={transitionName}
        visible={this.state.visible}
        trigger={trigger}
        overlay={overlay}>
        {this.props.children}
      </Tooltip>
    );
  }
});
