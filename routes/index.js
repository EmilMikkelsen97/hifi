module.exports = (app) => {
    require('./produkt')(app);
    require('./user')(app);
    // require('./login')(app);
    require('./admin')(app);
    //require('./kontakt')(app);
}; 