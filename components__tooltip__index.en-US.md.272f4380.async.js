"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7738],{388495:function(p,o,e){e.r(o);var s=e(502143),m=e(968521),_=e(659378),c=e(28840),v=e(374912),i=e(828089),Z=e(902068),x=e(574399),T=e(863942),f=e(316073),h=e(24628),g=e(719260),B=e(956140),u=e(905388),P=e(147341),w=e(606965),E=e(249706),A=e(795127),W=e(116846),D=e(73024),l=e(606641),a=e(667294),t=e(370917);function r(){var d=(0,l.eL)(),n=d.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value,(0,t.tZ)("code",null,n[3].value),n[4].value,(0,t.tZ)("code",null,n[5].value),n[6].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(u.Z,{items:[{demo:{id:"components-tooltip-demo-basic"},previewerProps:{title:"Basic",filename:"components/tooltip/demo/basic.tsx",jsx:`import { Tooltip } from 'antd';
const App = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-tooltip-demo-placement"},previewerProps:{title:"Placement",filename:"components/tooltip/demo/placement.tsx",jsx:`import { Button, Tooltip } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const App = () => (
  <div>
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left',
      }}
    >
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24,
      }}
    >
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
);
export default App;
`,description:"<p>There are 12 placement options available.</p>",style:`#components-tooltip-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-tooltip-demo-placement .ant-btn {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"components-tooltip-demo-arrow"},previewerProps:{title:"Arrow",filename:"components/tooltip/demo/arrow.tsx",jsx:`import { Button, Divider, Segmented, Tooltip } from 'antd';
import { useMemo, useState } from 'react';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const gap = 8;
const btnProps = {
  style: {
    width: buttonWidth,
  },
};
const App = () => {
  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <div className="demo">
      <Segmented
        value={arrow}
        options={options}
        onChange={(val) => {
          setArrow(val);
        }}
      />
      <Divider orientation="center">Content</Divider>
      <div
        style={{
          marginLeft: buttonWidth,
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TR</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          float: 'left',
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text} arrow={mergedArrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + 24,
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text} arrow={mergedArrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Support show, hide or keep arrow in the center.</p>"}},{demo:{id:"components-tooltip-demo-shift"},previewerProps:{iframe:"200",title:"Auto Shift",filename:"components/tooltip/demo/shift.tsx",jsx:`import { Button, Tooltip } from 'antd';
import React from 'react';
const App = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div>
      <div
        style={{
          width: '300vw',
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip title="Thanks for using antd. Have a nice day!" open>
          <Button>Scroll The Window</Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Auto adjust Popup and arrow position when Tooltip is close to the edge of the screen. Will be out of screen when exceed limitation.</p>"}},{demo:{id:"components-tooltip-demo-auto-adjust-overflow"},previewerProps:{debug:!0,title:"Adjust placement automatically",filename:"components/tooltip/demo/auto-adjust-overflow.tsx",jsx:`import { Button, Tooltip, Typography } from 'antd';
import React from 'react';
const Block = React.forwardRef((props, ref) => (
  <div
    style={{
      overflow: 'auto',
      position: 'relative',
      padding: '24px',
      border: '1px solid #e9e9e9',
    }}
    ref={ref}
  >
    <div
      style={{
        width: '200%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 16,
      }}
    >
      <Tooltip {...props} placement="left" title="Prompt Text">
        <Button>Adjust automatically / \u81EA\u52A8\u8C03\u6574</Button>
      </Tooltip>
      <Tooltip {...props} placement="left" title="Prompt Text" autoAdjustOverflow={false}>
        <Button>Ignore / \u4E0D\u5904\u7406</Button>
      </Tooltip>
    </div>
  </div>
));
const App = () => {
  const containerRef1 = React.useRef(null);
  const containerRef2 = React.useRef(null);
  React.useEffect(() => {
    containerRef1.current.scrollLeft = containerRef1.current.clientWidth * 0.5;
    containerRef2.current.scrollLeft = containerRef2.current.clientWidth * 0.5;
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16,
      }}
    >
      <Typography.Title level={5}>With \`getPopupContainer\`</Typography.Title>
      <Block ref={containerRef1} getPopupContainer={(trigger) => trigger.parentElement} />

      <Typography.Title level={5}>Without \`getPopupContainer\`</Typography.Title>
      <Block ref={containerRef2} />
    </div>
  );
};
export default App;
`,description:"<p>Adjust placement automatically when tooltip is invisible.</p>"}},{demo:{id:"components-tooltip-demo-destroy-tooltip-on-hide"},previewerProps:{debug:!0,title:"Destroy tooltip when hidden",filename:"components/tooltip/demo/destroy-tooltip-on-hide.tsx",jsx:`import { Tooltip } from 'antd';
const App = () => (
  <Tooltip destroyTooltipOnHide title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);
export default App;
`,description:"<p>Setting <code>destroyTooltipOnHide</code> to control whether destroy dom node of tooltip when hidden.</p>"}},{demo:{id:"components-tooltip-demo-colorful"},previewerProps:{title:"Colorful Tooltip",filename:"components/tooltip/demo/colorful.tsx",jsx:`import { Button, Divider, Space, Tooltip } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
const App = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);
export default App;
`,description:"<p>We preset a series of colorful Tooltip styles for use in different situations.</p>"}},{demo:{id:"components-tooltip-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tooltip/demo/render-panel.tsx",jsx:`import { Tooltip } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTooltip } = Tooltip;
const App = () => (
  <>
    <InternalTooltip title="Hello, Pink Pure Panel!" color="pink" />
    <InternalTooltip title="Hello, Customize Color Pure Panel!" color="#f50" />
    <InternalTooltip
      title="Hello, Pure Panel!"
      placement="bottomLeft"
      style={{
        width: 200,
      }}
    />
  </>
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"components-tooltip-demo-debug"},previewerProps:{debug:!0,title:"Debug",filename:"components/tooltip/demo/debug.tsx",jsx:`import { Button, Tooltip } from 'antd';
const App = () => (
  <Tooltip
    open
    title="Thanks for using antd. Have a nice day!"
    arrow={{
      pointAtCenter: true,
    }}
    placement="topLeft"
  >
    <Button>Point at center</Button>
  </Tooltip>
);
export default App;
`,description:"<p>Debug use.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value),(0,t.tZ)("th",null,n[10].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value)))),(0,t.tZ)("h3",{id:"common-api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#common-api"},(0,t.tZ)("span",{className:"icon icon-link"})),"Common API"),(0,t.tZ)("p",null,n[15].value),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[16].value),(0,t.tZ)("th",null,n[17].value),(0,t.tZ)("th",null,n[18].value),(0,t.tZ)("th",null,n[19].value),(0,t.tZ)("th",null,n[20].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value,(0,t.tZ)("a",{href:"https://github.com/react-component/tooltip"},n[23].value)),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,n[50].value,(0,t.tZ)("code",null,n[51].value),n[52].value,(0,t.tZ)("code",null,n[53].value)),(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null,n[70].value),(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null,n[77].value,(0,t.tZ)("code",null,n[78].value),n[79].value,(0,t.tZ)("code",null,n[80].value),n[81].value,(0,t.tZ)("code",null,n[82].value),n[83].value,(0,t.tZ)("code",null,n[84].value),n[85].value,(0,t.tZ)("code",null,n[86].value),n[87].value,(0,t.tZ)("code",null,n[88].value),n[89].value,(0,t.tZ)("code",null,n[90].value),n[91].value,(0,t.tZ)("code",null,n[92].value),n[93].value,(0,t.tZ)("code",null,n[94].value),n[95].value,(0,t.tZ)("code",null,n[96].value),n[97].value,(0,t.tZ)("code",null,n[98].value),n[99].value,(0,t.tZ)("code",null,n[100].value)),(0,t.tZ)("td",null,n[101].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[102].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[103].value),(0,t.tZ)("td",null,n[104].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[105].value),n[106].value,(0,t.tZ)("code",null,n[107].value),n[108].value,(0,t.tZ)("code",null,n[109].value),n[110].value,(0,t.tZ)("code",null,n[111].value),n[112].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[113].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[114].value),(0,t.tZ)("td",null,n[115].value,(0,t.tZ)("code",null,n[116].value),n[117].value,(0,t.tZ)(l.rU,{to:"/docs/react/faq#why-open"},n[118].value),n[119].value),(0,t.tZ)("td",null,n[120].value),(0,t.tZ)("td",null,n[121].value),(0,t.tZ)("td",null,n[122].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[123].value),(0,t.tZ)("td",null,n[124].value,(0,t.tZ)("code",null,n[125].value),n[126].value),(0,t.tZ)("td",null,n[127].value),(0,t.tZ)("td",null,n[128].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[129].value),(0,t.tZ)("td",null,n[130].value),(0,t.tZ)("td",null,n[131].value),(0,t.tZ)("td",null,n[132].value),(0,t.tZ)("td",null,n[133].value)))),(0,t.tZ)("h2",{id:"note"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#note"},(0,t.tZ)("span",{className:"icon icon-link"})),"Note"),(0,t.tZ)("p",null,n[134].value,(0,t.tZ)("code",null,n[135].value),n[136].value,(0,t.tZ)("code",null,n[137].value),n[138].value,(0,t.tZ)("code",null,n[139].value),n[140].value,(0,t.tZ)("code",null,n[141].value),n[142].value,(0,t.tZ)("code",null,n[143].value),n[144].value))))}o.default=r}}]);
