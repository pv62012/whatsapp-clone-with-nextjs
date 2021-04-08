import styled from "styled-components";
import { Avatar, Button} from "@material-ui/core";
import "tailwindcss/tailwind.css";

export const Container = styled.div``;
export const Header = styled.div.attrs({
  className:
    "flex sticky top-0 bg-white z-1 justify-between align-middle p-4 h-20 border-b-2 border-gray-200 ",
})``;
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