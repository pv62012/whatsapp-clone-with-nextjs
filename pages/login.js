import React from 'react'
import Head from "next/head"
import styled from "styled-components"
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

const signin = () => {
    auth.signInWithPopup(provider).catch(alert)
}

function Login() {
    return (
        <div>
            <Container>
                <Head>
                    <title>Login</title>
                </Head>
                <LoginContainer>
                    <Logo src="/images/icon1.jpg" />
                    <Button variant="outlined" onClick={signin }>Sign in With Google</Button>
                </LoginContainer>
            </Container>
        </div>
    )
}

export default Login

const Container = styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:whitesmoke;

`;
const LoginContainer = styled.div`
padding:80px;
display:flex;
flex-direction:column;
background-color:white;
box-shadow:1px 2px 10px rgba(0,0,0,0.7)
`;


const Logo = styled.img`
width:200px;
height:200px;
margin-bottom:20px;
`;