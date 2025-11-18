import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/elements/sidebar";
import HeaderBar from "@/components/elements/header";
import { useStyles } from "./styles";

const { Content } = Layout;
const SIDEBAR_WIDTH = 256; // width when expanded
const SIDEBAR_WIDTH_COLLAPSED = 80;

const DashboardLayout: React.FC = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ overflow: "hidden" }}>
      <Sidebar
        sidebarWidth={SIDEBAR_WIDTH}
        sidebarCollapsedWidth={SIDEBAR_WIDTH_COLLAPSED}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <Layout
        style={{
          marginLeft: collapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH,
          transition: "margin-left 0.25s",
        }}
      >
        <HeaderBar
          sidebarWidth={SIDEBAR_WIDTH}
          sidebarCollapsedWidth={SIDEBAR_WIDTH_COLLAPSED}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* outlet === main page content */}
        <Content className={classes.pageContentWrapper}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
