import { Button, Layout, Typography } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { useStyles } from "./styles";
import { VscBell } from "react-icons/vsc";
// import ReactLogo from "@/assets/react.svg?react";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // alignContent: "center",
          gap: 15,
          // paddingRight: 12,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "18px", width: 40, height: 40 }}
        />
        <Typography style={{ fontSize: 20, fontWeight: 600 }}>
          All in One Software
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          paddingRight: 12,
        }}
      >
        {/* <Button
          type="text"
          shape="circle"
          icon={<ReactLogo width="1em" height="1em" />}
          onClick={() => {}}
          style={{ fontSize: "20px", width: 40, height: 40 }}
        /> */}
        <Button
          type="text"
          shape="circle"
          icon={<VscBell />}
          // icon={<SettingOutlined />}
          onClick={() => {}}
          className={classes.headerIconAction}
          style={{ border: "1px solid lightgrey" }}
        />
        <Button
          type="text"
          shape="circle"
          icon={<SettingFilled />}
          // icon={<SettingOutlined />}
          onClick={() => {}}
          className={classes.headerIconAction}
          style={{ border: "1px solid lightgrey" }}
        />
        <Button
          type="text"
          shape="circle"
          icon={<UserOutlined />}
          onClick={() => {}}
          className={classes.headerIconAction}
          style={{ border: "1px solid lightgrey" }}
        />
      </div>
    </Header>
  );
}

export default HeaderBar;
