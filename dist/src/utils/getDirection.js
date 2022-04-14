"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getString = void 0;
const enums_1 = require("../models/enums");
const getString = (card) => {
    let output = "";
    switch (card.transportType) {
        case enums_1.TransportType.Train: {
            output = `${card.travelSequence}. Take ${enums_1.TransportType[card.transportType]} ${card.vehicleNo} from ${card.from} to ${card.to}. Sit in seat ${card.seatNo}.`;
            break;
        }
        case enums_1.TransportType.AirportBus: {
            output = `${card.travelSequence}. Take the ${enums_1.TransportType[card.transportType]} from ${card.from} to ${card.to}. No seat assignment.`;
            break;
        }
        case enums_1.TransportType.Flight: {
            output = `${card.travelSequence}. From ${card.from}, take flight ${card.vehicleNo} to ${card.to}. Gate ${card.gateNo}, seat ${card.seatNo}. ` +
                ((card.ticketCounter === null) ? `Baggage will we automatically transferred from your last leg.` : `Baggage drop at ticket counter ${card.ticketCounter}.`);
            break;
        }
        default: break;
    }
    return output;
};
exports.getString = getString;
