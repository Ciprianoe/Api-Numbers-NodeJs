const express = require('express');
    const app = express();



    app.get('/', (req, res)=>{
          res.send('Home Page')
    })

    app.get('/random/:numInicial/:numFinal', (req,res)=>{
        const min =parseInt(req.params.numInicial);
        const max =parseInt(req.params.numFinal);
        //console.log( typeof req.params.numInicial)
        //console.log( typeof req.params.numFinal)
        //console.log(typeof min)


// validation

if(isNaN(min) || isNaN(max)){

        res.status(404)
        res.json({"error":"Bad Request"})
}else{


        const result = Math.floor(Math.random() *  (max - min) + min)      

        res.json({"Randon":result});
        //console.log(result);
}
    })

    app.listen(3000, () =>{
            console.log('Server Running')
    })