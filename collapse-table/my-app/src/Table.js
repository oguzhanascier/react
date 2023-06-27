import React from 'react';
import { Icon } from 'antd';
import {
  TableList,
  TableRowAccordion,
  RowExpandIcon,
} from './components/TableList';
import { ButtonTransparent } from './components/Buttons';
import data from './data';

const renderContent = (value, row) => {
  const obj = {
    children: value,
    props: {},
  };
  if (row.type === 'categoria') {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, row, index) => {
      if (row.type !== 'categoria') {
        return <span>{text}</span>;
      }
      return {
        children: <TableRowAccordion value={text} />,
        props: {
          colSpan: 5,
        },
      };
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
    render: renderContent,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
    render: renderContent,
  },
];

function Table() {
  return (
    <TableList
      className="table-pacientes"
      columns={columns}
      dataSource={data}
      indentSize={0}
      expandRowByClick
      expandIcon={RowExpandIcon}
    />
  );
}

export default Table;
