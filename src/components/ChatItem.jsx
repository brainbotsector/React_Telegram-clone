// // src/components/ChatItem.js
// import React from 'react';
// import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// const StyledListItem = styled(ListItem)({
//   borderBottom: '1px solid #f0f0f0',
//   padding: '10px 20px',
// });

// const StyledAvatar = styled(Avatar)({
//   width: 50,
//   height: 50,
// });

// const ChatItem = ({ chat, onSelectChat }) => {
//   return (
    
//     <StyledListItem button onClick={() => onSelectChat(chat.id)}>
        
//       <ListItemAvatar>
//         <StyledAvatar alt={chat.creator.name} src={chat.creator.avatar} />
//       </ListItemAvatar>
//       <ListItemText
//         primary={<Typography variant="h6">{chat.creator.name}</Typography>}
//         secondary={`Last message at ${new Date(chat.updated_at).toLocaleTimeString()}`}
//       />
//     </StyledListItem>
//   );
// };

// export default ChatItem;


import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)({
  borderBottom: '1px solid #f0f0f0',
  padding: '10px 20px',
  '@media (max-width: 600px)': {
    padding: '10px',
  },
});

const StyledAvatar = styled(Avatar)({
  width: 50,
  height: 50,
  '@media (max-width: 600px)': {
    width: 40,
    height: 40,
  },
});

const ChatItem = ({ chat, onSelectChat }) => {
  return (
    <StyledListItem button onClick={() => onSelectChat(chat.id)}>
      <ListItemAvatar>
        <StyledAvatar alt={chat.creator.name} src={chat.creator.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="h6">{chat.creator.name}</Typography>}
        secondary={`Last message at ${new Date(chat.updated_at).toLocaleTimeString()}`}
      />
    </StyledListItem>
  );
};

export default ChatItem;
