import React from 'react';
import {Button, Form, Input, Select} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import backgroundImage from '../background2.jpg'
import {useNavigate} from "react-router";

const StyledTest = styled(Form)`
  margin-top: 30px;
`;

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
    display: 'flex',
};

const HomePage = () => {
    const [form] = Form.useForm();
    const navigator = useNavigate();

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ note: 'Hi, man!' });
                return;
            case 'female':
                form.setFieldsValue({ note: 'Hi, lady!' });
                return;
            case 'other':
                form.setFieldsValue({ note: 'Hi there!' });
                break;
            default:
        }
    };
    const onFinish = (values) => {
        if (values.username == 'admin' && values.password == 'anqq'); {
            console.log('Success', values);
            navigator("/web_music/playing");
        }
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    const myStyle={
        backgroundImage: `url(${backgroundImage})`,
        display: 'grid',
        placeItems: 'center',
        width: '100vw',
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div style={myStyle}>
            <StyledTest/>
            <Form form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default HomePage;
