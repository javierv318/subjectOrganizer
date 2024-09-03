const { Router } = require('express');
const router = Router();
const mysql = require('mysql');
// se crea la conexión a mysql
const connection = mysql.createPool({
    connectionLimit: 500,
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: '', //CAMBIAR A LA BD
    port: 3306
});
connection.on('error', function (err) {
    console.log("[mysql error]", err);
});
//function get en la ruta /datos, que trae todos los datos almacenados en la tabla
router.get('/subjects', (req, res) => {
    var json1 = {}; //variable para almacenar cada registro que se lea, en formato json
    var arreglo = []; //variable para almacenar todos los datos, en formato arreglo de json
    connection.getConnection(function (error, tempConn) { //conexion a mysql
        if (error) {
            throw error; //si no se pudo conectar
        }
        else {
            console.log('Conexion correcta.');
            //ejecución de la consulta
            tempConn.query('SELECT * FROM subjects', function (error, result) {
                var resultado = result; //se almacena el resultado de la consulta en la variable resultado
                if (error) {
                    throw error;
                } else {
                    tempConn.release(); //se librea la conexión
                    for (i = 0; i < resultado.length; i++) { //se lee el resultado y se arma el json
                        json1 = {
                            /*
                            
                            
                            
                            DATOS



                            */
                        };
                        arreglo.push(json1); //se añade el json al arreglo
                    }
                    res.json(arreglo); //se retorna el arreglo
                }
            });
        }
    });
});
//function GET que retorna los datos de un nodo
router.get('/subjects/:id', (req, res) => {
    var id = req.params.id;
    var json1 = {}; //variable para almacenar cada registro que se lea, en formato json
    var arreglo = []; //variable para almacenar todos los datos, en formato arreglo de json
    connection.getConnection(function (error, tempConn) { //conexion a mysql
        if (error) {
            throw error; //si no se pudo conectar
        }
        else {
            console.log('Conexion correcta.');
            //ejecución de la consulta
            tempConn.query('SELECT * FROM subjects WHERE id = ?',[id], function (error, result) {
                var resultado = result; //se almacena el resultado de la consulta en la variable resultado
                if (error) {
                    throw error;
                } else {
                    tempConn.release(); //se librea la conexión
                    for (i = 0; i < resultado.length; i++) { //se lee el resultado y se arma el json
                        json1 = {
                            /*



                            DATOS



                            */
                        };
                        arreglo.push(json1); //se añade el json al arreglo
                    }
                    res.json(arreglo); //se retorna el arreglo
                }
            });
        }
    });
});

//función post en la ruta /datos que recibe datos
router.post('/subjects', (req, res) => { 
    json1 = req.body; //se almacena el json recibido en la variable json1
    connection.getConnection(function (error, tempConn) { //conexion a mysql
        if (error) {
            throw error;
        }
        else {
            console.log('Conexion correcta.');
            tempConn.query('INSERT INTO subjects VALUES(null,?)', //El null es para la id
                [
                    /*



                    DATOS



                    */
                ], function
                (error, result) { //se ejecuta la inserción
                if (error) {
                    res.send("error al ejecutar el query");
                } else {
                    tempConn.release();
                    res.send("datos almacenados"); //mensaje de respuesta
                }
            });
        }
    });
});
module.exports = router;