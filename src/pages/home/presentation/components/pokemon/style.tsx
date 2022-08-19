import { styled } from "@stitches/react";
import { Theme } from "../../../../../styles/theme";

export const CasePokemon = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    height: "250px",
})

export const BoxImage = styled("div", {
    width: "100%",
    height: "70%",
    backgroundColor: Theme.theme.colors.gray200,
})

export const BoxType = styled("div", {
    marginTop: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
})