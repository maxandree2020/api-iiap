const express = require('express');
const app = express();


//settings
app.set('port',process.env.PORT || 3000);

//midlewares
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
 
//routes
app.use(require('./routes/planta.route'));
app.use(require('./routes/fam_plantas.route'));
app.use(require('./routes/local_plantas.route'));
app.use(require('./routes/altura_plantas.route'));
app.use(require('./routes/vol_plantas.route'));


//starting the server
app.listen(3000,()=>{
    console.log('server on port : ', app.get('port'));
});
