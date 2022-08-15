import { styled } from "@stitches/react";

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
})

export const Filter = styled("div", {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, .76)",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    opacity: 0,
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})

export const MovingClouds = styled("div", {

    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    width: '250.625em',
    height: '43.75em',
- webkit - animation: cloudLoop 80s linear infinite;
animation: cloudLoop 80s linear infinite;

@keyframes cloudLoop {
    0 % {
    - webkit - transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
100 % {
    - webkit - transform: translate3d(-50 %, 0, 0);
transform: translate3d(-50 %, 0, 0); } }
})