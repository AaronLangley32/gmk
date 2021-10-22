import React from 'react'
import { BoardsContainer, BoardsWrapper, BoardsCard, BoardsImgFrame, BoardsImg, BoardsName, BoardsInfo  } from './BoardsElements'
import Icon1 from '../../images/Harbour.png'
import Icon2 from '../../images/F2-84.png'
import Icon3 from '../../images/Irma_Angle.jpg'
import Icon4 from '../../images/J02_Angle.jpg'
import Icon5 from '../../images/Kaze_Rabenda_3.jpg'
import Icon6 from '../../images/Rukia_Angle.jpg'
import Icon7 from '../../images/Satisfaction75_Angle.jpg'
import Icon8 from '../../images/Whiskey_Angle.jpg'

const Boards = () => {
    return (
        <BoardsContainer id='Boards'>
            <BoardsWrapper>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon1} />
                    </BoardsImgFrame>
                    <BoardsName>
                        Harbour
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon2} />
                    </BoardsImgFrame>
                    <BoardsName>
                        F2-82
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon3} />
                    </BoardsImgFrame>
                    <BoardsName>
                        Irma
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon4} />
                    </BoardsImgFrame>
                    <BoardsName>
                        J02
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon5} />
                    </BoardsImgFrame>
                    <BoardsName>
                        Kaze
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon6} />
                    </BoardsImgFrame>
                    <BoardsName>
                        Rukia
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon7} />
                    </BoardsImgFrame>
                    <BoardsName>
                        Satisfaction75
                    </BoardsName>
                </BoardsCard>
                <BoardsCard>
                    <BoardsImgFrame>
                        <BoardsInfo>
                            More Info
                        </BoardsInfo>
                        <BoardsImg  src={Icon8} />
                    </BoardsImgFrame>
                    <BoardsName>
                        Whiskey
                    </BoardsName>
                </BoardsCard>
            </BoardsWrapper>
        </BoardsContainer>
    )
}

export default Boards
