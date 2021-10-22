import React from 'react'
import { KeycapsContainer, KeycapsH1, KeycapsH2, KeycapsWrapper, KeycapsCard, KeycapsImg } from './KeycapsElements'
import Icon1 from '../../images/Harbour.png'
import Icon2 from '../../images/F2-84.png'
import Icon3 from '../../images/Irma_Angle.jpg'
import Icon4 from '../../images/J02_Angle.jpg'
import Icon5 from '../../images/Kaze_Rabenda_3.jpg'
import Icon6 from '../../images/Rukia_Angle.jpg'

const Keycaps = () => {
    return (
        <KeycapsContainer id='Keycaps'>
            <KeycapsH1>
                <KeycapsWrapper>
                    <KeycapsCard>
                        <KeycapsImg src={Icon1}/>
                    </KeycapsCard>
                    <KeycapsCard>
                        <KeycapsImg src={Icon2}/>
                    </KeycapsCard>
                    <KeycapsCard>
                        <KeycapsImg src={Icon3}/>
                    </KeycapsCard>
                    <KeycapsH2>
                        Harbour
                    </KeycapsH2>
                    <KeycapsH2>
                        F2-82
                    </KeycapsH2>
                    <KeycapsH2>
                        Irma
                    </KeycapsH2>
                </KeycapsWrapper>
                <KeycapsWrapper>
                    <KeycapsCard>
                        <KeycapsImg src={Icon4}/>
                    </KeycapsCard>
                    <KeycapsCard>
                        <KeycapsImg src={Icon5}/>
                    </KeycapsCard>
                    <KeycapsCard>
                        <KeycapsImg src={Icon6}/>
                    </KeycapsCard>
                    <KeycapsH2>
                        J02
                    </KeycapsH2>
                    <KeycapsH2>
                        Kaze
                    </KeycapsH2>
                    <KeycapsH2>
                        Rukia
                    </KeycapsH2>
                </KeycapsWrapper>

            </KeycapsH1>
        </KeycapsContainer>
    )
}

export default Keycaps
