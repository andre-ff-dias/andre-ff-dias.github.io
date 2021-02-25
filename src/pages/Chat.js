import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
//components
import ChatRoom from '../components/chat/ChatRoom';
import SignIn from '../components/chat/SignIn';
import SignOut from '../components/chat/SignOut';
//css
import '../styles/Chat.css';

const { REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN, 
    REACT_APP_FIREBASE_PROJECT_ID, 
    REACT_APP_FIREBASE_STORAGE_BUCKET, 
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
    REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID } = process.env;

firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
  });

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
    const [user] = useAuthState(auth);

    return (
        <div className="Chat">
            <div className="chat-container">
                <header>
                    { auth.currentUser ? <SignOut auth={auth}/> : null}
                </header>
                <section>
                    {user ? <ChatRoom firestore={firestore} auth={auth}/> : <SignIn auth={auth}/>}
                </section>
            </div>
            
        </div>
    );
}

export default Chat;
