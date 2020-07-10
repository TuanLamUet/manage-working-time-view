import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { tailLayout, layout } from './common';
import { Link } from 'react-router-dom';

const ForgotPasswordForm: FC = () => {
  return (
    <>
      <Form {...layout}>
        <Form.Item {...tailLayout}>
          <h2> Fogot password</h2>
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Forgot password
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Link to="/login"> Return Login Page</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default ForgotPasswordForm;
