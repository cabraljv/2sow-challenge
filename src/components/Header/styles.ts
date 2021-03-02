import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  img {
    height: 50px;
    @media (max-width: 575px) {
      height: 30px;
    }
    position: absolute;
  }
  h2 {
    margin: auto;
    @media (max-width: 575px) {
      margin: auto 0;
      margin-left: auto;
    }
    font-size: 22px;
    font-weight: normal;
  }
`;
