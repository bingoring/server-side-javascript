"use strict";

//모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//라우팅
const home = require("./routes/home");

app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/", home);

//사용자가 post방식으로 보냈다면 이 앱 안에서
//req객체가 갖고있지 않은 body객체를 추가한다.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

module.exports = app;
