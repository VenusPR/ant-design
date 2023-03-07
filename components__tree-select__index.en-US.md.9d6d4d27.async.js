"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4142],{330309:function(Z,a,t){t.r(a);var v=t(502143),i=t(968521),c=t(659378),p=t(28840),_=t(374912),u=t(828089),m=t(902068),h=t(574399),x=t(863942),f=t(316073),D=t(24628),g=t(719260),E=t(956140),d=t(905388),P=t(147341),C=t(606965),S=t(249706),T=t(795127),w=t(116846),A=t(73024),n=t(606641),o=t(667294),l=t(370917);function r(){var s=(0,n.eL)(),e=s.texts;return(0,l.tZ)(n.dY,null,(0,l.tZ)(o.Fragment,null,(0,l.tZ)("div",{className:"markdown"},(0,l.tZ)("p",null,e[0].value),(0,l.tZ)("h2",{id:"when-to-use"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,l.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,l.tZ)("p",null,(0,l.tZ)("code",null,e[1].value),e[2].value,(0,l.tZ)("code",null,e[3].value),e[4].value),(0,l.tZ)("h2",{id:"examples"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,l.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,l.tZ)(d.Z,{items:[{demo:{id:"components-tree-select-demo-basic"},previewerProps:{title:"Basic",filename:"components/tree-select/demo/basic.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tree-select-demo-multiple"},previewerProps:{title:"Multiple Selection",filename:"components/tree-select/demo/multiple.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Multiple selection usage.</p>"}},{demo:{id:"components-tree-select-demo-treedata"},previewerProps:{title:"Generate from tree data",filename:"components/tree-select/demo/treeData.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default App;
`,description:"<p>The tree structure can be populated using <code>treeData</code> property. This is a quick and easy way to provide the tree content.</p>"}},{demo:{id:"components-tree-select-demo-checkable"},previewerProps:{title:"Checkable",filename:"components/tree-select/demo/checkable.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
};
export default App;
`,description:"<p>Multiple and checkable.</p>"}},{demo:{id:"components-tree-select-demo-async"},previewerProps:{title:"Asynchronous loading",filename:"components/tree-select/demo/async.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState();
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      pId: 0,
      value: '1',
      title: 'Expand to load',
    },
    {
      id: 2,
      pId: 0,
      value: '2',
      title: 'Expand to load',
    },
    {
      id: 3,
      pId: 0,
      value: '3',
      title: 'Tree Node',
      isLeaf: true,
    },
  ]);
  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };
  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      treeDataSimpleMode
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Asynchronous loading tree node.</p>"}},{demo:{id:"components-tree-select-demo-treeline"},previewerProps:{title:"Show Tree Line",filename:"components/tree-select/demo/treeLine.tsx",jsx:`import { Space, Switch, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: 'sss',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={
          treeLine && {
            showLeafIcon,
          }
        }
        style={{
          width: 300,
        }}
        treeData={treeData}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Use <code>treeLine</code> to show the line style.</p>"}},{demo:{id:"components-tree-select-demo-placement"},previewerProps:{title:"Placement",filename:"components/tree-select/demo/placement.tsx",jsx:`import { Radio, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300,
        }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};
export default App;
`,description:"<p>You can manually specify the position of the popup via <code>placement</code>.</p>"}},{demo:{id:"components-tree-select-demo-status"},previewerProps:{title:"Status",filename:"components/tree-select/demo/status.tsx",jsx:`import { Space, TreeSelect } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <TreeSelect
      status="error"
      style={{
        width: '100%',
      }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{
        width: '100%',
      }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);
