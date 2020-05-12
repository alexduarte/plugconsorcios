const express = require('express')

const { Cliente } = require('../../app/models');

const router = express.Router();

router.get("/", (req, res, next) => {
    Cliente.findAll()
        .then(resp => res.status(200).json(resp))
});

router.post("/add", (req, res, next) => {
    Cliente.create(req.body)
        .then(resp => res.status(200).json(resp.id))
});

 
module.exports = router;