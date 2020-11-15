import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
// import Pusher from 'pusher-js';
// import Api from './utils/Api';
import Login from './components/Login/Login';
import UseLocalStorage from './Hooks/UseLocalStorage';
import ConversationProvider from './Context/ConversationsProvider';

const App = () => {
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   api.get('/api/messages/sync').then((result) => {
  //     setMessages(result.data);
  //   });
  // }, []);

  // useEffect(() => {
  // const pusher = new Pusher('112ac0aaf066858a98b8', {
  //   cluster: 'ap2',
  // });
  // const channel = pusher.subscribe('messages');
  // channel.bind('inserted', (data) => {
  //   setMessages([...messages, data]);
  // });
  // return () => {
  //   channel.unbind_all();
  //   channel.unsubscribe();
  // };
  // }, [messages]);

  const [id, setId] = UseLocalStorage('id');

  const chat = (
    <ConversationProvider id={id}>
      <Dashboard id={id} />;
    </ConversationProvider>
  );

  return (
    <div className='app'>
      <div className='app-body'>
        <>{id ? chat : <Login setId={setId} />}</>
      </div>
    </div>
  );
};
export default App;
