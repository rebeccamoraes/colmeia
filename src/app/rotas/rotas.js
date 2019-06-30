const DemandaDao = require('../infra/demanda-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(request, response) {
        response.marko(require('../views/index.marko'))
    });
    
    app.get('/demandas', function (request, response) {
        const demandaDao = new DemandaDao(db);
        demandaDao.lista()
            .then(demandas => response.marko(
                require('../views/demandas/lista.marko'),
                {
                    demandas: demandas
                }
            ))
            .catch(erro => console.log(erro));
    });

};
