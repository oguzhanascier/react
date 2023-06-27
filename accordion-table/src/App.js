import { Table, Collapse } from 'antd';
import { useState } from 'react';


const data = [
  {
    key: '1',
    a: 'Ali',
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
    ],
  },
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

const AccordionTable = () => {
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
          </Collapse>
        ),
      }}
    />
  );
};

export default AccordionTable;
