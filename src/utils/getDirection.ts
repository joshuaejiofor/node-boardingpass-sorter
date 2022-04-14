import { BoardingCard } from "../models/boardingCard";
import { TransportType } from "../models/enums";

export const getString = (card: BoardingCard) : string => {
    let output = "";
    switch (card.transportType){
        case TransportType.Train:{
            output = `${card.travelSequence}. Take ${TransportType[card.transportType]} ${card.vehicleNo} from ${card.from} to ${card.to}. Sit in seat ${card.seatNo}.`;
            break;
        }   
        case TransportType.AirportBus:{
            output = `${card.travelSequence}. Take the ${TransportType[card.transportType]} from ${card.from} to ${card.to}. No seat assignment.`;
            break;
        }
        case TransportType.Flight:{
            output = `${card.travelSequence}. From ${card.from}, take flight ${card.vehicleNo} to ${card.to}. Gate ${card.gateNo}, seat ${card.seatNo}. ` +
                ((card.ticketCounter === null) ? `Baggage will we automatically transferred from your last leg.` : `Baggage drop at ticket counter ${card.ticketCounter}.`)
            break;
        }
        default: break
    }
    return output;
}