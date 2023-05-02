
### 실행 방법 

1.  VS Code를 실행한 후 git clone https://github.com/mj-song00/movie.git' 터미널에 붙여넣어 주세요.
2.  cd movie, cd src 에 들어가신 후 터미널에 npm install을 입력해주세요
3.  터미널에 npx prisma init,
           npx prisma generate
    를 입력해주세요. 정상적으로 실행되면 .env가 생성됩니다.
4.  .env에 schema.prisma에 DATABASE_URL을 입력해주세요.<br>
    저는 postgresQl을 사용하였습니다. 다른 DataBase를 사용하시는 분은 https://www.prisma.io/docs/concepts/database-connectors 를 참고해 주세요.
5.  터미널에 npm run start를 입력해주세요. Nest가 시작됩니다. 
   
   ❖ 다른 폴더에 있을경우 prisma 오류가 발생할 수도 있습니다. 현재 있는곳이 movie/src 인지 확인해 주세요<br>
   ❖ src 폴더에 있음에도 오류가 나는경우 
   npm install prisma --save-dev
   npx prisma init
   npx prisma generate
   16번 줄까지 터미널에 입력했음에도 실행되지 않을경우 아래 명령어도 입력해주세요.
   (npx prisma db push
   npx prisma migrate dev)
   
    
### API문서

본 문서는 Postman API명세서로 작성되었습니다.

https://documenter.getpostman.com/view/23879843/2s93eU3aJR#16a4c33a-9c0a-4dd4-8cf8-f42409a145e4


### ERD
![스크린샷 2023-05-02 오후 10 32 51](https://user-images.githubusercontent.com/104669297/235681722-2720f63b-8aff-4ee9-bfbf-d5ba451b20c7.png)


  #### ERD 설계 이유
- Actor와 영화의 Charactor는 다른 테이블로 분류하였습니다.<br> 배우 한명은 다양한 캐릭터를 연기할 수도 있고, 캐릭터는 다양한 배우를 갖을 수 있다고 생각했습니다.<br>(ex.디즈니 영화 더빙)
- 위와 같은 이유로 Actor와 Charactor는 M:N 관계가 됩니다. 하지만 데이터를 추가해야 할 수 없고, 어떤 쿼리가 지나가는지 예측할 수가 없었습니다.
- 그래서 Actor <-> Play 1:N, Play <-> Charactor N:1 관계를 만들어 Play의 id를 pk로 사용하였습니다. <p>
- Director와 Genre는 Movie와 N:1관계로 설계하였습니다.<br> Movie는 1명 또는 2명이상의 Director을 갖을 수 있고 Director는 한 작품을 촬영한다 생각했습니다<p>
- 영화는 1개 이상의 Genre를 갖지면 하나의 영화안에 Genre의 타입은 1개라 생각했습니다. 
  
#### 입력 방법 <p>

1. Movie 폴더안에 Post Create Movie 요청을 보내주세요.
2. Director 폴더안에 있는 Post Create Director 요청을 보내주세요.
3. Actor 폴더안에 있는 Post Create Actor 요청을 보내주세요.
4. Genre 폴더안에 있는 Post Create Genre 요청을 보내주세요.
5. Charactor 폴더 안에 있는 Post Create Charactor요청을 보내주세요.
6. Charactor 폴더에 있는 Patch Patch Play Charcater with ActorId 요청을 보내주세요. Play 테이블에 저장됩니다.
7. Director 폴더에 있는 Patch Patch Movie by Director 요청을 보내주세요.<br> Movie 테이블에 director가 반영됩니다.
8. Movie 폴더의 Get All Movie는 title을 검색어로 갖는 쿼리 스트링으로 구현하였습니다.<br> title에 검색어가 있으면 모두 검색이 됩니다.  
  
### 개선해야 할점 
  - 현재 파일 업로드를 구현하지 못했습니다. 
  - 유튜브 url 저장을 구현하지 못했습니다.
