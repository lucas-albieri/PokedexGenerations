import { Stack } from "@mui/material";
import { TypeEnum } from "../../../../../enums/type_enum";
import { PokemonListModel } from "../../../../../models/list_all_pokemons";
import { PokemonModel } from "../../../../../models/pokemon";
import { Typography } from "../../../../../styles/globalStyles";
import { Theme } from "../../../../../styles/theme";
import { BoxImage, BoxType, CasePokemon } from "./style";

const Pokemon = ({ id, name, pokemon_v2_pokemonsprites, pokemon_v2_pokemontypes }: PokemonModel) => {

    // console.log(pokemon_v2_pokemonsprites);
    const sprites = pokemon_v2_pokemonsprites[0].sprites.replace(/[\\]/g, '');
    const newSprites = JSON.parse(sprites)
    console.log(newSprites)
    return (
        <CasePokemon>
            <BoxImage>
                <img style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }}
                    // src={newSprites.front_default}
                    src={newSprites.other['official-artwork'].front_default}
                // src={newSprites.other.dream_world.front_default} alt={name}
                />
            </BoxImage>
            <Typography
                paragraph={"type1"}
                color={"black"}
                style={{ marginTop: "0.3rem" }}
            >
                Nº {id}
            </Typography>
            <Typography style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginTop: "0.5rem",
                textTransform: "capitalize"
            }} color={"black"}>
                {name}
            </Typography>
            <BoxType
                style={{
                    justifyContent: pokemon_v2_pokemontypes.length > 1 ? "space-evenly" : "flex-start",
                }}
            >
                {
                    pokemon_v2_pokemontypes.map((type) => {
                        return (
                            <Typography style={{
                                fontSize: "0.85rem",
                                padding: "0.2rem 1.2rem",
                                borderRadius: "0.3rem",
                                color: 'white',
                                backgroundColor: TypeEnum.toColor(type.pokemon_v2_type.name),
                            }}>
                                {type.pokemon_v2_type.name}
                            </Typography>
                        )
                    })
                }
            </BoxType>
        </CasePokemon>
    )
}

export default Pokemon;