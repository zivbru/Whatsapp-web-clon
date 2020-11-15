import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import './Chat.css';
import Api from '../../Utils/Api';
import { useConversation } from '../../Context/ConversationsProvider';

const Chat = ({ id }) => {
  const [input, setInput] = useState('');
  const { selectedConversation } = useConversation();

  const sendMessage = (e) => {
    e.preventDefault();
    Api.post('/api/messages/new', {
      message: input,
      name: 'Demo',
      date: new Date().toISOString(),
      received: false,
    });
    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat-header'>
        <Avatar />
        <div className='chat-header-info'>
          <h3>{selectedConversation.groupName}</h3>
          <p>
            {selectedConversation.recipients.map((obj) => obj.name).join(' ,')}
          </p>
        </div>
        <div className='chat-header-right'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat-body'>
        {selectedConversation.messages &&
          selectedConversation.messages.map((msg) => (
            <p
              key={msg._id}
              className={`chat-message ${msg.sender !== id && 'chat-reciever'}`}
            >
              <span className='chat-message-name'></span>
              {msg.text}
              <span className='chat-message-timestamp'>{msg.date}</span>
            </p>
          ))}
      </div>
      <div className='chat-footer'>
        <InsertEmoticonOutlinedIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button onClick={sendMessage} type='submit'>
            Send a new message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
