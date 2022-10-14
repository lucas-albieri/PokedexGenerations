import { useLazyQuery, useQuery } from "@apollo/client";
import { Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { PokemonModel } from "../../../../../models/pokemon";
import { GetAllPokemons } from "../../../../../queries/default_query";
import Pokemon from "../pokemon";
import SearchHome from "../search";
import { BoxContent, Container, Content, ListPokemonsProps } from "./styles";

const ListPokemon = () => {

    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const allPokemonsOfLimit = useQuery(GetAllPokemons,
        {
            variables: {
                limit: limit,
                offset: offset,
                _name: '%%',
                id: 0,
            }
        });

    const [getPK, { data: searchData, loading: searchLoad }] = useLazyQuery(GetAllPokemons,
        {
            variables: {
                limit: limit,
                offset: offset,
                _name: "%%",
            }
        });

    const allPk = searchData?.pokemon_v2_pokemon ?? allPokemonsOfLimit.data?.pokemon_v2_pokemon ?? [] as PokemonModel[];

    console.log(searchData);


    const handleSearch = (_search: string) => {
        if (_search) {
            getPK({
                variables: {
                    limit: limit,
                    offset: offset,
                    _name: '%' + _search + '%',

                }
            });
        }
    }

    return (
        <Container>
            <Content>
                <BoxContent>

                    <SearchHome
                        onSearch={(search) =>
                            handleSearch(search)
                        }
                    />

                    <ListPokemonsProps
                        display={allPokemonsOfLimit.loading ? "flex" : "grid"}
                    >
                        {
                            allPokemonsOfLimit.loading || searchLoad ? <>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    width: '100%',
                                }}>
                                    <CircularProgress size={70} />
                                </Box>
                            </>
                                :
                                allPk &&
                                allPk.map((pokemon: PokemonModel) => {
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
                    </ListPokemonsProps>

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