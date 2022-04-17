"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorterService_1 = require("../src/services/sorterService");
const getDirection_1 = require("../src/utils/getDirection");
const testData_1 = require("./testData");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    jest.setTimeout(15000);
}));
test('Test Sorter Service', () => {
    var sorterService = new sorterService_1.SorterService();
    let boardingCards = (0, getDirection_1.validateData)(JSON.parse(JSON.stringify(testData_1.testData)));
    let sortedBoardingCards = sorterService.SortBoardingCards(boardingCards);
    expect(sortedBoardingCards).not.toBeNull();
    expect(sortedBoardingCards).toEqual(expect.any(Object));
});
