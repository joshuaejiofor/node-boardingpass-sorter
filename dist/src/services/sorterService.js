"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorterService = void 0;
const linq_1 = __importDefault(require("linq"));
class SorterService {
    constructor() {
        this.SortBoardingCards = (boardingCards) => {
            let counter = 0;
            let totalBoardingCards = boardingCards.length;
            let boardingCard = linq_1.default.from(boardingCards).where(c => !linq_1.default.from(boardingCards).select(b => b.to).contains(c.from)).firstOrDefault();
            boardingCard.travelSequence = ++counter;
            while (counter < totalBoardingCards) {
                boardingCard = linq_1.default.from(boardingCards).where(c => c.from == boardingCard.to).firstOrDefault();
                boardingCard.travelSequence = ++counter;
            }
            return linq_1.default.from(boardingCards).orderBy(c => c.travelSequence).toArray();
        };
    }
}
exports.SorterService = SorterService;
