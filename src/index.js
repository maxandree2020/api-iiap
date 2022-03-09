const express = require('express');
const app = express();


//settings
app.set('port',process.env.PORT || 3000);

//midlewares
app.use(express.json());

//routes
app.use(require('./routes/planta.route'));
app.use(require('./routes/fam_plantas.route'));


//starting the server
app.listen(3000,()=>{
    console.log('server on port : ', app.get('port'));
});
