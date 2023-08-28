const patientRouter = require('./patient');
const doctorRouter = require('./doctor');
const adminRouter = require('./admin');
const technicanRouter = require('./technican');

function route(app) {
    app.get('/patient',patientRouter);
    app.get('/doctor',doctorRouter);
    app.get('/admin',adminRouter);
    app.get('/technican',technicanRouter);
    app.get('/',(req, res) => {
        res.render('home');
    });
}

module.exports = route;
