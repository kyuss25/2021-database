# 2021-database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week_3 폴더로 이동
    > cd week_3

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',s
        user: 'sgs',      // 사용자 이름
        database: 'sims',     // 사용자 데이터 베이스명
        password: 'simgs3413',   // 사용자 계정 비밀번호
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
심규성|정보통신공학과|정보통신|12162131|

## 텍스트강조

**데이터베이스** 실습은 재미 ~~없어요~~있어요.