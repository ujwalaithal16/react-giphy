import styled from "styled-components";

export const ErrorLayout = styled.div`
  padding: ${({ padding }) => (padding ? padding : "8px")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px")};
  min-height: ${({ variant }) => (variant === "transparent" ? "" : "30px")};
  background-color: ${({ variant }) =>
    variant === "transparent" ? "" : "rgba(255, 26, 26, 0.08)"};

  p {
    font-size: 14px;
    color: red;
    word-wrap: break-word;
  }
`;
