"use client";
import React, { useState } from "react";
import { Form, Input, Button, Spin, notification } from "antd";
import Image from "next/image";
import Link from "next/link";

const SignupForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.data.length === 0) {
        // If no matching user found
        notification.error({
          message: "خطأ",
          description: "حدث خطأ أثناء الدخول تاكد من البيانات",
        });
      } else {
        // If user is found
        notification.success({
          message: "تم الدخول بنجاح",
          description: "تم الدخول بنجاح",
        });
        form.resetFields();

        localStorage.setItem("user", JSON.stringify(result.data[0]));

        if (typeof window !== "undefined") {
          window.location.href = "/home";
        }
      }
    } catch (error) {
      console.error("Error creating user:", error);
      notification.error({
        message: "خطأ",
        description: "حدث خطأ أثناء الدخول",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full   bg-white rounded-lg p-8">
        <div className="mb-8">
          <Image src="/logo2.jpg" width={400} height={100} alt="Logo" />
        </div>
        <h1 className="text-5xl font-bold text-green-500 text-center mb-8">
          تسجيل الدخول
        </h1>

        <Form
          form={form}
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-6"
        >
          <Form.Item
            label="الهاتف"
            name="phone"
            rules={[
              {
                required: true,
                message: "الرجاء ادخال الهاتف!",
              },
            ]}
          >
            <Input
              id="phone"
              placeholder="رقم الهاتف"
              className="peer rounded-lg border-gray-300 focus:border-buttonColor focus:ring focus:ring-buttonColor focus:ring-opacity-50"
            />
          </Form.Item>

          <Form.Item
            label="كلمة المرور"
            name="password"
            rules={[
              {
                required: true,
                message: "الرجاء ادخال  كلمة المرور!",
              },
            ]}
          >
            <Input.Password
              id="password"
              placeholder="كلمة المرور"
              className="peer rounded-lg border-gray-300 focus:border-buttonColor focus:ring focus:ring-buttonColor focus:ring-opacity-50"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-4 py-3 text-lg uppercase rounded-full bg-buttonColor hover:bg-hoverButtonColor text-white font-semibold"
            >
              تأكيد
            </Button>
          </Form.Item>
          <Link href="/register" className="hover:underline">
            لست منتسب
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
