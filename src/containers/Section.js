import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';
import SpecLogoHeader from '../components/SpecLogoHeader';

const Container = styled.div`
    min-height: 100vh;
    background: #4F3850; 
`;

const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 15rem;
    color: white;
    font-family: 'Black Han Sans';
    font-size: 8vw;
    font-weight: 400;
    padding: 2rem 4rem;
    display: flex;
    text-transform: capitalize;

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

const Title = styled.div`
    display: flex; 
    align-content: center;
    color: #F4D1D8;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: 1;
    font-size: 8vw;
    text-align: right;
`;

const Title2 = styled.div`
    display: flex;
    align-items: center;
    color: #F4D1D8;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: .5;
    font-size: 3.6vw;
    width:fit-content;
    text-align: right;
    margin-bottom: 0.5vw;
`;

const Title3 = styled.div`
    display: flex;
    align-items: center;
    color: #F4D1D8;
    font-family: 'Black Han Sans';
    font-weight: 400;
    line-height: .85;
    margin-top: 0.5vw;
    font-size: 3.6vw;
    width:auto;
    text-align: right;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 4rem;
    @media screen and (max-width: 1023px) {
        margin-left: 0rem;
        justify-content: center;
    }
`;

const TitleContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    margin-left: 1.5vw;
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
                    (index % 2 === 0) ? <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article} color={index % 3} /></a> : <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article} color={index % 3}/></a>
                ))}
            </ArticlesContainer>
        </Container>
    );
};


export default Section;


