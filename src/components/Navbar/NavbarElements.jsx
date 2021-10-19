import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #1f1c38;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 4px 0 #00000063;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        font-size: 1.3rem;
        height: 75px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0px;
    max-width: 1100px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.6rem;
        cursor: pointer;
        color: #fff;
        /* margin-right: 35px; */
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.div`
    height: 80px;
    padding: 0px 10px;
`

export const NavLinks = styled(LinkS)`
    color: #e3e3e8;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #0ab9ec;
    }
`