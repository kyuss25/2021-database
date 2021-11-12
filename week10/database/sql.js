import mysql from "mysql2";    // mysql2 모듈로부터 mysql 불러옴

// 데이터 베이스 연결
const pool = mysql.createPool(              // 새로운 pool을 생성함
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root' ,
        database: 'week10',
        password: 'simgs3413!',
        waitForConnections: true,       // 풀에 여유 커넥션이 없는 경우 대기
        connectionLimit: 10,            // 최대 커넥션의 개수는 10
        queueLimit: 0
    }                           // 생성한 pool 객체로 커넥션을 불러와 쿼리 발생
);                              
const promisePool = pool.promise();
 // selectsql 모듈을 통한 조회한 값 내보냄
export const selectSql = {         
    getUsers : async () => {
        const [rows] = await promisePool.query('select * from user');  // select 문 쿼리 실행,실행 시 까지 대기
        return rows
    },
    getEmployee : async () => {
        const [rows] = await promisePool.query('select * from employee');     // select 문 쿼리 실행, 실행 시 까지 대기
        return rows
    },
}
 //delete문 쿼리
export const deleteSql = {              
        deleteEmployee : async (data) => {
            console.log('deleteSql.deleteEmployee:',data.Dno);  //콘솔로그로 데이터의 값이 출력되는 위치를 확인. 
            const sql = `delete from employee where Dno = 4`;  // delete 쿼리문 . where 조건, Dno가 4 인 경우 Dno 삭제
            await promisePool.query(sql);       // 데이터 값 삭제를 명령하는 쿼리문 전달, 쿼리 실행
        },
    }