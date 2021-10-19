import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, } from './NavbarElements'
const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <NavbarContainer>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="boards">Boards</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="keycaps">Keycaps</NavLinks>
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
                    <NavItem>
                        <NavLinks to="contactus">Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
