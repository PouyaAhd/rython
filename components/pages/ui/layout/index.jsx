import Headers from "./header/index";
import Footers from "./footer/index";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import {useRouter} from 'next/router'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useDispatch } from "react-redux";
import { checkLogin, role } from '../../../../features/user.slice'
import { useSelector } from 'react-redux'

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


function index({ children }) {
  const router = useRouter()

  const items = [
    getItem(<div onClick={()=>{router.push('/cases')}}>پرونده های جاری</div>, "1", <PieChartOutlined />),
    getItem("ثبت پرونده بیمه", "2", <DesktopOutlined />),
    getItem("ثبت ساعت", "sub1", <UserOutlined />),
  
  
    getItem("دفتر کیهان", "sub2", <TeamOutlined />),
  ];

  const user = useSelector(selectUser => selectUser.User)

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkLogin())
    dispatch(role())
  }, [])
  
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className={styles.layout_desktop}>
        <Headers />
        {user.user ? <Layout
          style={{
            direction: "rtl",
            minHeight: "100vh",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Sider
            theme="light"
            style={{ borderTopLeftRadius: "30px", }}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            {!collapsed ? (
              <div
                style={{
                  // height: 32,
                  margin: 16,
                  textAlign: "center",
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                ریتون پایدار پارس
              </div>
            ) : (
              <div
                style={{
                  // height: 32,
                  margin: 16,
                  textAlign: "center",
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <SmileOutlined />
              </div>
            )}

            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout
            className="site-layout"
            style={{ backgroundColor: "#F5F5F5", width: "100%" }}
          >
            <Content
              style={{
                backgroundColor: "#F5F5F5",
                margin: "0 16px",
              }}
            >
              <div>{children}</div>
            </Content>
          </Layout>
        </Layout> : <div style={{direction:"rtl",minHeight: "100vh"}}>{children}</div>}


        <Footers />

      </div>
      <div className={styles.layout_responsive}>
        <Headers />
        <div style={{ direction: "rtl", minHeight: "100vh" }}>
          {children}
        </div>
        <Footers />
      </div>

    </div>
  );
}

export default index;
