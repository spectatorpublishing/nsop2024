import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import Background from '../images/Background.jpeg';

const Container = styled.div`
    position: relative;
    background: #8FB8FE;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0rem;
`;

const BackgroundContainer = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0%;
    z-index: 0;
    opacity: 0.15;

    @media only screen and (max-width: 1080px){
        display: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 9.375vw;
`;

const Photo = styled.div`
    display: flex;
    width: 72%;
    height: auto;
    border: 0.4rem white solid;
    margin-left: 4rem;
    z-index: 5;
`;

const Title = styled.div`
    color: #665B56;
    font-family: "Fraunces", serif;
    font-weight: 900;
    line-height: 1;
    font-size: 6vw;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
    margin: 0rem 4rem 2rem 3rem;
    z-index: 5;
`;


const Home = () => {
    return (
        <Container>
            <HomeContainer>
                <MobileNavBar/>
                <NavBar/>
                <Title>Welcome to Columbia!</Title>
                <Wrapper>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/BBMUUMI72FCNJPRQCHM4JOTPQ4.tiff" alt = "NSOP graphic" width = "100%"></img></Photo>
                </Wrapper>
                <Letter/>
                <Credits/>
            </HomeContainer>
            <BackgroundContainer src={Background} />
        </Container>
    );
};

export default Home;