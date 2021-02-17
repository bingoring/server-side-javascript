"use strict";

var express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/login', ctrl.login); 

router.get('/', ctrl.home);

module.exports = router;
// app.get('/form_receiver', function(req, res){
//     res.send('hello, GET');
//     var title = req.query.title;
//     var description = req.query.description;
//     res.send(title+','+description);
// });
// app.post('/form_receiver', function(req, res){
//     var title = req.body.title;
//     var description = req.body.description;
//     res.send(title + ',' + description);
// });
// router.get('/topic/:topic_id/mode', function(req, res){
//     res.send(req.params.topic_id+ '+'+ req.params.mode);
// });
// router.get('/topic/:id', function(req, res){
//     var topics = [
//         'javascript is...',
//         'nodejs is...',
//         'express is...'
//     ];
//     var output = `
//     <a href="/topic/0">JavaScript</a><br>
//     <a href="/topic/1">Nodejs</a><br>
//     <a href="/topic/2">Express</a><br>
//     ${topics[req.params.id]}
//     `
//     res.send(output);
// });

// router.get('/template', function(req, res){
//     res.render('temp', {time:Date(), _title:'jade'});
// });
