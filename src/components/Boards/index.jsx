import React from 'react'
import { BoardsContainer, BoardsH1, BoardsH2, BoardsWrapper, BoardsCard, BoardsImg } from './BoardsElements'
import Icon1 from '../../images/Harbour.png'
import Icon2 from '../../images/F2-84.png'
import Icon3 from '../../images/Irma_Angle.jpg'
import Icon4 from '../../images/J02_Angle.jpg'
import Icon5 from '../../images/Kaze_Rabenda_3.jpg'
import Icon6 from '../../images/Rukia_Angle.jpg'

const Boards = () => {
    return (
        <BoardsContainer id='Boards'>
            <BoardsH1>
                <BoardsWrapper>
                    <BoardsCard>
                        <BoardsImg src={Icon1}/>
                    </BoardsCard>
                    <BoardsCard>
                        <BoardsImg src={Icon2}/>
                    </BoardsCard>
                    <BoardsCard>
                        <BoardsImg src={Icon3}/>
                    </BoardsCard>
                    <BoardsH2>
                        Harbour
                    </BoardsH2>
                    <BoardsH2>
                        F2-82
                    </BoardsH2>
                    <BoardsH2>
                        Irma
                    </BoardsH2>
                </BoardsWrapper>
                <BoardsWrapper>
                    <BoardsCard>
                        <BoardsImg src={Icon4}/>
                    </BoardsCard>
                    <BoardsCard>
                        <BoardsImg src={Icon5}/>
                    </BoardsCard>
                    <BoardsCard>
                        <BoardsImg src={Icon6}/>
                    </BoardsCard>
                    <BoardsH2>
                        J02
                    </BoardsH2>
                    <BoardsH2>
                        Kaze
                    </BoardsH2>
                    <BoardsH2>
                        Rukia
                    </BoardsH2>
                </BoardsWrapper>

            </BoardsH1>
        </BoardsContainer>
    )
}

export default Boards
