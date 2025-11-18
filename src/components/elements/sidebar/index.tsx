import { Layout, Menu, type MenuProps } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { getSelectedKeys } from "@/utils/helpers/route/sidebar-selectedkeys";
import { useStyles } from "./styles";

const { Sider } = Layout;

interface SidebarProps {
  sidebarWidth: number;
  sidebarCollapsedWidth: number;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems: MenuProps["items"] = [
  { key: "/dashboard", icon: <HomeOutlined />, label: "Dashboard" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
];

function Sidebar({
  sidebarWidth,
  sidebarCollapsedWidth,
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("collapsed ==>", collapsed);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={sidebarWidth}
      collapsedWidth={sidebarCollapsedWidth}
      className={classes.sider}
      onClick={() => (collapsed ? setCollapsed(!collapsed) : {})}
    >
      <div
        className={classes.logoStyle}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "App" : "My Web App"}
      </div>
      <Menu
        theme="light"
        mode="inline"
        onClick={({ key }) => navigate(key)}
        selectedKeys={[getSelectedKeys(location.pathname)]}
        items={menuItems}
      />
    </Sider>
  );
}

export default Sidebar;
