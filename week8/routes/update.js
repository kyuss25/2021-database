import express from "express";    // express 모듈 내에서 express 불러옴
import {selectSql, updateSql} from "../database/sql";       // 해당 경로 ../database/에서 sql.js내 selectsql, updatesql 모듈 불러옴

const router = express.Router();        // express Router 사용 

router.get('/employee', async(req, res)=>{      // /update/employee 주소 페이지 설정
    const emp_res = await selectSql.getEmployee();      // selectsql 모듈로 불러온 employee 데이터 값 저장 
    res.render('updateEmployee', {                      // updateEmployee.hbs 파일을 웹에 연결 페이지 구현
        title: "직원 테이블 갱신",
        emp_res
    });                                     // 수정한 데이터 값 전달과 타이틀 제시
});

router.get('/department', async (req, res) => {     // /update/department 주소 페이지 설정
    const dept_res = await selectSql.getDepartment();      // selectsql 모듈로 불러온 department 데이터 값 저장 
    res.render('updateDepartment', {                       // updateDepartment.hbs 파일을 웹에 연결 페이지 구현 
        title: "부서 테이블 갱신",
        dept_res

    });                                     // 수정한 데이터 값 전달과 타이틀 제시
});

router.post('/employee', async(req, res) => {       // 수정 employee 페이지에서 입력한 데이터 처리 기능 정의
    const vars = req.body;       // req 매개변수로 전달된 인자, 즉 입력값 중 req.body 를 받아 변수 vars에 저장 
    console.log(vars.salary);       // 입력한 데이터 값 확인

    const data = {                      // data 객체 생성
        Salary: vars.salary             // 수정한 데이터값 salary 에 저장
    }                                   
    await updateSql.updateEmployee(data);       // sql.js 의 updatesql 모듈 내의 함수에 객체 전달
    res.redirect('/select');                    // 수정 후 페이지 조회 페이지로 이동
});
router.post('/department',async(req, res) => {   // 수정 department 페이지에서 입력한 데이터 처리 기능 정의
    const vars = req.body;                  // req 매개변수로 전달된 인자, 즉 입력값 중 req.body 를 받아 변수 vars에 저장 
    console.log(vars.dname);                // 입력한 데이터 값 확인

    const data = {                           // data 객체 생성
        Dname: vars.dname                   // 수정한 데이터값 salary 에 저장
    }
    await updateSql.updateDepartment(data);   // sql.js 의 updatesql 모듈 내의 함수에 객체 전달

    res.redirect('/select');                 // 수정 후 페이지 조회 페이지로 이동
});

module.exports = router;