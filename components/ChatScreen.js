import { Avatar, IconButton } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useCollection } from 'react-firebase-hooks/firestore'
import Message from './Message'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import firebase from 'firebase'
import getRecipientEmail from '../utils/getRecipientEmail'
import TimeAgo from 'timeago-react';
function ChatScreen({ chat, messages }) {
    console.log(messages);
    const [user] = useAuthState(auth)
    const endOfMessageRef=useRef(null)
    const router = useRouter();
    const [input, setInput] = useState("")
    const [messagesSnapshot]=useCollection(db.collection('chats').doc(router.query.id).collection("messages").orderBy("timestamp", "asc"))
        //  console.log("i am a problem 1 ", messagesSnapshot);
    const [recipientSnapshot]=useCollection(db.collection('users').where("email","==", getRecipientEmail(chat.users, user)))
    
    const showMessage = () => {
      
        if (messagesSnapshot) {
           
            return messagesSnapshot.docs.map((message) =>( 
                // console.log(message);
               <Message key={message.id} user={message.data().user}
                    message={{
                        ...message.data(),
                        timestamp: message.data()?.timestamp?.toDate().getTime()
                    }}
                />
            ))
        } else {
        //  console.log(messagesSnapshot);

            console.log(messages);
            return JSON.parse(messages).map((message) =>( 
                 <Message
                    key={message.id}
                    user={message.user}
                    message={message}
                  />
            ))
        }
    }

    const ScrollToBottom = () => {
        endOfMessageRef.current.scrollIntoView({
            behavior: "smooth",
            block:"start"
        })
    }
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('users').doc(user.uid).set({
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        }, { merge: true }
        )
        db.collection('chats').doc(router.query.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user.email,
            photoURL: user.photoURL
        })
        setInput("");
        ScrollToBottom()
    }
    const recipient=recipientSnapshot?.docs?.[0]?.data()
    const recipientEmail=getRecipientEmail(chat.users, user)
    return (
      <Container>
        <Header>
          {recipient ? <Avatar src={recipient?.photoUrl} /> : <Avatar > {recipientEmail[0]} </Avatar>}
          <HeaderInformation>
                    <h3> {recipientEmail}</h3>
                    {
                        recipientSnapshot ?
                           ( <p>Last active:{' '}
                                {
                                    recipient?.lastSeen?.toDate() ? (
                                    <TimeAgo datetime={recipient?.lastSeen?.toDate()}/>
                            ): "Unavailable" }
                            </p>) :
                            (
                                <p>Loading last active</p>
                            )
                    }
           
          </HeaderInformation>
          <HeaderIcons>
            <IconButton>
              <AttachFileIcon />
              <MoreVertIcon />
            </IconButton>
          </HeaderIcons>
        </Header>
        <MessageContainer className="h-screen p-8 bg-red-100">
          {showMessage()}
          {/* <Message/> */}
          <EndOfMessage ref={endOfMessageRef} />
        </MessageContainer>
        <InputContainer>
          <InsertEmoticonIcon />
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <button disabled={!input} onClick={sendMessage}>
            Send
          </button>
          <MicIcon />
        </InputContainer>
      </Container>
    );
}

export default ChatScreen

const Container = styled.div.attrs({
    className:"h-screen"
})``;

const Header = styled.div.attrs({
    className:"sticky bg-white z-100 top-0 flex p-2 h-16 items-center border-b-2 border-gray-200"
})``
const HeaderInformation = styled.div.attrs({
className:"m-2 flex-1" 
})``;
const HeaderIcons = styled.div.attrs({})``;
const MessageContainer = styled.div.attrs({
    
})``;
const InputContainer = styled.div.attrs({

     className:"flex items-center p-3 sticky bottom-0 bg-white z-50",
})``;
const Input = styled.input.attrs({
    className:"flex-1 outline-none border-none rounded-xl bg-gray-50 p-2 ml-4 mr-4",
})``;

const EndOfMessage = styled.div.attrs({
    className:"m-10"
})``;