import React from "react";
import styled from "styled-components";
import Red from "../images/Red.svg"
import Yellow from "../images/Yellow.svg"
import Green from "../images/Green.svg"
import SmallGreen from "../images/SmallGreen.svg"
import SmallRed from "../images/SmallRed.svg"
import SmallYellow from "../images/SmallYellow.svg"

const LeftArticleWrapper = styled.div`
    max-width: 70vw;
    margin: 15px;
    display: flex;
    z-index: 1;

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-width: 90vw;
        justify-content: center;
        margin: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;

const MainImage = styled.div`
    max-width: 100%;
    max-height: 100%;
    z-index: 2;
    position: relative;
    margin: 0rem 0rem 0rem -10%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 1023px) {
        max-width: 100%;
        max-height: 100%;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
        max-height: 100%;

        img {
            margin: 0px 0px 0px 0px;
        }
    }
`;

const TitleImage = styled.div`
    display: flex;
    z-index: 3;
    max-width: 100%;
    margin: 0rem 0rem 0rem 0%;
    position: relative;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ArticleImage = styled.div`
    position: absolute;
    max-height: 80%;
    max-width: 70%;
    overflow: hidden;
    top: 10%;
    right: 10%;
    border-radius: 10px;
`

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: fit-content;
    margin: 0rem 0rem 0rem 0rem;
    color: #FFFFFF;
    text-align: center;
    font-family: "Black Han Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    text-shadow: 0px 0px 2px black;
`;

const ArticleTitle = styled(ArticleInfo)`
    position: absolute;
    font-size: 1.4rem;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10%;
    padding-bottom: 10%;
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 1023px) {
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
    }
`;

const ArticleAuthor = styled(ArticleInfo)`
    color: #FFFFFF;
    text-align: left;
    margin-left: 10%;
    padding-top: 5%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Khula;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 1.3rem;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 1023px) {
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
    }
`;


const LeftArticle = ({ 
    article,
    color
 }) => {
    var background
    var titleb
    if (color === 0) {
        background = Yellow
        titleb = SmallGreen
    } else if (color === 1) {
        background = Green
        titleb = SmallRed
    } else if (color === 2) {
        background = Red
        titleb = SmallYellow
    }
    return (
        <LeftArticleWrapper>     
            <Column>
                <TitleImage>
                    <img alt={article.article_title} src={titleb}/>
                    <ArticleTitle>{article.article_title}</ArticleTitle>
                </TitleImage>
                <ArticleAuthor>
                    BY: {article.article_authors}
                </ArticleAuthor>
            </Column>
            <Column>
                <MainImage>
                    <img alt={article.article_title} src={background}/>
                    <ArticleImage>
                        <img src={article.image_url}/>
                    </ArticleImage>
                </MainImage>
            </Column>
        </LeftArticleWrapper>
    );
}

export default LeftArticle;