import mongoose from "mongoose";
const goJobSchema = new mongoose.Schema(
{
    nombre: {
        type: String,
        required: true
    },
    trabajo: {
        type: String,
        required: true
    }, 
    precio: {
        type: String,
    },
    valoracion: {
        type: String,
    },
    descripcion: {
        type: String,
    }
},{timeseries: true}
)
;export default mongoose.model('goJob', goJobSchema);

