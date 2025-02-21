import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Introduction = () => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', boxSizing: 'border-box' }}>
      {/* 标题部分 */}
      <div style={{ marginBottom: '20px' }}>
        <Title level={3}>简介</Title>
        <Paragraph>
          这里是公司的简介部分，可以详细介绍公司的背景、业务范围、发展历程等信息。
        </Paragraph>
      </div>

      {/* 图片和详细内容部分 */}
      <Row gutter={[16, 16]} style={{ width: '100%', height: '30%' }}>
        <Col span={8} style={{ height: '100%' }}>
          {/* 图片 */}
          <img
            src="https://q0.itc.cn/q_70/images03/20240213/fda6e8f378434ec9bdd2e371777e0771.jpeg"
            alt="公司图片"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Col>
        <Col span={16} style={{ height: '100%' }}>
          {/* 详细内容 */}
          <Paragraph style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            这里是公司更详细的介绍，可以进一步阐述公司的优势、团队、服务等内容。这里是公司更详细的介绍，可以进一步阐述公司的优势、团队、服务等内容。这里是公司更详细的介绍，可以进一步阐述公司的优势、团队、服务等内容。这里是公司更详细的介绍，可以进一步阐述公司的优势、团队、服务等内容。
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Introduction;