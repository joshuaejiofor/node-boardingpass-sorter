"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorterService = void 0;
const linq_1 = __importDefault(require("linq"));
class SorterService {
    SortBoardingCards = (boardingCards) => {
        var counter = 0;
        var totalBoardingCards = boardingCards.length;
        var boardingCard = linq_1.default.from(boardingCards).where(c => !linq_1.default.from(boardingCards).select(b => b.To).contains(c.From)).firstOrDefault();
        boardingCard.TravelSequence = ++counter;
        while (counter < totalBoardingCards) {
            boardingCard = linq_1.default.from(boardingCards).where(c => c.From == boardingCard.To).firstOrDefault();
            boardingCard.TravelSequence = ++counter;
        }
        return linq_1.default.from(boardingCards).orderBy(c => c.TravelSequence).toArray();
    };
}
exports.SorterService = SorterService;
