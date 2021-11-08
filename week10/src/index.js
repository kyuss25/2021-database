import express from "express";  // express 모듈을 express 로 불러옴.
import logger from "morgan";    // morgan 모듈을 logger로 불러옴
import path from "path";        // path 모듈을 path 로 불러옴

import loginRouter from "../routes/login";       // 해당 경로 routes의 login.js 파일에서 loginRouter 를 불러옴 
import selectRouter from "../routes/select";   // 해당 경로 routes의 select.js 파일에서 selectRouter 를 불러옴
import deleteRouter from "../routes/delete";   // 해당 경로 routes의 delete.js 파일에서 deleteRouter를 불러옴

const PORT = 3000;             // 사용할 포트의 넘버는 3000
const app = express();          // app 객체로 express 활용

app.use(express.urlencoded({extended: false}));        
app.use(express.json())   // 웹 내 데이터 사용을 위한 정의 
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')    // hbs 파일 활용

app.use(logger("dev"));   // 로그 사용선언

app.use('/', loginRouter);        // loginRouter를 사용하여 기본 로그인 주소페이지 설정
app.use('/select', selectRouter); // selectRouter를 사용하여 조회 주소페이지 설정
app.use('/delete', deleteRouter);   // deleteRouter를 사용하여 삭제 주소페이지 설정

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});  // 모든 페이지 사용 설정이 완료되면 해당 포트의 주소 서버 실행 