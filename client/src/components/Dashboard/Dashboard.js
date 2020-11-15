import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';

const Dashboard = ({ id }) => {
  // fetch from db all user data
  //   const userData = id;

  return (
    <>
      <Sidebar />
      <Chat id={id} />
    </>
  );
};

export default Dashboard;
