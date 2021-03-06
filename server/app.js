import Koa from "koa";
import logger from "koa-logger";
import compress from "koa-compress";
import serve from "koa-static";
import route from "koa-route";
import path from "path";

import index from "./controllers/index";

const app = new Koa();

// Logger
app.use(logger());

app.use(route.get("/", index));

// Serve static files

app.use(serve(path.join(__dirname, "../public")));

// Compress
app.use(compress());

export default app;
