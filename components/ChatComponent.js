import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import "tailwindcss/tailwind.css";
 
function ChatComponent({id}) {
  return <Container>
    <UserAvatar  />
     I am Chat
     </Container>;
}

export default ChatComponent


const Container = styled.div.attrs({
  className: "flex items-center cursor-pointer p-4 break-words ",
})``;
const UserAvatar = styled(Avatar)``;