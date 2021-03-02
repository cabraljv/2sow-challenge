import styled from 'styled-components';
import theme from '../../styles/themes';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    margin: 30px;
    width: 80%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    div.field {
      display: flex;
      flex-direction: column-reverse;
      margin: 4px 0;

      input {
        padding: 6px 10px;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        font-size: 14px;
      }

      input:focus {
        border: 1px solid ${theme.primary};
      }

      input:focus + label,
      input:active + label {
        color: ${theme.primary};
      }
    }
    footer {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      button.cancel {
        border: 0;
        background: none;
        font-size: 16px;
        opacity: 0.7;
      }
      button.add {
        background: ${theme.primary};
        color: #fff;
        border: 0;
        border-radius: 5px;
        padding: 8px 15px;
        font-weight: bold;
        text-transform: uppercase;
        transition: opacity 0.3s;
      }
      button.add:hover {
        opacity: 0.9;
      }
    }
  }
`;
