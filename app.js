import 'dotenv/config';
import express from 'express';
import routesGoJob from './routes/rout.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/rout', routesGoJob);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=> console.log('Server listening on port '+PORT))
}catch (e){
    console.log(e);
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexcion();
    process.exit(0);
})