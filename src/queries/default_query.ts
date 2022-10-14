import { gql } from "@apollo/client";

export const GetAllPokemons = gql`
  query samplePokeAPIquery($limit: Int!, $offset: Int!, $_name: String!) {
  pokemon_v2_pokemon(limit: $limit, offset: $offset, where: {name: {_ilike: $_name}}) {
    name
    id
    pokemon_v2_pokemonsprites {
      sprites
    }
    pokemon_v2_pokemontypes{
      type_id
      pokemon_v2_type{
        name
      }
    }
  }
}
`;
