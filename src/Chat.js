import React,{useState, useEffect} from 'react'
import {Avatar, IconButton, Icon} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVert from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/MicOutlined';
import {useParams} from 'react-router-dom';
import db from './firebase';
import './Chat.css'

export function Chat(props) {
    //const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(()=>{
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId]);
    // useEffect is rendered initially when the component loads and the seed will be set to some random value
    // useEffect(()=>{
    //         setSeed(Math.floor(Math.random()*5000))
    // },[])

    const sendMessage = (e) =>{
        e.preventDefault();
        alert("you sent a message");
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random()*5000)}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                   <IconButton>
                        <AttachFile/>
                   </IconButton>
                   <IconButton>
                        <MoreVert/>
                   </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>                     
                    <span className="chat_name">Kavya</span>
                    Hey Guys  
                    <span className="chat_timestamp">2:30 PM</span>
                </p>
                
            </div>
            <div className="chat_footer">
                <InsertEmoticon/>
                <form>
                    <input value = {input} 
                    onChange = {(e) => setInput(e.target.value)}
                     placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

