import styled from 'styled-components'

export const BoardsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1f1c38;

    @media screen and (max-width: 768px){
        height: 100%;
    }

    @media screen and (max-width: 480px){
        height: 100%;
    }
`

export const BoardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 75px;
    padding: 75px 0px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 50px;
        padding: 50px 0px;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;
        padding: 50px 0px;
    }
`

export const BoardsCard = styled.div`
`

export const BoardsImgFrame = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;  
    }

    @media screen and (max-width: 1000px){
        width: 175px;
        height: 175px;
    }

    @media screen and (max-width: 768px){
        width: 150px;
        height: 150px;
    }

    @media screen and (max-width: 480px){
        width: 125px;
        height: 125px;
    }
`

export const BoardsImg = styled.img`
    position: absolute;
    opacity: 1;
    height: 100%;

    &:hover {
        opacity: .3;
    }
`

export const BoardsInfo = styled.p`
    position: absolute;
    color: #e3e3e8;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 6px;

    @media screen and (max-width: 1000px){
        font-size: 2rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.4rem;
    }
    
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`

export const BoardsName = styled.p`
    color: #e3e3e8;
    margin-top: 15px;
    font-size: 2rem;
    text-align: center;

    @media screen and (max-width: 1000px){
        font-size: 1.4rem;
        margin-top: 15px;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
        margin-top: 10px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 1rem;
        margin-top: 10px;
    }
`