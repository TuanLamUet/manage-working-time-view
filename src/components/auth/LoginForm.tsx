import React, { FC } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

import { layout, tailLayout } from './common';
import { Link } from 'react-router-dom';
const LoginForm: FC = () => (
  <>
    <Form {...layout}>
      <Form.Item {...tailLayout}>
        <h2>Login</h2>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Checkbox defaultChecked={true}>Remember login</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <p>
          Forgot password? <Link to="/forgot-password"> Click Here </Link>
        </p>
      </Form.Item>
    </Form>
  </>
);

export default LoginForm;
