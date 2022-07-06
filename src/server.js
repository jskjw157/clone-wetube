import express from "express";

//1. js 최신문법을 사용하기 위한 babel을 설치
//2. babel을 자동 적용시키기 위해 babel/node를 설치
//3. 내용이 수정될 때 마다 자동으로 서버를 재시작 해주는 nodemon 설치
//4. package.json scripts 안에 "dev":"nodemon --excu babel-node 메인소스경로" 추가한다
//5. 어떤 함수든 controller나 middleware가 될 수 있다.
//6. 함수가 next()를 사용하면 middleware, send()같은 메소드를 사용하면 controller (연결이 중단되기 때문에)
//7. middleware는 왼쪽에서 오른쪽으로 동작한다. app.use() 메소드를 쓰면 글로벌 미들웨어가 된다.

const app = express();

const PORT = 4000;

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
const handleHome = (req, res) => {
    return res.end();
}
const handleLogin = (req, res) => {
    return res.send("Login here.");
}
const privateMiddleware = (req, res, next) => {
    const url =req.url;
    if(url == "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
}

const handleProtected = (req, res, next) => {
 return res.send("welcome to the private rounge");   
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login",handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port 4000 😍 http://localhost:${PORT}`);

app.listen(PORT, handleListening);

