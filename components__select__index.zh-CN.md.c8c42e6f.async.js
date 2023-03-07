"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6552],{43951:function(p,o,l){l.r(o);var r=l(502143),v=l(968521),Z=l(659378),m=l(28840),u=l(374912),t=l(828089),h=l(902068),_=l(574399),g=l(863942),f=l(316073),b=l(24628),S=l(719260),x=l(956140),d=l(905388),C=l(147341),y=l(606965),A=l(249706),E=l(795127),D=l(116846),w=l(73024),a=l(606641),s=l(667294),e=l(370917);function i(){var c=(0,a.eL)(),n=c.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[1].value),(0,e.tZ)("li",null,n[2].value,(0,e.tZ)(a.rU,{to:"/components/radio-cn/"},n[3].value),n[4].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(d.Z,{items:[{demo:{id:"components-select-demo-basic"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/select/demo/basic.tsx",jsx:`import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      disabled
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      loading
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      allowClear
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>\u57FA\u672C\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-select-demo-search"},previewerProps:{title:"\u5E26\u641C\u7D22\u6846",filename:"components/select/demo/search.tsx",jsx:`import { Select } from 'antd';
const onChange = (value) => {
  console.log(\`selected \${value}\`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const App = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002</p>"}},{demo:{id:"components-select-demo-multiple"},previewerProps:{title:"\u591A\u9009",filename:"components/select/demo/multiple.tsx",jsx:`import { Select, Space } from 'antd';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
    <Select
      mode="multiple"
      disabled
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </Space>
);
export default App;
`,description:"<p>\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\u3002</p>"}},{demo:{id:"components-select-demo-size"},previewerProps:{title:"\u4E09\u79CD\u5927\u5C0F",filename:"components/select/demo/size.tsx",jsx:`import { Radio, Select, Space } from 'antd';
import { useState } from 'react';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(\`Selected: \${value}\`);
};
const App = () => {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Select
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{
            width: 200,
          }}
          options={options}
        />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options}
        />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options}
        />
      </Space>
    </>
  );
};
export default App;
`,description:"<p>\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A <code>large</code> \u548C <code>small</code> \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A <code>40px</code> \u548C <code>24px</code> \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A <code>32px</code>\u3002</p>"}},{demo:{id:"components-select-demo-option-label-prop"},previewerProps:{title:"\u5B9A\u5236\u56DE\u586B\u5185\u5BB9",filename:"components/select/demo/option-label-prop.tsx",jsx:`import { Select, Space } from 'antd';
const { Option } = Select;
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          \u{1F1E8}\u{1F1F3}
        </span>
        China (\u4E2D\u56FD)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          \u{1F1FA}\u{1F1F8}
        </span>
        USA (\u7F8E\u56FD)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          \u{1F1EF}\u{1F1F5}
        </span>
        Japan (\u65E5\u672C)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          \u{1F1F0}\u{1F1F7}
        </span>
        Korea (\u97E9\u56FD)
      </Space>
    </Option>
  </Select>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>optionLabelProp</code> \u6307\u5B9A\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 <code>Option</code> \u5C5E\u6027\u3002</p>"}},{demo:{id:"components-select-demo-search-sort"},previewerProps:{title:"\u5E26\u6392\u5E8F\u7684\u641C\u7D22",filename:"components/select/demo/search-sort.tsx",jsx:`import { Select } from 'antd';
const App = () => (
  <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u5728\u641C\u7D22\u6A21\u5F0F\u4E0B\u5BF9\u8FC7\u6EE4\u7ED3\u679C\u9879\u8FDB\u884C\u6392\u5E8F\u3002</p>"}},{demo:{id:"components-select-demo-tags"},previewerProps:{title:"\u6807\u7B7E",filename:"components/select/demo/tags.tsx",jsx:`import { Select } from 'antd';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Select
    mode="tags"
    style={{
      width: '100%',
    }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);
export default App;
`,description:"<p>tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09\u3002</p>"}},{demo:{id:"components-select-demo-optgroup"},previewerProps:{title:"\u5206\u7EC4",filename:"components/select/demo/optgroup.tsx",jsx:`import { Select } from 'antd';
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Select
    defaultValue="lucy"
    style={{
      width: 200,
    }}
    onChange={handleChange}
    options={[
      {
        label: 'Manager',
        options: [
          {
            label: 'Jack',
            value: 'jack',
          },
          {
            label: 'Lucy',
            value: 'lucy',
          },
        ],
      },
      {
        label: 'Engineer',
        options: [
          {
            label: 'yiminghe',
            value: 'Yiminghe',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7528 <code>OptGroup</code> \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002</p>"}},{demo:{id:"components-select-demo-coordinate"},previewerProps:{title:"\u8054\u52A8",filename:"components/select/demo/coordinate.tsx",jsx:`import { Select, Space } from 'antd';
import { useState } from 'react';
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const App = () => {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: 120,
        }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
      <Select
        style={{
          width: 120,
        }}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({
          label: city,
          value: city,
        }))}
      />
    </Space>
  );
};
export default App;
`,description:`<p>\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002</p>
<p>\u63A8\u8350\u4F7F\u7528 <a href="/components/cascader/">Cascader</a> \u7EC4\u4EF6\u3002</p>`}},{demo:{id:"components-select-demo-search-box"},previewerProps:{title:"\u641C\u7D22\u6846",filename:"components/select/demo/search-box.tsx",jsx:`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import qs from 'qs';
import { useState } from 'react';
let timeout;
let currentValue;
const fetch = (value, callback) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  const fake = () => {
    const str = qs.stringify({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d;
          const data = result.map((item) => ({
            value: item[0],
            text: item[0],
          }));
          callback(data);
        }
      });
  };
  timeout = setTimeout(fake, 300);
};
const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue, setData);
    } else {
      setData([]);
    }
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};
const App = () => (
  <SearchInput
    placeholder="input search text"
    style={{
      width: 200,
    }}
  />
);
export default App;
`,description:"<p>\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002</p>"}},{demo:{id:"components-select-demo-label-in-value"},previewerProps:{title:"\u83B7\u5F97\u9009\u9879\u7684\u6587\u672C",filename:"components/select/demo/label-in-value.tsx",jsx:`import { Select } from 'antd';
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const App = () => (
  <Select
    labelInValue
    defaultValue={{
      value: 'lucy',
      label: 'Lucy (101)',
    }}
    style={{
      width: 120,
    }}
    onChange={handleChange}
    options={[
      {
        value: 'jack',
        label: 'Jack (100)',
      },
      {
        value: 'lucy',
        label: 'Lucy (101)',
      },
    ]}
  />
);
export default App;
`,description:`<p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B <code>onChange</code> \u91CC\u53EA\u80FD\u62FF\u5230 <code>value</code>\uFF0C\u5982\u679C\u9700\u8981\u62FF\u5230\u9009\u4E2D\u7684\u8282\u70B9\u6587\u672C <code>label</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>labelInValue</code> \u5C5E\u6027\u3002</p>
<p>\u9009\u4E2D\u9879\u7684 <code>label</code> \u4F1A\u88AB\u5305\u88C5\u5230 <code>value</code> \u4E2D\u4F20\u9012\u7ED9 <code>onChange</code> \u7B49\u51FD\u6570\uFF0C\u6B64\u65F6 <code>value</code> \u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</p>`}},{demo:{id:"components-select-demo-automatic-tokenization"},previewerProps:{title:"\u81EA\u52A8\u5206\u8BCD",filename:"components/select/demo/automatic-tokenization.tsx",jsx:`import { Select } from 'antd';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Select
    mode="tags"
    style={{
      width: '100%',
    }}
    onChange={handleChange}
    tokenSeparators={[',']}
    options={options}
  />
);
export default App;
`,description:"<p>\u8BD5\u4E0B\u590D\u5236 <code>\u9732\u897F,\u6770\u514B</code> \u5E76\u7C98\u8D34\u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002</p>"}},{demo:{id:"components-select-demo-select-users"},previewerProps:{title:"\u641C\u7D22\u7528\u6237",filename:"components/select/demo/select-users.tsx",jsx:`import { Select } from 'antd';
import debounce from 'lodash/debounce';
import { useMemo, useRef, useState } from 'react';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect

