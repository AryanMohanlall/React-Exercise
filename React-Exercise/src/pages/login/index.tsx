import React from 'react';
import { Button, Form, Input, Card, Typography } from 'antd';
import { useStyles } from './style/style';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const { styles } = useStyles();

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const values = await form.validateFields();
      if(values.email === "aryan@gmail.com" && values.password === "1"){
        navigate('/videos')
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  }


  return (
    <div className={styles.pageWrapper}>
      <Card className={styles.formCard}>
        <Typography.Title level={3} style={{ color: 'white', textAlign: 'center' }}>
          Login
        </Typography.Title>
        <Form
          form={form}
          layout="vertical"
          requiredMark="optional"
          className={styles.formContainer}
        >
          <Form.Item 
            label="Email" 
            name="email" 
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email address' }
            ]}
          >
            <Input placeholder="name@company.com" />
          </Form.Item>

          <Form.Item 
            label="Password" 
            name="password" 
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              block 
              size="large"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
