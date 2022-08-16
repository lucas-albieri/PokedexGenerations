import { styled } from "@stitches/react";
import { Theme } from "../../styles/theme";

type Props = {
    isScrolled: boolean;
    children: React.ReactNode;
}

export const NavbarComp = styled("div", {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "2rem 12rem",
    zIndex: 3,
    transition: "all .4s ease-in-out",
})

export const Navbar = ({ isScrolled, children }: Props) => {
    return (
        <NavbarComp
            style={{
                backgroundColor: isScrolled ? "white" : "transparent",
                padding: isScrolled ? "1.2rem 12rem" : "2rem 12rem",
            }}
        >
            {children}
        </NavbarComp>
    )
}

export const Container = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
})

export const Nav = styled("nav", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "45%",
})

export const NavItem = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
})

export const NavLink = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    '&:hover': {
        opacity: 0.8,
    }

})

export const NavButton = styled("button", {
    backgroundColor: Theme.theme.colors.rose600,
    color: Theme.theme.colors.white,
    border: "none",
    borderRadius: "16px",
    padding: "0.5rem 1rem",
    fontWeight: "600",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
})