const express = require('express');
const app = express();


//settings
app.set('port',process.env.PORT || 3000);

//midlewares
app.use(express.json());

//routers


//starting the server
app.listen(3000,()=>{
    console.log('server on port : ', app.get('port'));
});
