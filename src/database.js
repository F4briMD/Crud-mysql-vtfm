// import express from 'express';
// import mysql from 'mysql'
// // import cors from 'cors'


// const app = express();
// const port = 3001;
// // const mysql = require('mysql');

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'vite_crud'

// })

// app.post('/create',(req,res)=>{
//     const nombre = req.body.nombre;
//     const edad = req.body.edad;
//     const pais = req.body.pais;
//     const cargo = req.body.cargo;
//     const años = req.body.años;

//     db.query('INSERT INTO empleados(nombre,edad,pais.cargo,años)VALUES(?,?,?,?,?)',[nombre,edad,pais,cargo,años],
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send('Empleado registrado')
//         }
//     }
// )});

// app.listen(port, () => {
//   console.log(`Corriendo en el puerto ${port}`);
// });

import express from 'express';
import mysql from 'mysql';
import cors from 'cors'

const app = express();
const port = 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_vite'
});

app.use(cors());
app.use(express.json());


//INSERTAR EN LA BD
app.post('/create', (req, res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const años = req.body.años;
    

    db.query('INSERT INTO empleados(nombre, edad, pais, cargo, años) VALUES(?, ?, ?, ?, ?)', [nombre, edad, pais, cargo, años],
        (err,result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
//
app.get('/empleados', (req, res) => {

    db.query('SELECT CONCAT(UCASE(nombre), LOWER(SUBSTRING(nombre FROM 2))) AS nombre, edad, pais, cargo, años FROM empleados', 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});


app.put('/update', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const años = req.body.años;
    

    db.query('UPDATE empleados set nombre=?, edad=?, pais=?, cargo=?, años=? WHERE id=?', [nombre, edad, pais, cargo, años,id],
        (err,result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM empleados WHERE id = ?', [id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});



app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});
