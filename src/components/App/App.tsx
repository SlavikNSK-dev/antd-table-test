import React, { useState } from 'react';
// import types
// import components
import MyTable from '../MyTable/MyTable';
// other imports
import './App.scss';
import { ColumnsType } from 'antd/lib/table';
import { TDataItem } from '../../utils/types';

const columns: ColumnsType<TDataItem> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const App = () => {
  const [data, setData] = useState<TDataItem[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

  const onAddHandler = () => {
    const newData: TDataItem = {
      key: data.length + 1,
      name: `Edward King ${data.length + 1}`,
      age: 32,
      address: `London, Park Lane no. ${data.length + 1}`,
    };
    setData([newData, ...data]);
  };

  return (
    <div className="App">
      <header>
        <h1>Test Ant Design table</h1>
      </header>

      <MyTable data={data} columns={columns} onAdd={onAddHandler} />
    </div>
  );
};

export default App;
