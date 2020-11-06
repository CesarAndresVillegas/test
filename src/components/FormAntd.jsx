import React from 'react'
import { Form, Input, Button, Checkbox, Alert } from 'antd';

import '../css/FormAntd.css'
import { useFetch } from '../hooks/useFetch';
import FormItem from 'antd/lib/form/FormItem';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export const FormAntd = () => {
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const url = 'https://fep6etdgec.execute-api.us-east-1.amazonaws.com/Prod/v1/users/asd'
    const { data, loading, error } = useFetch(url);

    if (error) return <div><h1>Error con los datos</h1></div>
    
    
    return (
        loading ? (
            <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />
        ) : (       
                <Form
                    {...layout}
                        name="basic"
                        id='basic'
                        initialValues={{
                        remember: true,
                        username: 'Holaaaa' 
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    {data.messages.map((message, index) => 
                    
                        <Form.Item
                        label={message.label}
                        name={message.name}
                        rules={[
                            {
                                required: true,
                                message: `Please input your ${message.name} !!`,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    )}
                    
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            )

    )
}
