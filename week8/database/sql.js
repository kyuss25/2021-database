import mysql from "mysql2";    // mysql2 모듈로부터 mysql 불러옴

// 데이터 베이스 연결
const pool = mysql.createPool(              // 새로운 pool을 생성함
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'sgs',
        database: 'week8',
        password: 'simgs3413',
        waitForConnections: true,       // 풀에 여유 커넥션이 없는 경우 대기
        connectionLimit: 10,            // 최대 커넥션의 개수는 10
        queueLimit: 0
    }                           // 생성한 pool 객체로 커넥션을 불러와 쿼리 발생
);                              
const promisePool = pool.promise();
                                // selectsql 모듈을 통한 조회한 값 내보냄
export const selectSql = {         
    getEmployee : async () => {
        const [rows] = await promisePool.query('select * from employee');  // select 문 쿼리 실행
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query('select * from department');     // select 문 쿼리 실행

        return rows
    },
}
                                // insertsql 모듈을 통해 객체에 전달된 입력할 데이터 값을 내보냄
export const insertSql = {

    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}","${data.Lname}","${data.Ssn}","${data.Bdate}",
            "${data.Address}","${data.Sex}", "${data.Salary}","${data.Super_ssn}","${data.Dno}" )`;
            
            await promisePool.query(sql);       // employee 테이블에 데이터 값을 입력하는 쿼리 실행
    },

    setDepartment : async (data) => {
        const sql = `insert into department value (
            "${data.Dname}", "${data.Dnumber}","${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
            
            await promisePool.query(sql);       // department 테이블에 데이터 값을 입력하는 쿼리 실행
        },
    }
                                        // updatesql 모듈을 통해 객체에 전달된 수정할 데이터 값 내보냄
export const updateSql = {              
        updateEmployee : async (data) => {
            const sql = `update employee set salary = "${data.Salary}" where Minit = "s"`;      // where 조건, Minit이 s 인 경우 salary 값 수정
            await promisePool.query(sql);           // employee 테이블에 수정한 데이터 값을 전달하는 쿼리 실행
        },
        updateDepartment : async (data) => {
            const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`; // where 조건, Dnumber가 1 인 경우 Dname 수정
            await promisePool.query(sql);       // department 테이블에 수정한 데이터 값을 전달하는 쿼리 실행
        },
    }