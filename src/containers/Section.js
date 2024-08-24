import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import FirstArticle from '../components/FirstArticle';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';
import Background from '../images/Background.jpeg';

const Wrapper = styled.div`
    position: relative;
    background: #8FB8FE;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #8FB8FE;
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
    align-items: left;
    padding-top: 25px;
    z-index: 5;

    @media screen and (min-width: 1024px) {
        padding-left: 20px;
    }
    @media screen and (max-width: 1023px) {
        margin: 0px;
        display: flex;
        align-items: center;
    }
`;

const Section = ({ header, articles }) => {
    return (
        <Wrapper>
            <Container>
                <NavBar />
                <MobileNavBar />
                <HeaderDiv>
                    <div style={{zIndex: 5}}>{header}</div>
                </HeaderDiv>
                <ArticlesContainer>
                    {articles.map((article, index) => (
                        <div>
                            {index === 0 && 
                                <a style={{textDecoration:'none'}} href={article.article_link}><FirstArticle article={article} /></a>
                            }
                            {index > 0 && index % 2 === 0 && articles.length >= 4 &&
                                <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article} /></a>
                            }
                            {index > 0 && index % 2 === 1 && articles.length >= 4 &&
                                <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article}/></a>
                            }
                            {articles.length >= 3 && index === articles.length - 1 || index === articles.length - 2 &&
                                <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article}/></a>
                            }
                        </div>
                    ))}
                </ArticlesContainer>
            </Container>
            <BackgroundContainer src={Background} />
        </Wrapper>
    );
};


export default Section;


