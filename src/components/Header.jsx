// src/components/Header.js
import { EmojiEmotions, Mic, Search } from '@mui/icons-material';
import { AppBar, Avatar, IconButton, InputBase, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchInput = styled(InputBase)({
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '5px 10px',
  marginLeft: '0px',
  flex: 1,
});

const Header = () => {
  return (
    <AppBar position="static">
   
    </AppBar>
  );
};

export default Header;
