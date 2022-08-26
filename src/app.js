import express from 'express';

const app = express();

app.get('/tweets',(req,res)=>{
    console.log('get');
    res.send('OK')
});

app.listen(5000,()=>console.log('Listening on port 5000'));