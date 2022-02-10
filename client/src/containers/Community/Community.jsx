import React from 'react';
import { Main, ContentsWrapper } from './Community.style';
import PostCard from '../../components/PostCard'

export function Community() {
  return (
    <Main>
      <input type="text" placeholder='&#xF002;   검색어를 입력하세요'/>
      <ContentsWrapper>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ContentsWrapper>
    </Main>
  );
}