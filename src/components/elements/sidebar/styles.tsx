import { css } from "@emotion/css";

type Styles = {
  sider: string;
  logoStyle: string;
};

export const useStyles = (): Styles => ({
  sider: css({
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    overflowY: "auto",
    backgroundColor: "#fff",

    /* Hide scrollbar by default */
    scrollbarWidth: "none", // Firefox
    "&::-webkit-scrollbar": {
      width: "0px", // Chrome/Safari
    },
  }),
  logoStyle: css({
    color: "#000",
    textAlign: "center",
    padding: "1rem 0",
    fontWeight: "bold",
    fontSize: "18px",
  }),
});
