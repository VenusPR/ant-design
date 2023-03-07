"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9610],{704532:function(r,s,n){n.r(s);var d=n(502143),m=n(968521),p=n(659378),c=n(28840),x=n(374912),l=n(828089),v=n(902068),h=n(574399),E=n(863942),P=n(316073),Z=n(24628),g=n(719260),B=n(956140),_=n(905388),f=n(147341),O=n(606965),C=n(249706),D=n(795127),y=n(116846),M=n(73024),o=n(606641),a=n(667294),e=n(370917);function i(){var u=(0,o.eL)(),t=u.texts;return(0,e.tZ)(o.dY,null,(0,e.tZ)(a.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,t[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(_.Z,{items:[{demo:{id:"components-result-demo-success"},previewerProps:{title:"Success",filename:"components/result/demo/success.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);
export default App;
`,description:"<p>Show successful results.</p>"}},{demo:{id:"components-result-demo-info"},previewerProps:{title:"Info",filename:"components/result/demo/info.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>Show processing results.</p>"}},{demo:{id:"components-result-demo-warning"},previewerProps:{title:"Warning",filename:"components/result/demo/warning.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>The result of the warning.</p>"}},{demo:{id:"components-result-demo-403"},previewerProps:{title:"403",filename:"components/result/demo/403.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>you are not authorized to access this page.</p>"}},{demo:{id:"components-result-demo-404"},previewerProps:{title:"404",filename:"components/result/demo/404.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>The page you visited does not exist.</p>"}},{demo:{id:"components-result-demo-500"},previewerProps:{title:"500",filename:"components/result/demo/500.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>Something went wrong on server.</p>"}},{demo:{id:"components-result-demo-error"},previewerProps:{title:"Error",filename:"components/result/demo/error.tsx",jsx:`import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
const App = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);
export default App;
`,description:"<p>Complex error feedback.</p>",style:`.site-result-demo-error-icon {
  color: red;
}`}},{demo:{id:"components-result-demo-customicon"},previewerProps:{title:"Custom icon",filename:"components/result/demo/customIcon.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
const App = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
export default App;
`,description:"<p>Custom icon.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[2].value),(0,e.tZ)("th",null,t[3].value),(0,e.tZ)("th",null,t[4].value),(0,e.tZ)("th",null,t[5].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[6].value),(0,e.tZ)("td",null,t[7].value),(0,e.tZ)("td",null,t[8].value),(0,e.tZ)("td",null,t[9].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null,t[12].value),(0,e.tZ)("td",null,t[13].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[16].value),t[17].value,(0,e.tZ)("code",null,t[18].value),t[19].value,(0,e.tZ)("code",null,t[20].value),t[21].value,(0,e.tZ)("code",null,t[22].value),t[23].value,(0,e.tZ)("code",null,t[24].value),t[25].value,(0,e.tZ)("code",null,t[26].value),t[27].value,(0,e.tZ)("code",null,t[28].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[29].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[30].value),(0,e.tZ)("td",null,t[31].value),(0,e.tZ)("td",null,t[32].value),(0,e.tZ)("td",null,t[33].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[34].value),(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null,t[37].value)))))))}s.default=i}}]);
