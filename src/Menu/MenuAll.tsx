import React from 'react';
import { Menu } from 'antd';

const MenuAll = ({ current, setCurrent }) => {
  const menuItems = [
    { key: 'mail', label: '简介' },
    { key: 'app', label: '产品定价' },
    { key: 'setting', label: '联系我们' },
  ];

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[current]}
      onClick={(item) => setCurrent(item.key)}
    >
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuAll;