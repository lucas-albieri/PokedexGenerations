import { Container, Content, ContentBox, Filter, MovingClouds } from "./style";
import bg from "../../../../../assets/img/rayqBg.png";
import clouds from "../../../../../assets/img/clouds.png";
import { Typography } from "../../../../../styles/globalStyles";

const HeaderHome = () => {
    return (
        <Container
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                overflowX: 'hidden',
                height: '100vh',
            }}>

            <Filter />


            <Content>
                <ContentBox>
                    <Typography
                        color={"white"}
                        title={"type5"}
                        style={{
                            fontSize: "7rem",
                            textAlign: "center",
                        }}
                    >
                        Pokemon <br /> Generations
                    </Typography>
                    <Typography
                        color={"white"}
                        paragraph={"type2"}
                        style={{
                            marginTop: "2rem",
                        }}
                    >
                        The world of Pokemon
                    </Typography>
                </ContentBox>
            </Content>
            <div style={{
                width: '10%'
            }}>
                <MovingClouds
                    style={{
                        backgroundImage: `url(${clouds})`,
                    }}
                />
            </div>
        </Container>
    );
}

export default HeaderHome;