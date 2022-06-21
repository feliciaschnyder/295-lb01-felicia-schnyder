const mongoose = require('mongoose');

const repairData = mongoose.model('RepairData');

// Listet alle eingetragenen repairData auf (GET Methode)
// gibt alle Datensätze zurück
exports.listRepairs = (req, res) => {
    repairData.find({}, (err, repairData) => {
        if (err)
            res.send(err);
        res.json(repairData);
    });
};

// erstellt neuen repairData-Block (POST Methode)
// gibt neu erstellten Datensatz zurück
exports.createRepairs = (req, res) => {
    const new_repair = new repairData(req.body);
    new_repair.save((err, repairData) => {
        if (err)
            res.send(err);
        res.json(repairData);
    });
};

// liest einen einzelnen repairData anhand der ID (GET Methode)
// gibt gewünschten Datensatz zurück
exports.readRepairs = (req, res) => {
    repairData.findById(req.params.repairID, (err, repairData) => {
        if (err)
            res.send(err);
        res.json(repairData);
    });
};

// updated bestehede repairData anhand der ID (PUT Methode)
// gibt aktualisierten Datensatz zurück
exports.updateRepairs = (req, res) => {
    repairData.findOneAndUpdate({_id: req.params.repairID}, req.body, {new: true}, (err, repairData) => {
        if (err)
            res.send(err);
        res.json(repairData);
    });
};

// löscht bestehede repairData anhand der ID (DELETE Methode)
// gibt message: "RepairData deleted" zurück
exports.deleteRepairs = (req, res) => {
    repairData.remove({_id: req.params.repairID}, (err, repairData) => {
        if (err)
            res.send(err);
        res.json({message: 'RepairData deleted'});
    });
};
