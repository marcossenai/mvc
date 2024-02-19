const express = require('express');
const calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { numero1, numero2 } = req.body;
    const resultadoMultiplicacao = calculadora.multiplicacao(
        parseFloat(numero1), parseFloat(numero2)
    );
    res.send(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);
});

module.exports = resultado;
