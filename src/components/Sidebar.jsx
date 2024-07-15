import React from 'react';
import { List } from '@mui/material';
import ChatList from './ChatList';
import { styled } from '@mui/system';

const SidebarContainer = styled('div')({
  flexGrow: 1,
  overflowY: 'auto',
  '@media (max-width: 768px)': {
    width: '100%',
    height: 'auto',
  },
});

const Sidebar = ({ onSelectChat }) => {
  return (
    <SidebarContainer>
      <List>
        <ChatList onSelectChat={onSelectChat} />
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
