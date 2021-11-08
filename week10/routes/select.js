import express from "express";   // express 모듈을 express로 불러옴
import {selectSql} from "../database/sql";  // ../database/sql 경로의 sql.js로 부터 selectsql 불러옴

const router = express.Router();    // express Router 사용

router.get('/', async function(req, res) {            // /select 조회 주소페이지 설정
    
    const employee = await selectSql.getEmployee();   // selectsql로 불러온 employee의 값을 변수에 저장
    res.render('select', {                      // select.hbs 를 웹에 연결 페이지 구현
        title: '학생',
        employee
    });                                 
});

module.exports = router;