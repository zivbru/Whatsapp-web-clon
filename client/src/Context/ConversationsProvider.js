import React, { useContext, useState, useEffect, useCallback } from 'react';

const ConversationConetxt = React.createContext();

export const useConversation = () => {
  return useContext(ConversationConetxt);
};

const ConversationsProvider = ({ id, children }) => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      groupName: 'Maccabi',
      avatar: '',
      recipients: [
        { name: 'user1' },
        { name: 'user2' },
        { name: 'user3' },
        { name: 'user4' },
        { name: 'user5' },
      ],
      messages: [
        { sender: '1', text: '5', date: '1' },
        { sender: '2', text: '6', date: '2' },
        { sender: '3', text: '7', date: '3' },
        { sender: '3', text: '8', date: '3' },
        { sender: '4', text: '9', date: '4' },
        { sender: '5', text: 'last message', date: '5' },
      ],
    },
    {
      id: 2,
      groupName: 'Ha-poel',
      avatar: '',
      recipients: [
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
      ],
      messages: [
        { sender: '1', text: '1', date: '1' },
        { sender: '2', text: '2', date: '2' },
        { sender: '3', text: '3', date: '3' },
        { sender: '3', text: '3', date: '3' },
        { sender: '4', text: '4', date: '4' },
        { sender: '5', text: 'test', date: '5' },
      ],
    },
  ]);

  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  const addMessageToConversation = (recipients, text, id) => {};

  const sendMessage = (recipients, text) => {
    // send to db that message details

    addMessageToConversation(recipients, text, id);
  };

  const value = {
    conversations: conversations,
    selectConversationIndex: setSelectedConversationIndex,
    selectedConversation: conversations[selectedConversationIndex],
  };

  return (
    <ConversationConetxt.Provider value={value}>
      {children}
    </ConversationConetxt.Provider>
  );
};

export default ConversationsProvider;
