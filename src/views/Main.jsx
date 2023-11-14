import { ChatListBox } from "../components/Main/ChatListBox";
import { useState } from "react";
import { ChatListContainer, ChatListLiContainer, Container, IconsModalWrapper, IconsWrapper, StyledIcon } from "../css/styled/main.styled";
import { ChattingContainer } from "../components/Main/ChattingContainer";
import { PeopleListBox } from "../components/Profile/PeopleListBox";
import { users } from "../constant/main.data";

export const Main = () => {
    const [isChatListActive, setIsChatListActive] = useState(false);
    const [isChatContentActive, setIsChatContentActive] = useState(false);//
    
    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;
    
    const chatListClick = () => {//
        console.log('active');
        setIsChatContentActive(true);
    };

    return (
        <>
            <Container>
                {/* 채팅 목록: 왼쪽 영역 */}
                <ChatListContainer className="left-pane">
                    <IconsModalWrapper>
                        {/* 처음 진입하거나 왼쪽부분 사이즈를 줄이고 싶을때 */}
                        <IconsWrapper>
                                <StyledIcon className="fas fa-user" size='30px' marginright="20px" onClick={()=> {
                                    setIsChatListActive(false);
                                }} />
                                <StyledIcon className="fas fa-comment" size="30px" onClick={()=> {
                                    setIsChatListActive(true);
                                }} />
                        </IconsWrapper>
                    </IconsModalWrapper>
                    
                </ChatListContainer>
                
                {/* 채팅 치는 영역 */}
                {/* 채팅 목록 리스트 */}
                <ChatListLiContainer>{/* components/Main/ChatListBox.jsx */}
                    
                    {
                        isChatListActive ? (//1.onClick이벤트를 ChatListBox에 전달 2.isChatContentActive의 props를 ChattingContainer에 전달
                            USERS.map(({name, profileImg},idx) => <ChatListBox username={name} profileimg={profileImg} key={idx} chatListClick={onClick}/>)
                        ) : (
                            USERS.map(({name, img},idx) => <PeopleListBox username={name} userimg={img} key={idx}/>)
                        )
                    }
                </ChatListLiContainer> 
                {
                    isChatContentActive ? (
                        <ChattingContainer className="right-pane" />
                    ) : null
                }
            </Container>
        </>
    )
}


