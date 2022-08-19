import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import { PokemonModel } from "../../../../../models/pokemon";
import { GetAllPokemons } from "../../../../../queries/default_query";
import Pokemon from "../pokemon";
import SearchHome from "../search";
import { BoxContent, Container, Content, ListPokemons } from "./styles";

const ListPokemon = () => {

    const allPokemons = useQuery(GetAllPokemons);

    // console.log(allPokemons.data.pokemon_v2_pokemon);

    return (
        <Container>
            <Content>
                <BoxContent>
                    <SearchHome />
                    <ListPokemons>
                        {
                            allPokemons.loading ? <>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100vh'
                                }}>
                                    <CircularProgress size={50} />
                                </Box>
                            </>
                                :
                                allPokemons.data && allPokemons.data.pokemon_v2_pokemon.slice(0, 20).map((pokemon: PokemonModel) => {
                                    return (
                                        <Pokemon
                                            key={pokemon.id}
                                            id={pokemon.id}
                                            name={pokemon.name}
                                            pokemon_v2_pokemonsprites={pokemon.pokemon_v2_pokemonsprites}
                                            pokemon_v2_pokemontypes={pokemon.pokemon_v2_pokemontypes}
                                        />
                                    )
                                })
                        }
                    </ListPokemons>
                </BoxContent>
            </Content>
        </Container >
    );
}

export default ListPokemon;