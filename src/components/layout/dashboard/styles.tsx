import { css } from "@emotion/css";

type Styles = {
  pageContentWrapper: string;
};

export const useStyles = (): Styles => ({
  pageContentWrapper: css({
    marginTop: 64,
    padding: 24,
    height: "calc(100vh - 64px)", // ✅ subtract header height

    // with flex
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    // flexWrap: "wrap",
    // overflowY: "auto",
    // overflowX: "hidden", // ✅ block horizontal scroll
    backgroundColor: "#f7f7f7",

    // scrollbarGutter: "stable", // ✅ reserve scrollbar space

    // /* Scrollbar track - hidden by default */
    // "&::-webkit-scrollbar": {
    //   width: "3px",
    //   backgroundColor: "transparent",
    // },

    // /* Show track background on hover */
    // "&:hover::-webkit-scrollbar": {
    //   backgroundColor: "#f0f0f0", // Light grey track
    // },

    // /* Scrollbar thumb - hidden by default */
    // "&::-webkit-scrollbar-thumb": {
    //   backgroundColor: "transparent",
    //   borderRadius: "8px",
    // },

    // /* Show thumb on hover */
    // "&:hover::-webkit-scrollbar-thumb": {
    //   backgroundColor: "#bfbfbf", // Visible grey thumb
    // },

    // /* Optional: darker thumb when actively scrolling */
    // "&::-webkit-scrollbar-thumb:hover": {
    //   backgroundColor: "#999999",
    // },
  }),
});
