import { css } from "@emotion/css";

type Styles = {
  header: string;
  headerIconAction: string;
};

export const useStyles = ({
  collapsed,
  sidebarWidth,
  sidebarCollapsedWidth,
}: {
  collapsed: boolean;
  sidebarWidth: number;
  sidebarCollapsedWidth: number;
}): Styles => ({
  header: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    padding: 0,
    position: "fixed",
    left: collapsed ? sidebarCollapsedWidth : sidebarWidth,
    right: 0,
    zIndex: 99,
    transition: "left 0.25s",
    backgroundColor: "#fff",
    borderBottom: "1px solid #f0f0f0",
  }),
  headerIconAction: css({
    fontSize: "20px",
    // width: 40,
    // height: 40,

    "&.ant-btn-circle": {
      width: 36,
      height: 36,
    },
  }),
});
