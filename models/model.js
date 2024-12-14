import mongoose,{mongo} from "mongoose";
import GoJob from '../schemas/goJob.js';

class goJobModel {


    async create(GoJob) {
        return await GoJob.create(GoJob);
    }
    async createMany(GoJob) {
        return await GoJob.insertMany(GoJob);
    }
    async update(id, GoJob){
        return await GoJob.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, mascota, { new: true});
    }

    async delete(id){
        return await GoJob.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id)});
    }

    /*async deleteAll() {
        return await Mascota.deleteMany({});
      }*/

    async getAll(){
        return await GoJob.find();
    }
    async getOne(id){
        return await GoJob.findById({ _id: new mongoose.Types.ObjectId(id)});
    }
}

export default new goJobModel();