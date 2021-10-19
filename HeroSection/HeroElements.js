import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1000px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: none;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export const HeroImg = styled.img`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`