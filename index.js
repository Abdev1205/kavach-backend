import { config } from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./router/router.js";
import connectDb from "./Db/connect.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.json({limit: '35mb'}));

// adding middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

console.log(process.env.FRONTEND_URL)

config({
  path: ".env"
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening to ${PORT} port`);
})

const databaseConnection = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.get("/", (req, res) => {
      res.send("Hi Welcome Kavach Backend")
    })
  } catch (error) {
    console.log(error);
  }
}
databaseConnection();