import React from "react";
import { db } from "../../firebase";
import {
  Body,
  Container,
  Header,
  ImageContainer,
} from "./ViewMessage.elements";

function ViewMessage({ message }) {
  const deleteMessage = () => {
    db.collection("messages")
      .doc(message.messageId)
      .delete()
      .then(() => {
        console.log("Delete message successfull");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/getmyprofiles-fb7d6.appspot.com/o/users%2FK1cdzmgdFyWlwwSdwzQMtWcOiaF2%2FprofilePhotos%2FK1cdzmgdFyWlwwSdwzQMtWcOiaF2.jpg?alt=media&token=d8af19e1-3e27-4ce3-a7c5-12842256fcc1"
          alt="profilePhoto"
        />
        <div>
          <p>Ujwal Aithal</p>
          <span>@ujwal_aithal</span>
        </div>
        <span id="delete" onClick={deleteMessage}>
          {" "}
          <i class="far fa-trash-alt"></i>
        </span>
      </Header>
      <Body>
        <p>{message.message}</p>

        {message.image && (
          <ImageContainer>
            <img src={message.image} alt="giphImage" />
          </ImageContainer>
        )}
      </Body>
    </Container>
  );
}

export default ViewMessage;
