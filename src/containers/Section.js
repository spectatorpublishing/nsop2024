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
    margin: 2rem 0rem 0rem 1rem;
    z-index: 5;

    @media screen and (max-width: 1023px) {
        width: fit-content;
        font-size: 2.5rem;
    }
`;

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    z-index: 5;
`;

const Section = ({ header, articles }) => {
    const initialArticle = articles[0];
    const middleArticles = window.innerWidth <= 1023 && articles.length >= 2 ? articles.slice(1, articles.length - 1) : (articles.length === 2 ? [articles[1]] : (articles.length > 3 ? articles.slice(1, articles.length - 2) : null));
    const lastArticles = window.innerWidth <= 1023 ? null : (articles.length >= 3 ? articles.slice(articles.length - 2, articles.length) : null);

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


