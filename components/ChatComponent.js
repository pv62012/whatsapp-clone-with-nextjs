import { Avatar } from '@material-ui/core';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components'
import "tailwindcss/tailwind.css";
import { auth, db } from '../firebase';
import getRecipientEmail from '../utils/getRecipientEmail';
import { useRouter } from "next/router";
 
function ChatComponent({ id, users }) {
  const router = useRouter();

  // console.log(users);
  const [user] = useAuthState(auth)
  const [recipientSnapshot]=useCollection(db.collection("users").where("email","==" , getRecipientEmail(users, user)))
  const recipient=recipientSnapshot?.docs?.[0]?.data()
  const recipientEmail = getRecipientEmail(users, user)
  // console.log(recipientEmail);
  
   
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  return (

    <Container onClick={enterChat} >
      {recipient ? (
        <UserAvatar src={recipient?.photoUrl} />
      ) : (
        <UserAvatar className="m-1 mr-2 ">{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default ChatComponent


const Container = styled.div.attrs({
  className: "flex items-center cursor-pointer p-4 break-words hover:bg-gray-300",
})``;
const UserAvatar = styled(Avatar)``;