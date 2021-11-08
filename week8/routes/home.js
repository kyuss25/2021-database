import express from "express";  // express Router 사용을 위한 express 모듈을 express 로 불러옴
import {insertSql, selectSql} from "../database/sql";  // ../database/sql의 경로에 위치한 sql.js 부터 insertsql 로 불러옴

const router = express.Router();    // express Router 사용

router.get('/', (req,res) => {
    res.render('home');         // home.hbs 를 웹에 연결, 페이지 구현
});

router.post('/', (req,res)=>{       // 홈 주소 페이지에서 입력한 데이터 처리 기능 정의
    const vars = req.body;          // req 매개변수로 전달된 인자, 즉 입력값 중 req.body 를 받아 변수 vars에 저장 
    const var_lenth = Object.keys(req.body).length;   // 입력된 데이터의 길이 저장

    if(var_lenth > 4) {             // 입력값 길이가 4 보다 큰 경우 
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };                              // 입력된 각 데이터 값들을 employee의 각 필드에 해당하는 값으로 처리, data 객체 생성
        insertSql.setEmployee(data);    // insertsql 모듈의 setEmployee 함수로 data 전달.
    } else {
        const data = {              // 그 외의 길이의 입력된 값들
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };                              // department 의 각 필드에 해당하는 값으로 처리, data 객체 생성

        insertSql.setDepartment(data);      // insertsql 모듈의 setDepartment 함수로 data 전달
    }

    res.redirect('/');      // 입력값 처리 후 홈 주소 페이지 새로고침
})

module.exports = router;    