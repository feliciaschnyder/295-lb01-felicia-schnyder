const mongoose = require('mongoose');

// Datenbank schema mit Datentypen erstellen
const repairDataSchema = new mongoose.Schema({
    Automarke: {
        type: String,
    },
    Modell: {
        type: String
    },
    Seriennummer: {
        type: String
    },
    Besitzer: {
        type: String
    },
    Telefon: {
        type: String
    },
    ReperaturNummer: {
        type: Number
    },
    ReperaturTitel: {
        type: String
    },
    Reperaturbeschreibung: {
        type: String
    },
    Abholdatum: {
        type: String
    }
});

module.exports = mongoose.model('RepairData', repairDataSchema);