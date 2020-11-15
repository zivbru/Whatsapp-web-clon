import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

const SidebarChat = ({ conversation, onClick, style }) => {
  return (
    <div className='sidebar-chat' onClick={onClick} style={{ ...style }}>
      <Avatar />
      <div className='sidebar-chat-info'>
        <h2>{conversation.recipients.map((rec) => rec.name).join(', ')}</h2>
        <p>{conversation.messages[conversation.messages.length - 1].text}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
