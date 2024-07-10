import express from "express";
import config from "./config";
import router from "./routes/index.routes";
import { genericErrorHandler, notFoundError } from "./middlewares/errorHandler.middleware";
import { requestLogger } from "./middlewares/logger.middleware";

const app = express();

app.use(express.json());  

app.use(requestLogger);
app.use(router);

app.use(genericErrorHandler);
app.use(notFoundError);

app.listen(config.port, () => {
    console.log(`Server started listening on port: ${config.port}`);
});