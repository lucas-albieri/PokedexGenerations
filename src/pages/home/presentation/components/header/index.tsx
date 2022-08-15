import { Container, Content, Filter } from "./style";
import bg from "../../../../../assets/img/rayqBg.png";
import clouds from "../../../../../assets/img/clouds.png";

const HeaderHome = () => {
    return (
        <Container
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: '90vh',
            }}>

            <Filter />
            <Content>
                <Container>
                    <div className="title-brand">
                        <h1 className="presentation-title">Pokemon Generator</h1>
                    </div>
                    <h2 className="presentation-subtitle text-center">
                        Discover your Pokemon!!
                    </h2>
                </Container>
            </Content>
            <div
                className="moving-clouds"
                style={{
                    backgroundImage: `url(${clouds})`,
                }}
            />
        </Container>
    );
}

export default HeaderHome;