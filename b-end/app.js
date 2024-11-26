// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'www')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/www/index.html')); //__dirname : Ritorna la cartella del progetto
});
const fs = require('fs');

app.get('/api/mante', (req, res) => {
  fs.readFile('api/mante.json', 'utf8', (err, data) => {
  if (err) {
  console.error('Errore durante la lettura del file JSON:', err);
  return res.status(500).send('Errore interno del server');
  }
  
  const productsData = JSON.parse(data);
  console.log(typeof productsData);
  res.setHeader('Content-Type', 'application/json');
  res.json(productsData);
  });
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
