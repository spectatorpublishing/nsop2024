import React from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';
import SpecLogoHeader from './SpecLogoHeader';
import Crumpled from '../images/CrumpledPaper.jpeg';

const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
        display: none;
    }
    top:0;
    position: sticky;
    z-index: 6;
`;

const VertNav = styled.div`
    right: 4vw;
    top: 3rem;
    z-index:100;
    padding:1rem 0rem;
    position: absolute;
    margin-right: 0.1rem;
    padding-right: 1.2rem;
`;

const Tab = styled.a`
    display: flex;
    width: fit-content;
    justify-content: flex-end;
    margin-left: auto;
    color: #F2F2F2;
    background-color: ${props => props.currentSection ? 'rgba(244, 209, 216, 0.2)' : ''};
    margin-right: ${props => props.currentSection ? '1.5rem' : ''};
    padding: 0.85rem 1.25rem;
    font-size: 1.5rem;
    :hover {
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    text-shadow: -2px 0 #6C6C6C, 0 2px #6C6C6C, 2px 0 #6C6C6C, 0 -2px #6C6C6C;
    text-transform: uppercase;
`;


const NavBar = () => {
    return(
        <NavWrapper>
            <VertNav>
            <SpecLogoHeader />
            {sections.map((section, index) => (
                <NavHashLink smooth to={section.url}>
                    <Tab currentSection = {window.location.pathname === section.url} key={index} style={{backgroundImage: `${window.location.pathname === section.url ? `url(${Crumpled})` : ''}`, backgroundSize: 'cover'}}>
                        <NavText>{section.title}</NavText>
                    </Tab>
                </NavHashLink>
            ))}
            </VertNav>
        </NavWrapper>
    );
};

export default NavBar;