import React from "react";
import styled from "styled-components";

const SpecLogo = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 2rem;
`;

const Image = styled.img`
    width: 3rem;
    height: auto;
    @media only screen and (max-width: 768px){
        width: 2rem;
    }
`;

const SpecLogoHeader = () => {
    return (
        <div>
            <SpecLogo><a href="https://www.columbiaspectator.com/"><Image src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png" alt="Columbia Spectator logo" ></Image></a></SpecLogo>
        </div>
    )
}

export default SpecLogoHeader;