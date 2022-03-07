<img src='https://user-images.githubusercontent.com/74144442/154645802-3d0954a7-7625-43b8-a8eb-5aa7ab020228.png' width=300px><br>

> 반려식물을 죽이지 않고 '잘' 기르고 싶은 사람들을 위한 서비스<br>

<br>

## 1. 서비스 배경과 기대 효과

반려식물은 그 자체로 인테리어 효과 뿐 아니라 실내의 공기 정화와 오염물질 제거에 효과적입니다. <br>
또한 우울감을 감소시키고, 마음에 안정감을 주는 효과도 있는 것으로 확인되었습니다.<br>
누구나 식물을 잘 키우고 싶지만 방법을 몰라서 어려웠던 경험이 있다는 점에서 착안하여, 반려식물을 죽이지 않고 '잘' 기르고 싶은 사람들을 위한 서비스를 만들고자 했습니다.<br>

이 서비스를 통해
- 반려 식물에 대한 접근성/인지도 증가
- 자신이 키우는 식물에 대한 애정도 증가<br />

의 효과를 기대합니다.

<br />


## 2. 서비스 주요 기능 소개
- 반려식물 커뮤니티 기능

    ```txt
    내가 키우는 식물을 자랑하고, 관련된 정보를 공유하는 소통의 장을 제공합니다
    ```

- 생활환경를 고려한 반려식물 추천 기능

    ```txt
    아직 반려식물을 키우지 않는 사용자를 위해 조도, 물주는 빈도, 꽃피는 계절 등을 고려하여 키우기 적합한 식물을 추천해줍니다
    ```

- 식물 정보 찾기 기능

    ```txt
    특정 식물에 대한 정보가 궁금하다면 수백가지 종류의 식물 정보를 저장하고 있는 식물위키에서 검색할 수 있습니다
    ```

- 식물이 자라는 과정을 기록하는 저장소 기능

    ```txt
    내 반려식물의 성장과정을 기록하고 한번에 확인할 수 있습니다
    ```


<br />


## 3. 페이지별 세부 기능
| 랜딩페이지 | 커뮤니티페이지 |
| ------ | ------ |
| <div align='center'><img src='https://user-images.githubusercontent.com/74144442/154783490-7d67f7a5-3fba-4c2d-8a03-48e678fb1c9b.png' width=500px /></div> | <div align='center'><img src='https://user-images.githubusercontent.com/74144442/154783602-f00df40d-5c26-4bb1-8512-7274804e8739.png' width=500px /></div> |
| * 오늘의 초록이를 통한 게시글 추천<br />* 유저에게 가장 많은 추천을 받은 게시글 소개<br />* 메인 기능(커뮤니티, 식물추천)으로 이동<br />| * 무한스크롤 적용<br />* 게시글 최신순으로 보여주기<br />* 게시글 검색 기능| 
<br />

| 식물추천 페이지 | 초록위키 페이지 |
| ------ | ------ |
| <div align='center'><img src='https://user-images.githubusercontent.com/74144442/154785936-399bfd9b-29cc-4f5d-ad82-5ea2ff177832.png' width=500px><br /><img src='https://user-images.githubusercontent.com/74144442/154785937-a07e89ed-bfe3-41d5-ac9b-9531cce5a634.png' width=500px></div> | <div align='center'><img src = 'https://user-images.githubusercontent.com/74144442/154786961-2c225dfb-821c-4b41-8cfe-4c62ce82300b.png' width=500px /></div> |
| * 설문을 통해 사용자의 거주환경 정보와 취향 확인<br />* 설문 내용을 토대로 사용자에게 식물 추천<br />| * 필터를 이용해 조건에 맞는 식물 검색 가능 <br />* DB에 저장되어 있는 다양한 식물 자료 열람<br />* 공공 데이터 사용<br />| 
<br />

| 로그인·회원가입 페이지 | 게시글 상세 페이지 |
| ------ | ------ |
| <div align='center'><img src='https://user-images.githubusercontent.com/74144442/154788959-4682538a-2b36-4883-8150-cb3d3e2e364c.png' width=500px></div> | <div align='center'><img src ='https://user-images.githubusercontent.com/74144442/154786933-bd45d990-c429-44a9-9c3c-a99da0f1b549.png' width=500px /></div> |
| * Access Token(JWT)을 이용한 사용자 인증<br />* 회원가입 시 로그인, 비밀번호와 사용자 닉네임, 프로필 설정 가능| * 게시글 확인·수정·삭제 기능<br />* 마음에 드는 게시글 좋아요 기능<br />* 댓글 기능| 
<br />

| 프로필 페이지 | 
| ------ | 
| <div align='center'><img src='https://user-images.githubusercontent.com/74144442/154788085-2cf61a66-9788-42fd-9109-1ed959b02ec2.png' width=500px></div> |
| * 내가 작성한 글 확인<br />* 내가 좋아요 누른 글 확인<br />|

<br />

## 4. 프로젝트 기술 스택
<img src='https://user-images.githubusercontent.com/74144442/154783136-79c6d5ee-63d8-4166-b069-1c73f9ef5fda.png' width= 700px><br>


<br>

## 5. 프로젝트 팀원 역할 분담

| 이름   | 담당 업무                |
| ------ | ------------------------ |
| 이원형 | 팀장/ 백엔드/프론트 개발 |
| 정병욱 | 백엔드/프론트 개발              |
| 안영민 | 백엔드/프론트 개발              |
| 김동현 | 프론트 개발              |
| 이희재 | 프론트 개발              |
| 조서영 | 프론트 개발              |


<br>


## 6. 프로젝트 관련 링크
- [초록친구 피그마](https://www.figma.com/file/XdHlynxA2PVyeJ2Z9WOonG/%EC%B4%88%EB%A1%9D%EC%B9%9C%EA%B5%AC?node-id=157%3A243)

- [8팀 노션](https://www.notion.so/elice/8-2419420476e142f79528a79134d6d2e9)
