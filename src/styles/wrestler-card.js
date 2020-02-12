import styled from 'styled-components';

export const RegularType = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
  color: #505050;
`;

export const BoldType = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;
  font-weight: bold;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 10px;
`;

export const CardContainer = styled.div`
  border: 1px solid #e4e3e3;
  background: rgb(247, 247, 247);
  border-radius: 3px;
  margin-bottom: 10px;
`;
