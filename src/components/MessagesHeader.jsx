// // src/components/MessagesHeader.js
// import React from 'react';
// import { AppBar, Toolbar, IconButton, Avatar, Typography } from '@mui/material';
// import { Search, Call, MoreVert } from '@mui/icons-material';
// import { styled } from '@mui/system';

// const StyledToolbar = styled(Toolbar)({
//   display: 'flex',
//   justifyContent: 'space-between',
// });

// const ChatInfo = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
// });

// const MessagesHeader = ({ chatName }) => {
//   return (
//     <AppBar position="static">
//       <StyledToolbar>
//         <ChatInfo>
//           <Avatar alt="Profile Picture" src="/path/to/profile.jpg" />
//           <Typography variant="h6" style={{ marginLeft: '10px' }}>
//             {chatName}
//           </Typography>
//         </ChatInfo>
//         <div>
//           <IconButton color="inherit">
//             <Call />
//           </IconButton>
//           <IconButton color="inherit">
//             <Search />
//           </IconButton>
//           <IconButton color="inherit">
//             <MoreVert />
//           </IconButton>
//         </div>
//       </StyledToolbar>
//     </AppBar>
//   );
// };

// export default MessagesHeader;


import React from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Typography } from '@mui/material';
import { Search, Call, MoreVert } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const ChatInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const MessagesHeader = ({ chatName }) => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <ChatInfo>
          <Avatar alt="Profile Picture" src="/path/to/profile.jpg" />
          <Typography variant="h6" style={{ marginLeft: '10px' }}>
            {chatName}
          </Typography>
        </ChatInfo>
        <div>
          <IconButton color="inherit">
            <Call />
          </IconButton>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <MoreVert />
          </IconButton>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default MessagesHeader;
