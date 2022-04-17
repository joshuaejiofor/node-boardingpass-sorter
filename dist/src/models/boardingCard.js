"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardingCard = void 0;
const enums_1 = require("./enums");
class BoardingCard {
    constructor(from, to, transportType, vehicleNo, gateNo, seatNo, ticketCounter, actualSequence, travelSequence) {
        this.getString = () => {
            let output = "";
            switch (this.transportType) {
                case enums_1.TransportType.Train: {
                    output = `${this.travelSequence}. Take ${enums_1.TransportType[this.transportType]} ${this.vehicleNo} from ${this.from} to ${this.to}. Sit in seat ${this.seatNo}.`;
                    break;
                }
                case enums_1.TransportType.AirportBus: {
                    output = `${this.travelSequence}. Take the ${enums_1.TransportType[this.transportType]} from ${this.from} to ${this.to}. No seat assignment.`;
                    break;
                }
                case enums_1.TransportType.Flight: {
                    output = `${this.travelSequence}. From ${this.from}, take flight ${this.vehicleNo} to ${this.to}. Gate ${this.gateNo}, seat ${this.seatNo}. ` +
                        ((this.ticketCounter === null) ? `Baggage will we automatically transferred from your last leg.` : `Baggage drop at ticket counter ${this.ticketCounter}.`);
                    break;
                }
                default: break;
            }
            return output;
        };
        this.from = from;
        this.to = to;
        this.transportType = transportType;
        this.vehicleNo = vehicleNo;
        this.gateNo = gateNo;
        this.seatNo = seatNo;
        this.ticketCounter = ticketCounter;
        this.actualSequence = actualSequence;
        this.travelSequence = travelSequence;
    }
}
exports.BoardingCard = BoardingCard;
