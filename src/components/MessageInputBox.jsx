// // src/components/MessageInput.js

import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import { AttachFile, Mic, EmojiEmotions, Send } from '@mui/icons-material';
import { styled } from '@mui/system';

const InputContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: 0,
  width: '740px', // Adjust width to fit within the screen
  boxSizing: 'border-box',
  zIndex: 1000, // Ensure it stays above other elements
});

const MessageInput = styled(InputBase)({
  flex: 1,
  marginLeft: '10px',
});

const MessageInputBox = () => {
  return (
    <InputContainer>
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton>
        <EmojiEmotions />
      </IconButton>
      <MessageInput placeholder="Message" />
      <IconButton>
        <Mic />
      </IconButton>
      <IconButton>
        <Send />
      </IconButton>
    </InputContainer>
  );
};


export default MessageInputBox;


