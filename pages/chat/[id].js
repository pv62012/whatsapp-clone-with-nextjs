import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { auth, db } from '../../firebase'
import getRecipientEmail from '../../utils/getRecipientEmail'
import { useAuthState } from 'react-firebase-hooks/auth'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
function Chat({ chat, messages }) {
    const [user]=useAuthState(auth)
    const [open, setOpen] = useState(false)

    return (
        <Container className="relative">
              <div className="absolute top-3 right-1 z-50 md:hidden" onClick={()=>setOpen(!open)}>
                   <MenuOpenIcon style={{width:"40x", height:"40px"}}/>
                </div>
            <Head>
                <title>Chat with { getRecipientEmail(chat.users, user)}</title>
            </Head>
            <Sidebar open={open} />
            <ChatContainer className={` ${open?"hidden":"flex flex-col"} `} >
              
                <ChatScreen chat={chat} messages={ messages}/>
            </ChatContainer>
        </Container>
    )
}

export default Chat

export async function getServerSideProps(context) {
    const ref = db.collection("chats").doc(context.query.id);

    const messagesRes = await ref.collection("messages").orderBy("timestamp", "asc").get();

    const messages = messagesRes.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })).map(messages => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }));

    //PREP ThE Chats
    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }
    return {
        props: {
            messages: JSON.stringify(messages),
            chat:chat
        }
    }
}
const Container = styled.div.attrs({ 
    className:"flex h-screen relative"
})``;
const ChatContainer = styled.div.attrs({
  className: "flex-1 h-screen",
})``;