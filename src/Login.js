import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase"

export function Login(props) {
    
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => 
            console.log(result)).catch((error)=> alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="" alt="" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
            
        </div>
    )
}
