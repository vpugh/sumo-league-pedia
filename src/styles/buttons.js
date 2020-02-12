import styled, { css } from 'styled-components';

export const PhantomButton = styled.div`
  // border: 1px solid #673ab7;
  border: 1px solid #285987;
  padding: 14px 0;
  text-align: center;
  border-radius: 4px;
  // color: #673ab7;
  color: #285987;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: -0.5px;
  margin-top: 30px;
  transition: 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    border-color: #ace0f9;
    // color: #b790fd;
    color: #ace0f9;
  }
`;

export const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.primary &&
    css`
      // background: #673ab7;
      // color: white;
      background: #ace0f9;
      color: #055175;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      padding: 6px 20px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: -0.5px;
      transition: 200ms ease-in-out;

      &:hover {
        // background: #b790fd;
        background: #285987;
        color: #fff;
      }

      &:disabled {
        background: #db70933b;
        cursor: inherit;
      }
    `};

  ${props =>
    props.tertiary &&
    css`
      background: #9e9e9e;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding-top: 4px;
      padding-bottom: 6px;
      margin-left: 10px;

      &:hover {
        background: #ddd;
      }
    `};
`;
