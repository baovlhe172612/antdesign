import { useState } from "react"
import { Layout } from "antd"

import "./LayoutDefault.css"
import logo_fold from "../../Images/logo-fold.png"
import logo from "../../Images/logo.png"
import { SearchOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import Notify from "../../component/Notify"
import MenuSider from "../../component/Menu"
import {Outlet} from "react-router-dom"



const { Header, Footer, Sider, Content } = Layout;



function LayoutDefault() {
    const [collapsed, setCollapsed] = useState(false);
    console.log(collapsed)
    return (

        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className={"header__logo "+(collapsed && "header__logo--collapsed")}>
                        <img src={collapsed ? logo_fold : logo} alt="logo" />
                    </div>

                    <div className="header__nav">
                        <div className="header__nav-left">
                            <div className="header__collapse"
                             onClick={() => setCollapsed(!collapsed)}>
                               {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined/>} 
                                {/* <MenuFoldOutlined /> */}
                            </div>


                            <div className="header__search">
                                <SearchOutlined />
                            </div>
                        </div>

                        <div className="header__nav-right">
                          <Notify/>
                        </div>
                    </div>

                </header>
                <Layout>
                    <Sider className="slider" collapsed={collapsed} theme="light" >
                        <MenuSider/>
                    </Sider>
                    <Content className="content">
                      <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default LayoutDefault