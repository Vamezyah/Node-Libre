const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const operation = req.body.operation

    let result;

    switch (operation) {
        case 'suma':
            result = n1 + n2;
            break;
        case 'resta':
            result = n1 - n2;
            break;
        case 'multiplicacion':
            result = n1 * n2;
            break;
        case 'potencia':
            result = Math.pow(n1, n2);
            break;
        default:
            res.send("<h2>Operación no válida</h2>");
            return;
    }

    res.send(`<h2>Resultado de ${operation}: ${result}</h2>`+' <p> Ve hacia atrás para hacer otra operación.</p>')
})

app.listen(3000, (err)=>{
    if(err){
        console.log('Servidor Inactivo')
    } else {
        console.log('Servidor Online')
    }
})