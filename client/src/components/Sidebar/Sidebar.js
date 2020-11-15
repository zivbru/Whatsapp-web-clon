import React, { useState } from 'react';
import './Sidebar.css';
import SidebarChat from '../SidebarChat/SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { IconButton, Avatar } from '@material-ui/core';
import { useConversation } from '../../Context/ConversationsProvider';

const Sidebar = () => {
  const {
    conversations,
    selectConversationIndex,
    selectedConversation,
  } = useConversation();
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-header-left'>
          <Avatar src='https://avatars0.githubusercontent.com/u/8994552?s=460&u=eb7248c70f3489088be4b4594f94f5fabf553785&v=4' />
        </div>
        <div className='sidebar-header-right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton onClick={() => console.log(11)}>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar-search'>
        <div className='sidebar-search-container'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar-chats'>
        {conversations.map((conversation, index) => (
          <SidebarChat
            key={index}
            style={
              selectedConversation.id === conversation.id
                ? { backgroundColor: '#fafbfc' }
                : ''
            }
            conversation={conversation}
            onClick={() => selectConversationIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
