"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1199],{911265:function(i,r,t){t.r(r);var d=t(502143),c=t(968521),_=t(659378),m=t(28840),v=t(374912),l=t(828089),Z=t(902068),g=t(574399),P=t(863942),x=t(316073),h=t(24628),f=t(719260),b=t(956140),o=t(905388),E=t(147341),A=t(606965),y=t(249706),D=t(795127),M=t(116846),O=t(73024),s=t(606641),a=t(667294),e=t(370917);function u(){var p=(0,s.eL)(),n=p.texts;return(0,e.tZ)(s.dY,null,(0,e.tZ)(a.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,n[1].value,(0,e.tZ)("code",null,n[2].value),n[3].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[4].value),(0,e.tZ)("li",null,n[5].value)),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(o.Z,{items:[{demo:{id:"components-progress-demo-line"},previewerProps:{title:"Progress bar",filename:"components/progress/demo/line.tsx",jsx:`import { Progress } from 'antd';
const App = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);
export default App;
`,description:"<p>A standard progress bar.</p>"}},{demo:{id:"components-progress-demo-circle"},previewerProps:{title:"Circular progress bar",filename:"components/progress/demo/circle.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
);
export default App;
`,description:"<p>A circular progress bar.</p>"}},{demo:{id:"components-progress-demo-line-mini"},previewerProps:{title:"Mini size progress bar",filename:"components/progress/demo/line-mini.tsx",jsx:`import { Progress } from 'antd';
const App = () => (
  <div
    style={{
      width: 170,
    }}
  >
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);
export default App;
`,description:"<p>Appropriate for a narrow area.</p>"}},{demo:{id:"components-progress-demo-circle-micro"},previewerProps:{title:"Responsive circular progress bar",filename:"components/progress/demo/circle-micro.tsx",jsx:`import { Progress } from 'antd';
const App = () => (
  <>
    <Progress
      type="circle"
      trailColor="#e6f4ff"
      percent={60}
      strokeWidth={20}
      size={14}
      format={(number) => \`\u8FDB\u884C\u4E2D\uFF0C\u5DF2\u5B8C\u6210\${number}%\`}
    />
    <span
      style={{
        marginLeft: 8,
      }}
    >
      \u4EE3\u7801\u53D1\u5E03
    </span>
  </>
);
export default App;
`,description:"<p>Responsive circular progress bar. When <code>width</code> is smaller than 20, progress information will be displayed in Tooltip.</p>"}},{demo:{id:"components-progress-demo-circle-mini"},previewerProps:{title:"Mini size circular progress bar",filename:"components/progress/demo/circle-mini.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={30} size={80} />
    <Progress type="circle" percent={70} size={80} status="exception" />
    <Progress type="circle" percent={100} size={80} />
  </Space>
);
export default App;
`,description:"<p>A smaller circular progress bar.</p>"}},{demo:{id:"components-progress-demo-circle-dynamic"},previewerProps:{title:"Dynamic circular progress bar",filename:"components/progress/demo/circle-dynamic.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
import { useState } from 'react';
const App = () => {
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <>
      <Progress
        type="circle"
        percent={percent}
        style={{
          marginRight: 8,
        }}
      />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};
export default App;
`,description:"<p>A dynamic progress bar is better.</p>"}},{demo:{id:"components-progress-demo-dynamic"},previewerProps:{title:"Dynamic",filename:"components/progress/demo/dynamic.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
import { useState } from 'react';
const App = () => {
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <>
      <Progress percent={percent} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};
export default App;
`,description:"<p>A dynamic progress bar is better.</p>"}},{demo:{id:"components-progress-demo-format"},previewerProps:{title:"Custom text format",filename:"components/progress/demo/format.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={75} format={(percent) => \`\${percent} Days\`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </Space>
);
export default App;
`,description:"<p>You can set a custom text by setting the <code>format</code> prop.</p>"}},{demo:{id:"components-progress-demo-dashboard"},previewerProps:{title:"Dashboard",filename:"components/progress/demo/dashboard.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </Space>
);
export default App;
`,description:"<p>By setting <code>type=dashboard</code>, you can get a dashboard style of progress easily. Modify <code>gapDegree</code> to set the degree of gap.</p>"}},{demo:{id:"components-progress-demo-segment"},previewerProps:{title:"Progress bar with success segment",filename:"components/progress/demo/segment.tsx",jsx:`import { Progress, Space, Tooltip } from 'antd';
const App = () => (
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{
          percent: 30,
        }}
      />
    </Tooltip>
    <Space wrap>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="circle"
        />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="dashboard"
        />
      </Tooltip>
    </Space>
  </>
);
export default App;
`,description:`<p>A standard progress bar. Doesn't support trail color when <code>type="circle|dashboard"</code>.</p>`}},{demo:{id:"components-progress-demo-linecap"},previewerProps:{title:"Stroke Linecap",filename:"components/progress/demo/linecap.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Progress strokeLinecap="butt" percent={75} />
    <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Space>
  </>
);
export default App;
`,description:'<p>By setting <code>strokeLinecap="butt"</code>, you can change the linecaps from <code>round</code> to <code>butt</code>, see <a href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap">stroke-linecap</a> for more information.</p>'}},{demo:{id:"components-progress-demo-gradient-line"},previewerProps:{title:"Custom line gradient",filename:"components/progress/demo/gradient-line.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Progress
      percent={99.9}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
    <Progress
      percent={99.9}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
    <Space wrap>
      <Progress
        type="circle"
        percent={90}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
      <Progress
        type="circle"
        percent={100}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
    </Space>
  </>
);
export default App;
`,description:"<p>A package of <code>linear-gradient</code>. It is recommended to only pass two colors.</p>"}},{demo:{id:"components-progress-demo-steps"},previewerProps:{title:"Progress bar with steps",filename:"components/progress/demo/steps.tsx",jsx:`import { green, red } from '@ant-design/colors';
import { Progress } from 'antd';
const App = () => (
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    <br />
    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
  </>
);
export default App;
`,description:"<p>A progress bar with steps.</p>"}},{demo:{id:"components-progress-demo-size"},previewerProps:{title:"Progress size",filename:"components/progress/demo/size.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Space direction="vertical">
      <Progress percent={50} />
      <Progress percent={50} size="small" />
      <Progress percent={50} size={[300, 20]} />
    </Space>
    <br />
    <br />
    <Space size={30}>
      <Progress type="circle" percent={50} />
      <Progress type="circle" percent={50} size="small" />
      <Progress type="circle" percent={50} size={20} />
    </Space>
    <br />
    <br />
    <Space size={30}>
      <Progress type="dashboard" percent={50} />
      <Progress type="dashboard" percent={50} size="small" />
      <Progress type="dashboard" percent={50} size={20} />
    </Space>
    <br />
    <br />
    <Space size={30} wrap>
      <Progress steps={3} percent={50} />
      <Progress steps={3} percent={50} size="small" />
      <Progress steps={3} percent={50} size={20} />
      <Progress steps={3} percent={50} size={[20, 30]} />
    </Space>
  </>
);
export default App;
`,description:"<p>The size of progress.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("p",null,n[6].value),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[7].value),(0,e.tZ)("th",null,n[8].value),(0,e.tZ)("th",null,n[9].value),(0,e.tZ)("th",null,n[10].value),(0,e.tZ)("th",null,n[11].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[12].value),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value,(0,e.tZ)("code",null,n[16].value)),(0,e.tZ)("td",null,n[17].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,n[21].value),(0,e.tZ)("td",null,n[22].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,n[26].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value,(0,e.tZ)("code",null,n[29].value),n[30].value,(0,e.tZ)("code",null,n[31].value),n[32].value,(0,e.tZ)("code",null,n[33].value),n[34].value,(0,e.tZ)("code",null,n[35].value),n[36].value),(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null,n[41].value),(0,e.tZ)("td",null,n[42].value),(0,e.tZ)("td",null,n[43].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null,n[45].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[46].value),n[47].value,(0,e.tZ)("code",null,n[48].value),n[49].value,(0,e.tZ)("code",null,n[50].value),n[51].value,(0,e.tZ)("a",{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap"},n[52].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[53].value)),(0,e.tZ)("td",null,n[54].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[55].value),(0,e.tZ)("td",null,n[56].value),(0,e.tZ)("td",null,n[57].value),(0,e.tZ)("td",null,n[58].value),(0,e.tZ)("td",null,n[59].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[60].value),(0,e.tZ)("td",null,n[61].value),(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null,n[64].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null,n[66].value,(0,e.tZ)("code",null,n[67].value),n[68].value,(0,e.tZ)("code",null,n[69].value),n[70].value,(0,e.tZ)("code",null,n[71].value)),(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[73].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,n[75].value),(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value),(0,e.tZ)("td",null,n[78].value)))),(0,e.tZ)("h3",{id:"typeline"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typeline"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[79].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[80].value),(0,e.tZ)("th",null,n[81].value),(0,e.tZ)("th",null,n[82].value),(0,e.tZ)("th",null,n[83].value),(0,e.tZ)("th",null,n[84].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[85].value),(0,e.tZ)("td",null,n[86].value),(0,e.tZ)("td",null,n[87].value),(0,e.tZ)("td",null,n[88].value),(0,e.tZ)("td",null,n[89].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[90].value),(0,e.tZ)("td",null,n[91].value,(0,e.tZ)("code",null,n[92].value),n[93].value,(0,e.tZ)("code",null,n[94].value),n[95].value,(0,e.tZ)("code",null,n[96].value),n[97].value),(0,e.tZ)("td",null,n[98].value),(0,e.tZ)("td",null,n[99].value),(0,e.tZ)("td",null,n[100].value,(0,e.tZ)("code",null,n[101].value))))),(0,e.tZ)("h3",{id:"typecircle"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typecircle"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[102].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[103].value),(0,e.tZ)("th",null,n[104].value),(0,e.tZ)("th",null,n[105].value),(0,e.tZ)("th",null,n[106].value),(0,e.tZ)("th",null,n[107].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[108].value),(0,e.tZ)("td",null,n[109].value,(0,e.tZ)("code",null,n[110].value),n[111].value),(0,e.tZ)("td",null,n[112].value),(0,e.tZ)("td",null,n[113].value),(0,e.tZ)("td",null,n[114].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[115].value),(0,e.tZ)("td",null,n[116].value),(0,e.tZ)("td",null,n[117].value),(0,e.tZ)("td",null,n[118].value),(0,e.tZ)("td",null,n[119].value)))),(0,e.tZ)("h3",{id:"typedashboard"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typedashboard"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[120].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[121].value),(0,e.tZ)("th",null,n[122].value),(0,e.tZ)("th",null,n[123].value),(0,e.tZ)("th",null,n[124].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[125].value),(0,e.tZ)("td",null,n[126].value),(0,e.tZ)("td",null,n[127].value),(0,e.tZ)("td",null,n[128].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[129].value),(0,e.tZ)("td",null,n[130].value,(0,e.tZ)("code",null,n[131].value),n[132].value,(0,e.tZ)("code",null,n[133].value),n[134].value,(0,e.tZ)("code",null,n[135].value),n[136].value,(0,e.tZ)("code",null,n[137].value)),(0,e.tZ)("td",null,n[138].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[139].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[140].value),(0,e.tZ)("td",null,n[141].value),(0,e.tZ)("td",null,n[142].value),(0,e.tZ)("td",null,n[143].value)))))))}r.default=u}}]);
