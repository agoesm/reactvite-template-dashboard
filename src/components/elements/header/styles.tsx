import { css } from "@emotion/css";

type Styles = {
  header: string;
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
});
