import { Avatar, IconButton } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth } from '../firebase'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from "@material-ui/icons/MoreVert";
function ChatScreen({chat, messages} ) {
    const [user]=useAuthState(auth)
    const router = useRouter();

    return (
        <Container>
            <Header>
                <Avatar />
                <HeaderInformation>
                    <h3> RecipientEmail</h3>
                    <p>Last Seen</p>
                </HeaderInformation>
                <HeaderIcons>
                    <IconButton>
                        <AttachFileIcon />
                        <MoreVertIcon/>
                    </IconButton>
                </HeaderIcons>
           </Header>
        </Container>
    )
}

export default ChatScreen

const Container = styled.div.attrs({
    className:"m-2"
})``;

const Header = styled.div.attrs({
    className:"position-sticky bg-white z-100 top-0 flex p-2 h-16 items-center border-b-2 border-gray-200"
})``
const HeaderInformation = styled.div.attrs({
className:"m-2 flex-1" 
})``;
const HeaderIcons = styled.div.attrs({})``;
