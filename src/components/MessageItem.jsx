import React from 'react';
import { ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme, align }) => ({
  padding: '10px 20px',
  backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#e0f7fa',
  borderRadius: '10px',
  margin: '10px 0',
  alignSelf: align,
  maxWidth: '60%',
  '@media (max-width: 600px)': {
    maxWidth: '80%',
    padding: '10px',
  },
}));

const MessageItem = ({ message, index }) => {
  const theme = useTheme();
  const align = index % 2 === 0 ? 'flex-start' : 'flex-end';

  return (
    <StyledListItem theme={theme} align={align}>
      <ListItemText
        primary={<Typography variant="body1" style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>{message.message}</Typography>}
        secondary={`Sent at ${new Date(message.created_at).toLocaleTimeString()}`}
      />
    </StyledListItem>
  );
};

export default MessageItem;
