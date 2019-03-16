const express = require('express')
const auth = require('../Middlewares/auth')

const router = express.Router()

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data)
    return res.send({message: `Essa informação muito importante. Usuários não autorizados não deveriam recebê-la!`})
})

router.post('/', (req, res) => {
    return res.send({message: 'tudo ok com o POST! da raiz'})
})

module.exports = router;
