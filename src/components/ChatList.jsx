import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import ChatItem from './ChatItem';
import { List } from '@mui/material';
import { styled } from '@mui/system';

const StyledList = styled(List)({
  width: '100%',
  '@media (min-width: 600px)': {
    width: '320px',
  },
});

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axiosInstance.get('/get_all_chats?page=1');
        console.log('API response:', response.data); // Log the entire response
        if (response.data && Array.isArray(response.data.data.data)) {
          setChats(response.data.data.data);
        } else {
          console.error('Data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <StyledList>
      {Array.isArray(chats) && chats.length > 0 ? (
        chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} onSelectChat={onSelectChat} />
        ))
      ) : (
        <p>No chats available</p>
      )}
    </StyledList>
  );
};

export default ChatList;
