import express from "express";  // express Router 사용을 위한 express 모듈을 express 로 불러옴
import {selectSql} from "../database/sql";  // ../database/sql의 경로에 위치한 sql.js 부터 selectsql 로 불러옴

const router = express.Router();    // express Router 사용.

router.get('/', (req,res) => {
    res.render('login');         // login.hbs 를 웹에 연결, 페이지 구현
});

router.post('/', async (req,res)=>{       // 로그인 주소 페이지에서 입력한 데이터 처리 기능 정의
    const vars = req.body;          // req 매개변수로 전달된 인자, 즉 입력값 중 req.body 를 받아 const 상수 vars에 저장 
    const users = await selectSql.getUsers();   // 사용자의 정보를 selectSql로 받아 const 상수 users에 저장
    let whoAmI = '';    // Admin과 test 를 구별하는 변수 
    let checkLogin = false;     // 로그인 확인 여부파악을 위한 변수, 초기상태는 로그인되지 않은 상태

    users.map((user) => {       // map 함수를 활용, 로그인한 대상의 정보를 확인함
        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password) {  // 입력한 id와 password의 정보가 데이터베이스의 기존 값과 같은지 확인
            console.log('login success!');   
            checkLogin = true;              //로그인 성공

            if(vars.id === 'admin'){        // 입력 id가 admin일 시
                whoAmI = 'admin';           // admin을 변수에 저장
            } else {   
                whoAmI = 'user';        // 그 외엔 모두 user일 것이므로 변수에 user 저장
            }
        }
    })
    if(checkLogin && whoAmI === 'admin'){       // admin으로 로그인 된 경우
        res.redirect('/delete');                // 삭제를 진행하는 페이지로 이동
    }else if (checkLogin && whoAmI === 'user'){     // user로 로그인 된 경우
        res.redirect('/select');                // 조회를 위한 페이지로 이동
    }else {
        console.log('login failed!');           
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");   // 그 외의 경우 
        //html태그 값을 보내어 로그인 실패 문구를팝업창에 띄우도록 함. 
    }
})

module.exports = router;    