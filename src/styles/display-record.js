import styled from "styled-components";

export const ListContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  text-align: left;
  width: 100%;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  background: #f5f5f5;
`;

export const TableHeader = styled.th`
  padding: 12px 24px 12px 16px;
  border-bottom: 1px solid rgb(224, 224, 224);
  text-align: left;
`;

export const TableBody = styled.td`
  border-top: 5px solid #edeaea;
  border-color: ${props => props.border};
  border-bottom: 1px solid rgb(224, 224, 224);
  text-align: left;
  vertical-align: top;
`;

export const TableBodyContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 12px;
`;

export const TableBodyParagraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const TableBodyBadge = styled.p`
  background: gold;
  padding: 8px 10px;
  display: inline-block;
  border-radius: 4px;
`;

export const RecordYear = styled.h4`
  background-color: rgb(236, 234, 234);
  margin-bottom: 0;
  margin-top: 0.25rem;
  padding: 5px 10px;
  border-top: 1px solid rgb(212, 212, 212);
`;
