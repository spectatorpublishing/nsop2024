import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import FirstArticle from '../components/FirstArticle';
import Background from '../images/Background.jpeg';
import MiddleArticles from '../components/MiddleArticles';
import LastArticles from '../components/LastArticles';

const Wrapper = styled.div`
    position: relative;
    background: #8FB8FE;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #8FB8FE;
    padding: 3rem 0rem 0rem;
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

const HeaderDiv = styled.div`
    display: flex; 
    color: #665B56;
    font-family: "Fraunces", serif;
    font-weight: 900;
    font-size: 6vw;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
    margin: 0rem 3rem;
    z-index: 5;

    @media screen and (max-width: 1023px) {
        width: fit-content;
        margin: 0rem auto;
        font-size: 2.5rem;
        padding: 1rem 1rem;
        text-align: center;
    }
`;

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    z-index: 5;

    @media screen and (max-width: 1023px) {
        margin: 0px;
        display: flex;
        align-items: center;
    }
`;

const Section = ({ header, articles }) => {
    const initialArticle = articles[0];
    const middleArticles = articles.length === 2 ? articles[1] : (articles.length > 3 ? articles.slice(1, articles.length - 2) : null);
    const lastArticles = articles.length >= 3 ? articles.slice(articles.length - 2, articles.length) : null;

    return (
        <Wrapper>
            <Container>
                <NavBar />
                <MobileNavBar />
                <HeaderDiv>
                    <div style={{zIndex: 5}}>{header}</div>
                </HeaderDiv>
                <ArticlesContainer>
                    {initialArticle && 
                        <a style={{textDecoration:'none'}} href={initialArticle.article_link}><FirstArticle article={initialArticle} /></a>
                    }
                    {middleArticles &&
                        <MiddleArticles articles={middleArticles} />
                    }
                    {lastArticles &&
                        <LastArticles articles={lastArticles} fabric={articles.length % 2 === 1}/>
                    }
                </ArticlesContainer>
            </Container>
            <BackgroundContainer src={Background} />
        </Wrapper>
    );
};


export default Section;


