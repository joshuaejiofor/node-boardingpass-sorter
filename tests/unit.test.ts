import { BoardingCard } from '../src/models/boardingCard';
import {SorterService} from '../src/services/sorterService'
import { testData } from './testData';

beforeAll(async () => {
    jest.setTimeout(15000);    
})


test('Test Sorter Service', () => {
    var sorterService = new SorterService();
    var boardingCards = <BoardingCard[]> JSON.parse(JSON.stringify(testData))

    let sortedBoardingCards = sorterService.SortBoardingCards(boardingCards);

    console.log(sortedBoardingCards);

    expect(sortedBoardingCards).not.toBeNull()
    expect(sortedBoardingCards).toEqual(expect.any(Object));
});