import React from 'react';
import { Typography, QRCode } from 'antd';
import './contact.css'
const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <div className="contact-container" >
      <div className="contact-content" >
        <Title level={2}>联系我们</Title>
        <Paragraph>
          如果您有任何问题或需要进一步了解，请通过以下方式联系我们：
        </Paragraph>
        <Paragraph>
          <strong>手机号：</strong>123-456-7890
        </Paragraph>
        <QRCode value="https://example.com" size={150} />
      </div>
    </div>
  );
};

export default Contact;