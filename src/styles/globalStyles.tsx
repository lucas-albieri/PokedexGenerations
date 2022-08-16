import { createTheme, css, styled } from "@stitches/react";
import { Theme } from "./theme";


export const Typography = styled("div", {
    zIndex: 2,

    variants: {

        title: {
            type1: {
                fontSize: '1rem',
                fontWeight: 'bold',
            },
            type2: {
                fontSize: '2rem',
                fontWeight: 'bold',
            },
            type3: {
                fontSize: '3rem',
                fontWeight: 'bold',
            },
            type4: {
                fontSize: '4rem',
                fontWeight: 'bold',
            },
            type5: {
                fontSize: '5rem',
                fontWeight: 'bold',
            },
        },
        subtitle: {
            type1: {
                fontSize: '1rem',
                fontWeight: '500',
            },
            type2: {
                fontSize: '2rem',
                fontWeight: '500',
            },
            type3: {
                fontSize: '3rem',
                fontWeight: '500',
            }
        },
        paragraph: {
            type1: {
                fontSize: '1rem',
                fontWeight: '200',
            },
            type2: {
                fontSize: '2rem',
                fontWeight: '200',
            },
            type3: {
                fontSize: '3rem',
                fontWeight: '200',
            }
        },
        color: {
            white: {
                color: Theme.theme.colors.white,
            },
            black: {
                color: Theme.theme.colors.black,
            },
            blue100: {
                color: Theme.theme.colors.blue100,
            },
            blue200: {
                color: Theme.theme.colors.blue200,
            },
            blue300: {
                color: Theme.theme.colors.blue300,
            },
            blue400: {
                color: Theme.theme.colors.blue400,
            },
            blue500: {
                color: Theme.theme.colors.blue500,
            },
            blue600: {
                color: Theme.theme.colors.blue600,
            },
            blue700: {
                color: Theme.theme.colors.blue700,
            },
            blue800: {
                color: Theme.theme.colors.blue800,
            },
            blue900: {
                color: Theme.theme.colors.blue900,
            },
            red100: {
                color: Theme.theme.colors.red100,
            },
            red200: {
                color: Theme.theme.colors.red200,
            },
            red300: {
                color: Theme.theme.colors.red300,
            },
            red400: {
                color: Theme.theme.colors.red400,
            },
            red500: {
                color: Theme.theme.colors.red500,
            },
            red600: {
                color: Theme.theme.colors.red600,
            },
            red700: {
                color: Theme.theme.colors.red700,
            },
            green100: {
                color: Theme.theme.colors.green100,
            },
            green200: {
                color: Theme.theme.colors.green200,
            },
            green300: {
                color: Theme.theme.colors.green300,
            },
            green400: {
                color: Theme.theme.colors.green400,
            },
            green500: {
                color: Theme.theme.colors.green500,
            },
            green600: {
                color: Theme.theme.colors.green600,
            },
            green700: {
                color: Theme.theme.colors.green700,
            },
            green800: {
                color: Theme.theme.colors.green800,
            },
            green900: {
                color: Theme.theme.colors.green900,
            },
            yellow100: {
                color: Theme.theme.colors.yellow100,
            },
            yellow200: {
                color: Theme.theme.colors.yellow200,
            },
            yellow300: {
                color: Theme.theme.colors.yellow300,
            },
            yellow400: {
                color: Theme.theme.colors.yellow400,
            },
            yellow500: {
                color: Theme.theme.colors.yellow500,
            },
            yellow600: {
                color: Theme.theme.colors.yellow600,
            },
            yellow700: {
                color: Theme.theme.colors.yellow700,
            },
            yellow800: {
                color: Theme.theme.colors.yellow800,
            },
            yellow900: {
                color: Theme.theme.colors.yellow900,
            },
            gray100: {
                color: Theme.theme.colors.gray100,
            },
            gray200: {
                color: Theme.theme.colors.gray200,
            },
            gray300: {
                color: Theme.theme.colors.gray300,
            },
            gray400: {
                color: Theme.theme.colors.gray400,
            },
            gray500: {
                color: Theme.theme.colors.gray500,
            },
            gray600: {
                color: Theme.theme.colors.gray600,
            },
            gray700: {
                color: Theme.theme.colors.gray700,
            },
            gray800: {
                color: Theme.theme.colors.gray800,
            },
            gray900: {
                color: Theme.theme.colors.gray900,
            },
            indigo100: {
                color: Theme.theme.colors.indigo100,
            },
            indigo200: {
                color: Theme.theme.colors.indigo200,
            },
            indigo300: {
                color: Theme.theme.colors.indigo300,
            },
            indigo400: {
                color: Theme.theme.colors.indigo400,
            },
            indigo500: {
                color: Theme.theme.colors.indigo500,
            },
            indigo600: {
                color: Theme.theme.colors.indigo600,
            },
            indigo700: {
                color: Theme.theme.colors.indigo700,
            },
            indigo800: {
                color: Theme.theme.colors.indigo800,
            },
            indigo900: {
                color: Theme.theme.colors.indigo900,
            },
            purple100: {
                color: Theme.theme.colors.purple100,
            },
            purple200: {
                color: Theme.theme.colors.purple200,
            },
            purple300: {
                color: Theme.theme.colors.purple300,
            },
            purple400: {
                color: Theme.theme.colors.purple400,
            },
            purple500: {
                color: Theme.theme.colors.purple500,
            },
            purple600: {
                color: Theme.theme.colors.purple600,
            },
            purple700: {
                color: Theme.theme.colors.purple700,
            },
            purple800: {
                color: Theme.theme.colors.purple800,
            },
            purple900: {
                color: Theme.theme.colors.purple900,
            },
            orange100: {
                color: Theme.theme.colors.orange100,
            },
            orange200: {
                color: Theme.theme.colors.orange200,
            },
            orange300: {
                color: Theme.theme.colors.orange300,
            },
            orange400: {
                color: Theme.theme.colors.orange400,
            },
            orange500: {
                color: Theme.theme.colors.orange500,
            },
            orange600: {
                color: Theme.theme.colors.orange600,
            },
            orange700: {
                color: Theme.theme.colors.orange700,
            },
            orange800: {
                color: Theme.theme.colors.orange800,
            },
            orange900: {
                color: Theme.theme.colors.orange900,
            },
            rose100: {
                color: Theme.theme.colors.rose100,
            },
            rose200: {
                color: Theme.theme.colors.rose200,
            },
            rose300: {
                color: Theme.theme.colors.rose300,
            },
            rose400: {
                color: Theme.theme.colors.rose400,
            },
            rose500: {
                color: Theme.theme.colors.rose500,
            },
            rose600: {
                color: Theme.theme.colors.rose600,
            },
            rose700: {
                color: Theme.theme.colors.rose700,
            },
            rose800: {
                color: Theme.theme.colors.rose800,
            },
            rose900: {
                color: Theme.theme.colors.rose900,
            },

        },
    }
})
