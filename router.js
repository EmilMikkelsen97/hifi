const url = require('url');
const helpers = require('./helpers');

const routes = {
    '/cat': require('./endpointhandlers/cat'),
    '/dog': require('./endpointhandlers/dog'),
    '/test': require('./endpointhandlers/test'),
    '/login': require('./endpointhandlers/login')
};

module.exports = function (req, res) {
    
    var pathname = url.parse(req.url).pathname;

    if(pathname === '/'){
        helpers.fileRespond(res, 'public/index.html');
        return;
    }

    var regexFile = pathname.match(/^\/(img\/|css\/|js\/)?[\w-]+\.(html|css|png|jpg|js)$/);
    // console.log(regexFile);
    if(regexFile){
        helpers.fileRespond(res, 'public' + regexFile[0]);
        return;
    }

    var method = req.method
    var handler = routes[pathname]; // hent handleren (hvis vi har en)
    if(handler){
        // Hvis vi er her er der fundet en handler..
        var action = handler[method]; // Hent metode (hvis vi har en der matcher)
        if(action){
            // Hvis vi er her er der fundet en metode-handler
            action(req, res);    // Eksekver metodehandleren
        }
        else{
            // Hvis vi er her er der ikke fundet en metodehandler
            helpers.respond(res, 'Metode ikke tilladt', 404);    
        }
    }
    else{
        // Hvis vi er her er der ikke fundet en handler
        helpers.respond(res, 'Ressource findes ikke', 404);
    }
};