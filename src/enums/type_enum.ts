export enum TypeEnum {
    normal = 'normal',
    fire = 'fire',
    water = 'water',
    electric = 'electric',
    grass = 'grass',
    ice = 'ice',
    fighting = 'fighting',
    poison = 'poison',
    ground = 'ground',
    flying = 'flying',
    psychic = 'psychic',
    bug = 'bug',
    rock = 'rock',
    ghost = 'ghost',
    dragon = 'dragon',
    dark = 'dark',
    steel = 'steel',
    fairy = 'fairy'
}

export namespace TypeEnum {
    export const byName = (type: string) => {
        switch (type) {
            case 'normal':
                return TypeEnum.normal;
            case 'fire':
                return TypeEnum.fire;
            case 'water':
                return TypeEnum.water;
            case 'electric':
                return TypeEnum.electric;
            case 'grass':
                return TypeEnum.grass;
            case 'ice':
                return TypeEnum.ice;
            case 'fighting':
                return TypeEnum.fighting;
            case 'poison':
                return TypeEnum.poison;
            case 'ground':
                return TypeEnum.ground;
            case 'flying':
                return TypeEnum.flying;
            case 'psychic':
                return TypeEnum.psychic;
            case 'bug':
                return TypeEnum.bug;
            case 'rock':
                return TypeEnum.rock;
            case 'ghost':
                return TypeEnum.ghost;
            case 'dragon':
                return TypeEnum.dragon;
            case 'dark':
                return TypeEnum.dark;
            case 'steel':
                return TypeEnum.steel;
            case 'fairy':
                return TypeEnum.fairy;
            default:
                return "undefined";
        }
    }
    export const toColor = (type: string) => {
        switch (type) {
            case 'normal':
                return '#A3ACAE';
            case 'fire':
                return '#FD7D24';
            case 'water':
                return '#4693C4';
            case 'electric':
                return '#F7D02C';
            case 'grass':
                return '#8CC152';
            case 'ice':
                return '#52C4E7';
            case 'fighting':
                return '#C22E28';
            case 'poison':
                return '#B97FC9';
            case 'ground':
                return '#D4B16C';
            case 'flying':
                return '#39bce0';
            case 'psychic':
                return '#F95587';
            case 'bug':
                return '#A6B91A';
            case 'rock':
                return '#B6A136';
            case 'ghost':
                return '#735797';
            case 'dragon':
                return ' linear-gradient(to bottom, #53A4CF 50%, #F16E57 50%)';
            case 'dark':
                return '#707070';
            case 'steel':
                return '#B7B7CE';
            case 'fairy':
                return '#F4B1F4';
            default:
                return '#fff';
        }
    }
}