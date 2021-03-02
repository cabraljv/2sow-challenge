import styled from 'styled-components';
import theme from '../../styles/themes';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  main {
    width: 40%;
    max-width: 400px;
    @media (max-width: 400px) {
      width: 90%;
    }
    display: flex;
    flex-direction: column;
    img {
      width: 90%;
      margin: 5px auto;
    }
    form {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      button {
        border: 0;
        width: 50%;
        margin-left: auto;
        padding: 10px 0;
        background: ${theme.primary};
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        border-radius: 5px;
        letter-spacing: 1px;
        transition: opacity 0.3s;
      }
      button:hover {
        opacity: 0.9;
      }
    }
  }
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  input {
    height: 45px;
    padding-left: 10px;
    border-radius: 5px;
    border: 2px solid #d9d9d9;
    font-size: 16px;
    color: #1f1f1f;
  }
  input:focus {
    outline: none;
    border: 2px solid ${theme.primary};
  }
  label {
    font-size: 16px;
    position: absolute;
    top: 11px;
    left: 10px;
    color: #d9d9d9;
    transition: 0.5s ease;
  }
  input:not(:placeholder-shown) + label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, -0.8rem);
    font-size: 0.8em;
    color: #d9d9d9;
  }
  input:focus + label,
  input:active + label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, -1.7rem);
    font-size: 0.8em;
    color: ${theme.primary};
  }
`;
