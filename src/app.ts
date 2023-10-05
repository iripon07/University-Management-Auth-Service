import express, { Application, Response, Request } from  "express";
import cors from 'cors'
const app:Application = express();
const port = 3000;

//cors
app.use(cors());

//parser
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (req:Request, res:Response) => {
  res.send("Working successfully....");
});

export default app;
