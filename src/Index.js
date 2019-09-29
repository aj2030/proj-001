/**
 * http://usejsdoc.org/
 */


const http = require('http');
const fs = require('fs');
const express = require('express');

// Reading properties file
const propertiesFile = fs.readFileSync('./lib/server.properties', 'utf8');

// Extracting port number
const portNumber = propertiesFile.slice(propertiesFile.indexOf('=')+1);

// Run server
const app = express();
app.listen(portNumber, () => {
	console.log(`Server listening on port number ${portNumber}`);
});

var router1 = express.Router();
router1.get('/', (req,res,next) => {
	let urlOfIndex = './lib/Index.html';
	
	fs.readFile(urlOfIndex, (error, data) => {
		if(error){
			res.send('Error loading Index page');
		}
		else{
			// Trying to get various logical parts of request
			console.log(`URL: ${JSON.stringify(req.baseUrl)}
						 Query Parameters: ${JSON.stringify(req.params)}
						 Host Name: ${req.hostname}
						 Method: ${req.method}
						 Cookies: ${JSON.stringify(req.cookies)}
						 HTTP Headers: ${JSON.stringify(req.headers)}`);
			res.send(data.toString());
		}
	});
});

var router2 = express.Router();
router2.get('/Logo.png', (req,res,next) => {
	let urlOfIndex = './lib/Logo.png';
	
	fs.readFile(urlOfIndex, (error, data) => {
		if(error){
			res.send('Error loading Index page');
		}
		else{
			res.send(data);
			// Trying to get various logical parts of request
			console.log(`URL: ${JSON.stringify(req.baseUrl)}
						 Query Parameters: ${JSON.stringify(req.params)}
						 Host Name: ${req.hostname}
						 Method: ${req.method}
						 Cookies: ${JSON.stringify(req.cookies)}
						 HTTP Headers: ${JSON.stringify(req.headers)}`);
		}	
	});
});

app.use('/', [router1, router2]);
