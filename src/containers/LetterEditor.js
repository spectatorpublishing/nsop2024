import React from 'react';
import styled from 'styled-components';
import Crumpled from '../images/CrumpledPaper.jpeg';
import Card from '../images/Card.png';
import Fabric from '../images/Fabric.png';
import Crown from '../images/Crown.png';

const Wrapper = styled.div`
    position: relative;
    z-index: 5;
`

const LetterBackground = styled.div`
    padding: 10rem 2rem 5rem 2rem;
    width: 70%;
    margin: auto;
    z-index: 5;

    @media only screen and (max-width: 1023px){
        padding: 4rem 0rem;
        width: 100vw;
        margin: 0;
    }
`;

const BackgroundImage = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 5%;
    z-index: -1;

    @media only screen and (max-width: 1080px){
        display: none;
    }
`;

const CrownImg = styled.img`
    position: absolute;
    top: -3%;
    right: 15%;
    transform: rotate(20deg);
    width: 10rem;
    height: 10rem;

    @media only screen and (max-width: 1023px){
        top: -2%;
        right: 8%;
        width: 5rem;
        height: 5rem;
    }
`;

const LetterWrapper = styled.div`
    z-index: 5;
    padding: 5rem 8rem;
    background-size: cover;
    position: relative;
    @media only screen and (max-width: 768px){
        padding: 1.2rem;
        overflow-x: clip;
        margin: auto;
        width: 88%;
    }
`;

const LetterEditor = () => {
    return (
        <Wrapper>
            <BackgroundImage src={Fabric} />
            <LetterBackground style={{backgroundImage: `url(${Crumpled})`}}>
                <LetterWrapper style={{backgroundImage: `url(${Card})`}}>
                    <CrownImg src={Crown} />
                    <Title>Letter From The Editor</Title>
                    <Text>
                        <p>Dear class of 2028,</p>
                        <p>Welcome to Columbia! As you immerse yourself in the University community and settle into your new home, you will encounter a campus facing a pivotal moment in its history as you, too, undergo significant change. You probably have lots of lingering questions about what the years ahead will look like and how to navigate all of Columbia’s different facets. Inside this special issue, you will find everything we at Spectator think first-year students should know as you acquaint yourself with campus life.</p>
                        <h2>ABOUT SPECTATOR</h2>
                        <p>Spectator is a financially independent nonprofit organization and the largest student-run news media group on campus, serving tens of thousands of readers across Columbia, Morningside Heights, and West Harlem. We have a 148-year tradition of documenting history as it unfolds through in-depth, well-reported stories that hold institutional power to account. </p>
                        <p>Central to our mission is helping our audience make the most of their experience of Columbia and its surrounding communities through our award-winning journalism. With Spectator’s publications and products, we aim to identify and directly address the needs of students, faculty, staff, and residents. Across all of our departments—which consist of hundreds of reporters, multimedia journalists, designers, analysts, salespeople, engineers, and more—we work to keep you informed and continuously improve your college experience within and beyond the campus gates.</p>
                        <h2>JOINING SPECTATOR AND WORK-STUDY</h2>
                        <p>Joining Spec is one of the best ways to kick off your four years at Columbia. When you become a member of the Spec family, nestled in our office in Riverside Church, you step into a community of sharp and passionate students who care deeply about the work they do. You’ll build lifelong connections and friendships and learn skills that will define your Columbia experience.</p>
                        <p>Working at Spec is an unmatched opportunity to be part of a fully independent organization and make a tangible difference in a community of which you are now a member. We shape curious and eager staff members across journalism, business, and tech into the best versions of themselves as they grow as leaders, thinkers, and people ready to enter any career path they choose to pursue.</p>
                        <p>We are committed to ensuring that anyone who wants to join Spec, no matter your experience or background, can. That is why we are proud to offer one of the best work-study jobs on campus. If you qualify for work-study opportunities, even as a trainee, you can apply to our work-study program right away. You do not need prior experience to join any of Spec’s departments, so be sure to come to an Open House and check out <a href="http://joinspec.com">joinspec.com</a> to learn more about the various ways you can get involved. If you have any questions, don’t hesitate to reach out to us directly at <a href="mailto:editor@columbiaspectator.com">editor@columbiaspectator.com</a>.</p>
                    </Text>
                    <Signatures>
                        <Signature className='left'>
                            <div className='name'>Isabella Ramírez</div>
                            <div className='title'>Editor in Chief</div>
                        </Signature>
                        <Signature>
                            <div className='name'>Esha Karam</div>
                            <div className='title'>Managing Editor</div>
                        </Signature>
                    </Signatures>
                </LetterWrapper>
            </LetterBackground>
        </Wrapper>
    );
};

const Title = styled.div`
    color: #665B56;
    font-family: "Fraunces", serif;
    font-weight: 900;
    font-style: normal;
    font-size: 3.125rem;
    line-height: 4rem;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
    text-align: center;

    @media only screen and (max-width: 1023px){
        margin-top: 13%;
        font-size: 6vw;
    }
`;

const Text = styled.div`
    color: #665B56;
    font-family: 'Enriqueta', serif;
    
    @media only screen and (max-width: 1023px){
        padding: 0rem 1rem;
    }

    a{
        color: #665B56;
        font-weight: bold;
    }

    h2{
        margin-bottom: -1.2rem;

        @media only screen and (max-width: 1023px){
            font-size: 3vw;
            line-height: 1rem;
            margin: 0;
        }
    }

    p{
        font-style: normal;
        font-weight: 25rem;
        font-size: 1.29rem;
        line-height: 2rem;

        @media only screen and (max-width: 1023px){
            margin-bottom: 5%;
            margin-top: 0;
            font-size: 3vw;
            line-height: 2rem;
        }

        @media only screen and (max-width: 660px){
            margin-bottom: 5%;
            margin-top: 0;
            font-size: 3vw;
            line-height: 1.2rem;
        }
    }
`;

const Signatures = styled.div`
    font-family: 'Nothing You Could Do', cursive;
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    display: flex;
    justify-content: right;
    margin-top: 8rem;
    
    @media only screen and (max-width: 768px){
        margin-top: 5rem;
    }    
`;

const Signature = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name {
        color: #665B56;
        font-style: normal;
        font-weight: 25rem;
        font-size: 1.5rem;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: left;
        

        @media only screen and (max-width: 1023px){
            font-size: 3vw;
            line-height: 1rem;
        }
       
    }
    .title {
        color: #665B56;
        font-style: normal;
        font-family: "Special Elite", system-ui;
        font-weight: 25rem;
        font-size: 1.125rem;
        line-height: 1.813rem;

        @media only screen and (max-width: 1023px){
            font-size: 3vw;
            line-height: 1rem;
        }
    }
`;

export default LetterEditor;