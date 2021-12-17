import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AddGifButton,
  Body,
  Button,
  Container,
  Footer,
  FooterActionLayout,
  GiphEmptyContainer,
  GiphLoadingContainer,
  GiphyImageContainer,
  GiphySearchCard,
  Header,
  ImageContainer,
  InputContainer,
  TextArea,
} from "./AddMessage.elements";
import { ErrorLayout } from "..";

import { db } from "../../firebase";
import firebase from "firebase";
function AddMessage() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [showGifLayout, setShowGifLayout] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const [giphySearchTerm, setGiphySearchTerm] = useState("");
  const [isGifsLoading, setIsgifsLoading] = useState(false);
  const [gifsError, setGifsError] = useState("");

  const [trendingGifsDatas, setTrendingGifsDatas] = useState([]);
  const [gifDatas, setGifDatas] = useState([]);

  useEffect(() => {
    const getTrendingGifs = async () => {
      setGifsError("");

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "o99HnpjMp0Wqwm9norBblxPQRyPaSqiy",
            limit: 20,
          },
        });
        // console.log("trending results", results);
        setTrendingGifsDatas(results.data.data);
        setGifDatas(results.data.data);
      } catch (err) {
        setGifsError("Oops Something went wrong. Try refreshing page.");
      }
    };

    getTrendingGifs();
  }, []);

  const handleAddGifButtonClick = () => {
    setShowGifLayout(!showGifLayout);
    setGiphySearchTerm("");
  };

  const handlePostButtonClick = () => {
    if (caption === "" && image === "") {
      return;
    }

    setUploadProgress(true);
    setUploadError("");
    const ref = db.collection("messages").doc();
    const messageId = ref.id;

    db.collection("messages")
      .doc(messageId)
      .set({
        message: caption,
        image: image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        messageId: messageId,
      })
      .then(() => {
        setCaption("");
        setImage("");
        setUploadProgress(false);
      })
      .catch((error) => {
        setUploadProgress(false);
        setUploadError(error.message);
      });
  };

  const handleOnGifySearch = (e) => {
    setGiphySearchTerm(e.target.value);
  };

  const getGifs = async () => {
    setIsgifsLoading(true);
    setGifsError("");

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "o99HnpjMp0Wqwm9norBblxPQRyPaSqiy",
          q: giphySearchTerm,
        },
      });

      // console.log(results.data.data.length);
      setGifDatas(results.data.data);

      setIsgifsLoading(false);
    } catch (error) {
      setGifsError("Oops Something went wrong. Try refreshing page.");
    }

    setIsgifsLoading(false);
  };

  useEffect(() => {
    if (giphySearchTerm === "") {
      // console.log("SearchTerm is empty");
      setGifDatas(Array.from(trendingGifsDatas));
      return;
    }

    const delayGifRequestFunction = setTimeout(() => {
      getGifs();
    }, 800);

    return () => {
      clearTimeout(delayGifRequestFunction);
    };
  }, [giphySearchTerm]);

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
      </Header>
      <Body>
        <TextArea
          placeholder="Type Something here"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          type="text"
          rows={4}
        />
        {image && (
          <ImageContainer>
            <span onClick={() => setImage("")}>
              {" "}
              <i class="fas fa-times" />
            </span>
            <img src={image} alt="giphImage" />
          </ImageContainer>
        )}
      </Body>
      <Footer>
        <FooterActionLayout>
          <AddGifButton onClick={handleAddGifButtonClick}>
            {!showGifLayout ? (
              <p>
                <i class="fas fa-plus" />
                Add Gif
              </p>
            ) : (
              <p>
                <i class="fas fa-times" />
                Cancel
              </p>
            )}
          </AddGifButton>
          <Button onClick={handlePostButtonClick}>
            {!uploadProgress ? (
              <p>Post</p>
            ) : (
              <span id="loader">
                <i class="fas fa-circle-notch"></i>
              </span>
            )}
          </Button>
        </FooterActionLayout>
        {showGifLayout && (
          <GiphySearchCard>
            <InputContainer>
              <input
                placeholder="Search here"
                value={giphySearchTerm}
                onChange={handleOnGifySearch}
                type="text"
              />
            </InputContainer>

            {gifsError && <ErrorLayout errorMessage={gifsError} />}
            {isGifsLoading && (
              <GiphLoadingContainer>
                <span id="loader">
                  <i class="fas fa-circle-notch"></i>
                </span>
                <p>Loading...</p>
              </GiphLoadingContainer>
            )}
            {gifDatas.length === 0 && !isGifsLoading && (
              <GiphEmptyContainer>
                <p>No Gifs Found for the search "{giphySearchTerm}"</p>
              </GiphEmptyContainer>
            )}

            {gifDatas.length !== 0 && !isGifsLoading && (
              <GiphyImageContainer>
                {gifDatas.map((gifData) => (
                  <img
                    key={gifData.id}
                    src={gifData.images.fixed_height.url}
                    alt="gifImage"
                    onClick={() => {
                      setImage(gifData.images.fixed_height.url);
                      setShowGifLayout(false);
                    }}
                  />
                ))}
              </GiphyImageContainer>
            )}
          </GiphySearchCard>
        )}
      </Footer>
    </Container>
  );
}

export default AddMessage;
