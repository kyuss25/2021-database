import express from "express";    // express 모듈 내에서 express 불러옴
import {selectSql, deleteSql} from "../database/sql"; // 해당 경로 ../database/에서 sql.js내 selectsql, deletesql 모듈 불러옴

const router = express.Router();        // express Router 사용 

router.get('/', async (req, res) => {     // /delete 주소 페이지 설정
         
    const employee = await selectSql.getEmployee();  // selectsql 모듈로 불러온 employee 데이터 값 저장 
    res.render('delete', {                       // delete.hbs 파일을 웹에 연결 페이지 구현 
        title: "삭제 기능",
        employee
    })                                     // 데이터 값 전달과 타이틀 제시
});

router.post('/',async(req, res) => {   // delete 페이지의 기능 설정
    
    console.log('delete router:',req.body.delBtn);      // 콘솔로그로 버튼 클릭시 해당 열의 Dno값을 가져오는 것 확인          
   
    const data = {                           // data 객체 생성
        Dno: req.body.delBtn,                   // 삭제할 데이터 값을 Dno에 저장 
    };
    await deleteSql.deleteEmployee(data);       //Sql.js의 deleteSql 모듈의 함수에 객체 전달
    res.redirect('/delete');                 // 삭제 후 페이지 새로고침
});

module.exports = router;