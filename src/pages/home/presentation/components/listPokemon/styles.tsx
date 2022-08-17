import { styled } from "@stitches/react";
import bg from "../../../../../assets/img/bg2.svg";
import { Theme } from "../../../../../styles/theme";

export const Container = styled("div", {
    display: "flex",
    width: "100%",
    height: "100vh",
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "repeat",

})

export const BoxContent = styled("div", {
    width: "82%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: Theme.theme.colors.white,
})


