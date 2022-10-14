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
    overflowY: "auto",
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
    marginBottom: "2rem",
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
    fontWeight: "600",
    fontSize: "1.1rem",
    boxShadow: "0 0 7px 1px #eeddfc",
})

export const PokemonTip = styled("div", {
    display: "flex",
    marginTop: "0.8rem",
    backgroundColor: "#fff",
    width: "15%",
    borderRadius: "0.35rem",
    padding: "0.2rem 1rem",
    boxShadow: "0 0 5px 1px #eeddfc",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    '&:hover': {
        boxShadow: "0 0 5px 3px #eeddfc",
    }
}
)

export const PokemonTipImage = styled("img", {
    width: "18%",
    height: "100%",
    objectFit: "contain",
})

export const PokemonTipName = styled("p", {
    color: "#4a4a4a",
    fontSize: "0.9rem",
    fontWeight: "600",
    textTransform: "capitalize",
    marginLeft: "0.5rem",
})

export const NumberOfTries = styled("p", {
    color: 'white',
    fontSize: '0.75rem',
    margin: '1rem',
    textAlign: 'left',
    width: '30%'
})

export const PokemonsSelected = styled("div", {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "40%",
    marginTop: "1rem",
    marginBottom: "0.8rem",
    backgroundColor: "#fff",
    padding: "0.25rem 1rem",
    borderRadius: "0.55rem",
    boxShadow: "0 0 0.5rem 0.1rem #ffffff19",
})

export const PokemonSelectedPt1 = styled("div", {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "40%",
})

export const PokemonSelectedImage = styled("img", {
    width: "20%",
})

export const PokemonSelectedName = styled("p", {
    marginLeft: "1rem",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#272727",
    textTransform: "capitalize",
})

export const PokemonSelectedPt2 = styled("div", {
    display: "flex",
    width: "60px",
    height: "60px",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.15rem 0.5rem",
    borderRadius: "999px",
    marginLeft: "1rem",
})