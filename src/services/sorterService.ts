import Enumerable from 'linq'
import { BoardingCard } from '../models/boardingCard';

export class SorterService{
    SortBoardingCards = (boardingCards: BoardingCard[]) : BoardingCard[] => {        
        let counter = 0;
        let totalBoardingCards = boardingCards.length;

        let boardingCard = Enumerable.from(boardingCards).where(c => !Enumerable.from(boardingCards).select(b => b.to).contains(c.from)).firstOrDefault();
        boardingCard!.travelSequence = ++counter;

        while(counter < totalBoardingCards)
        {
            boardingCard = Enumerable.from(boardingCards).where(c => c.from == boardingCard!.to).firstOrDefault();
            boardingCard!.travelSequence = ++counter;
        } 

        return Enumerable.from(boardingCards).orderBy(c => c.travelSequence).toArray();
    }
}