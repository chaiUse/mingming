import React, { useState } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import './App.css'; // 自定义样式文件
import MenuAll from './Menu/MenuAll.tsx';
import Introduction from './components/Introduction/Introduction.tsx';
import Pricing from './components/Pricing/Pricing.tsx';
import Contact from './components/Contact/Contact.tsx';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [current, setCurrent] = useState('setting');

  // 根据当前选中项渲染对应的组件
  const renderContent = () => {
    switch (current) {
      case 'mail':
        return <Introduction />;
      case 'app':
        return <Pricing />;
      case 'setting':
        return <Contact />;
      default:
        return <Introduction />;
    }
  };

  return (
    <Layout className="app-layout">
      <Header className="header">
        <MenuAll current={current} setCurrent={setCurrent} />
      </Header>
      <Content className="content" >
        <Row gutter={[16, 16]} >
          <Col span={24} >{renderContent()}</Col>
        </Row>
      </Content>
      <Footer className="footer">
        <Typography.Paragraph style={{ textAlign: 'center' }}>
          版权所有 © 2025 公司名称
        </Typography.Paragraph>
      </Footer>
    </Layout>
  );
};

export default App;