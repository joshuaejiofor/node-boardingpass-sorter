import { BoardingCard } from '../src/models/boardingCard';
import {SorterService} from '../src/services/sorterService'
import { validateData } from '../src/utils/getDirection';
import { testData } from './testData';

beforeAll(async () => {
    jest.setTimeout(15000);    
})


test('Test Sorter Service', () => {
    var sorterService = new SorterService();
    let boardingCards = validateData(<BoardingCard[]> JSON.parse(JSON.stringify(testData)))

    let sortedBoardingCards = sorterService.SortBoardingCards(boardingCards);

    expect(sortedBoardingCards).not.toBeNull()
    expect(sortedBoardingCards).toEqual(expect.any(Object));
});