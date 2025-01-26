import styled from "styled-components"

const BanerHomeStyles = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-image: url("/img/bannerBackground.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    width: auto;
    
`
//
const BannerInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const Rama = styled.h1`
    background-color: rgba(0,0,0,0);
    padding: 30px;
    color: white;
    text-decoration: none;
`

const Title = styled(Rama)`
    background-color: none;
`

const Info = styled.p`

`

const Home = () => {
    return <BanerHomeStyles>
        <BannerInfoSection>
            <Rama> FRONT END</Rama>
            <Title>Challenge React</Title>
            <Info> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a voluptatum repellendus. Eveniet voluptates aperiam optio excepturi repudiandae quo iusto possimus officia, debitis, facere ipsa cum aut consectetur sint maiores!</Info>
        </BannerInfoSection>
    </BanerHomeStyles>
}

export default Home