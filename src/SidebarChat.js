import React,{useState, useEffect} from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';
import {Link} from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    // useEffect is rendered initially when the component loads and the seed will be set to some random value
    useEffect(()=>{
            setSeed(Math.floor(Math.random()*5000))
    },[])

    const createChat=()=>{
        const roomName= prompt("Please enter name of chat room");

        if(roomName){
            db.collection('rooms').add({
                name: roomName,
            });
        }
    }
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name} </h2>
                    <p>Message...</p>
                </div>
            </div>
        </Link>
        
    ) : (
       <div onClick={createChat}
           className="sidebarChat" >
               <h2>Add new Chat</h2>
       </div> 
    )
}

export default SidebarChat
