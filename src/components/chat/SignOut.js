import React from 'react';

import 'firebase/auth';

function SignOut({auth}) {
    return (
        <button className="chat-btn sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;
