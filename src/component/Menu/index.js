import { CaretRightOutlined, DotNetOutlined, HomeOutlined, JavaOutlined, JavaScriptOutlined, LinuxOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import CreateRoom from "../../page/CreateRoom"

function MenuSider() {

    const items = [
        {
            key: "Menu 1",
            label: "Menu 1",
            icon: <DotNetOutlined />,
            children: [
                { 
                    key: "/",
                    label: <Link to="/">DashBoard</Link>,
                    icon: <DotNetOutlined />,
                },
                {
                    key: "Menu 1_2",
                    label: "Menu 1_2",
                    icon: <DotNetOutlined />
                },
                {
                    key: "Menu 1_3",
                    label: "Menu 1_3",
                    icon: <DotNetOutlined />,
                }

            ]
        },
        {
            key: "Menu 2",
            label: "Menu 2",
            icon: <JavaOutlined />
        },
        {
            key: "Menu 3",
            label: "Menu 3",
            icon: <JavaScriptOutlined />
        },
        {
            key: "Menu 4",
            label: "Menu 4",
            icon: <LinuxOutlined />
        },
        {
            key: "/bookroom",
            label: <Link to="/bookroom">Book Room</Link>,
            icon: <HomeOutlined />
        },

        {
            key: "/create-room",
            label: <Link to="/create-room">Create Room</Link>,
            icon: <PlusCircleOutlined />
        },
        {
            key: "/list-room",
            label: <Link to="/list-room">List Room</Link>,
            icon: <CaretRightOutlined />
        },

    ]
    return (
        <>
            <Menu


                mode="inline"
                items={items}
                defaultOpenKeys = {["Menu 1"]}
                defaultSelectedKeys	= {["/"]}
            />
        </>
    )
}
export default MenuSider