import React from "react";
import styled from "styled-components";
import LeftArticle from "./LeftArticle";
import RightArticle from "./RightArticle";

const Wrapper = styled.div`
    width: 85vw;
    position: relative;
    z-index: 5;

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-width: 90vw;
        justify-content: center;
    }
`;

const MiddleArticles = ({ 
    articles,
}) => {
    console.log("ARTICLES", articles);
    return (
        <Wrapper>     
            {articles.map((article, index) => 
                index % 2 === 0 ? <a style={{textDecoration:'none'}} href={article.article_link}><RightArticle article={article} /></a> : <a style={{textDecoration:'none'}} href={article.article_link}><LeftArticle article={article}/></a>
            )}
        </Wrapper>
    );
}

export default MiddleArticles;