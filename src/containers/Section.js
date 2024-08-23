import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import FirstArticle from '../components/FirstArticle';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #8FB8FE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
`;

const HeaderDiv = styled.div`
    display: flex; 
    color: #665B56;
    font-family: "Fraunces", serif;
    font-weight: 900;
    line-height: 1;
    font-size: 6vw;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
    margin: 0rem 3rem 0rem 3rem;

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
        <Container>
            <NavBar />
            <MobileNavBar />
            <HeaderDiv>
                {header}
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
    );
};


export default Section;


