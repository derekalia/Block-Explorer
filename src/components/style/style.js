import styled from 'styled-components';

export const ContentTitle = styled.div`  
  align-self: end;
  color: rgb(112, 112, 112);
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Content = styled.div`
  height: 92vh;
  display: grid;
  overflow-y: scroll;
  grid-template-columns: auto;
  grid-template-rows: 50px;
  background-color: #f7fbfd;
  padding-left: 30px;
`;

export const BlockStyle = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 115px 180px;
  grid-template-rows: repeat(5, 20px);
  width: 750px;
  margin: 10px;
  margin-left: 0px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
`;
