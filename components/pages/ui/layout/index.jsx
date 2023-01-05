import Headers from "./header/index";
import Footers from "./footer/index";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("پرونده ها", "1", <PieChartOutlined />),
  getItem("ثبت پرونده بیمه", "2", <DesktopOutlined />),
  getItem("ثبت ساعت", "sub1", <UserOutlined />),
  getItem("دفتر کیهان", "sub2", <TeamOutlined />, ),
];

function index({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Headers />
      <Layout
        style={{
          direction: "rtl",
          minHeight: "100vh",
          backgroundColor:"white"
        }}
      >
        <Sider
        
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              // height: 32,
              margin: 16,
              textAlign: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              
            }}
          >
            پنل ریتون پارس پایدار
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout" style={{backgroundColor:"white" ,width:"100%"}}>
          <Content
            style={{
              backgroundColor:"white",
              margin: "0 16px",
            }}
          >
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>

      <Footers />
    </div>
  );
}

export default index;
