import styled from "styled-components";

export const Title = styled.div`
  width: 1136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;

  & span {
    font-size: 20px;
    font-weight: bold;
  }

  & :nth-child(2) {
    font-size: 14px;
    color: #767676;
  }
`;

export const PostCardWrapper = styled.div`
  display: flex;
  width: 1136px;
  justify-content: space-between;
  margin-bottom: 100px;
`;
