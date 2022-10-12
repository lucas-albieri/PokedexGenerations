import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavButton, NavItem, NavLink } from "./styles";
import twitter from "../../assets/img/brands/twitter.svg";
import instagram from "../../assets/img/brands/instagram.svg";
import facebook from "../../assets/img/brands/facebook.svg";
import github from "../../assets/img/brands/github.svg";
import snorlax from "../../assets/img/snorlax.png";
import book from "../../assets/img/brands/book.svg";
import { useEffect, useMemo, useState } from "react";
import { Theme } from "../../styles/theme";

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(true);

    const navigate = useNavigate()

    const navItems = [
        {
            title: "Twitter",
            link: "https://twitter.com/PokeUNITEBrasil",
            icon: twitter,
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/pokeunitebrasil/",
            icon: instagram,
        },
        {
            title: "Facebook",
            link: "https://www.facebook.com/PokeUNITEBrasil/",
            icon: facebook,
        },
        {
            title: "GiHub",
            link: "https://github.com/lucas-albieri/PokedexGenerations",
            icon: github,
        }

    ]

    const onScroll = () => {
        if (window.scrollY >= 66) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {

        onScroll()
        window.addEventListener("scroll", onScroll)
    }, [])

    return (
        <Navbar isScrolled={isScrolled}>
            <Container>
                <Link
                    style={{
                        textDecoration: "none",
                        color: isScrolled ? `${Theme.theme.colors.gray700}` : `${Theme.theme.colors.white}`,
                        width: "50%",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                    }}
                    to="/"
                >
                    POKEMON GENERATIONS
                </Link>

                <Nav>
                    {
                        navItems.map((item, index) => {
                            return (
                                <NavItem key={item.title}>
                                    <NavLink
                                        data-placement="bottom"
                                        onClick={() => navigate(item.link)}
                                        title={item.title}
                                    >
                                        <img style={{
                                            width: "1rem",
                                            filter: isScrolled ? "invert(40%)" : "invert(88%)",
                                        }} src={item.icon} alt={item.title} />
                                    </NavLink>
                                </NavItem>
                            )
                        })
                    }
                    <NavItem>
                        <NavLink
                            style={{
                                color: isScrolled ? `${Theme.theme.colors.gray700}` : `${Theme.theme.colors.white}`,
                            }}
                            onClick={() => navigate("https://github.com/lucas-albieri/PokedexGenerations")}
                        >
                            <img style={{
                                width: "0.9rem",
                                filter: isScrolled ? "invert(40%)" : "invert(88%)",
                                marginRight: "0.5rem",
                            }} src={book} alt="Book" />
                            Documentação
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavButton>
                            <img style={{
                                width: "1.2rem",
                                marginRight: "0.5rem",
                            }} alt="Snorlax" src={snorlax} />
                            Pokemon do Dia
                        </NavButton>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;