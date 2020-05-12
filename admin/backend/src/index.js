const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
 
const clients = require('./api/client');
 
const app = express();
 
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/clients",clients);
 
//if we are here then the specified request is not found
app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
 
//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});

app.listen(3000)
 
module.exports = app;