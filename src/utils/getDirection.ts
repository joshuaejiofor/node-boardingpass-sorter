import { BoardingCard } from "../models/boardingCard";

export const validateData = (testData: BoardingCard[]) => {
    let testBoardingCards : BoardingCard[] = []
    testData.forEach(item => {
        testBoardingCards.push(new BoardingCard(item.from ?? '', item.to ?? '', 
            item.transportType, item.vehicleNo ?? '', item.gateNo ?? '', item.seatNo ?? '',
            item.ticketCounter ?? '', item.actualSequence, 0));
    })
    return testBoardingCards;
}