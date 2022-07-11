import express from "express";
import morgan from "morgan";

//1. js 최신문법을 사용하기 위한 babel을 설치
//2. babel을 자동 적용시키기 위해 babel/node를 설치
//3. 내용이 수정될 때 마다 자동으로 서버를 재시작 해주는 nodemon 설치
//4. package.json scripts 안에 "dev":"nodemon --excu babel-node 메인소스경로" 추가한다
//5. package.json에 추가한 dependency들은 실제로 node.modules에 추가된다.
//6. 어떤 함수든 controller나 middleware가 될 수 있다.
//7. 함수가 next()를 사용하면 middleware, send()같은 메소드를 사용하면 controller (연결이 중단되기 때문에)
//8. middleware는 위에서 아래로 동작한다. app.use() 메소드를 쓰면 글로벌 미들웨어가 된다.
//9. app.use() 메소드로 모든 함수에 미들웨어를 적용시키려면 맨위에 있어야 된다.
//10. app.get() 인자로 end함수 사이에 함수를 넣어도 미들웨어가 된다.
//11. server(=app)가 listening하기 시작하면 강제로 종료할 때 까지 계속 listen하고 있다.
//12. 모든 controller에는 req, res, next가 있으며, express가 만들어 준다.
//13. morgan 미들웨어는 node.js에서 쓰는 유용한 라이브러리이다. 여러가지 옵션이 있다 ex) dev, common, short
//    morgan("옵션"); 함수를 호출하면 옵션에 맞는 미들웨어를 리턴해준다.
/*const app = express();

const PORT = 4000;

const morgan = (req, res, next) => {
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

app.use(morgan);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/login",handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port 4000 😍 http://localhost:${PORT}`);

app.listen(PORT, handleListening);*/

const app = express();
const logger = morgan("dev");

const PORT = 4000;


const home = (req, res ) => {
    console.log("I will respond.");
    return res.send("<h1>hi</hi>");
} 
const login = (req, res) => {
    return res.send("login");
}

app.use(logger);
app.get("/",  home);
app.get("/login",  login);

const handleListening = () => console.log(`Server listening on port 4000 😍 http://localhost:${PORT}`);

app.listen(PORT, handleListening);


