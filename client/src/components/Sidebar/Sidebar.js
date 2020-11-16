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
  const [search, setSearch] = useState('');

  const {
    conversations,
    selectConversationIndex,
    selectedConversation,
  } = useConversation();
  const [conversationsCopy, setConversationsCopy] = useState(conversations);

  const selectConversation = (index) => {
    selectConversationIndex(
      conversations.findIndex(
        (conversation) => conversation.id === conversationsCopy[index].id
      )
    );
  };

  const searchConversation = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      setConversationsCopy(
        conversationsCopy.filter((conversation) => {
          return (
            conversation.groupName
              .toString()
              .toLowerCase()
              .indexOf(e.target.value) >= 0
            // ||
            // conversation.recipients.filter((recipient) => {
            //   return recipient.name.toString().indexOf(e.target.value) >= 0;
            // }) ||
            // conversation.messages.filter((message) => {
            //   return message.text.toString().indexOf(e.target.value) >= 0;
            // })
          );
        })
      );
    } else {
      setConversationsCopy(conversations);
    }
  };

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
          <IconButton>
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
          <input
            type='text'
            placeholder='Search or start new chat'
            value={search}
            onChange={searchConversation}
          />
        </div>
      </div>
      <div className='sidebar-chats'>
        {conversationsCopy.map((conversation, index) => (
          <SidebarChat
            key={index}
            style={
              selectedConversation.id === conversation.id
                ? { backgroundColor: '#fafbfc' }
                : ''
            }
            conversation={conversation}
            onClick={() => selectConversation(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
