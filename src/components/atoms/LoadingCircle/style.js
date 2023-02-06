import styled from "styled-components";

export const BoxLoading = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #ccc;
  border-top: 5px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transform: translateY(50px);
`;
