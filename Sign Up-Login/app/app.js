"use strict";

const PORT = 3000;

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");  // index.js를 읽음.

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//url을 통해 전달되는 데이터에 한글, 공백 같은 문자가 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true}));

app.use("/", home); // use: 미들웨어 등록 메소드

module.exports = app;