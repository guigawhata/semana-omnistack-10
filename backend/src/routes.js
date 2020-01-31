const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

//TIPOS DE PARÂMETROS//

// Query Params: request.query (filtros, paginação, ordenação)


routes.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello World!' });

});

// Route Params: request.params (identificar um recurso na alteração ou remoção)

routes.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({ message: 'Hello World!' });

});

// Body: request.body (dados para criação ou alteração de um registro)

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World!' });

});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;