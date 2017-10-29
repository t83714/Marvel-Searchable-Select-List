echo `pwd`
node api-server/index 1ba3429fd68d49355e3db8a3bb29a28858142693 414cd7afc99c3de04e662c51dd3c524f &
node -r @std/esm koa-index.js