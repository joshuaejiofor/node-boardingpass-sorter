import { TransportType } from "./enums";

export class BoardingCard {
    from!: string;
    to!: string;
    transportType!: TransportType;
    vehicleNo!: string;
    gateNo!: string;
    seatNo!: string;
    ticketCounter!: string;    
    actualSequence!: number;
    travelSequence!: number; 
    
    constructor(from: string, to: string, transportType: TransportType, vehicleNo: string,
        gateNo: string, seatNo: string, ticketCounter: string, actualSequence: number, 
        travelSequence: number){
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

    getString = () : string => {
        let output = "";
        switch (this.transportType){
            case TransportType.Train:{
                output = `${this.travelSequence}. Take ${TransportType[this.transportType]} ${this.vehicleNo} from ${this.from} to ${this.to}. Sit in seat ${this.seatNo}.`;
                break;
            }   
            case TransportType.AirportBus:{
                output = `${this.travelSequence}. Take the ${TransportType[this.transportType]} from ${this.from} to ${this.to}. No seat assignment.`;
                break;
            }
            case TransportType.Flight:{
                output = `${this.travelSequence}. From ${this.from}, take flight ${this.vehicleNo} to ${this.to}. Gate ${this.gateNo}, seat ${this.seatNo}. ` +
                    ((this.ticketCounter === null) ? `Baggage will we automatically transferred from your last leg.` : `Baggage drop at ticket counter ${this.ticketCounter}.`)
                break;
            }
            default: break
        }
        return output;
    }   
}