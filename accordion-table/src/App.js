import { Table, Collapse } from 'antd';
import { useState } from 'react';

const { Panel } = Collapse;

const data = [
  {
    key: '1',
    a: 'Veli',
    b: 'Konya',
    c: 23,
    d: 'Developer',
    details: [
      {
        key: '1',
        x: 'Turkiye',
        y: 'Denizli',
        z: 20000,
        w: 'Cengiz',
      },
      {
        key: '2',
        x: 'Azeybaycan',
        y: 'Denizli',
        z: 20000,
        w: 'Cengiz',
      },
    ],
  },
  // Diğer veri öğeleri...
];

const columns = [
  {
    title: 'a',
    dataIndex: 'a',
    key: 'a',
  },
  {
    title: 'b',
    dataIndex: 'b',
    key: 'b',
  },
  {
    title: 'c',
    dataIndex: 'c',
    key: 'c',
  },
  {
    title: 'd',
    dataIndex: 'd',
    key: 'd',
  },
];

const App = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handlePanelChange = (panelKey) => {
    setActiveKey(panelKey === activeKey ? null : panelKey);
  };

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <Collapse>
            <Panel
              showArrow={false}
              header="Additional Details"
              key={record.key}
              onChange={() => handlePanelChange(record.key)}
            >
              <Table
                dataSource={record.details}
                columns={[
                  { title: 'x', dataIndex: 'x', key: 'x' },
                  { title: 'y', dataIndex: 'y', key: 'y' },
                  { title: 'z', dataIndex: 'z', key: 'z' },
                  { title: 'w', dataIndex: 'w', key: 'w' },
                ]}
                pagination={false}
              />
            </Panel>
          </Collapse>
        ),
      }}
    />
  );
};

export default App;
