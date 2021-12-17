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
  background-color: #ffffff;
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  max-width: 568px;
  background-color: #ededed;
  padding: 16px;
`;

export const MessagesSection = styled.div``;

export const MessagesLoadingContainer = styled.div`
  border: ${({ theme }) => theme.border};
  border-radius: 4px;
  margin: 16px 0px;
  padding: 16px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > span {
    height: 30px;
    width: 28px;
    font-size: 28px;
    color: rgba(0, 0, 0, 0.8);
    animation: ${rotate} 0.8s linear infinite;
  }

  & > p {
    margin-top: 8px;
    text-align: center;
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
