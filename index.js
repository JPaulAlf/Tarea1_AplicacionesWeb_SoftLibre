/* const http = require('http');

const server= http.createServer((req,res) =>{
    res.status=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola mundo NODE.js');
})

server.listen (3000, ()=>{
    console.log('Server on port 3000')
}) */


var jsonTexto= {"status":"ok"};

const express = require ('express');
const app= express();

app.listen (3000,()=>{
    console.log('Server on port 3000');
});



// RUTAS PARA EL SERVIDOR EXPRESSS, SE PUEDEN CREAR "N" CANTIDAD DE RUTAS
app.get('/',(req, res)=>{
  //  res.send('Hola mundo EXPRESS');
    res.send(jsonTexto);
});

app.get('/about',(req, res)=>{
    //  res.send('Hola mundo EXPRESS');
      res.send('este es el about');
  });



  //    app.get('/about',(req, res)=>{      Obtiene datos de la BD
  //        });

  //    app.post('/about',(req, res)=>{     Guarda datos de la BD
  //        });

  //    app.put('/about',(req, res)=>{      Actualiza datos de la BD
  //        });
  
  //    app.delete('/about/:idUsuario',(req, res)=>{   Borra datos de la BD
  //        });




//PAQUETES:
// CTRL + C (Cierra el servidor)


//  1) INSTALAR PAQUETE PARA MANTENER ENCENDIDO Y REFRESCAR EL SERVIDOR
//        npm i express nodemon --save-dev
//     Esta pendiente del codigo, y cuando se guarde, el hace automaticamente el reinicio del server
//        npx nodemon index.js (lo aplica a un archivo en especial)

//  2) PROBAR RESTAPIS o testear rutas
//        postman.com