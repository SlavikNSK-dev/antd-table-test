import React, { FC, useState } from 'react';
// import types
import { ColumnsType } from 'antd/lib/table';
import { TDataItem } from './../../utils/types';
// import components
import { Table, Button } from 'antd';

// other imports
// import s from './MyTable.module.scss';

export interface IProps {}

/**
 * Компонент
 */
const MyTable: FC<IProps> = (props): JSX.Element => {
  //const { dataSource, columns } = props;

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

  const addHandler = () => {
    const newData: TDataItem = {
      key: data.length + 1,
      name: `Edward King ${data.length + 1}`,
      age: 32,
      address: `London, Park Lane no. ${data.length + 1}`,
    };
    setData([newData, ...data]);
  };

  return (
    <div>
      <Button onClick={addHandler} type="primary">
        Add a row
      </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MyTable;
