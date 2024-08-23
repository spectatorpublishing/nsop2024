import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #8FB8FE;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 9.375vw;
`;

const Photo = styled.div`
    display: flex;
    width: 72%;
    height: auto;
    margin-left: 7.3%;
    position: relative;
    z-index: 3;
    border: 0.4rem white solid;
`;

const Title = styled.div`
    display: flex; 
    margin: 3rem;
    color: #665B56;
    font-family: "Fraunces", serif;
    font-weight: 900;
    line-height: 1;
    font-size: 6vw;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
`;

const HomeSectionContainer = styled.div`
    z-index: 2;
    background-color: rgba(33,33,33,0.5);
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    @media only screen and (max-width: 1400px){
        margin-left: 3.5rem;
        margin-right: 3.5rem;
    }
    @media only screen and (max-width: 1023px){
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
    @media only screen and (max-width: 768px){
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`

const Home = () => {
    return (
        <HomeContainer>
                <MobileNavBar/>
                <NavBar/>
                <Title>Welcome to Columbia!</Title>
                <Wrapper>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/BBMUUMI72FCNJPRQCHM4JOTPQ4.tiff" alt = "NSOP graphic" width = "100%"></img></Photo>
                </Wrapper>
                <HomeSectionContainer>
                    <Letter/>
                    <Credits/>
                </HomeSectionContainer>
        </HomeContainer>
    );
};

export default Home;