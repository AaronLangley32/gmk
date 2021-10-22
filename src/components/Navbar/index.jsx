import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, } from './NavbarElements'
const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Boards">Boards</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Keycaps">Keycaps</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="deskmats">Deskmats</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="cables">Cables</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="socials">Socials</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
