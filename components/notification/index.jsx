import Notification from 'rc-notification';

let top = 24;

var notificationInstance;

function getNotificationInstance() {
  notificationInstance = notificationInstance || Notification.newInstance({
    prefixCls: 'ant-notification',
    style: {
      top: top,
      right: 0
    }
  });
  return notificationInstance;
}

function notice(args) {
  if (args.icon) {
    let prefixCls = ' ant-notification-notice-content-icon-';
    let iconClass = 'anticon anticon-';
    switch (args.icon) {
      case 'success':
        iconClass += 'check-circle-o';
        break;
      case 'info':
        iconClass += 'info-circle-o';
        break;
      case 'error':
        iconClass += 'exclamation-circle-o';
        break;
      case 'warn':
        iconClass += 'question-circle-o';
        break;
      default:
        iconClass += 'info-circle';
    }

    getNotificationInstance().notice({
      content: <div>
        <i className={iconClass + prefixCls + 'icon-' + args.icon + prefixCls + 'icon'}></i>
        <p className={prefixCls + 'message'}>{args.message}</p>
        <p className={prefixCls + 'description'}>{args.description}</p>
      </div>,
      duration: null,
      closable: true,
      onClose: args.onClose,
      style: {}
    });
  } else {
    let prefixCls = 'ant-notification-notice-content-';
    if (!args.btn) {
      getNotificationInstance().notice({
        content: <div>
          <p className={prefixCls + 'message'}>{args.message}</p>
          <p className={prefixCls + 'description'}>{args.description}</p>
        </div>,
        duration: null,
        closable: true,
        onClose: args.onClose,
        style: {}
      });
    } else {
      getNotificationInstance().notice({
        content: <div>
          <p className={prefixCls + 'message'}>{args.message}</p>
          <p className={prefixCls + 'description'}>{args.description}</p>
          <span className={prefixCls + 'btn'}>
            {args.btn}
          </span>
        </div>,
        duration: null,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {}
      });
    }
  }
}

export default {
  open(args){
    notice(args);
  },
  close(key){
    notificationInstance.removeNotice(key);
  },
  config(options) {
    top = isNaN(options.top) ? 24 : options.top;
  }
};
