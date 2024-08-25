import React from "react";
import styled from "styled-components";
import CrumpledPaper from '../images/CrumpledPaper.jpeg';
import Card from '../images/Card.png';

const Wrapper = styled.div`
    width: 85vw;
    height: 82vh;
    margin: 15px;
    position: relative;
    z-index: 5;

    @media screen and (max-width: 1023px) {
        width: 100%;
        height: 40vh;
        max-width: 90vw;
        justify-content: center;
        margin: 10px;
    }
`;

const MainImage = styled.div`
    width: 90%;
    height: 90%;
    border: 0.5rem white solid;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 1023px) {
        max-width: 100%;
        max-height: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        max-height: 80%;
    }
`;

const InfoCardBorder = styled.div`
    position: absolute;
    bottom: 0%;
    right: 0%;
    padding: 1rem;
    width: 35%;
    height: 23%;
    background-size: cover;
    @media screen and (max-width: 1023px) {
        width: 50%;
        right: 5%;
        padding: 0.5rem;
    }
`;

const InfoCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ArticleTitle = styled.div`
    display: flex;
    flex-direction: column;
    color: #665B56;
    font-family: "Fraunces", serif;
    font-size: 1.2rem;
    text-shadow: -4px 0 white, 0 4px white, 4px 0 white, 0 -4px white;
    font-style: normal;
    font-weight: 900;
    margin: 0rem 2rem 1rem 2rem;
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 1023px) {
        font-size: 2vw;
        margin: 0rem 0.5rem;
    }
`;

const ArticleAuthor = styled.div`
    color: #262439;
    text-align: left;
    font-family: 'Enriqueta', serif;
    font-style: normal;
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0rem 2rem;
    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 1023px) {
        font-size: 1.5vw;
        margin: 0rem 0.5rem;
    }
    /* @media screen and (max-width: 768px) {
        font-size: 1.0rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 550px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.6rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.5rem;
    } */
`;

const FirstArticle = ({ 
    article,
}) => {
    return (
        <Wrapper>     
            <MainImage>
                <img src={article.image_url} />
            </MainImage>
            <InfoCardBorder style={{ backgroundImage: `url(${CrumpledPaper})` }}>
                <InfoCard style={{ backgroundImage: `url(${Card})` }}>
                    <ArticleTitle>
                        {article.article_title}
                    </ArticleTitle>
                    <ArticleAuthor>
                        {article.article_authors}
                    </ArticleAuthor>
                </InfoCard>
            </InfoCardBorder>
        </Wrapper>
    );
}

export default FirstArticle;