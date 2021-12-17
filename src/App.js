import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  EmptyLayout,
  MessagesContainer,
  MessagesLoadingContainer,
  MessagesSection,
} from "./App.elements";
import { AddMessage, ViewMessage } from "./components";
import { db } from "./firebase";
import GlobalStyles from "./themes/GlobalStyles";

function App() {
  const [messages, setMesages] = useState([]);
  const [isMessagesFetched, setIsMessagesFetched] = useState(false);
  const getMessages = () => {
    let messageValues;
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        messageValues = querySnapshot.docs.map((doc) => doc.data());
        setMesages(messageValues);
        setIsMessagesFetched(true);
      });
  };

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <Container>
      <GlobalStyles />
      <Content>
        <AddMessage />
        <MessagesSection>
          {messages.map((message) => (
            <ViewMessage key={message.messageId} message={message} />
          ))}

          {!isMessagesFetched && (
            <MessagesLoadingContainer>
              <span id="loader">
                <i class="fas fa-circle-notch"></i>
              </span>
              <p>Loading</p>
            </MessagesLoadingContainer>
          )}
          {isMessagesFetched && messages.length === 0 && (
            <EmptyLayout>
              <p>No Messages found.</p>
            </EmptyLayout>
          )}
        </MessagesSection>
      </Content>
    </Container>
  );
}

export default App;