export default App;
`,description:"<p>Add status to TreeSelect with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-tree-select-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/tree-select/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import { useState } from 'react';
const icon = <SmileOutlined />;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      suffixIcon={icon}
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tree-select-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tree-select/demo/render-panel.tsx",jsx:`import { TreeSelect } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTreeSelect } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => (
  <InternalTreeSelect
    defaultValue="lucy"
    style={{
      width: '100%',
    }}
    treeData={treeData}
  />
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,l.tZ)("div",{className:"markdown"},(0,l.tZ)("h2",{id:"api"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,l.tZ)("span",{className:"icon icon-link"})),"API"),(0,l.tZ)("h3",{id:"tree-props"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-props"},(0,l.tZ)("span",{className:"icon icon-link"})),"Tree props"),(0,l.tZ)(u.Z,{className:"component-api-table"},(0,l.tZ)("thead",null,(0,l.tZ)("tr",null,(0,l.tZ)("th",null,e[5].value),(0,l.tZ)("th",null,e[6].value),(0,l.tZ)("th",null,e[7].value),(0,l.tZ)("th",null,e[8].value),(0,l.tZ)("th",null,e[9].value))),(0,l.tZ)("tbody",null,(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[10].value),(0,l.tZ)("td",null,e[11].value),(0,l.tZ)("td",null,e[12].value),(0,l.tZ)("td",null,e[13].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[14].value),(0,l.tZ)("td",null,e[15].value),(0,l.tZ)("td",null,e[16].value),(0,l.tZ)("td",null,e[17].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[18].value),(0,l.tZ)("td",null,e[19].value),(0,l.tZ)("td",null,e[20].value),(0,l.tZ)("td",null,e[21].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[22].value),(0,l.tZ)("td",null,e[23].value),(0,l.tZ)("td",null,e[24].value),(0,l.tZ)("td",null,e[25].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[26].value),(0,l.tZ)("td",null,e[27].value),(0,l.tZ)("td",null,e[28].value),(0,l.tZ)("td",null,e[29].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[30].value),(0,l.tZ)("td",null,e[31].value),(0,l.tZ)("td",null,e[32].value),(0,l.tZ)("td",null,e[33].value),(0,l.tZ)("td",null,e[34].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[35].value),(0,l.tZ)("td",null,e[36].value,(0,l.tZ)("code",null,e[37].value),e[38].value,(0,l.tZ)("code",null,e[39].value),e[40].value),(0,l.tZ)("td",null,e[41].value),(0,l.tZ)("td",null,e[42].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[43].value),(0,l.tZ)("td",null,e[44].value),(0,l.tZ)("td",null,e[45].value),(0,l.tZ)("td",null,e[46].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[47].value),(0,l.tZ)("td",null,e[48].value),(0,l.tZ)("td",null,e[49].value),(0,l.tZ)("td",null,e[50].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[51].value),(0,l.tZ)("td",null,e[52].value),(0,l.tZ)("td",null,e[53].value),(0,l.tZ)("td",null,e[54].value,(0,l.tZ)("code",null,e[55].value),e[56].value,(0,l.tZ)("code",null,e[57].value),e[58].value,(0,l.tZ)("code",null,e[59].value),e[60].value),(0,l.tZ)("td",null,e[61].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[62].value),(0,l.tZ)("td",null,e[63].value,(0,l.tZ)("code",null,e[64].value),e[65].value),(0,l.tZ)("td",null,e[66].value),(0,l.tZ)("td",null,e[67].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[68].value),(0,l.tZ)("td",null,e[69].value,(0,l.tZ)("code",null,e[70].value),e[71].value,(0,l.tZ)("code",null,e[72].value),e[73].value,(0,l.tZ)("a",{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},e[74].value)),(0,l.tZ)("td",null,e[75].value),(0,l.tZ)("td",null,e[76].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[77].value),(0,l.tZ)("td",null,e[78].value,(0,l.tZ)("code",null,e[79].value),e[80].value),(0,l.tZ)("td",null,e[81].value),(0,l.tZ)("td",null,e[82].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[83].value),(0,l.tZ)("td",null,e[84].value),(0,l.tZ)("td",null,e[85].value),(0,l.tZ)("td",null,e[86].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[87].value),(0,l.tZ)("td",null,e[88].value),(0,l.tZ)("td",null,e[89].value),(0,l.tZ)("td",null,e[90].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[91].value),(0,l.tZ)("td",null,e[92].value,(0,l.tZ)("code",null,e[93].value),e[94].value),(0,l.tZ)("td",null,e[95].value,(0,l.tZ)("code",null,e[96].value)),(0,l.tZ)("td",null,e[97].value),(0,l.tZ)("td",null,e[98].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[99].value),(0,l.tZ)("td",null,e[100].value),(0,l.tZ)("td",null,e[101].value),(0,l.tZ)("td",null,e[102].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[103].value),(0,l.tZ)("td",null,e[104].value),(0,l.tZ)("td",null,e[105].value),(0,l.tZ)("td",null,e[106].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[107].value),(0,l.tZ)("td",null,e[108].value,(0,l.tZ)("code",null,e[109].value),e[110].value,(0,l.tZ)("code",null,e[111].value)),(0,l.tZ)("td",null,e[112].value),(0,l.tZ)("td",null,e[113].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[114].value),(0,l.tZ)("td",null,e[115].value),(0,l.tZ)("td",null,e[116].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[117].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[118].value),(0,l.tZ)("td",null,e[119].value),(0,l.tZ)("td",null,e[120].value),(0,l.tZ)("td",null,e[121].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[122].value),(0,l.tZ)("td",null,e[123].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[124].value),e[125].value,(0,l.tZ)("code",null,e[126].value),e[127].value,(0,l.tZ)("code",null,e[128].value),e[129].value,(0,l.tZ)("code",null,e[130].value)),(0,l.tZ)("td",null,e[131].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[132].value),(0,l.tZ)("td",null,e[133].value,(0,l.tZ)("code",null,e[134].value),e[135].value),(0,l.tZ)("td",null,e[136].value),(0,l.tZ)("td",null,e[137].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[138].value),(0,l.tZ)("td",null,e[139].value,(0,l.tZ)("code",null,e[140].value),e[141].value,(0,l.tZ)("code",null,e[142].value)),(0,l.tZ)("td",null,e[143].value),(0,l.tZ)("td",null,e[144].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[145].value),(0,l.tZ)("td",null,e[146].value,(0,l.tZ)("code",null,e[147].value),e[148].value,(0,l.tZ)("strong",null,e[149].value),e[150].value,(0,l.tZ)("strong",null,(0,l.tZ)("code",null,e[151].value),e[152].value),e[153].value,(0,l.tZ)("strong",null,(0,l.tZ)("code",null,e[154].value),e[155].value),e[156].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[157].value),e[158].value,(0,l.tZ)("code",null,e[159].value),e[160].value,(0,l.tZ)("code",null,e[161].value)),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[162].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[163].value),(0,l.tZ)("td",null,e[164].value),(0,l.tZ)("td",null,e[165].value),(0,l.tZ)("td",null,e[166].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[167].value),(0,l.tZ)("td",null,e[168].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[169].value),e[170].value,(0,l.tZ)("code",null,e[171].value),e[172].value,(0,l.tZ)("code",null,e[173].value)),(0,l.tZ)("td",null,e[174].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[175].value),(0,l.tZ)("td",null,e[176].value),(0,l.tZ)("td",null,e[177].value),(0,l.tZ)("td",null,e[178].value),(0,l.tZ)("td",null,e[179].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[180].value),(0,l.tZ)("td",null,e[181].value,(0,l.tZ)("code",null,e[182].value),e[183].value,(0,l.tZ)("code",null,e[184].value),e[185].value),(0,l.tZ)("td",null,e[186].value),(0,l.tZ)("td",null,e[187].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[188].value),(0,l.tZ)("td",null,e[189].value),(0,l.tZ)("td",null,e[190].value),(0,l.tZ)("td",null,e[191].value),(0,l.tZ)("td",null,e[192].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[193].value),(0,l.tZ)("td",null,e[194].value,(0,l.tZ)("code",null,e[195].value)),(0,l.tZ)("td",null,e[196].value),(0,l.tZ)("td",null,e[197].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[198].value),(0,l.tZ)("td",null,e[199].value),(0,l.tZ)("td",null,e[200].value),(0,l.tZ)("td",null,e[201].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[202].value),(0,l.tZ)("td",null,e[203].value,(0,l.tZ)("code",null,e[204].value),e[205].value,(0,l.tZ)("code",null,e[206].value),e[207].value),(0,l.tZ)("td",null,e[208].value),(0,l.tZ)("td",null,e[209].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[210].value),(0,l.tZ)("td",null,e[211].value),(0,l.tZ)("td",null,e[212].value),(0,l.tZ)("td",null,e[213].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[214].value),(0,l.tZ)("td",null,e[215].value,(0,l.tZ)("code",null,e[216].value),e[217].value,(0,l.tZ)("code",null,e[218].value),e[219].value,(0,l.tZ)("code",null,e[220].value),e[221].value,(0,l.tZ)("code",null,e[222].value)),(0,l.tZ)("td",null,e[223].value),(0,l.tZ)("td",null,e[224].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[225].value),(0,l.tZ)("td",null,e[226].value),(0,l.tZ)("td",null,e[227].value),(0,l.tZ)("td",null,e[228].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[229].value),(0,l.tZ)("td",null,e[230].value),(0,l.tZ)("td",null,e[231].value),(0,l.tZ)("td",null,e[232].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[233].value),(0,l.tZ)("td",null,e[234].value,(0,l.tZ)("code",null,e[235].value),e[236].value,(0,l.tZ)("code",null,e[237].value)),(0,l.tZ)("td",null,e[238].value),(0,l.tZ)("td",null,e[239].value),(0,l.tZ)("td",null,e[240].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[241].value),(0,l.tZ)("td",null,e[242].value),(0,l.tZ)("td",null,e[243].value),(0,l.tZ)("td",null,e[244].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[245].value),(0,l.tZ)("td",null,e[246].value,(0,l.tZ)("code",null,e[247].value)),(0,l.tZ)("td",null,e[248].value),(0,l.tZ)("td",null,e[249].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[250].value),(0,l.tZ)("td",null,e[251].value,(0,l.tZ)("code",null,e[252].value),e[253].value),(0,l.tZ)("td",null,e[254].value),(0,l.tZ)("td",null,e[255].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[256].value),(0,l.tZ)("td",null,e[257].value,(0,l.tZ)(n.rU,{to:"/components/tree/#components-tree-demo-line"},e[258].value)),(0,l.tZ)("td",null,e[259].value),(0,l.tZ)("td",null,e[260].value),(0,l.tZ)("td",null,e[261].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[262].value),(0,l.tZ)("td",null,e[263].value,(0,l.tZ)("code",null,e[264].value),e[265].value),(0,l.tZ)("td",null,e[266].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[267].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[268].value),(0,l.tZ)("td",null,e[269].value),(0,l.tZ)("td",null,e[270].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[271].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[272].value),(0,l.tZ)("td",null,e[273].value),(0,l.tZ)("td",null,e[274].value),(0,l.tZ)("td",null,e[275].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[276].value),(0,l.tZ)("td",null,e[277].value),(0,l.tZ)("td",null,e[278].value),(0,l.tZ)("td",null,e[279].value),(0,l.tZ)("td",null,e[280].value)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[281].value),(0,l.tZ)("td",null,e[282].value),(0,l.tZ)("td",null,e[283].value),(0,l.tZ)("td",null,e[284].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[285].value),(0,l.tZ)("td",null,e[286].value),(0,l.tZ)("td",null,e[287].value),(0,l.tZ)("td",null,e[288].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[289].value),(0,l.tZ)("td",null,e[290].value),(0,l.tZ)("td",null,e[291].value),(0,l.tZ)("td",null,e[292].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[293].value),(0,l.tZ)("td",null,e[294].value),(0,l.tZ)("td",null,e[295].value),(0,l.tZ)("td",null,e[296].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[297].value),(0,l.tZ)("td",null,e[298].value),(0,l.tZ)("td",null,e[299].value),(0,l.tZ)("td",null,e[300].value),(0,l.tZ)("td",null)))),(0,l.tZ)("h3",{id:"tree-methods"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-methods"},(0,l.tZ)("span",{className:"icon icon-link"})),"Tree Methods"),(0,l.tZ)(u.Z,{className:"component-api-table"},(0,l.tZ)("thead",null,(0,l.tZ)("tr",null,(0,l.tZ)("th",null,e[301].value),(0,l.tZ)("th",null,e[302].value),(0,l.tZ)("th",null,e[303].value))),(0,l.tZ)("tbody",null,(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[304].value),(0,l.tZ)("td",null,e[305].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[306].value),(0,l.tZ)("td",null,e[307].value),(0,l.tZ)("td",null)))),(0,l.tZ)("h3",{id:"treenode-props"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#treenode-props"},(0,l.tZ)("span",{className:"icon icon-link"})),"TreeNode props"),(0,l.tZ)("blockquote",null,(0,l.tZ)("p",null,e[308].value,(0,l.tZ)("code",null,e[309].value),e[310].value,(0,l.tZ)("code",null,e[311].value),e[312].value)),(0,l.tZ)(u.Z,{className:"component-api-table"},(0,l.tZ)("thead",null,(0,l.tZ)("tr",null,(0,l.tZ)("th",null,e[313].value),(0,l.tZ)("th",null,e[314].value),(0,l.tZ)("th",null,e[315].value),(0,l.tZ)("th",null,e[316].value),(0,l.tZ)("th",null,e[317].value))),(0,l.tZ)("tbody",null,(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[318].value),(0,l.tZ)("td",null,e[319].value),(0,l.tZ)("td",null,e[320].value),(0,l.tZ)("td",null,e[321].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[322].value),(0,l.tZ)("td",null,e[323].value),(0,l.tZ)("td",null,e[324].value),(0,l.tZ)("td",null,e[325].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[326].value),(0,l.tZ)("td",null,e[327].value),(0,l.tZ)("td",null,e[328].value),(0,l.tZ)("td",null,e[329].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[330].value),(0,l.tZ)("td",null,e[331].value),(0,l.tZ)("td",null,e[332].value),(0,l.tZ)("td",null,e[333].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[334].value),(0,l.tZ)("td",null,e[335].value,(0,l.tZ)("code",null,e[336].value),e[337].value),(0,l.tZ)("td",null,e[338].value),(0,l.tZ)("td",null,e[339].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[340].value),(0,l.tZ)("td",null,e[341].value),(0,l.tZ)("td",null,e[342].value),(0,l.tZ)("td",null,e[343].value),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[344].value),(0,l.tZ)("td",null,e[345].value),(0,l.tZ)("td",null,e[346].value),(0,l.tZ)("td",null,(0,l.tZ)("code",null,e[347].value)),(0,l.tZ)("td",null)),(0,l.tZ)("tr",null,(0,l.tZ)("td",null,e[348].value),(0,l.tZ)("td",null,e[349].value,(0,l.tZ)("code",null,e[350].value),e[351].value),(0,l.tZ)("td",null,e[352].value),(0,l.tZ)("td",null,e[353].value),(0,l.tZ)("td",null)))),(0,l.tZ)("h2",{id:"faq"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,l.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,l.tZ)("h3",{id:"how-to-get-parent-node-in-onchange"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-get-parent-node-in-onchange"},(0,l.tZ)("span",{className:"icon icon-link"})),"How to get parent node in onChange?"),(0,l.tZ)("p",null,e[354].value,(0,l.tZ)("a",{href:"https://codesandbox.io/s/wk080nn81k"},e[355].value)),(0,l.tZ)("h3",{id:"why-sometime-customize-option-cause-scroll-break"},(0,l.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-sometime-customize-option-cause-scroll-break"},(0,l.tZ)("span",{className:"icon icon-link"})),"Why sometime customize Option cause scroll break?"),(0,l.tZ)("p",null,e[356].value,(0,l.tZ)(n.rU,{to:"/components/select"},e[357].value),e[358].value))))}a.default=r}}]);
