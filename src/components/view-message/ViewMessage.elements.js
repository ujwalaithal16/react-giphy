import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 8px;
  margin: 16px 0px;
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

  #delete {
    justify-self: flex-end;
    margin-left: auto;
    margin-right: 8px;
    font-size: 18px;
  }
`;

export const Body = styled.div`
  margin: 16px 0px;
`;

export const ImageContainer = styled.div`
  margin-top: 8px;
  position: relative;
  display: block;

  img {
    width: 100%;
    height: 200px;
    background-color: #ededed;
    border-radius: 4px;
  }
`;
