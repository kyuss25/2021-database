import express from "express";   // express 모듈을 express로 불러옴
import {selectSql} from "../database/sql";  // ../database/sql 경로의 sql.js로 부터 selectsql 불러옴

const router = express.Router();    // express Router 사용

router.get('/', async function(req, res) {            // /select 조회 주소페이지 설정
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
                                                        // selectsql로 불러온 employee, department의 값을 각 변수에 저장
    res.render('select', {                      // select.hbs 를 웹에 연결 페이지 구현
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });                                         // 페이지 내 각 테이블에 데이터값 제시
});
module.exports = router;