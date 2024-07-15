import React, { useState } from 'react';
import { Container, Grid, Paper, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from '../components/Sidebar';
import MessageList from '../components/MessageList';
import ChatsHeader from '../components/ChatsHeader';
import MessagesHeader from '../components/MessagesHeader';
import MessageInputBox from '../components/MessageInputBox';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  height: '100vh',
});

const ChatContainer = styled(Paper)(({ theme }) => ({
  flexGrow: 1,
  padding: '20px',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));

const MessageInputContainer = styled('div')({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#fff',
  padding: '10px',
  boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
});

const HomePage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChatName, setSelectedChatName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectChat = (chatId, chatName) => {
    setSelectedChatId(chatId);
    setSelectedChatName(chatName);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>
        <Grid container>
          <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <ChatsHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div style={{ flexGrow: 1, overflowY: 'auto' }}>
              <Sidebar onSelectChat={handleSelectChat} />
            </div>
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <MessagesHeader chatName={selectedChatName} />
            <ChatContainer theme={theme}>
              {selectedChatId ? (
                <MessageList chatId={selectedChatId} />
              ) : (
                <p>Select a chat to view messages</p>
              )}
            </ChatContainer>
            <MessageInputContainer>
              <MessageInputBox />
            </MessageInputContainer>
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default HomePage;

// import React, { useState } from 'react';
// import { Container, Grid, Paper, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import Sidebar from '../components/Sidebar';
// import MessageList from '../components/MessageList';
// import ChatsHeader from '../components/ChatsHeader';
// import MessagesHeader from '../components/MessagesHeader';
// import MessageInputBox from '../components/MessageInputBox';
// import { styled } from '@mui/system';

// const StyledContainer = styled(Container)({
//   display: 'flex',
//   height: '100vh',
// });

// const ChatContainer = styled(Paper)(({ theme }) => ({
//   flexGrow: 1,
//   padding: '20px',
//   overflowY: 'auto',
//   backgroundColor: theme.palette.background.default,
//   position: 'relative',
//   display: 'flex',
//   flexDirection: 'column',
// }));

// const MessageInputContainer = styled('div')({
//   position: 'fixed',
//   bottom: 0,
//   width: '100%',
//   backgroundColor: '#fff',
//   padding: '10px',
//   boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
// });

// const HomePage = () => {
//   const [selectedChatId, setSelectedChatId] = useState(null);
//   const [selectedChatName, setSelectedChatName] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleSelectChat = (chatId, chatName) => {
//     setSelectedChatId(chatId);
//     setSelectedChatName(chatName);
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: isDarkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <StyledContainer>
//         <Grid container>
//           <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//             <ChatsHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
//             <div style={{ flexGrow: 1, overflowY: 'auto' }}>
//               <Sidebar onSelectChat={handleSelectChat} />
//             </div>
//           </Grid>
//           <Grid item xs={8} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//             <MessagesHeader chatName={selectedChatName} />
//             <ChatContainer theme={theme}>
//               {selectedChatId ? (
//                 <MessageList chatId={selectedChatId} />
//               ) : (
//                 <p>Select a chat to view messages</p>
//               )}
//             </ChatContainer>
//             <MessageInputContainer>
//               <MessageInputBox />
//             </MessageInputContainer>
//           </Grid>
//         </Grid>
//       </StyledContainer>
//     </ThemeProvider>
//   );
// };

// export default HomePage;


