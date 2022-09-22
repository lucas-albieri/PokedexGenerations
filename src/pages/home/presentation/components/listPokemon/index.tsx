import { useQuery } from "@apollo/client";
import { Box, Button, CircularProgress, Skeleton } from "@mui/material";
import { useState } from "react";
import { PokemonModel } from "../../../../../models/pokemon";
import { GetAllPokemons } from "../../../../../queries/default_query";
import Pokemon from "../pokemon";
import SearchHome from "../search";
import { BoxContent, Container, Content, ListPokemons } from "./styles";

const ListPokemon = () => {

    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const allPokemons = useQuery(GetAllPokemons,
        {
            variables: {
                limit: limit,
                offset: offset
            }
        });
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
                                    height: '100vh',
                                    width: '100vw',
                                }}>
                                    <CircularProgress size={70} />
                                </Box>
                            </>
                                :
                                allPokemons.data && allPokemons.data.pokemon_v2_pokemon.map((pokemon: PokemonModel) => {
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

                    <Button
                        variant="contained"
                        onClick={() => setLimit(limit + 20)}
                        sx={{
                            width: 'auto',
                            margin: '0 auto',
                            marginY: '2rem',
                            fontSize: '0.9rem',
                            fontWeight: '400',
                            padding: '0.5rem 2rem',
                        }}>
                        Carregar Mais Pokemon
                    </Button>
                </BoxContent>
            </Content>
        </Container >
    );
}

export default ListPokemon;