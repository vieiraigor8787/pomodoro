import styled from "styled-components";

export const CountDownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    border-radius: 0.5rem;
    padding: 2rem 1rem;
  }
`;

export const Separator = styled.div`
  color: ${(props) => props.theme["green-500"]};
  padding: 1rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
