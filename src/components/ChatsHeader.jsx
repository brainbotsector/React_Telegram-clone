import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Popover, Typography, Box, Switch } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const SearchInput = styled(InputBase)({
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '5px 10px',
  marginLeft: '10px',
  flex: 1,
  '@media (max-width: 768px)': {
    width: '100%',
    marginLeft: '0',
  },
});

const ChatsHeader = ({ toggleTheme, isDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton edge="start" color="inherit" onClick={handleClick}>
          <Menu />
        </IconButton>
        <SearchInput placeholder="Search..." startAdornment={<Search />} />
      </StyledToolbar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <Typography variant="h6">Menu</Typography>
          <Typography>Saved Messages</Typography>
          <Typography>My Stories</Typography>
          <Typography>Contacts</Typography>
          <Typography>Settings</Typography>
          <Box display="flex" alignItems="center">
            <Typography>Dark Mode</Typography>
            <Switch checked={isDarkMode} onChange={toggleTheme} />
          </Box>
          <Typography>Animations</Typography>
          <Typography>Telegram Features</Typography>
          <Typography>Report Bug</Typography>
          <Typography>Switch to A version</Typography>
          <Typography>Install App</Typography>
        </Box>
      </Popover>
    </AppBar>
  );
};

export default ChatsHeader;
