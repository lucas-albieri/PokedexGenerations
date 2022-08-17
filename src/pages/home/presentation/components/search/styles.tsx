import { styled } from "@stitches/react";
import bg from "../../../../../assets/img/bg2.svg";

export const Search = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2rem 0",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
})