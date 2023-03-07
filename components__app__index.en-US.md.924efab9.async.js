"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(u,a,t){t.r(a);var r=t(502143),c=t(968521),m=t(659378),x=t(28840),_=t(374912),i=t(828089),h=t(902068),p=t(574399),Z=t(863942),E=t(316073),v=t(24628),g=t(719260),P=t(956140),M=t(905388),D=t(147341),O=t(606965),U=t(249706),W=t(795127),f=t(116846),C=t(73024),s=t(606641),o=t(667294),e=t(370917);function l(){var d=(0,s.eL)(),n=d.texts;return(0,e.tZ)(s.dY,null,(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,n[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"how-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,e.tZ)("h3",{id:"basic-usage"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,e.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,e.tZ)("p",null,n[2].value,(0,e.tZ)("code",null,n[3].value),n[4].value),(0,e.tZ)(_.Z,{lang:"tsx"},n[5].value),(0,e.tZ)("p",null,n[6].value),(0,e.tZ)("h3",{id:"sequence-with-configprovider"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,e.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,e.tZ)("p",null,n[7].value,(0,e.tZ)("code",null,n[8].value),n[9].value),(0,e.tZ)(_.Z,{lang:"tsx"},n[10].value),(0,e.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,e.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,e.tZ)(_.Z,{lang:"tsx"},n[11].value),(0,e.tZ)("h3",{id:"global-scene-redux-scene"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,e.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,e.tZ)(_.Z,{lang:"tsx"},n[12].value),(0,e.tZ)(_.Z,{lang:"tsx"},n[13].value),(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"app"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#app"},(0,e.tZ)("span",{className:"icon icon-link"})),"App"),(0,e.tZ)(i.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[14].value),(0,e.tZ)("th",null,n[15].value),(0,e.tZ)("th",null,n[16].value),(0,e.tZ)("th",null,n[17].value),(0,e.tZ)("th",null,n[18].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,(0,e.tZ)(s.rU,{to:"/components/message/#messageconfig"},n[21].value)),(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null,n[23].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,(0,e.tZ)(s.rU,{to:"/components/notification/#notificationconfig"},n[26].value)),(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value)))))))}a.default=l}}]);
