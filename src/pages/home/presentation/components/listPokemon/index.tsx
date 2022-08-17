import { useQuery } from "@apollo/client";
import { PokemonModel } from "../../../../../models/pokemon";
import { GetAllPokemons } from "../../../../../queries/default_query";
import Pokemon from "../pokemon";
import SearchHome from "../search";
import { BoxContent, Container, Content } from "./styles";

const ListPokemon = () => {

    const { data, loading } = useQuery(GetAllPokemons);

    console.log(data, loading);

    return (
        <Container>
            <Content>
                <BoxContent>
                    <SearchHome />
                    {
                        data && data.pokemons.map((pokemon: PokemonModel) => {
                            return (
                                <Pokemon key={pokemon.id} name={pokemon.name} types= />
                            )
                        })
                    }
                </BoxContent>
            </Content>
        </Container >
    );
}

export default ListPokemon;