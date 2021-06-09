'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;

const server = express()
	.use('/', (req,res) => res.sendFile('transmissao.html',{root: __dirname}))
	.use('/index', (req,res) => res.sendFile('index.html',{root: __dirname}))
	.listen(PORT, () => console.log('Servidor Funcionando'));

	.use('/', function (req, res) {
	  res.sendFile('transmissao.html',{root: __dirname})
	});


/*
server.get('/', function(req,res){
	res.sendFile('transmissao.html',{root: __dirname})
});

server.get('/index', function(req,res){
	res.sendFile('index.html',{root: __dirname})
});
*/
const wss = new Server({ server });

let sockets = [];

	wss.on('connection', function(socket) {
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
