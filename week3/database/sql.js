import mysql from "mysql2";
const pool = mysql.createPool(
process.env.JAWSDB_URL ?? {
host: 'localhost',
user: 'sgs',      // 사용자 이름
database: 'sims',     // 사용자 데이터 베이스명
password: 'simgs3413',   // 사용자 계정 비밀번호
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
}
);
const promisePool = pool.promise();
const sql = {
getUsers : async () => {
const [rows] = await promisePool.query(`SELECT * FROM student`)
return rows
},
}
module.exports = sql
