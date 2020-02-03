import React from 'react';
import Header from "./components/header";
import { Container, Snackbar } from '@material-ui/core';
import SendTweet from './components/sendTweet';

function App() {
  return (
      <Container className="tweets-simulator" maxWidth={false}>
        <Header/>
        <SendTweet/>
      </Container>
  );
}

export default App;
