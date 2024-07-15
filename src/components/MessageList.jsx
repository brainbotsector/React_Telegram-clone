import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import MessageItem from './MessageItem';
import { List, useTheme } from '@mui/material';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get(`/get_chat_messages?chat_id=${chatId}`);
        console.log('API response:', response.data); // Log the entire response
        if (response.data && Array.isArray(response.data.data)) {
          setMessages(response.data.data);
        } else {
          console.error('Data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  return (
    <List style={{ backgroundColor: theme.palette.background.default }}>
      {messages.map((message, index) => (
        <MessageItem key={message.id} message={message} index={index} />
      ))}
    </List>
  );
};

export default MessageList;

