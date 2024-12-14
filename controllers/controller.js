import goJobModel from '../models/model.js';
class goJobController {
    constructor(){

    }

    async create(req, res){
        try {
            const data = await goJobModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async createMany(req, res){
        try {
            const data = await goJobModel.insertMany(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async update(req, res){
        try {
            const { id } = req.params;
            const data = await goJobModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res){
        try {
            const { id } = req.params;
            const data = await goJobModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    /*async deleteAll(req, res) {
        try {
          const data = await mascotasModel.deleteAll(); // Usamos deleteAll para eliminar todos los registros
          res.status(206).json({ message: "Todos los registros han sido eliminados", data });
        } catch (e) {
          res.status(500).send({ message: "Error al eliminar los registros", error: e });
        }
      }*/

    async getAll(req, res){
        try {
            const data = await goJobModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res){
        try {
            const { id } = req.params;
            const data = await goJobModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }


}

export default new goJobController();