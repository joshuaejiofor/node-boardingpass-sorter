"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardingCard = void 0;
const enums_1 = require("./enums");
class BoardingCard {
    From;
    To;
    TransportType;
    VehicleNo;
    GateNo;
    SeatNo;
    TicketCounter;
    TravelSequence;
    ToString = () => {
        let output = "";
        switch (this.TransportType) {
            case enums_1.TransportType.Train: {
                output = `${this.TravelSequence}. Take ${this.TransportType} ${this.VehicleNo} from ${this.From} to ${this.To}. Sit in seat ${this.SeatNo}.`;
                break;
            }
            case enums_1.TransportType.AirportBus: {
                output = `${this.TravelSequence}. Take the ${this.TransportType} from ${this.From} to ${this.To}. No seat assignment.`;
                break;
            }
            case enums_1.TransportType.Flight: {
                output = `${this.TravelSequence}. From ${this.From}, take flight ${this.VehicleNo} to ${this.To}. Gate ${this.GateNo}, seat ${this.SeatNo}.` +
                    `${((this.TicketCounter != null) ? `${this.TravelSequence}. Baggage drop at ticket counter ${this.TicketCounter}.` : `Baggage will we automatically transferred from your last leg.`)}`;
                break;
            }
            default: break;
        }
        return output;
    };
}
exports.BoardingCard = BoardingCard;
