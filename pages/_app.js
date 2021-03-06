import { auth, db } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import '../styles/globals.css'
import Login from './login';
import Loading from '../components/Loading';
import firebase from 'firebase';
import { useEffect } from 'react';
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
    db.collection("users").doc(user.uid).set({
      email: user.email,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      photoUrl:user.photoURL
    },{merger:true});  
    }
    
    return () => {
      
    }
  }, [user])
  if(loading) return <Loading/>
  if(!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp
