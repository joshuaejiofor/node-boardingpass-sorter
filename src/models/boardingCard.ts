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
}