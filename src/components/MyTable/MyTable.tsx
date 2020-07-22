import React, { FC } from 'react';
// import types
import { ColumnsType } from 'antd/lib/table';
import { TDataItem } from './../../utils/types';
// import components
import { Table, Button } from 'antd';

// other imports
// import s from './MyTable.module.scss';

export interface IProps {
  data: TDataItem[];
  columns: ColumnsType<TDataItem>;
  onAdd(): void;
}

/**
 * Компонент
 */
const MyTable: FC<IProps> = (props): JSX.Element => {
  const { data, columns, onAdd } = props;

  const addHandler = () => {
    onAdd();
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
