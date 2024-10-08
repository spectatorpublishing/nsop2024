import React from "react";
import styled from "styled-components";
import CrumpledPaper from '../images/CrumpledPaper.jpeg';
import Card from '../images/Card.png';
import Fabric from '../images/Fabric.png';
import Crown from '../images/Crown.png';

const RightArticleWrapper = styled.div`
    width: 100vw;
    height: 50rem;
    display: flex;
    z-index: 1;
    justify-content: center;
    position: relative;
    @media (min-width: 2000px) {
        height: 73rem;
    }
    @media (min-width: 701px) and (max-width: 1023px) {
        height: 35rem;
    }
    @media (min-width: 511px) and (max-width: 700px) {
        height: 25rem;
    }
    @media screen and (max-width: 510px) {
        height: 18rem;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    position: absolute;
    left: 40%;
    top: 20%;
    /* @media (min-width: 511px) and (max-width: 1023px) {
        width: 60%;
        top: 15%;
        left: 30%;
    } */
    @media (min-width: 1700px) {
        top: 15%;
    }
    @media screen and (max-width: 1023px) {
        width: 60%;
        top: 15%;
        left: 30%;
    }
`;

const InfoCardBorder = styled.div`
    padding: 1rem;
    width: 30%;
    height: 26%;
    background-size: cover;
    position: absolute;
    z-index: 10;
    left: 15%;
    bottom: 20%;
    @media screen and (max-width: 1023px) {
        padding: 0.5rem;
        width: 45%;
        left: 10%;
        height: 22%;
        bottom: 10%;
    }
`;

const InfoCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MainImage = styled.div`
    width: 80%;
    border: 0.5rem white solid;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-height: 100%;
    }
`;

const CrownImg = styled.img`
    position: absolute;
    bottom: 20%;
    right: 16%;
    transform: rotate(20deg);
    width: 10rem;
    height: 10rem;

    /* @media (min-width: 2200px) {
        bottom: 20%;
        right: 18%;
    } */

    @media screen and (max-width: 1023px) {
        display: none;
    }
`;


const ArticleTitle = styled.div`
    color: #665B56;
    font-family: "Fraunces", serif;
    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0rem 2rem 1rem 2rem;
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    /* @media screen and (max-width: 1023px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 550px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.6rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.5rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.4rem;
    } */
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
    /* @media screen and (max-width: 1023px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 768px) {
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

    @media screen and (max-width: 1023px) {
        font-size: 1.5vw;
        margin: 0rem 0.5rem;
    }
`;


const RightArticle = ({ 
    article
 }) => {
    return (
        <RightArticleWrapper style={{backgroundImage: `url(${Fabric})`, backgroundSize: 'cover'}}>     
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
            <Column>
                <MainImage>
                    <img src={article.image_url}/>
                </MainImage>
            </Column>
            <CrownImg src={Crown} />
        </RightArticleWrapper>
    );
}

export default RightArticle;