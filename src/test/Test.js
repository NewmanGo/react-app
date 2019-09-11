import React from 'react'
import { Table } from 'zent';

const datasets = [
  
];

const columns = [
  {
    title: '商品',
    bodyRender: data => {
      return <div>{data.item_id}</div>;
    },
  },
  {
    title: '访问量',
    name: 'bro_uvpv',
    width: '200px',
  },
  {
    title: '库存',
    name: 'stock_num',
    width: '100px',
    textAlign: 'center',
    isMoney: true,
  },
  {
    width: '6em',
    title: '销售量',
    name: 'sold_num',
  },
];

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      total: 0,
      pageSize: 20,
      // pageSizeOptions: [20, 30],
    };
  }

  onChange(data) {
    console.log(data);
    this.setState({
      current: data.current,
      pageSize: data.pageSize,
    });
  }

  render() {
    return (
      <Table
        columns={columns}
        datasets={datasets}
        rowKey="item_id"
        onChange={this.onChange.bind(this)}
        pageInfo={this.state}
      />
    );
  }
}