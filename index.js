const http = require("http");
const badyParser = require("body-parser");
const express = require("express");
const userApi = require("./api/userApi");
const DBHelper = require("./utils/DBHelper");

let conn = new DBHelper().getConn();

let app = express();
let server = http.createServer(app);

app.use(badyParser.json());
app.use(
  badyParser.urlencoded({
    extended: false
  })
);

// enrutamiento api back-end
app.use("/api/user", userApi);

// empieza a escuchar
server.listen(8888, () => {
  console.log(" success!! port:8888");
});
