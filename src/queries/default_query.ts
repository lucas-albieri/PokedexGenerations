import { gql } from "@apollo/client";

export const GetAllPokemons = gql`
  query samplePokeAPIquery($limit: Int!, $offset: Int!, $_name: String!, $id: Int!) {
  pokemon_v2_pokemon(
    limit: $limit, offset: $offset, 
    where: {pokemon_id: $id, pokemon_v2_pokemon: {name: $name}}
  )
   {
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
