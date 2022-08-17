import { Stack } from "@mui/material";
import { PokemonModel } from "../../../../../models/pokemon";
import { Typography } from "../../../../../styles/globalStyles";

const Pokemon = ({ id, img, name }: PokemonModel) => {
    return (
        <Stack>
            <img src={img} alt={name} />
            <Typography subtitle={"type1"} color={"white"}>
                {name}
            </Typography>
        </Stack>
    )
}

export default Pokemon;