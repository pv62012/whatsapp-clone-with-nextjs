import styled from "styled-components";
import { Avatar, Button} from "@material-ui/core";
import "tailwindcss/tailwind.css";

export const Container = styled.div`
border-right:1px solid whitesmoke;
height:100vh;
min-width:300px;
max-width:350px;
overflow-y:hidden;

`;
export const Header = styled.div.attrs({
  className:
    "flex flex-1 sticky top-0 bg-white z-50 align-middle p-4 h-16 border-b-2 border-gray-200 ",
})`
display:flex;
width:100%;
justify-content:space-between;
`;
export const UserAvatar = styled(Avatar).attrs({
  className:" cursor-pointer hover:opacity-80"
})`
  /* cursor: pointer; */

  /* :hover {
    opacity: 0.8;
  } */
`;

export const IconsContainer = styled.div``;

export const Search = styled.div`
display:flex;
align-items:center;
padding:20px;
border-radius:2px;

`;
export const SearchInput = styled.input`
outline-width:0;
outline:none;
border:none;
flex:1;
`;
export const SidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;
export const ChatUserList = styled.div`
height:100%;
overflow-y:scroll;
`;