
const express = require('express')
const app = express ()
const port = 3001


//usar o express para receber as requisições com corpo json 
app.use(express.json());



app.get ('/', (req, res) => {
    res.send('Server funcionando')

}
)

//Import modules


//auth
const auth = require ('./routes/auth/auth')


//users
const getUser = require('./routes/users/get')
const createUser = require('./routes/users/create')
const updateUser = require('./routes/users/update')
const deleteUser = require('./routes/users/delete')


app.use('/auth/login', auth);





app.listen(port,()=>{
    console.log (`Servidor rodando na porta ${port}`)
})