async function fetchUserList(username) {
  console.log('fetching user', username);
  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: \`\${user.name.first} \${user.name.last}\`,
        value: user.login.username,
      })),
    );
}
const App = () => {
  const [value, setValue] = useState([]);
  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: '100%',
      }}
    />
  );
};
export default App;
`,description:"<p>\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u9632\u6296\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002</p>"}},{demo:{id:"components-select-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/select/demo/suffix.tsx",jsx:`import { MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Select, Space } from 'antd';
const smileIcon = <SmileOutlined />;
const mehIcon = <MehOutlined />;
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Space wrap>
    <Select
      suffixIcon={smileIcon}
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
    <Select
      suffixIcon={mehIcon}
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      disabled
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>\u540E\u7F00\u56FE\u6807\u3002</p>"}},{demo:{id:"components-select-demo-custom-dropdown-menu"},previewerProps:{title:"\u6269\u5C55\u83DC\u5355",filename:"components/select/demo/custom-dropdown-menu.tsx",jsx:`import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';
import { useRef, useState } from 'react';
let index = 0;
const App = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || \`New item \${index++}\`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Select
      style={{
        width: 300,
      }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({
        label: item,
        value: item,
      }))}
    />
  );
};
export default App;
`,description:'<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002\u5982\u679C\u5E0C\u671B\u70B9\u51FB\u81EA\u5B9A\u4E49\u5185\u5BB9\u540E\u5173\u95ED\u6D6E\u5C42\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u53D7\u63A7\u6A21\u5F0F\u81EA\u884C\u63A7\u5236\uFF08<a href="https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js">codesandbox</a>\uFF09\u3002</p>'}},{demo:{id:"components-select-demo-hide-selected"},previewerProps:{title:"\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879",filename:"components/select/demo/hide-selected.tsx",jsx:`import { Select } from 'antd';
import { useState } from 'react';
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
export default App;
`,description:"<p>\u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002</p>"}},{demo:{id:"components-select-demo-bordered"},previewerProps:{title:"\u65E0\u8FB9\u6846",filename:"components/select/demo/bordered.tsx",jsx:`import { Select, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      bordered={false}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      disabled
      bordered={false}
      options={[
        {
          value: 'lucy',
          label: 'Lucy',
        },
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-select-demo-custom-tag-render"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E",filename:"components/select/demo/custom-tag-render.tsx",jsx:`import { Select, Tag } from 'antd';
const options = [
  {
    value: 'gold',
  },
  {
    value: 'lime',
  },
  {
    value: 'green',
  },
  {
    value: 'cyan',
  },
];
const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};
const App = () => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{
      width: '100%',
    }}
    options={options}
  />
);
export default App;
`,description:"<p>\u5141\u8BB8\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E\u7684\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-select-demo-responsive"},previewerProps:{title:"\u54CD\u5E94\u5F0F maxTagCount",filename:"components/select/demo/responsive.tsx",jsx:`import { Select, Space } from 'antd';
import { useState } from 'react';
const options = [];
for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: \`Long Label: \${value}\`,
    value,
  });
}
const App = () => {
  const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
  const selectProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Select {...selectProps} />
      <Select {...selectProps} disabled />
    </Space>
  );
};
export default App;
`,description:"<p>\u591A\u9009\u4E0B\u901A\u8FC7\u54CD\u5E94\u5F0F\u5E03\u5C40\u8BA9\u9009\u9879\u81EA\u52A8\u6536\u7F29\u3002\u8BE5\u529F\u80FD\u5BF9\u6027\u80FD\u6709\u6240\u6D88\u8017\uFF0C\u4E0D\u63A8\u8350\u5728\u5927\u8868\u5355\u573A\u666F\u4E0B\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-select-demo-big-data"},previewerProps:{title:"\u5927\u6570\u636E",filename:"components/select/demo/big-data.tsx",jsx:`import { Divider, Select, Typography } from 'antd';
const { Title } = Typography;
const options = [];
for (let i = 0; i < 100000; i++) {
  const value = \`\${i.toString(36)}\${i}\`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <>
    <Title level={3}>Ant Design 4.0</Title>
    <Title level={4}>{options.length} Items</Title>
    <Select
      mode="multiple"
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />

    <Divider />

    <Title level={3}>Ant Design 3.0</Title>
    <iframe
      title="Ant Design 3.0 Select demo"
      src="https://codesandbox.io/embed/solitary-voice-m3vme?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      style={{
        width: '100%',
        height: 300,
      }}
    />
  </>
);
export default App;
`,description:'<p>Select \u4F7F\u7528\u4E86<a href="https://github.com/react-component/virtual-list">\u865A\u62DF\u6EDA\u52A8</a>\u6280\u672F\uFF0C\u56E0\u800C\u83B7\u5F97\u4E86\u6BD4 <a href="https://codesandbox.io/s/beautiful-banzai-m72lv">3.0 \u66F4\u597D\u7684\u6027\u80FD</a>\u3002</p>'}},{demo:{id:"components-select-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/select/demo/status.tsx",jsx:`import { Select, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Select
      status="error"
      style={{
        width: '100%',
      }}
    />
    <Select
      status="warning"
      style={{
        width: '100%',
      }}
    />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A Select \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-select-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/select/demo/placement.tsx",jsx:`import { Radio, Select } from 'antd';
import { useState } from 'react';
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
      <Select
        defaultValue="HangZhou"
        style={{
          width: 120,
        }}
        dropdownMatchSelectWidth={false}
        placement={placement}
        options={[
          {
            value: 'HangZhou',
            label: 'HangZhou #310000',
          },
          {
            value: 'NingBo',
            label: 'NingBo #315000',
          },
          {
            value: 'WenZhou',
            label: 'WenZhou #325000',
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>placement</code> \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-select-demo-debug"},previewerProps:{debug:!0,title:"4.0 Debug",filename:"components/select/demo/debug.tsx",jsx:`import { Button, Input, Select, Space } from 'antd';
const style = {
  width: 500,
  position: 'relative',
  zIndex: 1,
  border: '1px solid red',
  backgroundColor: '#fff',
};
const handleChange = (value) => {
  console.log(\`selected \${value}\`);
};
const App = () => (
  <Space style={style} wrap>
    <Input
      style={{
        width: 100,
      }}
      value="222"
    />
    <Select
      style={{
        width: 120,
      }}
      onChange={handleChange}
      showSearch
      placeholder="233"
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'long',
          label: 'I am super super long!',
        },
      ]}
    />
    <Select
      mode="multiple"
      style={{
        width: 120,
      }}
      defaultValue={['lucy']}
      onChange={handleChange}
      showSearch
      placeholder="233"
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'long',
          label: 'I am super super long!',
        },
      ]}
    />
    <span className="debug-align">AntDesign</span>
    <Button>222</Button>
  </Space>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-select-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/select/demo/render-panel.tsx",jsx:`import { Select, Space, Switch } from 'antd';
import React from 'react';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalSelect } = Select;
const App = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Space
      direction="vertical"
      style={{
        display: 'flex',
      }}
    >
      <Switch checked={open} onChange={() => setOpen(!open)} />
      <InternalSelect
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        open={open}
        options={[
          {
            label: 'Jack',
            value: 'jack',
          },
          {
            label: 'Lucy',
            value: 'lucy',
          },
          {
            label: 'Disabled',
            value: 'disabled',
          },
          {
            label: 'Bamboo',
            value: 'bamboo',
          },
        ]}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-select-demo-option-label-center"},previewerProps:{debug:!0,title:"\u9009\u9879\u6587\u672C\u5C45\u4E2D",filename:"components/select/demo/option-label-center.tsx",jsx:`import { Select, Space, Typography } from 'antd';
const App = () => (
  <Space wrap>
    <Select
      defaultValue="long, long, long piece of text"
      style={{
        width: 120,
      }}
      allowClear
      options={[
        {
          value: 'long',
          label: <Typography>long, long, long piece of text</Typography>,
        },
        {
          value: 'short',
          label: <Typography>short</Typography>,
        },
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>\u9009\u9879\u6587\u672C\u5C45\u4E2D</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(u.Z,{lang:"tsx"},n[5].value),(0,e.tZ)("h3",{id:"select-props"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#select-props"},(0,e.tZ)("span",{className:"icon icon-link"})),"Select props"),(0,e.tZ)(t.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value),(0,e.tZ)("th",null,n[8].value),(0,e.tZ)("th",null,n[9].value),(0,e.tZ)("th",null,n[10].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[11].value),(0,e.tZ)("td",null,n[12].value),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value,(0,e.tZ)("code",null,n[17].value),n[18].value,(0,e.tZ)("code",null,n[19].value),n[20].value,(0,e.tZ)("code",null,n[21].value),n[22].value),(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,n[26].value),(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[29].value),(0,e.tZ)("td",null,n[30].value),(0,e.tZ)("td",null,n[31].value),(0,e.tZ)("td",null,n[32].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[33].value),(0,e.tZ)("td",null,n[34].value),(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[41].value),(0,e.tZ)("td",null,n[42].value),(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[45].value),(0,e.tZ)("td",null,n[46].value),(0,e.tZ)("td",null,n[47].value,(0,e.tZ)("br",null),n[48].value,(0,e.tZ)("br",null),n[49].value),(0,e.tZ)("td",null,n[50].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[51].value),(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[55].value),(0,e.tZ)("td",null,n[56].value),(0,e.tZ)("td",null,n[57].value),(0,e.tZ)("td",null,n[58].value),(0,e.tZ)("td",null,n[59].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[60].value),(0,e.tZ)("td",null,n[61].value,(0,e.tZ)("code",null,n[62].value),n[63].value),(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[66].value),(0,e.tZ)("td",null,n[67].value),(0,e.tZ)("td",null,n[68].value),(0,e.tZ)("td",null,n[69].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[70].value),(0,e.tZ)("td",null,n[71].value),(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,n[73].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,n[75].value),(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value,(0,e.tZ)("code",null,n[78].value),n[79].value,(0,e.tZ)("code",null,n[80].value),n[81].value,(0,e.tZ)("code",null,n[82].value),n[83].value),(0,e.tZ)("td",null,n[84].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[85].value),(0,e.tZ)("td",null,n[86].value,(0,e.tZ)("code",null,n[87].value),n[88].value,(0,e.tZ)("code",null,n[89].value),n[90].value,(0,e.tZ)("code",null,n[91].value),n[92].value),(0,e.tZ)("td",null,n[93].value),(0,e.tZ)("td",null,n[94].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[95].value),(0,e.tZ)("td",null,n[96].value,(0,e.tZ)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},n[97].value),n[98].value),(0,e.tZ)("td",null,n[99].value),(0,e.tZ)("td",null,n[100].value),(0,e.tZ)("td",null,n[101].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[102].value),(0,e.tZ)("td",null,n[103].value,(0,e.tZ)("a",{href:"https://codesandbox.io/s/4j168r7jw0"},n[104].value)),(0,e.tZ)("td",null,n[105].value),(0,e.tZ)("td",null,n[106].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[107].value),(0,e.tZ)("td",null,n[108].value,(0,e.tZ)("code",null,n[109].value),n[110].value),(0,e.tZ)("td",null,n[111].value),(0,e.tZ)("td",null,n[112].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[113].value),(0,e.tZ)("td",null,n[114].value),(0,e.tZ)("td",null,n[115].value),(0,e.tZ)("td",null,n[116].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[117].value),(0,e.tZ)("td",null,n[118].value),(0,e.tZ)("td",null,n[119].value),(0,e.tZ)("td",null,n[120].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[121].value),(0,e.tZ)("td",null,n[122].value),(0,e.tZ)("td",null,n[123].value,(0,e.tZ)("code",null,n[124].value)),(0,e.tZ)("td",null,n[125].value),(0,e.tZ)("td",null,n[126].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[127].value),(0,e.tZ)("td",null,n[128].value),(0,e.tZ)("td",null,n[129].value),(0,e.tZ)("td",null,n[130].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[131].value),(0,e.tZ)("td",null,n[132].value),(0,e.tZ)("td",null,n[133].value),(0,e.tZ)("td",null,n[134].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[135].value),(0,e.tZ)("td",null,n[136].value),(0,e.tZ)("td",null,n[137].value),(0,e.tZ)("td",null,n[138].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[139].value),(0,e.tZ)("td",null,n[140].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[141].value),n[142].value,(0,e.tZ)("code",null,n[143].value)),(0,e.tZ)("td",null,n[144].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[145].value),(0,e.tZ)("td",null,n[146].value),(0,e.tZ)("td",null,n[147].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[148].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[149].value),(0,e.tZ)("td",null,n[150].value),(0,e.tZ)("td",null,n[151].value),(0,e.tZ)("td",null,n[152].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[153].value),(0,e.tZ)("td",null,n[154].value,(0,e.tZ)("code",null,n[155].value),n[156].value,(0,e.tZ)("code",null,n[157].value),n[158].value,(0,e.tZ)("code",null,n[159].value),n[160].value,(0,e.tZ)("code",null,n[161].value),n[162].value),(0,e.tZ)("td",null,n[163].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[164].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[165].value),(0,e.tZ)("td",null,n[166].value,(0,e.tZ)("code",null,n[167].value),n[168].value,(0,e.tZ)("a",{href:"https://codesandbox.io/s/antd-reproduction-template-tk678"},n[169].value)),(0,e.tZ)("td",null,n[170].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[171].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[172].value),(0,e.tZ)("td",null,n[173].value),(0,e.tZ)("td",null,n[174].value),(0,e.tZ)("td",null,n[175].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[176].value),(0,e.tZ)("td",null,n[177].value),(0,e.tZ)("td",null,n[178].value),(0,e.tZ)("td",null,n[179].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[180].value),(0,e.tZ)("td",null,n[181].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[182].value),n[183].value,(0,e.tZ)("code",null,n[184].value),n[185].value,(0,e.tZ)("code",null,n[186].value),n[187].value,(0,e.tZ)("code",null,n[188].value)),(0,e.tZ)("td",null,n[189].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[190].value),(0,e.tZ)("td",null,n[191].value),(0,e.tZ)("td",null,n[192].value),(0,e.tZ)("td",null,n[193].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[194].value),(0,e.tZ)("td",null,n[195].value),(0,e.tZ)("td",null,n[196].value),(0,e.tZ)("td",null,n[197].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[198].value),(0,e.tZ)("td",null,n[199].value),(0,e.tZ)("td",null,n[200].value),(0,e.tZ)("td",null,n[201].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[202].value),(0,e.tZ)("td",null,n[203].value),(0,e.tZ)("td",null,n[204].value),(0,e.tZ)("td",null,n[205].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[206].value),(0,e.tZ)("td",null,n[207].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[208].value),n[209].value,(0,e.tZ)("code",null,n[210].value),n[211].value,(0,e.tZ)("code",null,n[212].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[213].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[214].value),(0,e.tZ)("td",null,n[215].value),(0,e.tZ)("td",null,n[216].value),(0,e.tZ)("td",null,n[217].value),(0,e.tZ)("td",null,n[218].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[219].value),(0,e.tZ)("td",null,n[220].value),(0,e.tZ)("td",null,n[221].value),(0,e.tZ)("td",null,n[222].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[223].value),(0,e.tZ)("td",null,n[224].value,(0,e.tZ)("code",null,n[225].value),n[226].value,(0,e.tZ)("code",null,n[227].value),n[228].value,(0,e.tZ)("code",null,n[229].value),n[230].value),(0,e.tZ)("td",null,n[231].value),(0,e.tZ)("td",null,n[232].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[233].value),(0,e.tZ)("td",null,n[234].value,(0,e.tZ)("code",null,n[235].value),n[236].value),(0,e.tZ)("td",null,n[237].value),(0,e.tZ)("td",null,n[238].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[239].value),(0,e.tZ)("td",null,n[240].value),(0,e.tZ)("td",null,n[241].value,(0,e.tZ)("br",null),n[242].value,(0,e.tZ)("br",null),n[243].value),(0,e.tZ)("td",null,n[244].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[245].value),(0,e.tZ)("td",null,n[246].value),(0,e.tZ)("td",null,n[247].value),(0,e.tZ)("td",null,n[248].value),(0,e.tZ)("td",null,n[249].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[250].value),(0,e.tZ)("td",null,n[251].value),(0,e.tZ)("td",null,n[252].value),(0,e.tZ)("td",null,n[253].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[254].value),(0,e.tZ)("td",null,n[255].value),(0,e.tZ)("td",null,n[256].value),(0,e.tZ)("td",null,n[257].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[258].value),(0,e.tZ)("td",null,n[259].value),(0,e.tZ)("td",null,n[260].value),(0,e.tZ)("td",null,n[261].value),(0,e.tZ)("td",null,n[262].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[263].value),(0,e.tZ)("td",null,n[264].value,(0,e.tZ)("code",null,n[265].value),n[266].value,(0,e.tZ)("code",null,n[267].value),n[268].value),(0,e.tZ)("td",null,n[269].value),(0,e.tZ)("td",null,n[270].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[271].value),(0,e.tZ)("td",null,n[272].value),(0,e.tZ)("td",null,n[273].value),(0,e.tZ)("td",null,n[274].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[275].value),(0,e.tZ)("td",null,n[276].value),(0,e.tZ)("td",null,n[277].value),(0,e.tZ)("td",null,n[278].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[279].value),(0,e.tZ)("td",null,n[280].value),(0,e.tZ)("td",null,n[281].value),(0,e.tZ)("td",null,n[282].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[283].value),(0,e.tZ)("td",null,n[284].value),(0,e.tZ)("td",null,n[285].value),(0,e.tZ)("td",null,n[286].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[287].value),(0,e.tZ)("td",null,n[288].value),(0,e.tZ)("td",null,n[289].value),(0,e.tZ)("td",null,n[290].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[291].value),(0,e.tZ)("td",null,n[292].value),(0,e.tZ)("td",null,n[293].value),(0,e.tZ)("td",null,n[294].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[295].value),(0,e.tZ)("td",null,n[296].value),(0,e.tZ)("td",null,n[297].value),(0,e.tZ)("td",null,n[298].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[299].value),(0,e.tZ)("td",null,n[300].value),(0,e.tZ)("td",null,n[301].value),(0,e.tZ)("td",null,n[302].value),(0,e.tZ)("td",null)))),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[303].value,(0,e.tZ)("code",null,n[304].value),n[305].value)),(0,e.tZ)("h3",{id:"select-methods"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#select-methods"},(0,e.tZ)("span",{className:"icon icon-link"})),"Select Methods"),(0,e.tZ)(t.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[306].value),(0,e.tZ)("th",null,n[307].value),(0,e.tZ)("th",null,n[308].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[309].value),(0,e.tZ)("td",null,n[310].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[311].value),(0,e.tZ)("td",null,n[312].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"option-props"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#option-props"},(0,e.tZ)("span",{className:"icon icon-link"})),"Option props"),(0,e.tZ)(t.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[313].value),(0,e.tZ)("th",null,n[314].value),(0,e.tZ)("th",null,n[315].value),(0,e.tZ)("th",null,n[316].value),(0,e.tZ)("th",null,n[317].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[318].value),(0,e.tZ)("td",null,n[319].value),(0,e.tZ)("td",null,n[320].value),(0,e.tZ)("td",null,n[321].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[322].value),(0,e.tZ)("td",null,n[323].value),(0,e.tZ)("td",null,n[324].value),(0,e.tZ)("td",null,n[325].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[326].value),(0,e.tZ)("td",null,n[327].value),(0,e.tZ)("td",null,n[328].value),(0,e.tZ)("td",null,n[329].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[330].value),(0,e.tZ)("td",null,n[331].value),(0,e.tZ)("td",null,n[332].value),(0,e.tZ)("td",null,n[333].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"optgroup-props"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#optgroup-props"},(0,e.tZ)("span",{className:"icon icon-link"})),"OptGroup props"),(0,e.tZ)(t.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[334].value),(0,e.tZ)("th",null,n[335].value),(0,e.tZ)("th",null,n[336].value),(0,e.tZ)("th",null,n[337].value),(0,e.tZ)("th",null,n[338].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[339].value),(0,e.tZ)("td",null,n[340].value),(0,e.tZ)("td",null,n[341].value),(0,e.tZ)("td",null,n[342].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[343].value),(0,e.tZ)("td",null,n[344].value),(0,e.tZ)("td",null,n[345].value),(0,e.tZ)("td",null,n[346].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"modetags-\u6A21\u5F0F\u4E0B\u4E3A\u4F55\u641C\u7D22\u6709\u65F6\u4F1A\u51FA\u73B0\u4E24\u4E2A\u76F8\u540C\u9009\u9879"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modetags-\u6A21\u5F0F\u4E0B\u4E3A\u4F55\u641C\u7D22\u6709\u65F6\u4F1A\u51FA\u73B0\u4E24\u4E2A\u76F8\u540C\u9009\u9879"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[347].value)," \u6A21\u5F0F\u4E0B\u4E3A\u4F55\u641C\u7D22\u6709\u65F6\u4F1A\u51FA\u73B0\u4E24\u4E2A\u76F8\u540C\u9009\u9879\uFF1F"),(0,e.tZ)("p",null,n[348].value,(0,e.tZ)("code",null,n[349].value),n[350].value,(0,e.tZ)("code",null,n[351].value),n[352].value,(0,e.tZ)("code",null,n[353].value),n[354].value,(0,e.tZ)("code",null,n[355].value),n[356].value),(0,e.tZ)("h3",{id:"\u70B9\u51FB-dropdownrender-\u91CC\u7684\u5143\u7D20\u4E0B\u62C9\u83DC\u5355\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u70B9\u51FB-dropdownrender-\u91CC\u7684\u5143\u7D20\u4E0B\u62C9\u83DC\u5355\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u70B9\u51FB ",(0,e.tZ)("code",null,n[357].value)," \u91CC\u7684\u5143\u7D20\uFF0C\u4E0B\u62C9\u83DC\u5355\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\uFF1F"),(0,e.tZ)("p",null,n[358].value,(0,e.tZ)("code",null,n[359].value),n[360].value,(0,e.tZ)("a",{href:"https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js"},n[361].value),n[362].value),(0,e.tZ)("h3",{id:"\u53CD\u8FC7\u6765\u5E0C\u671B\u70B9\u51FB-dropdownrender-\u91CC\u5143\u7D20\u4E0D\u6D88\u5931\u8BE5\u600E\u4E48\u529E"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53CD\u8FC7\u6765\u5E0C\u671B\u70B9\u51FB-dropdownrender-\u91CC\u5143\u7D20\u4E0D\u6D88\u5931\u8BE5\u600E\u4E48\u529E"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u53CD\u8FC7\u6765\u5E0C\u671B\u70B9\u51FB ",(0,e.tZ)("code",null,n[363].value)," \u91CC\u5143\u7D20\u4E0D\u6D88\u5931\u8BE5\u600E\u4E48\u529E\uFF1F"),(0,e.tZ)("p",null,n[364].value),(0,e.tZ)(u.Z,{lang:"tsx"},n[365].value),(0,e.tZ)("h3",{id:"\u81EA\u5B9A\u4E49-option-\u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49-option-\u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49 Option \u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E\uFF1F"),(0,e.tZ)("p",null,n[366].value,(0,e.tZ)("code",null,n[367].value),n[368].value,(0,e.tZ)("code",null,n[369].value),n[370].value,(0,e.tZ)("code",null,n[371].value),n[372].value),(0,e.tZ)(u.Z,{lang:"tsx"},n[373].value),(0,e.tZ)("p",null,n[374].value,(0,e.tZ)("code",null,n[375].value),n[376].value,(0,e.tZ)("code",null,n[377].value),n[378].value),(0,e.tZ)("h3",{id:"\u4E3A\u4F55\u65E0\u969C\u788D\u6D4B\u8BD5\u4F1A\u62A5\u7F3A\u5931-aria--\u5C5E\u6027"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u65E0\u969C\u788D\u6D4B\u8BD5\u4F1A\u62A5\u7F3A\u5931-aria--\u5C5E\u6027"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4F55\u65E0\u969C\u788D\u6D4B\u8BD5\u4F1A\u62A5\u7F3A\u5931 ",(0,e.tZ)("code",null,n[379].value)," \u5C5E\u6027\uFF1F"),(0,e.tZ)("p",null,n[380].value,(0,e.tZ)("code",null,n[381].value),n[382].value,(0,e.tZ)("code",null,n[383].value),n[384].value),(0,e.tZ)("p",null,n[385].value,(0,e.tZ)("code",null,n[386].value),n[387].value))))}o.default=i}}]);
