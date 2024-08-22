"use client";
import React from "react";
import { Form, Input, Button } from "antd";  
import { createClientBrowser } from "@/utils/supabase/client";

const SignupForm = () => {
  const [form] = Form.useForm();

  const onFinish = async(values: any) => {  
    const email = values.email;
    const password = values.password;
    const supabase = createClientBrowser();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {}
    });

    if (error) {
      return alert("/signup?message=Could not authenticate user");
    }

    return alert("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="selection:bg-buttonColor selection:text-hoverButtonColor min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-5xl font-bold text-buttonColor text-center mb-8">
          إنشاء حساب
        </h1>
        
        <Form
          form={form}
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-6"
        >
          <Form.Item
            label="الاسم"
            name="name"
            rules={[
              {
                required: true,
                message: "يرجى إدخال الاسم!",
              },
            ]}
          >
            <Input
              id="name"
              placeholder="الاسم"
              className="peer rounded-lg border-gray-300 focus:border-buttonColor focus:ring focus:ring-buttonColor focus:ring-opacity-50"
            />
          </Form.Item>

          <Form.Item
            label="Email Address"
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
              id="email"
              placeholder="john@doe.com"
              className="peer rounded-lg border-gray-300 focus:border-buttonColor focus:ring focus:ring-buttonColor focus:ring-opacity-50"
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
              id="password"
              placeholder="Password"
              className="peer rounded-lg border-gray-300 focus:border-buttonColor focus:ring focus:ring-buttonColor focus:ring-opacity-50"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-4 py-3 text-lg uppercase rounded-full bg-buttonColor hover:bg-hoverButtonColor text-white font-semibold"
            >
              إنشاء حساب
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
