import React from 'react';

function ChatMessage({message, auth}) {
    const { text, uid, photoURL } = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img src={photoURL || 'https://avatars.dicebear.com/4.5/api/gridy/example.svg'} alt="bot_img" className="chat-user-pic"/>
                <p>{text}</p>
            </div>
        </>
    );
}

export default ChatMessage;
