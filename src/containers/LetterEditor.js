import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    z-index: 5;
    padding: 2rem;
    @media only screen and (max-width: 768px){
        padding: 1rem;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrapper>
            <Title>Letter From The Editor: </Title>
            <MobileTitle>Letter From The Editor: </MobileTitle>
            
            <Text>
                <p>Dear class of 2028,</p>
                <p>Welcome to Columbia! As you immerse yourself in the University community and settle into your new home, you will encounter a campus facing a pivotal moment in its history as you, too, undergo significant change. You probably have lots of lingering questions about what the years ahead will look like and how to navigate all of Columbia’s different facets. Inside this special issue, you will find everything we at Spectator think first-year students should know as you acquaint yourself with campus life.</p>
                <p>ABOUT SPECTATOR</p>
                <p>Spectator is a financially independent nonprofit organization and the largest student-run news media group on campus, serving tens of thousands of readers across Columbia, Morningside Heights, and West Harlem. We have a 148-year tradition of documenting history as it unfolds through in-depth, well-reported stories that hold institutional power to account. </p>
                <p>Central to our mission is helping our audience make the most of their experience of Columbia and its surrounding communities through our award-winning journalism. With Spectator’s publications and products, we aim to identify and directly address the needs of students, faculty, staff, and residents. Across all of our departments—which consist of hundreds of reporters, multimedia journalists, designers, analysts, salespeople, engineers, and more—we work to keep you informed and continuously improve your college experience within and beyond the campus gates.</p>
                <p>JOINING SPECTATOR AND WORK-STUDY</p>
                <p>Joining Spec is one of the best ways to kick off your four years at Columbia. When you become a member of the Spec family, nestled in our office in Riverside Church, you step into a community of sharp and passionate students who care deeply about the work they do. You’ll build lifelong connections and friendships and learn skills that will define your Columbia experience.</p>
                <p>Working at Spec is an unmatched opportunity to be part of a fully independent organization and make a tangible difference in a community of which you are now a member. We shape curious and eager staff members across journalism, business, and tech into the best versions of themselves as they grow as leaders, thinkers, and people ready to enter any career path they choose to pursue.</p>
                <p>We are committed to ensuring that anyone who wants to join Spec, no matter your experience or background, can. That is why we are proud to offer one of the best work-study jobs on campus. If you qualify for work-study opportunities, even as a trainee, you can apply to our work-study program right away. You do not need prior experience to join any of Spec’s departments, so be sure to come to an Open House and check out <a href="http://joinspec.com">joinspec.com</a> to learn more about the various ways you can get involved. If you have any questions, don’t hesitate to reach out to us directly at <a href="mailto:editor@columbiaspectator.com">editor@columbiaspectator.com</a>.</p>
                <Spacing/>
                <p>Best wishes,</p>
            </Text>
            <Signatures>
                <Signature className='left'><div className='name'>Isabella Ramírez</div><div className='title'>Editor in Chief</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Esha Karam</div><div className='title'>Managing Editor</div></Signature>
            </Signatures>
        </LetterWrapper>
    );    
};

const Title = styled.div`
    color: white;
    font-family: 'Black Han Sans';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (max-width: 570px) {
        display: none;
    }

    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 1.6rem;
        display: inline-block;
        display: none;
    }
`;

const MobileTitle = styled.div`
    
    color: white;
    font-family: 'Black Han Sans';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (min-width: 570px) {
        display: none;
    }
`;

const Text = styled.div`
    p{
    color: white;
    font-family: 'Khula';
    font-style: normal;
    font-weight: 25rem;
    font-size: 1.29rem;
    line-height: 2rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 0.9rem;
        display: inline-block;
    }
    }
`;

const Signatures = styled.div`
    font-family: 'Nothing You Could Do', cursive;
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1.88rem;
        text-align: left;
    }    
`;

const Spacing = styled.div`
    width: 8rem;
    height: 1.4rem;  
`;

const Signature = styled.div`
    .name {
        color: white;
        font-style: normal;
        font-weight: 25rem;
        font-size: 2.4rem;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: left;
        
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
            line-height: 3px;
            padding-top: 15px;
        }
       
    }
    .title {
        color: white;
        font-style: normal;
        font-family: Khula;
        font-weight: 25rem;
        font-size: 1.125rem;
        line-height: 1.813rem;
        margin: 0rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
            display: inline-block;
        }
    }
    margin: 0rem;
`;

export default LetterEditor;