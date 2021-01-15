const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('Olá FullStack Lab...')
})

app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possível iniciar o servidor do Jobify...')

    }else{
        console.log('Servidor do Jobify rodando...')
    }
})