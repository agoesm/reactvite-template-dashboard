import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useStyles } from "./styles";

const { Header } = Layout;

interface HeaderBarProps {
  sidebarWidth: number;
  sidebarCollapsedWidth: number;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderBar({
  sidebarWidth,
  sidebarCollapsedWidth,
  collapsed,
  setCollapsed,
}: HeaderBarProps) {
  const classes = useStyles({ collapsed, sidebarWidth, sidebarCollapsedWidth });

  return (
    <Header className={classes.header}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        // style={{ fontSize: "16px", width: 64, height: 64 }}
        style={{ marginLeft: 16, fontSize: "18px", width: 40, height: 40 }}
      />
    </Header>
  );
}

export default HeaderBar;
