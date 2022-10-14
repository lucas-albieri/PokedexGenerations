import { styled } from "@stitches/react";
import { CSSProperties } from "react";
import { DifficultyEnum } from "../../../models/enums/difficulty_enum";

export interface Props extends CSSProperties {
    children: React.ReactNode;
    isActive: boolean;
    onclick?: () => void;
}

export const Container = styled("div", {
    width: "100%",
})

export const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "#2f2245",
})

export const SelectMode = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "15vh",
    alignItems: "center",
})

export const SelectModeTitle = styled("h1", {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "normal",
})

export const SelectModeButtons = styled("div", {
    display: "flex",
    marginTop: "1rem",
    width: "10%",
    justifyContent: "center",
})

export const SelectModeButton = styled("button", {
    padding: "0.5rem 1rem",
    borderRadius: "0.35rem",
    cursor: "pointer",
})

export const SelectModeButtonProps = ({ children, isActive, onclick, ...props }: Props) => {

    return (
        <SelectModeButton
            style={{
                backgroundColor: isActive ? "#fff" : "#2f2245",
                color: isActive ? "#2f2245" : "#fff",
                border: isActive ? "none" : "1px solid #fff",
                fontWeight: isActive ? "bold" : "normal",
                ...props
            }
            }
            onClick={onclick}
        >
            {children}
        </SelectModeButton>

    )
}

export const PokemonOfDayBlock = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2.5rem",
})

export const PokemonOfDayTitle = styled("h2", {
    color: "#fff",
    fontSize: "1.6rem",
    fontWeight: "500",
})

export const Input = styled("input", {
    width: "30%",
    marginTop: "2rem",
    color: "#2a2a2a",
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: "0.35rem",
    padding: "1.3rem 1rem",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 0 7px 1px #eeddfc",
})