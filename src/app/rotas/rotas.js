module.exports = (app) => {
    app.get('/', function(request, response) {
        response.marko(require('../views/index.marko'))
    });
};
