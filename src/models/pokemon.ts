import { PokemonSpriteModel } from "./pokemon_sprite_model";
import { PokemonTypesModel } from "./pokemon_type_model";

export interface PokemonModel {
    id: number;
    name: string;
    pokemon_v2_pokemonsprites: PokemonSpriteModel[];
    pokemon_v2_pokemontypes: PokemonTypesModel[];
}