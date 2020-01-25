import styled, { css } from "styled-components";

export const ButtonHolder = styled.div`
  display: flex;
  padding: 15px 0 0 0;
  justify-content: flex-end;

  > button:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  transition: 0.3ms;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
      font-weight: bold;

      &:hover {
        background: #db7093b3;
        cursor: pointer;
      }

      &:disabled {
        background: #db70933b;
        cursor: inherit;
      }
    `};

  ${props =>
    props.cancel &&
    css`
      background: #eaeaea;
      color: #6b6b6b;
      font-weight: bold;

      &:hover {
        background: #eaeaeaa8;
        color: #6b6b6b91;
        cursor: pointer;
      }
    `}
`;

export const InputLabel = styled.label`
  display: block;
  color: #4e4e4e;
`;

export const TextInput = styled.input`
  border-radius: 4px;
  border: 1px solid #c5c5c5;
  background: #f8f8f8;
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  margin-top: 5px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
`;

export const SelectInput = styled.select`
  margin-top: 5px;
  margin-bottom: 16px;
  width: 100%;
  padding: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const SelectInput2 = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 16px;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  select {
    display: block;
    width: 100%;
    padding: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(166, 166, 166);
    background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png")
        97% center no-repeat,
      #f8f8f8;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
`;
