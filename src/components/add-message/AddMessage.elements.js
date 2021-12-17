import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
from {
  transform: rotate(0deg);
  transform-origin: center;
}
to {
  transform: rotate(360deg);
  transform-origin: center;
}
`;

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  div {
    margin-left: 8px;

    span {
      font-size: 12px;
      color: #777777;
      margin-top: -4px;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  font-size: 16px;
  border-radius: 4px;
  outline-width: 0px;
  border-width: 0px;
  padding: 8px;
`;

export const Body = styled.div`
  margin: 16px 0px;
`;

export const ImageContainer = styled.div`
  margin-top: 8px;
  position: relative;
  display: block;

  span {
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 18px;
    padding: 2px 8px;
    background-color: rgba(237, 237, 237, 0.4);
    border-radius: 4px;
  }
  img {
    width: 100%;
    height: 200px;
    background-color: #ededed;
    border-radius: 4px;
  }
`;

export const Footer = styled.div`
  display: block;
  position: relative;
`;

export const FooterActionLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddGifButton = styled.div`
  min-width: 100px;
  height: 40px;
  background-color: #ededed;
  margin: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 16px;
  border-radius: 4px;
  align-self: flex-end;
  cursor: pointer;

  .fas {
    margin-right: 4px;
  }
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: #4d80e4;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  align-self: flex-end;
  cursor: pointer;

  #loader {
    height: 26px;
    width: 24px;
    font-size: 24px;
    color: white;
    animation: ${rotate} 0.8s linear infinite;
  }
`;

export const GiphySearchCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 400px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #ffffff;
  position: absolute;
  top: 70px;
  bottom: 24px;
  right: 0;
  left: 0;
  border-radius: 4px;
  padding: 8px;
  margin: 0px -8px;
  z-index: 999;
  box-shadow: 0px 2px 8px rgb(141 123 209 / 20%);
`;

export const InputContainer = styled.div`
  display: block;
  input {
    width: 100%;
    height: 50px;
    margin: 8px 0px;
    border-radius: 4px;
    outline-width: 0px;
    border-width: 0px;
    background-color: white;
    border: 1px solid #dee3ed;
    font-size: 16px;
    padding: 8px;
  }
`;

export const GiphLoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;

  #loader {
    height: 28px;
    width: 26px;
    font-size: 26px;
    color: #000000;
    animation: ${rotate} 0.8s linear infinite;
    margin-right: 8px;
  }

  p {
    font-size: 18px;
  }
`;

export const GiphEmptyContainer = styled.div`
  display: flex;
  border-radius: 4px;
  min-height: 150px;
  margin: 16px 0px 24px 0px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;

  p {
    text-align: center;
    letter-spacing: 1.2px;
  }
`;

export const GiphyImageContainer = styled.div`
  img {
    max-width: 100%;
    margin: 8px 4px;
    border-radius: 4px;
  }
`;

export const EmptyLayout = styled.div`
  display: flex;
  border-radius: 4px;
  min-height: 150px;
  margin: 16px 0px 24px 0px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;

  p {
    text-align: center;
    letter-spacing: 1.2px;
  }
`;
