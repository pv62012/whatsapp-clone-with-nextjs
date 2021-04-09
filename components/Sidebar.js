import {  IconButton } from '@material-ui/core';
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollection} from 'react-firebase-hooks/firestore'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chat from "@material-ui/icons/Chat";
import {
  Container,
  UserAvatar,
  IconsContainer,
  Header,
  Search,
  SearchInput,
  SidebarButton,
  ChatUserList,
} from "../styles/SidebarStyled";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator"
import "tailwindcss/tailwind.css";
import { auth, db } from '../firebase';
import ChatComponent from './ChatComponent';

function Sidebar() {
  const [user] = useAuthState(auth);

    const userChatRef = db.collection("chats").where('users', 'array-contains', user?.email)
  const [chatSnapshot] = useCollection(userChatRef);
 
const createChat = () => {
  const input = prompt(
    "Please enter an email address for the user you wish to chat with"
  );

  if (!input) return null;
  if (
    EmailValidator.validate(input) &&
    !chatAlreadyExists(input)  &&
    input !== user.email
  ) {
    //we need to add chat in database
    db.collection("chats").add({
      users: [user.email, input],
    });
  }
};

    const chatAlreadyExists = (recipientEmail) => 
       !!chatSnapshot?.docs.find((chat) => chat.data().users.find((user) =>user=== recipientEmail)?.length > 0);

    return (
      <Container>
        {/* {console.log(user?.photoURL)} */}
        <Header>
          <UserAvatar src={user?.photoURL} onClick={() => auth.signOut()} />
          <IconsContainer>
            <IconButton>
              <Chat />
            </IconButton>
            <MoreVertIcon />
          </IconsContainer>
        </Header>
        <Search>
          <SearchIcon />
          <SearchInput placeholder="Search in chates" />
        </Search>
        <SidebarButton onClick={createChat}>Start new chat</SidebarButton>

        {/* list of chats contact */}
        <ChatUserList>
          {chatSnapshot?.docs.map((chat) => (
            <ChatComponent
              key={chat.id}
              id={chat.id}
              users={chat.data().users}
            />
          ))}
        </ChatUserList>
      </Container>
    );
}

export default Sidebar
