const express = require('express');
const server = express();
//const PORT = process.env.PORT || 3000;

server.listen(process.env.PORT || 3000,
	() => console.log("servidor funcionando"));

  server.get('/', function(req,res){
    res.sendFile('transmissao.html',{root: __dirname})
  });

	server.get('/index', function(req,res){
    res.sendFile('index.html',{root: __dirname})
  });

/*
app.listen(8123, () =>
  console.log("Servidor iniciado")
);


*/
