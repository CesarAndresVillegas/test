import React, { useState } from 'react'
import { InputForm } from './TestInputForm'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    PieChartFilled,
    ReadFilled,
} from '@ant-design/icons';

import '../css/TestLayout.css'
import { useParams } from 'react-router-dom';
import { TestComponentParam } from './TestComponentParam';

const { Header, Sider, Content } = Layout;

export const TestLayout = () => {
    
    const [collapsed, setCollapsed] = useState(false);
    const [selectedContent, setSelectedContent] = useState(1);
    const {clientId} = useParams();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />} onClick={() => setSelectedContent(1)}>
                    Datos Usuarios
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PieChartFilled />} onClick={() => setSelectedContent(2)}>
                    Gráficos bonítos
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ReadFilled />} onClick={() => setSelectedContent(3)}>
                    Documentos
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => {setCollapsed(!collapsed)},
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}>
                    <h1>{clientId}</h1>
                    {
                        selectedContent == 1 ? (<TestComponentParam clientId={clientId} />):
                        selectedContent == 2 ? (<h1>content2</h1>):
                        selectedContent == 3 ? (<h1>content3</h1>):
                        (<h1>{clientId}</h1>)
                    }
                </Content>
            </Layout>
        </Layout>
    )
}
