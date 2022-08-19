import { styled } from "@stitches/react";
import bg from "../../../../../assets/img/bg2.svg";
import { Theme } from "../../../../../styles/theme";

export const Container = styled("div", {
    display: "flex",
    width: "100%",
    height: "100%",
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "repeat",
    overflowY: "scroll",

})

export const BoxContent = styled("div", {
    width: "82%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: Theme.theme.colors.white,
})


export const ListPokemons = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gridColumnGap: "5px",
    gridRowGap: "65px",
    padding: "2.5rem 4rem",
})

