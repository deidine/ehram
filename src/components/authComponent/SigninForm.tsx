"use client";
import React, { useState } from "react";
import { Form, Input, Button, Spin, notification } from "antd";
import { createClientBrowser } from "@/utils/supabase/client"; 
import { LoadingOutlined } from "@ant-design/icons";
 
const SigninForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false); 
  const onFinish = async (values: any) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('User created:', result);

      // Redirect or do something after successful creation
      // router.push('/success-page'); // Replace with your success page or dashboard
    } catch (error) {
      console.error('Error creating user:', error);
    }
   }
   
   if (isLoading) {
    return (
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    );
  }
  return (
    <div className="selection:bg-buttonColor selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-buttonColor">
                Welcome back!
              </h1>

              <Form
                form={form}
                name="signin"
                onFinish={onFinish}
                layout="vertical"
                className="mt-12"
              >
                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email address!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid email!",
                    },
                  ]}
                >
                  <Input
                    id="signin-email"
                    placeholder="john@doe.com"
                    className="peer"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    id="signin-password"
                    placeholder="Password"
                    className="peer"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-20 w-full uppercase rounded-full bg-buttonColor hover:bg-hoverButtonColor text-white font-semibold"
                    loading={isLoading}
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-buttonColor hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
