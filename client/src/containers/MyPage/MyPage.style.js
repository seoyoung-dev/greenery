import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImg = styled.div`
  margin-top: 120px;
  margin-bottom: 24px;

  img {
    width: 180px;
    height: 180px;

    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 300px;
  }
`;

export const Nickname = styled.div`
  margin-bottom: 100px;

  width: 500px;
  height: 42px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  text-align: center;

  color: #000000;
`;
export const MyPost = styled.div`
  width: 1150px;
  height: 21px;

  margin-bottom: 20px;

  & ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  li {
    /* box-shadow: 0px 4px 0px var(--primary);
    padding-bottom: 16px; */
  }
  li + li {
    margin-left: 20px;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    align-items: center;
    text-align: right;

    color: #000000;

    padding-bottom: 16px;
  }
`;
export const PostCardborder = styled.div`
  width: 1134px;
  height: 1px;

  color: #e5e5e5;
  border-bottom: solid;
`;

export const PostCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-gap: 80px 28px;
  margin-top: 40px;
`;
