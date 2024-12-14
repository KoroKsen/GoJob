import express from 'express';
const route = express.Router();

import goJobsController  from '../controllers/controller.js';

route.post('/', goJobsController.create);
route.post('/', goJobsController.createMany);
route.get('/:id', goJobsController.getOne);
route.get('/', goJobsController.getAll);
route.put('/:id', goJobsController.update);
route.delete('/:id', goJobsController.delete);
/*route.delete('/', mascotasController.deleteAll);
*/



export default route;