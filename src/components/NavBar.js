import React from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';
import SpecLogoHeader from './SpecLogoHeader';

const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
        display: none;
    }
    top:0;
    position: sticky;
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
    border-radius: 20px;
    color: ${props => props.currentSection ? '#F4D1D8' : '#F9B71A'};
    font-weight: ${props => props.currentSection ? 900 : 400};
    background-color: ${props => props.currentSection ? 'rgba(244, 209, 216, 0.2)' : '#4F3850'};
    padding: 0.85rem 1.25rem;
    font-size: 1rem;
    :hover {
        color: #F4D1D8;
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
    margin-right:1.5rem;
    text-transform: uppercase;
`;


const NavBar = () => {
    return(
        <NavWrapper>
            <VertNav>
            <SpecLogoHeader />
            {sections.map((section, index) => (
                <NavHashLink smooth to={section.url}>
                    <Tab currentSection = {window.location.pathname === section.url} key={index}>
                        <NavText>{section.title}</NavText>
                    </Tab>
                </NavHashLink>
            ))}
            </VertNav>
        </NavWrapper>
    );
};

export default NavBar;