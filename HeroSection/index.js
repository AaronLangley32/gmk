import React from 'react'
import { HeroContainer, HeroBg, HeroImg } from "./HeroElements"
import Img from '../../images/Banner.png'

const HeroSection = () => {
    return (
        <HeroContainer id="boards">
            <HeroBg>s
                <HeroImg src={Img} />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
