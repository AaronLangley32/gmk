import styled from 'styled-components'

export const KeycapsContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e3e3e8;

    @media screen and (max-width: 768px){
        height: 800px;
    }

    @media screen and (max-width: 480px){
        height: 400px;
    }
`

export const KeycapsWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 40px 40px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
        padding: 20px 20px;
        grid-gap: 8px;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        padding: 10px 10px;
        grid-gap: 8px;
    }
`

export const KeycapsCard = styled.div`
    display: inline-block;
    position: relative;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    margin: 20px;
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
        margin: 20px;
    }

    @media screen and (max-width: 768px){
        width: 150px;
        height: 150px;
        margin: 15px;
    }

    @media screen and (max-width: 480px){
        width: 100px;
        height: 100px;
        margin: 5px;
    }
`

export const KeycapsImg = styled.img`
    height: 250px;
    margin-left: -20px;

    @media screen and (max-width: 1000px){
        height: 200px;
        margin-left: -20px;
        margin-top: -20px;
    }

    @media screen and (max-width: 768px){
        height: 200px;
        margin-left: -20px;
    }
`
export const KeycapsH2 = styled.p`
    color: #1f1c38;
    font-size: 2rem;
    text-align: center;

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

export const KeycapsH1 = styled.p`
`