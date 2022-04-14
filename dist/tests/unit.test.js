"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorterService_1 = require("../src/services/sorterService");
const testData_1 = require("./testData");
beforeAll(async () => {
    jest.setTimeout(15000);
});
test('Test Sorter Service', () => {
    var sorterService = new sorterService_1.SorterService();
    var boardingCards = JSON.parse(JSON.stringify(testData_1.testData));
    let sortedBoardingCards = sorterService.SortBoardingCards(boardingCards);
    console.log(sortedBoardingCards);
    expect(sortedBoardingCards).not.toBeNull();
    expect(sortedBoardingCards).toEqual(expect.any(Object));
});
