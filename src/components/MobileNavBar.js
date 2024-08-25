import React, {useState} from 'react';
import styled from 'styled-components';
import SpecLogoHeader from '../components/SpecLogoHeader';
import { NavHashLink } from 'react-router-hash-link';
import {sections} from '../data/sections';
import Hamburger from 'hamburger-react'


const NavWrap = styled.div`
    color: white;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
    }

    @media only screen and (min-width: 1023px){
        display: none;
    }
`;

const MobileNav = styled.div`
    display: flex;
    padding: 0rem 1rem;
    background-color: #7C5E3D;
    width: 100vw;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: row;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    font-family: 'Fraunces', serif;
    font-weight: 700;
    background-color: #8B6A45;
    color: #FFFFFF;
    width: 100vw;
`;

const MenuIcon = styled.div`
    color: white;
    margin-right: 2rem;
    .menu {
        font-size:2.25rem;
    }
`;

const LinkWrapper = styled.div`
    margin: auto;
    margin-bottom: 0.5rem;
    width: 90vw;
    background-color: ${props => props.currentSection ? '#D9D9D9' : '#8B6A45'};
`;

const Link = styled.a`
    text-align: center;
    font-size:1rem;
    width: 80%;
    color: ${props => props.currentSection ? '#8B6A45' : '#FFFFFF'};
    &:hover{
         text-decoration: underline;
         cursor:pointer;
    }
`;

const NavText = styled.div`
    margin-right: 10px;
    font-style: normal;
    text-transform: uppercase;
`;

const MobileNavBar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <NavWrap>
            <MobileNav>
                <SpecLogoHeader />
                <MenuIcon>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </MenuIcon>
            </MobileNav>
            <MobileMenu>
                {sections.map((section, index) => {
                    return (
                        (isOpen) ?
                        <LinkWrapper currentSection = {window.location.pathname === section.url}>
                            <NavHashLink smooth to={section.url} style={{margin: '1rem'}}>
                                <Link currentSection = {window.location.pathname === section.url} key={index} onClick={() => setOpen(!isOpen)}>
                                    <NavText>{section.title}</NavText>
                                </Link>
                            </NavHashLink> 
                        </LinkWrapper>
                        : null
                    )
                })}
            </MobileMenu>
        </NavWrap>
    );
};

export default MobileNavBar;