import path from "path";
import views from "co-views";
import parse from "co-body";



const render = views(path.resolve(__dirname, "../views"), {
    map: { html: "ejs" },
});

export default async function index(ctx) {
    let postData = {};
    try{
        postData = await parse(ctx.req);
    }catch(e){}
    const body = await render("index", { 
        title : "Home Page",
        postData,
    });
    ctx.body = body;
};
