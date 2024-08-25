import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'
import Crumpled from '../images/CrumpledPaper.jpeg';

const Container = styled.div`
    margin: auto;
    margin-top: 10rem;
    z-index: 5;
    color: white;
    padding: 2rem 2rem 0rem 2rem;
    width: 80%;
    background-color: #937758;
    border: 10px white solid;
    border-radius: 100px;
    position: relative;
    @media only screen and (max-width: 768px){
        padding: 1rem 1rem 0rem 1rem;
    }
`;

const HeaderDiv = styled.div`
    z-index: 10;
    margin-top: 4rem;
    margin-bottom: 3rem;
    color: #665B56;
`;

const Header = styled.h1`
    z-index: 10;
    font-size: 3rem;
    font-family: "Fraunces", serif;
    font-weight: 900;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
    text-align: center;

    @media only screen and (max-width: 1023px){
        font-size: 6vw;
    }
`;

const SectAndNames = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    width: auto;
    margin-top: 1rem;
    padding: 4rem;
    @media only screen and (max-width: 1023px){
        grid-template-columns: 1fr;
        padding: 0rem;
    }
`;

const Section = styled.div`
    z-index: 5;
    font-size: 1.5rem;
    font-weight: bold;
    height: fit-content;
    font-family: 'Enriqueta', serif;
    @media only screen and (max-width: 1216px){
        font-size: 1.8rem;
        width: 18rem;
    }
    @media only screen and (max-width: 1023px){
        font-size: 4vw;
        text-align: center;
        margin: auto;
    }
`;

const Name = styled.div`
    z-index: 5;
    font-family: 'Enriqueta', serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1216px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 1023px){
        font-size: 3vw;
        text-align: center;
    }
`;

const Credits = () => {
    return (
        <Container id="credits" style={{backgroundImage: `url(${Crumpled})`, backgroundSize: 'cover'}}>
            <HeaderDiv><Header>Staff who made this issue possible: </Header></HeaderDiv>
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => {
                    return(
                        <Section> {section} 
                        <br/>
                        {key.map((person, index) => {
                            return(
                                <Name key={index}>{person.staff_name}, {person.title}</Name>
                            );
                        })}
                        <br/>
                        </Section>
                    );
                })}
            </SectAndNames>
        </Container>
    )
};

export default Credits;