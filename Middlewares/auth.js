const jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
    const token_header = req.headers.auth

    if(!token_header) return res.send({ error: 'token não enviado! '})

    jwt.verify(token_header, 'limaoComPorco', (err, decoded) =>{
        if(err) return res.send({error: 'Token inválido'})
        res.locals.auth_data = decoded
        return next()
    })
}

module.exports = auth