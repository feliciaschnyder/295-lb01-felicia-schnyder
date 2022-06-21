module.exports = (app) => {
    const repair = require("../controllers/controller");

    app.route('/repair')
        .get(repair.listRepairs)
        .post(repair.createRepairs);

    app.route('/repair/:repairID')
        .get(repair.readRepairs)
        .put(repair.updateRepairs)
        .delete(repair.deleteRepairs);
};