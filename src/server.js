import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//1. 모든 JS파일들은 독립적이며 다른 js파일을 사용하고 싶으면 import를 해야된다. 
//2. import를 하기 위해선 import가 되는 js파일에서 export를 지정해줘야 된다.
//3. export를 지정할 떄 default 키워드를 쓰면 다른곳에서 어떤 이름으로 import를 하던 상관없다.

const PORT = 4001;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
 


const handleListening = () => console.log(`Server listening on port 4001 😍 http://localhost:${PORT}`);

app.listen(PORT, handleListening);