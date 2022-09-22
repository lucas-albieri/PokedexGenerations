import { keyframes, styled } from "@stitches/react";

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    position: "relative",
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
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
    opacity: 0.70,
})

export const ContentBox = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})


const cloudLoop = keyframes({
    from: { transform: "translate3d(0,0,0)" },
    to: { transform: "translate3d(-50%,0,0)" },
});

export const MovingClouds = styled("div", {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    left: 0,
    width: '250.625em',
    height: '85%',
    animation: `${cloudLoop} 80s linear infinite`,
})
