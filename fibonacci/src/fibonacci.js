const express = require('express')

let exportando = express.Router()

    fibo = require('./fibocode.js')

exportando.post('/fibonacci',fibonacci.calculoFibo)

module.exports = exportando;
