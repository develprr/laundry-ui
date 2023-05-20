import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './App.css';

const WS_URL = 'ws://localhost:3002';

const App = () => {
  const [message, setMessage] = useState("Laundy Service UI");
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: (message) => {
      setMessage(message.data);
    }
  });

  return (
    <div>{message}</div>
  );

}

export default App;


