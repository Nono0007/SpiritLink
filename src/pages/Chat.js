import React, { useState } from 'react';
import {
  Container,
  Box,
  Flex,
  Input,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react'; // Import Chakra UI components
import './Chat.css';
import { useChat } from '../ChatContext';
import Sidebar from '../components/Sidebar';

function Chat({ rooms }) {
  const { messages, sendMessage } = useChat([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState();

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      className="full-height"
    >
      <Flex className="full-height">
        {/* Left Border for Chat Names (1/4) */}
        <Box w="25%" borderRight="1px solid gray">
          <Box className="chat-names">
            <Box className="chat-name-header">
              <Heading as="h4">Find Friends</Heading>
              <i className="bi bi-arrow-right-circle"></i>
            </Box>
            {/* Render the sidebar components */}
            <Sidebar rooms={rooms} />
          </Box>
        </Box>

        {/* Right Border for Messages (3/4) */}
        <Box w="75%">
          <Box className="message-box">
            <Text className="messages-label">Messages</Text>
            {/* Messages go here */}
            {messages.map((message, i) => (
              <Box key={i} className="message">
                {message.content}
              </Box>
            ))}

            {/* Form for Typing Messages and Send Button */}
            <form className="message-form" onSubmit={handleSendMessage}>
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="message-input"
              />
              <Button type="submit" colorScheme="blue" className="send-button">
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Chat;
