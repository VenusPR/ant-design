"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9675],{396707:function(o,n,l){l.r(n);var c=l(502143),r=l(968521),m=l(659378),h=l(28840),Z=l(374912),_=l(828089),v=l(902068),x=l(574399),p=l(863942),E=l(316073),P=l(24628),C=l(719260),D=l(956140),s=l(905388),M=l(147341),O=l(606965),W=l(249706),U=l(795127),g=l(116846),f=l(73024),d=l(606641),a=l(667294),t=l(370917);function i(){var u=(0,d.eL)(),e=u.texts;return(0,t.tZ)(d.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value,(0,t.tZ)("code",null,e[3].value),e[4].value,(0,t.tZ)("code",null,e[5].value),e[6].value,(0,t.tZ)("code",null,e[7].value),e[8].value,(0,t.tZ)("code",null,e[9].value),e[10].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(s.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"Basic",filename:"components/switch/demo/basic.tsx",jsx:`import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/switch/demo/disabled.tsx",jsx:`import { Button, Space, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <Space direction="vertical">
      <Switch disabled={disabled} defaultChecked />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Disabled state of <code>Switch</code>.</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"Text & icon",filename:"components/switch/demo/text.tsx",jsx:`import { CheckOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);
export default App;
`,description:"<p>With text and icon.</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"Two sizes",filename:"components/switch/demo/size.tsx",jsx:`import { Switch } from 'antd';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> represents a small sized switch.</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"Loading",filename:"components/switch/demo/loading.tsx",jsx:`import { Switch } from 'antd';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>Mark a pending state of switch.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(_.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[11].value),(0,t.tZ)("th",null,e[12].value),(0,t.tZ)("th",null,e[13].value),(0,t.tZ)("th",null,e[14].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value,(0,t.tZ)("code",null,e[45].value),e[46].value,(0,t.tZ)("code",null,e[47].value)),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[49].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value),(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,e[59].value),(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,e[61].value)))),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(_.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[62].value),(0,t.tZ)("th",null,e[63].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,e[67].value)))))))}n.default=i}}]);
