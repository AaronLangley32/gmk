import React from 'react'
import { HeroContainer, HeroContent, HeroImg } from './HeroElements'
import Img from '../../images/Banner.png'

const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroImg src={Img} />
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroSection
