const express = require('express');
const server = express();
//const PORT = process.env.PORT || 3000;

server.listen(process.env.PORT || 3000,
	() => console.log("servidor funcionando"));

	const { Server } = require('ws');
	const ws = new Server({ server });
	let sockets = [];

	ws.on('connection', function(socket) {
	  // Adiciona cada nova conexão/socket ao array de sockets
	  sockets.push(socket);

	  // Envia uma mensagem para todos os sockets quando um dado for recebido
	  socket.on('message', function(msg) {
	    console.log(msg);
	    sockets.forEach(s => s.send(msg));
	  });

	  // Quando a conexão de um socket é fechada, remove o socket do array
	  socket.on('close', function() {
	    sockets = sockets.filter(s => s !== socket);
	  });
	});

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
