/*
Importer les dépendances
*/
const express = require('express');
const path = require('path');
const ejs = require('ejs');
//

const frontRoute = require('./routes/front');
const apiRoute = require('./routes/api');

/*
Initialiser le serveur
*/
// Configurer le serveur
const app = express();
const port = process.env.PORT || 3000;

// Configurer le dossier vue client
app.set( 'views', __dirname + '/www' );
app.use( express.static(path.join(__dirname, 'www')) );

// Configurer les routes
app.use('/', frontRoute);
app.use('/api', apiRoute);

// Définir le moteur de route
app.engine( 'html', ejs.renderFile );
app.set( 'view engine', 'html' );
//

/*
Lancer le serveur
*/
app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}`) );
//