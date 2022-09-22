import { gql } from "@apollo/client";

export const GetAllPokemons = gql`
  query samplePokeAPIquery($limit: Int!, $offset: Int!) {
  pokemon_v2_pokemon(limit: $limit, offset: $offset) {
    name
    id
    pokemon_v2_pokemonsprites {
      sprites
    }
    pokemon_v2_pokemontypes {
      type_id
      pokemon_v2_type {
        name
      }
    }
  }
}
`;
