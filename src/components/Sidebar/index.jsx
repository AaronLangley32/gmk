import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='boards' onClick={toggle}>Boards</SidebarLink>
                    <SidebarLink to='keycaps' onClick={toggle}>Keycaps</SidebarLink>
                    <SidebarLink to='deskmats' onClick={toggle}>Deskmats</SidebarLink>
                    <SidebarLink to='cables' onClick={toggle}>Cables</SidebarLink>
                    <SidebarLink to='socials' onClick={toggle}>Socials</SidebarLink> 
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
