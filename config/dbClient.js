import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient{
    /**
     *
     */
    constructor() {
        this.connectarBaseDatos();
    }

    async connectarBaseDatos(){
        const queryString = `mongodb+srv://${process.env.USER_BD}:${process.env.PASSWORD_BD}@${process.env.SERVER_BD}/GoJob?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
    }

    async cerrarConexcion() {
        try {
            await mongoose.disconnect();
            console.log("conexcion cerrada");
        } catch (e) {
            console.log(e);
        }
    }
}

export default new dbClient();

