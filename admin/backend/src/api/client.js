const express = require('express')
const db = require('../config/database')
const Client = require('../domain/client');
 
const router = express.Router();
 
//handles url http://localhost:6001/clients
router.get("/", (req, res, next) => {
 
    db.query(Client.getAllClientSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Clients listed.",
                clients:data
            });
        }
    });    
});
 
//handles url http://localhost:6001/clients/add
router.post("/add", (req, res, next) => {
 
    //read product information from request
    //let client = new Client(req.body.name);
 
    db.query(Client.AddClientSQL(req.body.name), (err, data)=> {
        res.status(200).json({
            message:"Client added.",
            clientId: data.insertId
        });
    });
});
 
 
module.exports = router;