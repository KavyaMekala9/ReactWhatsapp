import React,{useState, useEffect} from 'react';
import {Avatar, IconButton, Icon} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from './firebase';

export function Sidebar(props) { 
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=> 
        setRooms(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));
        return() => {
            unsubscribe();
        };
    }, []);

    return (
        <div className='sidebar'>
            {/* <h1>Side bar</h1> */}
            <div className='sidebar_header'>
                <IconButton>
                    <Avatar/>
                </IconButton>               
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                   <IconButton>
                        <ChatIcon/>
                   </IconButton>
                   <IconButton>
                        <MoreVertIcon/>
                   </IconButton>
                    
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search anything" type="text">
                    </input>
                </div>
                
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key= {room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>   
        </div>
    )
}
