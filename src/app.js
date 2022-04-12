import cors from "cors";
import express from "express";
import router from "./routes/index.js";
import errorHandlerMiddleware from "./middlewares/errorHandleMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
