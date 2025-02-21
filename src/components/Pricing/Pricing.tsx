import React from 'react';
import { Typography, Table } from 'antd';

const { Title } = Typography;

const pricingData = [
  {
    key: '1',
    product: '产品A',
    price: '¥100',
    description: '产品A的详细描述',
  },
  {
    key: '2',
    product: '产品B',
    price: '¥200',
    description: '产品B的详细描述',
  },
  {
    key: '3',
    product: '产品C',
    price: '¥300',
    description: '产品C的详细描述',
  },
];

const columns = [
  {
    title: '产品',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
];

const Pricing = () => {
  return (
    <div>
      <Title level={3}>产品定价</Title>
      <Table columns={columns} dataSource={pricingData} bordered />
    </div>
  );
};

export default Pricing;