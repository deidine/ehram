"use client";
import React, { useState } from "react";
import { Form, Input, Button, Spin, notification } from "antd";
import { createClientBrowser } from "@/utils/supabase/client";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const SigninForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("User created:", result);

      notification.success({
        message: "تم إنشاء المستخدم بنجاح",
        description: "تم إنشاء حسابك بنجاح",
      });
      form.resetFields();
      // Redirect or do something after successful creation
      // router.push('/success-page'); // Replace with your success page or dashboard
    } catch (error) {
      console.error("Error creating user:", error);
      notification.error({
        message: "خطأ",
        description: "حدث خطأ أثناء إنشاء المستخدم",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    );
  }

  return (
    <div>
      <div className="w-full   bg-white rounded-lg p-8">
        <div className="mb-8">
          <Image src="/logo2.jpg" width={400} height={100} alt="Logo" />
        </div>
        <h1 className="text-5xl font-bold text-buttonColor">إنشاء حساب</h1>

        <Form
          form={form}
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="mt-12"
        >
          <Form.Item
            label="الاسم"
            name="nom"
            rules={[
              {
                required: true,
                message: "الرجاء إدخال الاسم!",
              },
            ]}
          >
            <Input id="name" placeholder="الاسم" />
          </Form.Item>

          <Form.Item
            label="اللقب"
            name="prenom"
            rules={[
              {
                required: true,
                message: "الرجاء إدخال اللقب!",
              },
            ]}
          >
            <Input id="surname" placeholder="اللقب" />
          </Form.Item>

          <Form.Item
            label="رقم الهوية"
            name="nni"
            rules={[
              {
                required: true,
                message: "الرجاء إدخال رقم الهوية!",
              },
            ]}
          >
            <Input id="nni" placeholder="رقم الهوية" />
          </Form.Item>

          <Form.Item
            label="رقم الهاتف"
            name="phone"
            rules={[
              {
                required: true,
                message: "الرجاء إدخال رقم الهاتف!",
              },
              {
                pattern: new RegExp(/^(\+?\d{1,4})?\s?\d{7,14}$/),
                message: "الرجاء إدخال رقم هاتف صحيح!",
              },
            ]}
          >
            <Input id="phone" placeholder="رقم الهاتف" />
          </Form.Item>

          <Form.Item
            label="البريد الإلكتروني"
            name="email"
            rules={[
              {
                required: true,
                message: "الرجاء إدخال البريد الإلكتروني!",
              },
              {
                type: "email",
                message: "الرجاء إدخال بريد إلكتروني صالح!",
              },
            ]}
          >
            <Input id="email" placeholder="البريد الإلكتروني" />
          </Form.Item>

          <Form.Item
            label="كلمة المرور"
            name="password"
            rules={[
              {
                required: true,
                message: "الرجاء إدخال كلمة المرور!",
              },
            ]}
          >
            <Input.Password id="password" placeholder="كلمة المرور" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="mt-20 w-full uppercase rounded-full bg-buttonColor hover:bg-hoverButtonColor text-white font-semibold"
              loading={isLoading}
            >
              إنشاء الحساب
            </Button>
            <Link href="/login" className="hover:underline">
              تمتلك حساب
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SigninForm;
